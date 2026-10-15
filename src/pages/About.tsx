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
        <div className="grid--two">
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h2 className="heading-lg" style={{ marginBottom: 16 }}>
              Mission
            </h2>
            <p className="lede">
              To unlock capital and deliver tailored financial structures that drive sustainable transport and
              infrastructure projects across Africa.
            </p>
          </div>
          <div className="stack stack--loose" style={{ flex: '1 1 380px', minWidth: 0 }}>
            <div>
              <h3 className="card__title" style={{ marginBottom: 10 }}>
                Our story
              </h3>
              <p className="body-copy">
                Kiowope Capital was founded with a single vision: to bridge the financing gap for Africa's mobility
                and infrastructure transition. We bring together expertise in capital markets, public-private
                partnerships, renewable energy, and operational finance to deliver solutions that work in the real
                world.
              </p>
            </div>
            <div>
              <h3 className="card__title" style={{ marginBottom: 10 }}>
                Our approach
              </h3>
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
        <h2 className="heading-lg" style={{ marginBottom: 32 }}>
          What guides us
        </h2>
        <div className="grid grid--values">
          {values.map((value) => (
            <div key={value.title} className="card">
              <h3 className="card__title">{value.title}</h3>
              <p className="card__desc">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Structuring the capital behind Africa's electric mobility shift, one project at a time."
        buttonLabel="Partner with us"
        tone="jade"
      />

      <Footer />
    </div>
  )
}
