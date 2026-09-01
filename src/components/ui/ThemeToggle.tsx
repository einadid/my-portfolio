import { AnimatePresence, motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../context/theme'

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`${isDark ? 'Light' : 'Dark'} mode`}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full border border-line bg-surface/70 text-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent ${
        compact ? 'h-9 w-9' : 'h-10 w-10'
      }`}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -35 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 35 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          {isDark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
