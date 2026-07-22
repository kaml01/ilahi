import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data/site'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  // Frontend-only: no backend yet. We open the user's mail client with a
  // pre-filled message and show a confirmation. Swap this out for an API call
  // when the backend is ready.
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link to="/">Home</Link> / Contact Us
          </div>
          <h1>Contact Us</h1>
          <p>
            Have a question or a bulk enquiry? Reach out — we'd be glad to help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* Details */}
          <Reveal variant="left">
            <span className="eyebrow">Get in Touch</span>
            <h2>Company Details</h2>
            <div className="card">
              <div className="info-item">
                <span className="ico">🏢</span>
                <div>
                  <h4>Company Name</h4>
                  <p>{company.name}</p>
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
                <span className="ico">✉️</span>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </div>
              <div className="info-item">
                <span className="ico">📱</span>
                <div>
                  <h4>Mobile</h4>
                  <a href={`tel:${company.mobileHref}`}>{company.mobile}</a>
                </div>
              </div>
            </div>

            <div className="btn-row mt-3">
              <a href={`tel:${company.mobileHref}`} className="btn btn--primary">
                Call Now
              </a>
              <a href={`mailto:${company.email}`} className="btn btn--ghost">
                Send Email
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal variant="right">
            <span className="eyebrow">Send a Message</span>
            <h2>Enquiry Form</h2>
            <form className="card" onSubmit={handleSubmit}>
              {sent && (
                <div className="alert-success">
                  Thank you! Your email client should open with your message ready
                  to send.
                </div>
              )}
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help you?"
                />
              </div>
              <button type="submit" className="btn btn--primary">
                Submit Enquiry
              </button>
              <p className="form-note">
                This form opens your email app. A direct submission backend can be
                added later.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
