import { Link } from 'react-router-dom'

interface CTASectionProps {
  title: string
  buttonLabel: string
  tone?: 'navy' | 'ink'
}

export default function CTASection({ title, buttonLabel, tone = 'navy' }: CTASectionProps) {
  return (
    <section className={`section section--${tone}`}>
      <div className="cta-band">
        <h2 className="cta-band__title">{title}</h2>
        <Link to="/contact" className="btn btn--primary">
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}
