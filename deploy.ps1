# ============================================================
#  ILAHI CO. — server deploy script
#  Run automatically by GitHub Actions over SSH on every push to main,
#  or manually on the server:  powershell -ExecutionPolicy Bypass -File deploy.ps1
#  (This script lives inside the repo clone on the server.)
#
#  IIS serves the build directly from  <repo>\Frontend\dist
#  So set your IIS site's Physical Path to that dist folder, e.g.:
#      C:\LiveProjects\ilahi\Frontend\dist
# ============================================================

$ErrorActionPreference = "Stop"

$RepoDir  = $PSScriptRoot                       # repo root (where this script sits)
$Frontend = Join-Path $RepoDir "Frontend"       # folder with package.json

Write-Host "==> Pulling latest code from main..." -ForegroundColor Cyan
git -C $RepoDir reset --hard
git -C $RepoDir pull origin main

Write-Host "==> Installing dependencies..." -ForegroundColor Cyan
Set-Location $Frontend
if (Test-Path "package-lock.json") { npm ci } else { npm install }

Write-Host "==> Building production bundle..." -ForegroundColor Cyan
npm run build       # outputs to Frontend\dist  <-- this is what IIS serves

Write-Host "==> Deployed. IIS is serving: $Frontend\dist" -ForegroundColor Green
