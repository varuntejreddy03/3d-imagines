import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { navLinks, business } from '../data/content'
import Button from './Button'
import logoMark from '../assets/logo-mark.svg'

const menuListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
}
const menuItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'border-white/10 bg-ink/95 shadow-lg shadow-black/20' : 'border-white/10 bg-ink/40'
      }`}
    >
      <div className="h-[3px] bg-gradient-to-r from-primary via-primary-dark to-primary" aria-hidden="true" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link to="/" className="group flex shrink-0 items-center gap-2.5" aria-label="3D Imagines home">
          <img
            src={logoMark}
            alt=""
            className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          />
          <span className="font-display text-base font-bold tracking-tight text-white">3D Imagines</span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="group flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white/80 transition-colors duration-200 hover:bg-white/[0.07] hover:text-white"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4"
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-2xl shadow-black/40">
                        {link.children.map((child, i) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={`flex items-center justify-between px-5 py-4 text-sm text-white/80 transition hover:bg-white/[0.06] hover:text-primary ${
                              i !== link.children.length - 1 ? 'border-b border-white/[0.06]' : ''
                            }`}
                          >
                            {child.label}
                            <span className="text-white/30">→</span>
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className="group relative">
                {({ isActive }) => (
                  <span
                    className={`block rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${
                      isActive ? 'bg-white/[0.07] text-primary' : 'text-white/80 hover:bg-white/[0.07] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </span>
                )}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:+91${business.phones[0]}`}
            className="group flex items-center gap-2 rounded-full border border-white/10 py-1.5 pl-1.5 pr-3.5 transition-colors duration-200 hover:border-primary/40"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
              <Phone size={12} />
            </span>
            <span className="text-xs font-medium text-white/85">+91 {business.phones[0]}</span>
          </a>
          <Button to="/contact" variant="solid" className="!px-5 !py-2 text-xs">
            Get a Quote
          </Button>
        </div>

        <button
          className="text-white lg:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {createPortal(
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[100] flex flex-col px-6 py-5 lg:hidden"
              style={{ backgroundColor: '#1C1C1E' }}
            >
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                  <img src={logoMark} alt="" className="h-8 w-8" />
                  <span className="font-display text-base font-bold text-white">3D Imagines</span>
                </Link>
                <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="text-white">
                  <X size={26} />
                </button>
              </div>

              <motion.nav
                variants={menuListVariants}
                initial="hidden"
                animate="visible"
                className="mt-12 flex flex-1 flex-col gap-1 overflow-y-auto"
                aria-label="Mobile"
              >
                {navLinks.map((link, i) => (
                  <motion.div key={link.label} variants={menuItemVariants} className="border-b border-white/10 py-3">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-xs text-white/30 tabular-nums">0{i + 1}</span>
                      <NavLink
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                        className="font-display text-2xl font-semibold text-white"
                      >
                        {link.label}
                      </NavLink>
                    </div>
                    {link.children && (
                      <div className="ml-9 mt-3 flex flex-col gap-2.5 pb-1">
                        {link.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm text-white/55"
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.nav>

              <div className="flex flex-col gap-4 pb-4 pt-6">
                <a href={`tel:+91${business.phones[0]}`} className="flex items-center gap-2 text-white/85">
                  <Phone size={18} />
                  +91 {business.phones[0]}
                </a>
                <Button to="/contact" variant="solid" onClick={() => setMobileOpen(false)} className="w-full">
                  Get a Quote
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </header>
  )
}
