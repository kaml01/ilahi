# ============================================================
#  ILAHI CO. - server deploy script
#
#  Run automatically by the self-hosted GitHub Actions runner on every
#  push to main, or manually on the server:
#      powershell -NoProfile -ExecutionPolicy Bypass -File deploy.ps1
#
#  IIS serves the build directly from  <repo>\Frontend\dist
#  So the IIS site's Physical Path must be:
#      C:\LiveProjects\ilahi\Frontend\dist
#
#  The build is staged first and only swapped into dist once it fully
#  succeeds, so a broken build can never take the live site down.
# ============================================================

$ErrorActionPreference = "Stop"

$RepoDir  = $PSScriptRoot
$Frontend = Join-Path $RepoDir "Frontend"
$Dist     = Join-Path $Frontend "dist"
$Staging  = Join-Path $Frontend "dist-staging"

# $ErrorActionPreference does NOT catch native exe failures (git/npm), so
# every external command must be routed through this.
function Invoke-Native {
    param([string]$Exe, [string[]]$Arguments, [string]$What)
    Write-Host "    > $Exe $($Arguments -join ' ')" -ForegroundColor DarkGray
    & $Exe @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "$What failed with exit code $LASTEXITCODE"
    }
}

Write-Host "==> [1/5] Pulling latest code from main..." -ForegroundColor Cyan
Invoke-Native git @('-C', $RepoDir, 'reset', '--hard', 'HEAD')        'git reset'
Invoke-Native git @('-C', $RepoDir, 'fetch', 'origin', 'main')         'git fetch'
Invoke-Native git @('-C', $RepoDir, 'reset', '--hard', 'origin/main')  'git reset to origin/main'
$sha = (git -C $RepoDir rev-parse --short HEAD).Trim()
Write-Host "    now at commit $sha" -ForegroundColor DarkGray

Write-Host "==> [2/5] Installing dependencies..." -ForegroundColor Cyan
Set-Location $Frontend
# npm.cmd, not npm - the .ps1 shim can be blocked by execution policy under the service account
if (Test-Path (Join-Path $Frontend "package-lock.json")) {
    Invoke-Native npm.cmd @('ci', '--no-audit', '--no-fund')      'npm ci'
} else {
    Invoke-Native npm.cmd @('install', '--no-audit', '--no-fund') 'npm install'
}

Write-Host "==> [3/5] Building production bundle (staged)..." -ForegroundColor Cyan
if (Test-Path $Staging) { Remove-Item $Staging -Recurse -Force }
Invoke-Native npm.cmd @('run', 'build', '--', '--outDir', 'dist-staging', '--emptyOutDir') 'npm run build'

Write-Host "==> [4/5] Verifying build output..." -ForegroundColor Cyan
$indexHtml = Join-Path $Staging "index.html"
if (-not (Test-Path $indexHtml))                       { throw "Build produced no index.html in $Staging" }
if (-not (Test-Path (Join-Path $Staging "assets")))    { throw "Build produced no assets/ folder in $Staging" }
if (-not (Test-Path (Join-Path $Staging "web.config"))){ throw "web.config missing from build - SPA routing would 404 on refresh" }
Write-Host "    ok - index.html + assets/ + web.config present" -ForegroundColor DarkGray

Write-Host "==> [5/5] Swapping staged build into dist..." -ForegroundColor Cyan
if (-not (Test-Path $Dist)) { New-Item -ItemType Directory -Path $Dist | Out-Null }
# /MIR mirrors staging into dist (adds, updates and deletes stale files).
# robocopy exit codes 0-7 are success; 8+ is a real failure.
robocopy $Staging $Dist /MIR /NFL /NDL /NJH /NJS /NP /R:2 /W:2 | Out-Null
if ($LASTEXITCODE -ge 8) { throw "robocopy failed to publish into $Dist (exit $LASTEXITCODE)" }
$global:LASTEXITCODE = 0
Remove-Item $Staging -Recurse -Force

Write-Host ""
Write-Host "==> Deployed commit $sha. IIS is serving: $Dist" -ForegroundColor Green
