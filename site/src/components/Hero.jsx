import { ArrowRight } from 'lucide-react'
import { stats } from '../data/content'
import StatCounter from './StatCounter'
import Button from './Button'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Precision architectural scale model under studio light"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="blueprint-grid absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-28 lg:px-10 lg:pb-20">
        <p className="eyebrow">Architectural &amp; Industrial Model Makers · Since 2009</p>

        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          Precision Scale Models, Engineered to Impress
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Bringing complex concepts to life through premium architectural, industrial, and engineering scale
          models.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button to="/contact" variant="solid">
            Get a Free Quote
            <ArrowRight size={17} />
          </Button>
          <Button to="/gallery" variant="outline">
            View Our Work
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
