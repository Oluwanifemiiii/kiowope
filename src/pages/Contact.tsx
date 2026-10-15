import { useState, type FormEvent, type ChangeEvent } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import { contact } from '../data/content'

const socialIcons: Record<string, string> = {
  LinkedIn:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  Facebook:
    'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  X: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
}

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', org: '', message: '' })

  function handleChange(field: keyof typeof form) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(`Inquiry from ${form.name || 'website contact form'}`)
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Organization: ${form.org}`,
      '',
      form.message,
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <div>
      <Nav />
      <PageHero
        eyebrow="Contact us"
        title="Let's structure what's next."
        subtitle="Tell us about your fleet, your infrastructure project, or your fund. We'll come back with how we can structure it."
      />

      <section className="section" style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
        <form className="form" onSubmit={handleSubmit} aria-label="Contact form">
          <div className="form__row">
            <div className="field-group">
              <label htmlFor="name">Name</label>
              <input className="field" id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange('name')} required />
            </div>
            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input className="field" id="email" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange('email')} required />
            </div>
          </div>
          <div className="form__row">
            <div className="field-group">
              <label htmlFor="phone">Phone</label>
              <input className="field" id="phone" name="phone" type="tel" placeholder="+234 ..." value={form.phone} onChange={handleChange('phone')} />
            </div>
            <div className="field-group">
              <label htmlFor="org">Organization</label>
              <input className="field" id="org" name="org" type="text" placeholder="Company or fund name" value={form.org} onChange={handleChange('org')} />
            </div>
          </div>
          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="field"
              id="message"
              name="message"
              rows={5}
              placeholder="What are you looking to finance or structure?"
              value={form.message}
              onChange={handleChange('message')}
              required
            />
          </div>
          <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
            Send message
          </button>
          <p style={{ fontSize: 13, color: 'var(--ink-faint)', margin: 0 }}>
            Opens your email client with this message addressed to {contact.email}. Swap this for a form backend
            (e.g. Formspree, a serverless function) before launch if you'd rather not rely on mailto.
          </p>
        </form>

        <div className="contact-details">
          <div className="contact-detail">
            <span className="contact-detail__label">Office</span>
            <a className="contact-detail__link" href={mapsUrl} target="_blank" rel="noreferrer">
              {contact.address}
            </a>
          </div>
          <div className="contact-detail">
            <span className="contact-detail__label">Email</span>
            <a className="contact-detail__link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
          <div className="contact-detail">
            <span className="contact-detail__label">Phone</span>
            <a className="contact-detail__link" href={contact.phoneHref}>
              {contact.phone}
            </a>
          </div>
          <div className="contact-detail">
            <span className="contact-detail__label">Follow</span>
            <div className="social-row">
              {contact.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={socialIcons[s.label]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
