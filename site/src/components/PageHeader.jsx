import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-32 lg:pb-20 lg:pt-40">
      <div className="blueprint-grid absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
          {description && <p className="mt-4 text-base leading-relaxed text-white/65">{description}</p>}
        </div>
      </div>
    </section>
  )
}
