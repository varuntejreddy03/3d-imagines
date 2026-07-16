import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { business, navLinks } from '../data/content'
import { InstagramIcon, LinkedinIcon, WhatsappIcon, YoutubeIcon } from './SocialIcons'

const scaleModelLinks = [
  { label: 'Architectural Exterior Models', to: '/services/architectural-models' },
  { label: 'Architectural Interior Models', to: '/services/architectural-models' },
  { label: 'Master Plan / Township Models', to: '/services/architectural-models' },
  { label: 'Building Model Making', to: '/services/architectural-models' },
  { label: 'Industrial Model Making', to: '/services/industrial-models' },
  { label: 'Engineering Model Making', to: '/services/industrial-models' },
  { label: 'Piping / Plant Layout Models', to: '/services/industrial-models' },
  { label: 'Locomotive Scale Models', to: '/services/industrial-models' },
  { label: 'Marine Model Making', to: '/services/industrial-models' },
  { label: 'Block Model Making', to: '/services/architectural-models' },
]

const printingLinks = [
  { label: 'FDM 3D Printing', to: '/services/3d-printing' },
  { label: 'SLA 3D Printing', to: '/services/3d-printing' },
  { label: 'Rapid Prototyping', to: '/services/3d-printing' },
  { label: 'Fine-Detail Components', to: '/services/3d-printing' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="h-[3px] bg-gradient-to-r from-primary via-primary-dark to-primary" aria-hidden="true" />

      {/* Centered company heading */}
      <div className="mx-auto max-w-7xl px-6 pt-16 text-center lg:px-10">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
          3D Imagines <span className="text-primary">—</span> Architectural &amp; Industrial Model Makers
        </h2>
      </div>

      {/* Dense columns with dividers */}
      <div className="mx-auto grid max-w-7xl gap-y-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10 lg:px-10">
        {/* Quick Link */}
        <div className="lg:pr-8">
          <h3 className="mb-6 font-display text-lg font-bold text-white">Quick Link</h3>
          <ul className="flex flex-col gap-3.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="transition hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Scale Models */}
        <div className="lg:px-8">
          <h3 className="mb-6 font-display text-lg font-bold text-white">3D Scale Models</h3>
          <ul className="flex flex-col gap-3.5 text-sm">
            {scaleModelLinks.map((item, i) => (
              <li key={`${item.label}-${i}`}>
                <Link to={item.to} className="transition hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3D Printing */}
        <div className="lg:px-8">
          <h3 className="mb-6 font-display text-lg font-bold text-white">3D Printing</h3>
          <ul className="flex flex-col gap-3.5 text-sm">
            {printingLinks.map((item, i) => (
              <li key={`${item.label}-${i}`}>
                <Link to={item.to} className="transition hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="lg:pl-8">
          <h3 className="mb-6 font-display text-lg font-bold text-white">Get in Touch</h3>
          <ul className="flex flex-col gap-4 text-sm">
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
              <a href={`mailto:${business.email}`} className="break-all transition hover:text-primary">
                {business.email}
              </a>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <SocialLink href={`https://wa.me/${business.whatsapp}`} label="WhatsApp">
              <WhatsappIcon size={17} />
            </SocialLink>
            <SocialLink href={business.social.youtube} label="YouTube">
              <YoutubeIcon size={17} />
            </SocialLink>
            <SocialLink href={business.social.instagram} label="Instagram">
              <InstagramIcon size={17} />
            </SocialLink>
            <SocialLink href={business.social.linkedin} label="LinkedIn">
              <LinkedinIcon size={17} />
            </SocialLink>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} 3D Imagines. All rights reserved.</p>
          <p>Established {business.founded} · Hyderabad, India</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-primary hover:bg-primary hover:text-white"
    >
      {children}
    </a>
  )
}
