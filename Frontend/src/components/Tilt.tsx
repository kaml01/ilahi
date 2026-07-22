import { useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** Max tilt in degrees. */
  max?: number
}

// Wraps content in a 3D card that tilts toward the cursor and lifts a little,
// giving a tactile, depth-rich feel. Pointer-driven, disabled on touch/reduced
// motion (falls back to a plain hover via CSS).
export default function Tilt({ children, className = '', max = 10 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width // 0..1
    const py = (e.clientY - rect.top) / rect.height // 0..1
    const rotY = (px - 0.5) * 2 * max
    const rotX = (0.5 - py) * 2 * max
    el.style.setProperty('--rx', `${rotX}deg`)
    el.style.setProperty('--ry', `${rotY}deg`)
    // Position of the light-glare highlight.
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
  }

  function reset() {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div className="tilt__inner">{children}</div>
    </div>
  )
}
