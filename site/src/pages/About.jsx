import { Award, Clock3, Cpu, Globe2, SlidersHorizontal, Sparkles } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import AdvantageCard from '../components/AdvantageCard'
import CTASection from '../components/CTASection'
import BarMotif from '../components/BarMotif'
import { advantages, business } from '../data/content'

const advantageIcons = [Award, Clock3, Cpu, SlidersHorizontal, Sparkles, Globe2]

const WORKSHOP_IMAGE =
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="15+ years of building ideas you can touch"
        description="A Hyderabad-based team of model makers, engineers, and craftsmen turning drawings into physical, presentation-ready scale models."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto max-w-md lg:order-2">
            <div className="absolute -inset-4 rounded-full border border-primary/40" aria-hidden="true" />
            <div className="absolute -bottom-6 -left-6 text-primary/70">
              <BarMotif className="h-14 w-28" />
            </div>
            <div className="overflow-hidden rounded-[2rem] border-4 border-surface shadow-xl">
              <img
                src={WORKSHOP_IMAGE}
                alt="3D Imagines workshop"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:order-1">
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Established {business.founded}, Hyderabad
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              3D Imagines is a 3D scale model making company established in {business.founded}, specializing in the
              design and fabrication of premium-quality architectural, industrial, engineering, and custom scale
              models. With over {business.teamExperience} of industry experience, our team has earned a reputation
              for delivering highly detailed, accurate, and visually stunning models for clients across the globe.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              We combine traditional craftsmanship with modern technologies such as 3D printing, laser cutting, and
              advanced model-making techniques to create scale models that communicate ideas with exceptional
              clarity and realism.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-alt py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <Reveal className="rounded-2xl border border-border bg-surface p-9">
            <p className="eyebrow mb-3">Mission</p>
            <p className="font-display text-xl font-semibold leading-snug text-ink">
              To transform complex concepts into realistic, high-quality scale models that inspire confidence,
              enhance presentations, and help clients communicate their vision effectively.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-border bg-surface p-9">
            <p className="eyebrow mb-3">Vision</p>
            <p className="font-display text-xl font-semibold leading-snug text-ink">
              To be recognized as one of the world&rsquo;s most trusted and innovative 3D scale model makers,
              delivering exceptional craftsmanship, precision, and customer satisfaction through continuous
              innovation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading eyebrow="Why Choose Us" title="What sets us apart" align="center" />
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
      </section>

      <CTASection />
    </>
  )
}
