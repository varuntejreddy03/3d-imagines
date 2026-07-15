import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import { serviceCategories } from '../data/content'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = serviceCategories.find((s) => s.slug === slug)
  const otherServices = serviceCategories.filter((s) => s.slug !== slug)

  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <PageHeader eyebrow={service.kicker} title={service.title} description={service.description} />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="overflow-hidden rounded-2xl">
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow mb-3">What&rsquo;s Included</p>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Precision-built, to your exact scale
            </h2>
            <ul className="mt-6 space-y-4">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-base text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
            <Button to="/contact" variant="solid" className="mt-8">
              Request a Quote
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-alt py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Explore More" title="Other services" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-6 transition hover:border-primary"
              >
                <div>
                  <p className="eyebrow mb-1">{s.kicker}</p>
                  <p className="font-display text-lg font-semibold text-ink">{s.title}</p>
                </div>
                <span className="text-primary transition group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
