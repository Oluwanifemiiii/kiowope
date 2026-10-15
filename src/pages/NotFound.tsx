import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div>
      <Nav />
      <section className="section section--ink" style={{ minHeight: '60vh' }}>
        <div className="not-found">
          <p className="hero__eyebrow">404</p>
          <h1 className="hero__title" style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}>
            This page doesn't exist, or it moved.
          </h1>
          <p className="body-copy" style={{ color: 'var(--paper-soft)' }}>
            Check the link, or head back to the homepage.
          </p>
          <Link to="/" className="btn btn--primary" style={{ marginTop: 8 }}>
            Back to home
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
