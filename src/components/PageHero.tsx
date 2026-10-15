import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="hero hero--page">
      <div className="hero__texture" />
      <div className="hero__content" style={{ maxWidth: 720 }}>
        <p className="hero__eyebrow">{eyebrow}</p>
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
