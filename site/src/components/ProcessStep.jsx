import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProcessStep({ index, total, title, description, light = false }) {
  const barHeight = 24 + (index / (total - 1)) * 56 // grows from 24px to 80px across the sequence
  const rootRef = useRef(null)
  const inView = useInView(rootRef, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={rootRef}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-5 lg:flex-col lg:items-start lg:gap-4"
    >
      <div className="flex shrink-0 flex-col items-center lg:w-full lg:flex-row lg:items-end lg:gap-3">
        <div className="flex h-20 items-end lg:h-20">
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: barHeight } : {}}
            transition={{ duration: 0.7, delay: 0.15 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="w-3 rounded-t-sm bg-primary"
            aria-hidden="true"
          />
        </div>
        <span className={`mt-2 font-display text-sm font-semibold lg:mt-0 ${light ? 'text-white/50' : 'text-text-muted'}`}>
          0{index + 1}
        </span>
      </div>
      <div className={`lg:border-t lg:pt-4 ${light ? 'lg:border-white/10' : 'lg:border-border'}`}>
        <h3 className={`font-display text-base font-semibold ${light ? 'text-white' : 'text-ink'}`}>{title}</h3>
        <p className={`mt-1.5 text-sm leading-relaxed ${light ? 'text-white/60' : 'text-text-muted'}`}>{description}</p>
      </div>
    </motion.div>
  )
}
