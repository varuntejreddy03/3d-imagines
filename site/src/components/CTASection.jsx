import { Mail, Phone } from 'lucide-react'
import { business } from '../data/content'
import Reveal from './Reveal'
import BarMotif from './BarMotif'
import Button from './Button'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-white">
      <BarMotif className="pointer-events-none absolute -right-4 -top-6 h-40 w-40 text-white" opacity={0.12} />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Have a project in mind? Let&rsquo;s build it together.
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm font-medium sm:flex-row sm:gap-6">
            <a href={`tel:+91${business.phones[0]}`} className="flex items-center gap-2 hover:opacity-80">
              <Phone size={17} /> +91 {business.phones[0]}
            </a>
            <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:opacity-80">
              <Mail size={17} /> {business.email}
            </a>
          </div>
          <Button to="/contact" variant="ink" className="mt-8">
            Request a Quote
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
