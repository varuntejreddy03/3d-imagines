// lucide-react no longer ships brand/logo icons — minimal inline replacements for the three we need.

export function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function YoutubeIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.5L15 12L10.5 14.5V9.5Z" fill="currentColor" />
    </svg>
  )
}

export function LinkedinIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7.8" cy="8.2" r="1.15" fill="currentColor" />
      <path d="M7.8 11.2V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M11.4 17V13.6C11.4 12.3 12.2 11.2 13.5 11.2C14.7 11.2 15.4 12 15.4 13.6V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.4 17V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
