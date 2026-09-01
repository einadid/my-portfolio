import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

interface RotatingTextProps {
  words: readonly string[]
  className?: string
  interval?: number
}

/** Vertical word carousel — used for the role line in the hero. */
export function RotatingText({ words, className = '', interval = 2600 }: RotatingTextProps) {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || words.length < 2) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => window.clearInterval(id)
  }, [interval, reduce, words.length])

  return (
    <span
      className="relative inline-grid overflow-hidden align-bottom"
      style={{ height: '1.34em', lineHeight: '1.34em' }}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={words[index]}
          initial={reduce ? false : { y: '108%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: '-108%', opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`col-start-1 row-start-1 whitespace-nowrap ${className}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default RotatingText
