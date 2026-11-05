import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { values } from '../data/content'

export default function About() {
  return (
    <div>
      <Nav />
      <PageHero eyebrow="About us" title="Bridging the financing gap for Africa's mobility transition" />

      <section className="section">
        <div className="split">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <p className="eyebrow">Mission</p>
            <h2 className="heading-lg">What we are here to do</h2>
            <p className="lede">
              To unlock capital and deliver tailored financial structures that drive sustainable transport and
              infrastructure projects across Africa.
            </p>
          </div>
          <div className="stack stack--loose">
            <div>
              <h3 className="subhead">Our story</h3>
              <p className="body-copy">
                Kiowope Capital was founded with a single vision: to bridge the financing gap for Africa's mobility
                and infrastructure transition. We bring together expertise in capital markets, public-private
                partnerships, renewable energy, and operational finance to deliver solutions that work in the real
                world.
              </p>
            </div>
            <div>
              <h3 className="subhead">Our approach</h3>
              <p className="body-copy">
                We combine deep sector knowledge with hands-on execution. From structuring multi-million-dollar
                concession agreements to enabling last-mile driver financing, we partner with clients at every
                stage of the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="section-head">
          <p className="eyebrow">Principles</p>
          <h2 className="heading-lg">What guides us</h2>
        </div>
        <div className="value-grid">
          {values.map((value, i) => (
            <div key={value.title} className="value">
              <span className="value__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="value__title">{value.title}</h3>
              <p className="value__desc">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Structuring the capital behind Africa's electric mobility shift, one project at a time."
        buttonLabel="Partner with us"
        tone="navy"
      />

      <Footer />
    </div>
  )
}
