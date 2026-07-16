import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, Mail, Phone, X } from 'lucide-react'
import { WhatsappIcon } from './SocialIcons'
import { business } from '../data/content'

const actions = [
  {
    label: 'WhatsApp',
    href: `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
      "Hi 3D Imagines, I'd like to enquire about a scale model.",
    )}`,
    bg: 'bg-[#25D366]',
    Icon: (props) => <WhatsappIcon {...props} />,
    external: true,
  },
  {
    label: 'Call',
    href: `tel:+91${business.phones[0]}`,
    bg: 'bg-primary',
    Icon: (props) => <Phone {...props} />,
  },
  {
    label: 'Email',
    href: `mailto:${business.email}`,
    bg: 'bg-ink',
    Icon: (props) => <Mail {...props} />,
  },
]

export default function FloatingActions() {
  const [open, setOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-ink shadow-lg transition-transform duration-200 hover:scale-110 hover:border-primary hover:text-primary"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noreferrer' : undefined}
              aria-label={action.label}
              initial={{ opacity: 0, y: 12, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.8 }}
              transition={{ duration: 0.2, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-3"
            >
              <span className="rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                {action.label}
              </span>
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl transition-transform duration-200 group-hover:scale-110 ${action.bg}`}
              >
                <action.Icon size={20} />
              </span>
            </motion.a>
          ))}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact menu' : 'Open contact menu'}
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl shadow-primary/30 transition-transform duration-200 hover:scale-105"
      >
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" aria-hidden="true" />
        )}
        <span className="relative">
          {open ? <X size={24} /> : <WhatsappIcon size={26} />}
        </span>
      </button>
    </div>
  )
}
