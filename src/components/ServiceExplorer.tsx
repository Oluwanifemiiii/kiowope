import { useState } from 'react'
import DiamondMotif from './DiamondMotif'
import { services } from '../data/content'

const pad = (n: number) => String(n + 1).padStart(2, '0')

/**
 * Desktop: a list of services on the left, the selected one shown large on the right.
 * Mobile: the panel is hidden and the selected service opens inline instead.
 */
export default function ServiceExplorer() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <div className="explorer">
      <ul className="explorer__list">
        {services.map((service, i) => {
          const isActive = i === active
          return (
            <li key={service.title} className={`explorer__item${isActive ? ' explorer__item--active' : ''}`}>
              <button
                type="button"
                className="explorer__btn"
                aria-current={isActive ? 'true' : undefined}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="explorer__num">{pad(i)}</span>
                <span className="explorer__name">{service.title}</span>
              </button>
              <div className="explorer__detail">
                <p>{service.description}</p>
                <p className="explorer__detail-meta">
                  <strong>Who it's for:</strong> {service.whoItsFor}
                </p>
              </div>
            </li>
          )
        })}
      </ul>

      <aside className="explorer__panel" aria-live="polite">
        <DiamondMotif className="explorer__art" variant="cluster" tone="dark" />
        <div key={active} className="explorer__panel-body">
          <span className="explorer__big">{pad(active)}</span>
          <h3 className="explorer__title">{current.title}</h3>
          <p className="explorer__desc">{current.description}</p>
          <p className="explorer__who">
            <span>Who it's for</span>
            {current.whoItsFor}
          </p>
        </div>
      </aside>
    </div>
  )
}
