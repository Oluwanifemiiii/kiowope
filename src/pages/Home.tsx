import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import DiamondMotif from '../components/DiamondMotif'
import Reveal from '../components/Reveal'
import ServiceExplorer from '../components/ServiceExplorer'
import CTASection from '../components/CTASection'
import { services, sectors, clientTypes, values, missionQuote } from '../data/content'

const pillars = ['Structured Finance', 'Mobility & Infrastructure Finance', 'Public-Private Partnerships']

const pad = (n: number) => String(n + 1).padStart(2, '0')

export default function Home() {
  return (
    <div>
      <Nav />

      <section id="top" className="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Financing Africa's transition to sustainable mobility and infrastructure</p>
            <h1 className="hero__title">
              We deliver <em>innovative financing, strategic advisory, and risk solutions</em> that empower electric
              mobility, transport infrastructure, and climate-aligned investments.
            </h1>
            <div className="hero__actions">
              <Link to="/services" className="btn btn--primary">
                Explore our services
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Partner with us
              </Link>
            </div>
          </div>
          <DiamondMotif className="hero__art" tone="dark" />
        </div>
        <div className="pillars">
          {pillars.map((p, i) => (
            <p key={p} className="pillar">
              <span className="pillar__num">{pad(i)}</span>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section id="about" className="section section--surface">
        <div className="split">
          <Reveal>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">About Kiowope</p>
              <h2 className="heading-xl">Our mission</h2>
              <p className="lede">
                To unlock capital and deliver tailored financial structures that drive sustainable transport and
                infrastructure projects across Africa.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="stack stack--loose">
              <p className="body-copy">
                Kiowope Capital was founded with a single vision: to bridge the financing gap for Africa's mobility and
                infrastructure transition. We bring together expertise in capital markets, public-private
                partnerships, renewable energy, and operational finance to deliver solutions that work in the real
                world.
              </p>
              <p className="body-copy">
                We combine deep sector knowledge with hands-on execution. From structuring multi-million-dollar
                concession agreements to enabling last-mile driver financing, we partner with clients at every stage
                of the journey.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2 className="heading-xl">What we do</h2>
            <p className="body-copy">
              {services.length === 12 ? 'Twelve' : services.length} financing and advisory services built for every
              stage of Africa's mobility and infrastructure transition.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <ServiceExplorer />
        </Reveal>
      </section>

      <section id="sectors" className="section section--ink section--lattice">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow eyebrow--light">Sectors</p>
            <h2 className="heading-lg">Sectors we serve</h2>
          </div>
        </Reveal>
        <div className="sector-grid">
          {sectors.map((sector, i) => (
            <Reveal key={sector.title} className="sector" delay={i * 80}>
              <span className="sector__mark" aria-hidden="true" />
              <h3 className="sector__title">{sector.title}</h3>
              <p className="sector__desc">{sector.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="who" className="section">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Clients</p>
            <h2 className="heading-lg">Who we work with</h2>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <ul className="client-list">
            {clientTypes.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section section--ink section--lattice quote-section">
        <DiamondMotif className="quote-section__art" variant="cluster" tone="dark" />
        <Reveal>
          <blockquote className="quote">
            <p className="quote__text">&quot;{missionQuote}&quot;</p>
          </blockquote>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Principles</p>
            <h2 className="heading-lg">Our values</h2>
          </div>
        </Reveal>
        <div className="value-grid">
          {values.map((value, i) => (
            <Reveal key={value.title} className="value" delay={i * 80}>
              <span className="value__num">{pad(i)}</span>
              <h3 className="value__title">{value.title}</h3>
              <p className="value__desc">{value.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Financing a fleet, a transport project, or a fund? Tell us what you are building."
        buttonLabel="Partner with us"
      />

      <Footer />
    </div>
  )
}
