import { useState, type FormEvent, type ChangeEvent } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import { contact } from '../data/content'

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
            <span className="contact-detail__value">{contact.address}</span>
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
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div className="location-note">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z" stroke="#D08A2C" strokeWidth={1.6} />
              <circle cx="12" cy="9.5" r="2.4" stroke="#D08A2C" strokeWidth={1.6} />
            </svg>
            <span className="location-note__text">Tafawa Balewa Square, Onikan, Lagos Island</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
