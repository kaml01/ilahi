import { Link } from 'react-router-dom'
import { products } from '../data/site'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'

const values = [
  {
    icon: '✅',
    title: 'FSSAI Compliant',
    text: 'Every product meets FSSAI food-safety standards for quality and hygiene.',
  },
  {
    icon: '💧',
    title: 'Uncompromised Purity',
    text: 'Sourced and processed to preserve natural nutrients, aroma and flavour.',
  },
  {
    icon: '🌾',
    title: 'Trusted Sourcing',
    text: 'Carefully selected raw materials from reliable, quality-first suppliers.',
  },
  {
    icon: '🤝',
    title: 'Customer First',
    text: 'Consistent supply and dependable service for homes and businesses alike.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="eyebrow">FSSAI Compliant · Premium Edible Oils</span>
            <h1>Purity in Every Drop, Trust in Every Bottle</h1>
            <p>
              ILAHI CO. brings you a curated range of premium edible oils — from
              cold-pressed Olive and Mustard oils to light Sunflower and versatile
              Soybean oils — crafted for healthier, tastier cooking.
            </p>
            <div className="btn-row mt-2">
              <Link to="/products" className="btn btn--gold">
                Explore Our Products
              </Link>
              <Link to="/contact" className="btn btn--ghost" style={{ color: '#fff', borderColor: '#fff' }}>
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="hero__art">
            <div className="bottle">🫗</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section__head">
              <span className="eyebrow">Why ILAHI CO.</span>
              <h2>Quality You Can Taste, Standards You Can Trust</h2>
              <p>
                We are committed to delivering edible oils that are pure, safe and
                consistent — meeting the highest food-safety benchmarks.
              </p>
            </div>
          </Reveal>
          <div className="grid grid--4">
            {values.map((v, i) => (
              <Reveal key={v.title} variant="up" delay={i * 100}>
                <Tilt>
                  <div className="card">
                    <div className="feature__icon">{v.icon}</div>
                    <h3 style={{ fontSize: '1.15rem' }}>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product range */}
      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="section__head">
              <span className="eyebrow">Our Range</span>
              <h2>A Complete Portfolio of Edible Oils</h2>
              <p>Four essential oils to cover every kitchen and every cuisine.</p>
            </div>
          </Reveal>
          <div className="grid grid--4">
            {products.map((p, i) => (
              <Reveal key={p.slug} variant="up" delay={i * 100}>
                <Tilt>
                  <ProductCard product={p} />
                </Tilt>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="text-center mt-3">
              <Link to="/products" className="btn btn--primary">
                View Full Product Range
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <Reveal variant="zoom">
            <div className="stats">
              <div className="stat">
                <b>4+</b>
                <span>Oil Categories</span>
              </div>
              <div className="stat">
                <b>100%</b>
                <span>FSSAI Compliant</span>
              </div>
              <div className="stat">
                <b>Pure</b>
                <span>Sourcing & Process</span>
              </div>
              <div className="stat">
                <b>Delhi</b>
                <span>Based & Operated</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--tint">
        <div className="container text-center">
          <Reveal variant="zoom">
            <h2>Partner With ILAHI CO.</h2>
            <p style={{ maxWidth: 620, margin: '0 auto 24px' }}>
              Looking for a reliable edible oil supplier for your home, store or
              business? We would love to hear from you.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Contact Us Today
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
