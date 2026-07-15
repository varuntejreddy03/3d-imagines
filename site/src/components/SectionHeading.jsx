import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className={`text-3xl font-semibold sm:text-4xl lg:text-[2.6rem] ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-text-muted'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
