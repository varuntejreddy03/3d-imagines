import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { clients } from '../data/content'

const CATEGORIES = [
  { label: 'Architectural', key: 'Architectural' },
  { label: 'Industrial', key: 'Industrial' },
  { label: 'Locomotive', key: 'Engineering' },
]

function Marquee({ items, direction = 'left' }) {
  const doubled = [...items, ...items]

  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-alt to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-alt to-transparent" />
      <div
        className={`flex w-max gap-4 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((client, i) => (
          <div
            key={client.name + i}
            title={client.name}
            className="flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
          >
            <img
              src={client.logo}
              alt={client.name}
              loading="lazy"
              className="max-h-14 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ClientsSection() {
  return (
    <section className="bg-surface-alt py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Clients"
          title="Trusted across industries"
          description="Real estate developers, PSUs, and infrastructure majors — organizations across sectors rely on our models to present their vision."
          align="center"
        />

        <div className="mt-14 space-y-10">
          {CATEGORIES.map((cat, idx) => (
            <Reveal key={cat.key}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">{cat.label}</h3>
              <Marquee
                items={clients.filter((c) => c.category === cat.key)}
                direction={idx % 2 === 0 ? 'left' : 'right'}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
