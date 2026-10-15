import { Link } from 'react-router-dom'
import { contact } from '../data/content'

interface FooterProps {
  variant?: 'full' | 'compact'
}

export default function Footer({ variant = 'compact' }: FooterProps) {
  if (variant === 'full') {
    return (
      <footer id="contact" className="footer">
        <div className="footer__top">
          <div className="footer__col" style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="heading-xl" style={{ color: 'var(--paper)', fontSize: 'clamp(26px, 2.8vw, 32px)' }}>
              Let's structure what's next.
            </h2>
            <p className="body-copy" style={{ color: 'var(--paper-soft)', maxWidth: 440 }}>
              Tell us about your fleet, your infrastructure project, or your fund. We'll come back with how we can
              structure it.
            </p>
            <Link to="/contact" className="btn btn--primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
              Get in touch
            </Link>
          </div>
          <div className="footer__col footer__col--details" style={{ flex: '0 1 260px' }}>
            <span className="footer__label">Office</span>
            <span>{contact.address}</span>
            <span className="footer__label" style={{ marginTop: 8 }}>
              Phone
            </span>
            <a className="footer__link" href={contact.phoneHref}>
              {contact.phone}
            </a>
          </div>
          <div className="footer__col" style={{ flex: '0 1 200px' }}>
            <span className="footer__label">Follow</span>
            {contact.social.map((s) => (
              <a key={s.label} className="footer__link" href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
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

  return (
    <footer className="footer footer--compact">
      <div className="footer__bottom" style={{ paddingTop: 0, borderTop: 'none' }}>
        <span>&copy; {new Date().getFullYear()} Kiowope Capital Limited. All rights reserved.</span>
        <span>{contact.address}</span>
      </div>
    </footer>
  )
}
