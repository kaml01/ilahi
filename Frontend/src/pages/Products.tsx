import { Link } from 'react-router-dom'
import { products } from '../data/site'
import Reveal from '../components/Reveal'
import Tilt from '../components/Tilt'

export default function Products() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link to="/">Home</Link> / Products
          </div>
          <h1>Our Product Range</h1>
          <p>
            A focused portfolio of premium, FSSAI-compliant edible oils for every
            kitchen and cuisine.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {products.map((p, i) => (
              <Reveal key={p.slug} variant={i % 2 === 0 ? 'left' : 'right'} delay={(i % 2) * 80}>
                <Tilt max={7}>
                  <article className="card product" id={p.slug}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                      <div className="product__icon" style={{ background: p.accent }}>
                        {p.icon}
                      </div>
                      <div>
                        <h3 style={{ margin: 0 }}>{p.name}</h3>
                        <span className="badge" style={{ marginTop: 6 }}>
                          ✅ FSSAI Compliant
                        </span>
                      </div>
                    </div>
                    <p>{p.description}</p>
                    <ul>
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </article>
                </Tilt>
              </Reveal>
            ))}
          </div>

          <Reveal variant="zoom">
            <div
              className="card mt-3"
              style={{ background: 'var(--green-100)', textAlign: 'center' }}
            >
              <h3>Bulk & Wholesale Enquiries</h3>
              <p style={{ maxWidth: 620, margin: '0 auto 18px' }}>
                We supply to households, retailers and businesses. For pricing, pack
                sizes and availability, get in touch with our team.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Enquire Now
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
