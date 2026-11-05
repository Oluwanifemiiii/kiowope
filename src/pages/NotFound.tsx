import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div>
      <Nav />
      <section className="section section--surface">
        <div className="not-found">
          <p className="eyebrow">404</p>
          <h1 className="page-hero__title">This page doesn't exist, or it moved.</h1>
          <p className="body-copy">Check the link, or head back to the homepage.</p>
          <Link to="/" className="btn btn--primary" style={{ marginTop: 8 }}>
            Back to home
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
