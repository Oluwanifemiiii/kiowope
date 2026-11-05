import type { ReactNode } from 'react'
import DiamondMotif from './DiamondMotif'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <DiamondMotif className="page-hero__art" tone="dark" />
      <div className="page-hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
