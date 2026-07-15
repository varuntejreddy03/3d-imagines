import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group corner-frame relative block overflow-hidden rounded-2xl bg-ink transition-transform duration-300 ease-out hover:-translate-y-1.5"
    >
      <div className="corner-tl" />
      <div className="corner-br" />

      <span className="absolute right-5 top-5 z-10 font-display text-xs font-semibold tracking-wider text-white/50">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="eyebrow mb-2">{service.kicker}</p>
        <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>

        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-3 text-sm leading-relaxed text-white/70">{service.description}</p>
            <ul className="mt-3 space-y-1 text-sm text-white/60">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Explore
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </span>
      </div>
    </Link>
  )
}
