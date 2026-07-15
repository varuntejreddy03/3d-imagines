import Reveal from './Reveal'

export default function TestimonialCard({ quote, name, role, delay = 0 }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)

  return (
    <Reveal
      delay={delay}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-alt p-8 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_24px_44px_-24px_rgba(28,28,30,0.28)]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-6 font-display text-8xl font-bold text-ink/[0.05] transition-colors duration-400 group-hover:text-primary/[0.08]"
      >
        &rdquo;
      </span>

      <p className="relative flex-1 text-[15px] leading-relaxed text-text">{quote}</p>

      <div className="relative mt-7 flex items-center gap-3 border-t border-border pt-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
          {initials}
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-ink">{name}</p>
          <p className="text-xs text-text-muted">{role}</p>
        </div>
      </div>
    </Reveal>
  )
}
