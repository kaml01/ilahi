import { useEffect, useRef, useState, type ReactNode } from 'react'

type Variant = 'up' | 'left' | 'right' | 'zoom'

type Props = {
  children: ReactNode
  /** Direction the element animates in from. */
  variant?: Variant
  /** Stagger delay in ms — handy for lists of cards. */
  delay?: number
  className?: string
}

// Reveals its children with a smooth entrance animation the first time they
// scroll into view. Uses IntersectionObserver (no dependencies) and respects
// the user's "reduce motion" preference.
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${shown ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
