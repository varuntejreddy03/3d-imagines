import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <Reveal key={item.question} delay={index * 0.03}>
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-medium text-ink">{item.question}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-8 text-sm leading-relaxed text-text-muted">{item.answer}</p>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
