import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
]

export default function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="nav__brand">
        <img src="/logo.svg" alt="Kiowope Capital" className="nav__logo" />
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
