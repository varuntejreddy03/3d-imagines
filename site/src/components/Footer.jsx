import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { business, navLinks, serviceCategories } from '../data/content'
import logoDark from '../assets/logo-lockup-dark.svg'
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr] lg:gap-8 lg:px-10">
        <div>
          <img src={logoDark} alt="3D Imagines" className="h-10 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Architectural and industrial scale model makers, crafting precision physical models since {business.founded}.
          </p>
          <div className="mt-6 flex gap-4">
            <a href={business.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="text-white/60 transition hover:text-primary">
              <YoutubeIcon size={20} />
            </a>
            <a href={business.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/60 transition hover:text-primary">
              <InstagramIcon size={20} />
            </a>
            <a href={business.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/60 transition hover:text-primary">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="transition hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Services</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {serviceCategories.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className="transition hover:text-primary">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
              <a href={business.mapLink} target="_blank" rel="noreferrer" className="transition hover:text-primary">
                {business.address}
              </a>
            </li>
            {business.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-primary" />
                <a href={`tel:+91${phone}`} className="transition hover:text-primary">
                  +91 {phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-primary" />
              <a href={`mailto:${business.email}`} className="transition hover:text-primary">
                {business.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 space-y-1 text-xs text-white/50">
            {business.hours.map((h) => (
              <p key={h.days}>
                {h.days}: {h.time}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/45 lg:px-10">
        © {new Date().getFullYear()} 3D Imagines. All rights reserved.
      </div>
    </footer>
  )
}
