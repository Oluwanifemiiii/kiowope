import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'

export default function Terms() {
  return (
    <div>
      <Nav />
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="section text-max">
        <p className="body-copy">
          This page is a placeholder. It exists so the route and footer link work, but it does not yet contain real
          terms of use. Replace this content with Kiowope Capital's actual terms before this site goes live. Don't
          publish this placeholder text as the real terms.
        </p>
      </section>
      <Footer />
    </div>
  )
}
