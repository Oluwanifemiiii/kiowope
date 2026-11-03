import { Link } from 'react-router-dom'
import { contact } from '../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__top">
        <div className="footer__col footer__col--details">
          <span className="footer__label">Office</span>
          <a className="footer__link" href={contact.mapsUrl} target="_blank" rel="noreferrer">
            {contact.address}
          </a>
          <span className="footer__label" style={{ marginTop: 8 }}>
            Phone
          </span>
          <a className="footer__link" href={contact.phoneHref}>
            {contact.phone}
          </a>
        </div>
        <img src="/footer-logo.svg" alt="Kiowope Capital: Structured Finance, Mobility & Infrastructure Finance, Public-Private Partnerships" className="footer__logo" />
      </div>
      <div className="footer__bottom">
        <span>&copy; {new Date().getFullYear()} Kiowope Capital Limited. All rights reserved.</span>
        <div className="footer__bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}
