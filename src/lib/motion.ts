import type { Variants } from 'framer-motion'

export const easeOut = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut } },
}

export const fromLeft: Variants = {
  hidden: { opacity: 0, x: -26 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
}

export const fromRight: Variants = {
  hidden: { opacity: 0, x: 26 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
}

export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
})

export const viewport = { once: true, amount: 0.25 } as const
