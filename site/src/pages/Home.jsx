import { Link } from 'react-router-dom'
import {
  Award,
  Clock3,
  Cpu,
  Globe2,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import AdvantageCard from '../components/AdvantageCard'
import ServiceCard from '../components/ServiceCard'
import ProcessStep from '../components/ProcessStep'
import StatCounter from '../components/StatCounter'
import TestimonialCard from '../components/TestimonialCard'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'
import ClientsSection from '../components/ClientsSection'
import MapSection from '../components/MapSection'
import BarMotif from '../components/BarMotif'
import {
  advantages,
  faqs,
  galleryItems,
  processSteps,
  serviceCategories,
  stats,
  testimonials,
} from '../data/content'

const advantageIcons = [Award, Clock3, Cpu, SlidersHorizontal, Sparkles, Globe2]

const ABOUT_IMAGE = '/gallery/architectural/img-13.jpeg'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust / Intro */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-3">Who We Are</p>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              15+ years of precision craftsmanship
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              3D Imagines is a 3D scale model making company established in 2009, specializing in premium-quality
              architectural, industrial, engineering, and custom scale models. With over 30 years of combined
              industry experience, our team blends traditional craftsmanship with 3D printing and laser cutting to
              create models that communicate ideas with exceptional clarity.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Read More →
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-full border border-primary/40" aria-hidden="true" />
            <div className="absolute -bottom-6 -left-6 text-primary/70">
              <BarMotif className="h-14 w-28" />
            </div>
            <div className="overflow-hidden rounded-[2rem] border-4 border-surface shadow-xl">
              <img
                src={ABOUT_IMAGE}
                alt="Sindhu Hospitals architectural scale model built by 3D Imagines"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-alt py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built on precision, trusted on delivery"
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item, index) => (
              <AdvantageCard
                key={item.title}
                icon={advantageIcons[index % advantageIcons.length]}
                index={index}
                delay={(index % 3) * 0.08}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Build"
            title="Our Services"
            description="From concept to finished model — architectural, industrial, and digitally printed, all under one roof."
          />
          <Link
            to="/services"
            className="hidden shrink-0 text-sm font-semibold text-primary hover:text-primary-dark sm:block"
          >
            View all services →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink-2 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="How We Work"
            title="Our 3D Model Making Process"
            align="center"
            light
          />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} index={index} total={processSteps.length} light {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="A glimpse of our work"
            description="Architectural, industrial, locomotive, and 3D-printed models delivered to clients across India and beyond."
          />
        </div>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryItems.slice(0, 8).map((item) => (
            <RevealItem key={item.title} className="group relative overflow-hidden rounded-xl bg-surface-alt">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-contain transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <p className="eyebrow !text-white/70">{item.category}</p>
                <p className="text-sm font-semibold text-white">{item.title}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
          >
            View Full Gallery →
          </Link>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative overflow-hidden bg-ink py-20">
        <BarMotif className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 text-white" opacity={0.06} />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 sm:grid-cols-4 lg:px-10">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      {/* Clients */}
      <ClientsSection />

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Testimonials" title="What clients say" align="center" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <TestimonialCard key={t.name + index} {...t} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-alt py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="FAQs" title="Frequently asked questions" align="center" />
          <div className="mt-12">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <MapSection />

      <CTASection />
    </>
  )
}
