import { Link } from 'react-router-dom'
import { company } from '../data/site'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link to="/">Home</Link> / About Us
          </div>
          <h1>About {company.name}</h1>
          <p>
            A trusted name in premium edible oils — built on purity, quality and
            long-term relationships.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container grid grid--2" style={{ alignItems: 'center' }}>
          <Reveal variant="left">
            <span className="eyebrow">Who We Are</span>
            <h2>Bringing Purity to Every Kitchen</h2>
            <p>
              ILAHI CO. is a Delhi-based company engaged in the trade and supply of
              high-quality edible oils. We deal in a focused range of oils — Extra
              Virgin Olive Oil, Pomace Olive Oil and cold-press Mustard Oil — chosen
              to serve everyday households as well as commercial kitchens.
            </p>
            <p>
              With a strong focus on food safety, we place purity and consistency at
              the heart of everything we do. From sourcing to supply, our goal is
              simple: to put healthier, better-tasting oil on every table.
            </p>
          </Reveal>
          <Reveal variant="right">
          <div className="card" style={{ background: 'var(--green-100)' }}>
            <h3>At a Glance</h3>
            <div className="info-item">
              <span className="ico">🏢</span>
              <div>
                <h4>Company</h4>
                <p>{company.name}</p>
              </div>
            </div>
            <div className="info-item">
              <span className="ico">🛢️</span>
              <div>
                <h4>Business</h4>
                <p>Trade & supply of premium edible oils</p>
              </div>
            </div>
            <div className="info-item">
              <span className="ico">📍</span>
              <div>
                <h4>Registered Office</h4>
                <p>{company.registeredOffice}</p>
              </div>
            </div>
            <div className="info-item">
              <span className="ico">✅</span>
              <div>
                <h4>Commitment</h4>
                <p>Quality, purity & food safety</p>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section--tint">
        <div className="container">
          <div className="grid grid--2">
            <Reveal variant="left">
              <Tilt max={7}>
                <div className="card">
                  <div className="feature__icon">🌟</div>
                  <h3>Our Vision</h3>
                  <p>
                    To become a trusted household and commercial name for pure, safe
                    and affordable edible oils across India — synonymous with quality
                    and integrity in every drop.
                  </p>
                </div>
              </Tilt>
            </Reveal>
            <Reveal variant="right">
              <Tilt max={7}>
                <div className="card">
                  <div className="feature__icon">🎯</div>
                  <h3>Our Mission</h3>
                  <p>
                    To source, process and supply edible oils that meet the highest
                    food-safety standards, while delivering consistent value and
                    reliable service to every customer we serve.
                  </p>
                </div>
              </Tilt>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">What Drives Us</span>
            <h2>Our Core Values</h2>
          </div>
          <div className="grid grid--3">
            {[
              {
                icon: '💧',
                t: 'Purity',
                d: 'We never compromise on the natural quality of our oils.',
              },
              {
                icon: '🛡️',
                t: 'Safety',
                d: 'Strict adherence to food-safety standards at every step.',
              },
              {
                icon: '🤝',
                t: 'Trust',
                d: 'Honest dealings and lasting relationships with our customers.',
              },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 120}>
                <Tilt>
                  <div className="card">
                    <div className="feature__icon">{v.icon}</div>
                    <h3 style={{ fontSize: '1.2rem' }}>{v.t}</h3>
                    <p>{v.d}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container text-center">
          <h2>Want to Know More?</h2>
          <p style={{ maxWidth: 560, margin: '0 auto 24px' }}>
            Explore our product range or reach out to discuss your requirements.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <Link to="/products" className="btn btn--primary">
              Our Products
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
