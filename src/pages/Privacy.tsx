import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'

export default function Privacy() {
  return (
    <div>
      <Nav />
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section text-max">
        <p className="body-copy">
          This page is a placeholder. It exists so the route and footer link work, but it does not yet contain a
          real privacy policy. Replace this content with Kiowope Capital's actual policy (what data the site and
          contact form collect, how it's stored and used, and how to request deletion) before this site goes live.
          Don't publish this placeholder text as the real policy.
        </p>
      </section>
      <Footer />
    </div>
  )
}
