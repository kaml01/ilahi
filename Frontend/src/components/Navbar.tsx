import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company, nav } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img
            src="/images/ilahi-logo-white.png"
            alt={company.name}
            className="brand__logo"
          />
          <small>{company.tagline}</small>
        </Link>

        <button
          className="nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav>
          <ul className={`nav__links ${open ? 'open' : ''}`}>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
