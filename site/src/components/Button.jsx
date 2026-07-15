import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0'

const variants = {
  solid: { classes: 'bg-primary text-white', sweep: 'bg-primary-dark' },
  ink: { classes: 'bg-ink text-white', sweep: 'bg-ink-2' },
  outline: { classes: 'border border-white/30 text-white', sweep: 'bg-white', flipText: 'group-hover:text-ink' },
  outlineLight: { classes: 'border border-border text-ink', sweep: 'bg-ink', flipText: 'group-hover:text-white' },
}

const Button = forwardRef(function Button({ as, to, variant = 'solid', className = '', children, ...props }, ref) {
  const { classes, sweep, flipText } = variants[variant]
  const Tag = to ? Link : as || 'button'

  return (
    <Tag ref={ref} to={to} className={`${base} ${classes} ${className}`} {...props}>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 origin-left scale-x-0 ${sweep} transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100`}
      />
      <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${flipText || ''}`}>
        {children}
      </span>
    </Tag>
  )
})

export default Button
