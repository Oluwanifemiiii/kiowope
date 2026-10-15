import { Link, NavLink } from 'react-router-dom'
import Logomark from './Logomark'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="nav__brand">
        <Logomark />
        <span className="nav__brand-name">Kiowope Capital</span>
      </Link>
      <nav className="nav__links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn--primary btn--sm">
          Partner with us
        </Link>
      </nav>
    </header>
  )
}
