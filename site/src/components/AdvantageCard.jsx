import Reveal from './Reveal'

export default function AdvantageCard({ icon: Icon, title, description, index, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(28,28,30,0.25)]"
    >
      <span className="pointer-events-none absolute right-5 top-4 font-display text-4xl font-semibold text-ink/[0.05] transition-colors duration-400 group-hover:text-primary/10">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon size={22} />
      </div>

      <h3 className="relative mt-5 font-display text-base font-semibold text-ink">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-text-muted">{description}</p>

      <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-400 group-hover:w-full" />
    </Reveal>
  )
}
