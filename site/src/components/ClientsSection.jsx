import SectionHeading from './SectionHeading'
import { RevealGroup, RevealItem } from './Reveal'
import { clients } from '../data/content'

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

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <RevealItem key={client.name}>
              <div
                title={client.name}
                className="group flex h-24 items-center justify-center rounded-xl border border-border bg-surface p-4 grayscale transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:grayscale-0"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-h-14 w-full object-contain"
                />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
