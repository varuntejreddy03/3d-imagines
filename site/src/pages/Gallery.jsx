import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { RevealGroup, RevealItem } from '../components/Reveal'
import CTASection from '../components/CTASection'
import { galleryItems } from '../data/content'

const FILTERS = ['All', 'Architectural', 'Industrial', 'Engineering']

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? galleryItems : galleryItems.filter((item) => item.category === active)),
    [active],
  )

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Project Gallery"
        description="Real project photography — architectural, industrial, and engineering scale models from our Hyderabad workshop."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-wrap justify-center gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                active === filter
                  ? 'border-primary bg-primary text-white'
                  : 'border-border text-text-muted hover:border-primary hover:text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <RevealItem key={item.title + item.category} className="group relative overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <p className="eyebrow !text-white/70">{item.category}</p>
                <p className="text-sm font-semibold text-white">{item.title}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <CTASection />
    </>
  )
}
