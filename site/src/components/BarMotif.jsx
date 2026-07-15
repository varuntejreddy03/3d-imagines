// Ascending bar-chart motif from the logo, reused as a lightweight section divider / watermark.
export default function BarMotif({ className = '', opacity = 1 }) {
  return (
    <svg viewBox="0 0 120 60" className={className} style={{ opacity }} aria-hidden="true">
      <rect x="8" y="34" width="14" height="26" rx="3" fill="currentColor" />
      <rect x="30" y="20" width="14" height="40" rx="3" fill="currentColor" />
      <rect x="52" y="4" width="14" height="56" rx="3" fill="currentColor" />
    </svg>
  )
}
