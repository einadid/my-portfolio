import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { useScrollProgress } from '../../lib/utils'

/** Floating progress ring + back-to-top control. */
export function BackToTop() {
  const { progress } = useScrollProgress()
  const visible = progress > 0.08
  const circumference = 2 * Math.PI * 20

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="group fixed bottom-5 right-4 z-40 grid h-12 w-12 place-items-center rounded-full border border-line bg-surface/85 text-muted shadow-panel backdrop-blur-xl transition-colors hover:border-accent/45 hover:text-accent sm:bottom-7 sm:right-7"
        >
          <svg viewBox="0 0 44 44" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden>
            <circle
              cx="22"
              cy="22"
              r="20"
              fill="none"
              stroke="rgb(var(--accent))"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
              className="transition-[stroke-dashoffset] duration-200"
            />
          </svg>
          <FiArrowUp className="relative h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
