import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Component = motion[as] ?? motion.div
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  )
}

export function RevealGroup({ children, className = '', stagger = 0.1 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren: stagger }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className = '' }) {
  return (
    <motion.div variants={variants} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  )
}
