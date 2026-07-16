import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { business } from '../data/content'
import SectionHeading from './SectionHeading'

export default function MapSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
      <SectionHeading
        eyebrow="Visit Us"
        title="Find our workshop in Hyderabad"
        description="Drop by to see our work in person, or reach us through any of the channels below."
        align="center"
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-5 rounded-2xl border border-border bg-surface-alt p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin size={20} />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-ink">Address</p>
              <a href={business.mapLink} target="_blank" rel="noreferrer" className="mt-1 block text-sm leading-relaxed text-text-muted hover:text-primary">
                {business.address}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Phone size={20} />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-ink">Phone</p>
              {business.phones.map((phone) => (
                <a key={phone} href={`tel:+91${phone}`} className="mt-1 block text-sm text-text-muted hover:text-primary">
                  +91 {phone}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail size={20} />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-ink">Email</p>
              <a href={`mailto:${business.email}`} className="mt-1 block text-sm text-text-muted hover:text-primary">
                {business.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Clock3 size={20} />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-ink">Working Hours</p>
              {business.hours.map((h) => (
                <p key={h.days} className="mt-1 text-sm text-text-muted">
                  {h.days}: {h.time}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="3D Imagines location on Google Maps"
            src={business.mapEmbed}
            className="h-full min-h-[360px] w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
