import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Full-screen welcome message that opens automatically the first time the
// visitor lands in a browser session. Closes on ×, backdrop click, or a button.
export default function WelcomePopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('ilahi_welcome')) return
    const t = setTimeout(() => setOpen(true), 600)
    return () => clearTimeout(t)
  }, [])

  function close() {
    setOpen(false)
    sessionStorage.setItem('ilahi_welcome', '1')
  }

  if (!open) return null

  return (
    <div className="wpop" onClick={close}>
      <div
        className="wpop__card"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="wpop__close" onClick={close} aria-label="Close">
          ×
        </button>
        <div className="wpop__emoji">🫒🌿</div>
        <span className="wpop__badge">Welcome to ILAHI CO.</span>
        <h2>Purity in Every Drop</h2>
        <p>
          Premium edible oils — Extra Virgin &amp; Pomace Olive Oil and cold-press
          Mustard Oil. Our stock is currently{' '}
          <strong>sold out</strong> — leave your details and we'll notify you the
          moment it's back!
        </p>
        <div className="btn-row" style={{ justifyContent: 'center' }}>
          <Link to="/products" className="btn btn--gold" onClick={close}>
            View Products
          </Link>
          <Link to="/contact" className="btn btn--ghost" onClick={close}>
            Notify Me
          </Link>
        </div>
      </div>
    </div>
  )
}
