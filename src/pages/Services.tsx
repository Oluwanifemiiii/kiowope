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

      <section className="section">
        <div className="service-list">
          {services.map((service, i) => (
            <article key={service.title} className="service">
              <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="service__title">{service.title}</h3>
              <div className="service__body">
                <p className="service__desc">{service.description}</p>
                <p className="service__meta">
                  <strong>Who it's for:</strong> {service.whoItsFor}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--ink">
        <div className="section-head">
          <p className="eyebrow eyebrow--light">Sectors</p>
          <h2 className="heading-lg">Sectors we serve</h2>
        </div>
        <div className="sector-grid">
          {sectors.map((sector) => (
            <div key={sector.title} className="sector">
              <h3 className="sector__title">{sector.title}</h3>
              <p className="sector__desc">{sector.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure which service fits your project? Tell us where you are and we'll point you to the right structure."
        buttonLabel="Talk to us"
        tone="navy"
      />

      <Footer />
    </div>
  )
}
