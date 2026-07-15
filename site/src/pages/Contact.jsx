import { useState } from 'react'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { business, serviceCategories } from '../data/content'

const initialForm = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website enquiry — ${form.service || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`,
    )
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's talk about your project"
        description="Share your drawings and requirements — we'll get back with a detailed quote."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">Contact details</h2>

            <ul className="mt-7 space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-primary" />
                <a href={business.mapLink} target="_blank" rel="noreferrer" className="text-sm text-text-muted hover:text-primary">
                  {business.address}
                </a>
              </li>
              {business.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone size={20} className="shrink-0 text-primary" />
                  <a href={`tel:+91${phone}`} className="text-sm text-text-muted hover:text-primary">
                    +91 {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0 text-primary" />
                <a href={`mailto:${business.email}`} className="text-sm text-text-muted hover:text-primary">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 size={20} className="mt-0.5 shrink-0 text-primary" />
                <div className="text-sm text-text-muted">
                  {business.hours.map((h) => (
                    <p key={h.days}>
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="3D Imagines location"
                src={business.mapEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-border bg-surface-alt p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">Request a quote</h2>

            {sent ? (
              <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6 text-sm text-ink">
                Your email client should now be open with your message pre-filled. If it didn&rsquo;t open, email us
                directly at{' '}
                <a href={`mailto:${business.email}`} className="font-semibold text-primary">
                  {business.email}
                </a>
                .
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your Name" name="name" value={form.name} onChange={handleChange} required />
                  <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
                </div>
                <Field label="Your Email" name="email" type="email" value={form.email} onChange={handleChange} required />

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">Service Required</span>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-primary"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceCategories.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">Your Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-primary"
                  />
                </label>

                <Button as="button" type="submit" variant="solid" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, value, onChange, type = 'text', required }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-primary"
      />
    </label>
  )
}
