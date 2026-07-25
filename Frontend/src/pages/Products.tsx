import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, type Product } from '../data/site'
import Reveal from '../components/Reveal'

function discount(p: Product) {
  return Math.round(((p.mrp - p.price) / p.mrp) * 100)
}

function stars(rating: number) {
  const full = Math.round(rating)
  return '★★★★★☆☆☆☆☆'.slice(5 - full, 10 - full)
}

export default function Products() {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link to="/">Home</Link> / Products
          </div>
          <h1>Our Product Range</h1>
          <p>
            A focused portfolio of premium edible oils for every kitchen and
            cuisine.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section__head">
              <span className="eyebrow">Shop Our Products</span>
              <h2>The ILAHI Range</h2>
              <p>Tap a product to view full details.</p>
            </div>
          </Reveal>

          <div className="pgrid">
            {products.map((p, i) => (
              <Reveal key={p.slug} variant="up" delay={i * 90}>
                <article className="pcard">
                  <button
                    className="pcard__img"
                    onClick={() => setSelected(p)}
                    aria-label={`View ${p.name}`}
                  >
                    {discount(p) > 0 && (
                      <span className="pcard__off">{discount(p)}% OFF</span>
                    )}
                    {p.soldOut && <span className="pcard__stamp">Sold Out</span>}
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </button>

                  <div className="pcard__body">
                    <span className="pcard__pack">{p.pack}</span>
                    <h3 className="pcard__name" onClick={() => setSelected(p)}>
                      {p.name}
                    </h3>
                    {p.rating && (
                      <div className="rate rate--sm">
                        <span className="rate__stars">{stars(p.rating)}</span>
                        <span className="rate__count">
                          {p.rating.toFixed(1)} ({p.ratingCount?.toLocaleString('en-IN')})
                        </span>
                      </div>
                    )}
                    <div className="pcard__row">
                      <div className="pcard__price">
                        <span className="now">₹{p.price}</span>
                        <span className="mrp">₹{p.mrp}</span>
                      </div>
                      {p.soldOut ? (
                        <button className="pcard__add is-out" disabled>
                          Sold Out
                        </button>
                      ) : (
                        <button className="pcard__add">ADD</button>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal variant="zoom">
            <div
              className="card mt-3"
              style={{ background: 'var(--green-100)', textAlign: 'center' }}
            >
              <h3>Currently Out of Stock</h3>
              <p style={{ maxWidth: 620, margin: '0 auto 18px' }}>
                Our products are temporarily sold out. Get in touch and we'll notify
                you as soon as stock is back, or discuss bulk &amp; wholesale orders.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Notify Me / Enquire
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Detail popup (marketplace-style) */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div
            className="modal__card"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal__close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="modal__img">
              {selected.soldOut && <span className="pcard__stamp">Sold Out</span>}
              <img src={selected.image} alt={selected.name} />
            </div>

            <div className="modal__info">
              <h3>{selected.title ?? selected.name}</h3>

              {selected.rating && (
                <div className="rate">
                  <span className="rate__stars">{stars(selected.rating)}</span>
                  <span className="rate__num">{selected.rating.toFixed(1)}</span>
                  <span className="rate__count">
                    ({selected.ratingCount?.toLocaleString('en-IN')} ratings)
                  </span>
                </div>
              )}

              <div className="modal__price">
                {discount(selected) > 0 && (
                  <span className="save">-{discount(selected)}%</span>
                )}
                <span className="now">₹{selected.price}</span>
                {selected.perUnit && (
                  <span className="per">({selected.perUnit})</span>
                )}
              </div>
              <div className="mrp2">
                M.R.P: <s>₹{selected.mrp}</s>
              </div>
              <div className="modal__tax">Inclusive of all taxes</div>

              <div className="chips">
                <span className="chip">Size: {selected.pack}</span>
                {selected.useBy && (
                  <span className="chip">Use by: {selected.useBy}</span>
                )}
              </div>

              <p>{selected.description}</p>

              {selected.benefits && selected.benefits.length > 0 && (
                <>
                  <h4 className="modal__subhead">About this product</h4>
                  <ul className="modal__list">
                    {selected.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </>
              )}

              {selected.soldOut ? (
                <>
                  <div className="soldbar">Currently sold out</div>
                  <Link
                    to="/contact"
                    className="btn btn--primary"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Notify Me When Available
                  </Link>
                </>
              ) : (
                <button className="btn btn--cart" style={{ width: '100%' }}>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
