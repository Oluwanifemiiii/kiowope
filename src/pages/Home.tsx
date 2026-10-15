import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { services, sectors, clientTypes, values, missionQuote } from '../data/content'

export default function Home() {
  return (
    <div>
      <Nav />

      <section id="top" className="hero">
        <div className="hero__texture" />
        <div className="hero__node" style={{ width: 9, height: 9, background: 'var(--amber)', opacity: 0.55, top: '20%', left: '76%' }} />
        <div className="hero__node" style={{ width: 6, height: 6, background: 'var(--jade-light)', opacity: 0.55, top: '64%', left: '85%' }} />
        <div className="hero__node" style={{ width: 6, height: 6, background: 'var(--amber)', opacity: 0.4, top: '42%', left: '62%' }} />
        <div className="hero__content">
          <p className="hero__eyebrow">Financing Africa's transition to sustainable mobility and infrastructure</p>
          <h1 className="hero__title">
            We deliver innovative financing, strategic advisory, and risk solutions that empower electric mobility,
            transport infrastructure, and climate-aligned investments.
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
      </section>

      <section id="about" className="section">
        <div className="grid--two">
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="heading-xl" style={{ marginBottom: 16 }}>
              Our mission
            </h2>
            <p className="lede">
              To unlock capital and deliver tailored financial structures that drive sustainable transport and
              infrastructure projects across Africa.
            </p>
          </div>
          <div className="stack stack--loose" style={{ flex: '1 1 380px', minWidth: 0 }}>
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
        </div>
      </section>

      <section id="services" className="section section--surface">
        <div className="text-max" style={{ marginBottom: 48 }}>
          <h2 className="heading-xl" style={{ marginBottom: 12 }}>
            What we do
          </h2>
          <p className="body-copy">
            Twelve financing and advisory services built for every stage of Africa's mobility and infrastructure
            transition.
          </p>
        </div>
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

      <section id="sectors" className="section section--ink">
        <h2 className="heading-lg" style={{ color: 'var(--paper)', marginBottom: 40 }}>
          Sectors we serve
        </h2>
        <div className="grid grid--sectors">
          {sectors.map((sector) => (
            <div key={sector.title} className="sector">
              <h3 className="sector__title">{sector.title}</h3>
              <p className="sector__desc">{sector.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="who" className="section">
        <h2 className="heading-lg" style={{ marginBottom: 32 }}>
          Who we work with
        </h2>
        <div className="chip-row">
          {clientTypes.map((type) => (
            <span key={type} className="chip">
              {type}
            </span>
          ))}
        </div>
      </section>

      <section className="section section--jade">
        <blockquote className="quote">
          <p className="quote__text">&quot;{missionQuote}&quot;</p>
        </blockquote>
      </section>

      <section className="section section--bordered-top">
        <h2 className="heading-lg" style={{ marginBottom: 32 }}>
          Our values
        </h2>
        <div className="grid grid--values">
          {values.map((value) => (
            <div key={value.title} className="value">
              <h3 className="value__title">{value.title}</h3>
              <p className="value__desc">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer variant="full" />
    </div>
  )
}
