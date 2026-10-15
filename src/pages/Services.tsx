import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { services, sectors } from '../data/content'

export default function Services() {
  return (
    <div>
      <Nav />
      <PageHero eyebrow="Our services" title="Financing and advisory for every stage of the transition" />

      <section className="section--tight section section--jade">
        <h2 className="heading-lg" style={{ color: 'var(--paper)', marginBottom: 32, fontSize: 'clamp(22px, 2.2vw, 26px)' }}>
          Sectors we serve
        </h2>
        <div className="grid grid--sectors">
          {sectors.map((sector) => (
            <div key={sector.title} className="sector">
              <h3 className="sector__title" style={{ fontSize: 16 }}>
                {sector.title}
              </h3>
              <p className="sector__desc">{sector.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="grid grid--services">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3 className="card__title">{service.title}</h3>
              <p className="card__desc">{service.description}</p>
              <p className="card__meta">Who it's for: {service.whoItsFor}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure which service fits your project? Tell us where you are and we'll point you to the right structure."
        buttonLabel="Talk to us"
        tone="ink"
      />

      <Footer />
    </div>
  )
}
