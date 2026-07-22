import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section text-center">
      <div className="container">
        <span className="eyebrow">Error 404</span>
        <h1>Page Not Found</h1>
        <p style={{ maxWidth: 480, margin: '0 auto 24px' }}>
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/" className="btn btn--primary">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
