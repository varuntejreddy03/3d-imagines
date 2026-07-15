export default function StatCounter({ value, suffix = '', label, detail, light = true }) {
  return (
    <div className="text-center">
      <p className={`font-display text-4xl font-semibold tabular-nums sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}>
        {value}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className={`mt-2 text-sm font-medium ${light ? 'text-white/60' : 'text-text-muted'}`}>{label}</p>
      {detail && <p className={`mt-0.5 text-xs ${light ? 'text-white/40' : 'text-text-muted'}`}>{detail}</p>}
    </div>
  )
}
