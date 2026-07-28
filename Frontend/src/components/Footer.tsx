import { Link } from 'react-router-dom'
import { company, nav, products } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <img
              src="/images/ilahi-logo-white.png"
              alt={company.name}
              className="footer__logo"
            />
            <p style={{ color: 'rgba(255,255,255,0.75)' }}>
              A trusted supplier of premium edible oils, committed to purity,
              quality and trust in every drop.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul>
              <li>{company.registeredOffice}</li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <a href={`tel:${company.mobileHref}`}>{company.mobile}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {company.name}. All rights reserved.
          </span>
          <span>
            {products.map((p) => p.name.replace(' Range', '')).join(' · ')}
          </span>
        </div>
      </div>
    </footer>
  )
}
