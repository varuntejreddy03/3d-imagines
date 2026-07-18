import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import Lightbox from '../components/Lightbox'
import { useState } from 'react'
import { serviceCategories, galleryItems, processSteps } from '../data/content'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = serviceCategories.find((s) => s.slug === slug)
  const otherServices = serviceCategories.filter((s) => s.slug !== slug)
  const [lightbox, setLightbox] = useState(null)

  if (!service) return <Navigate to="/services" replace />

  // Get gallery images for this service category
  const categoryImages = galleryItems
    .filter((item) => {
      if (service.galleryFilter === 'Locomotive') return item.category === 'Engineering'
      return item.category === service.galleryFilter
    })
    .slice(0, 6)

  return (
    <div key={slug}>
      <PageHeader eyebrow={service.kicker} title={service.title} description={service.description} />

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="aspect-[4/3] w-full select-none object-cover"
              />
            </div>
          </Reveal>

          {/* Details */}
          <Reveal delay={0.1}>
            <p className="eyebrow mb-3">What's Included</p>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Precision-built, to your exact scale
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Every model is custom-engineered from your drawings. We combine laser cutting, CNC machining,
              and 3D printing with hand-finished craftsmanship to deliver presentation-ready results.
            </p>
            <ul className="mt-6 space-y-3">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-base text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact" variant="solid">
                Request a Quote
              </Button>
              <Button to={`/gallery?filter=${service.galleryFilter}`} variant="outlineLight">
                View Full Gallery →
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery preview */}
      {categoryImages.length > 0 && (
        <section className="bg-surface-alt py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10 flex items-end justify-between">
              <SectionHeading
                eyebrow="Our Work"
                title={`${service.kicker} Projects`}
              />
              <Link
                to={`/gallery?filter=${service.galleryFilter}`}
                className="hidden items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark sm:inline-flex"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {categoryImages.map((item) => (
                <RevealItem
                  key={item.image}
                  className="group relative cursor-pointer overflow-hidden rounded-xl bg-surface"
                  onClick={() => setLightbox(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="aspect-[4/3] w-full select-none object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
            <div className="mt-8 text-center sm:hidden">
              <Link
                to={`/gallery?filter=${service.galleryFilter}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                View all projects <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="bg-ink py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="How We Work" title="Our Process" align="center" light />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.07}>
                <div className="flex gap-4">
                  <span className="font-display text-3xl font-bold text-primary/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Explore More" title="Other Services" align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition hover:border-primary hover:shadow-md"
              >
                <div>
                  <p className="eyebrow mb-1">{s.kicker}</p>
                  <p className="font-display text-lg font-semibold text-ink">{s.title}</p>
                  <p className="mt-1 text-sm text-text-muted">{s.description}</p>
                </div>
                <span className="ml-4 shrink-0 text-xl text-primary transition group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <Lightbox image={lightbox.image} alt={lightbox.title} onClose={() => setLightbox(null)} />
      )}

      <CTASection />
    </div>
  )
}
