import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { easeOut, fadeUp, stagger } from '../../lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Stagger direct children that use <RevealItem />. */
  group?: boolean
  amount?: number
}

/** Scroll-triggered reveal; degrades to a plain element when motion is reduced. */
export function Reveal({ children, className, delay = 0, group = false, amount = 0.2 }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={group ? stagger(delay, 0.09) : fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={group ? undefined : { delay, duration: 0.7, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

interface RevealItemProps {
  children: ReactNode
  className?: string
}

/** Child of a `group` Reveal — inherits the stagger timing. */
export function RevealItem({ children, className }: RevealItemProps) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}
