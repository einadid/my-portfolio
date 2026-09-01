import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ui/ThemeToggle'
import { navItems } from '../data/siteNav'
import { personalInfo } from '../data/personalInfo'
import { scrollToSection, useLockBodyScroll, useEscapeKey, useScrollProgress } from '../lib/utils'

const NAV_SECTION_IDS = ['home', ...navItems.map((n) => n.id)]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const reduce = useReducedMotion()
  const isHome = location.pathname === '/'
  const { progress, scrolled } = useScrollProgress()
  const [active, setActive] = useState('home')

  useLockBodyScroll(open)
  useEscapeKey(() => setOpen(false), open)

  /* Keep the highlighted item in sync with the section in view. */
  useEffect(() => {
    let frame = 0
    const measure = () => {
      frame = 0
      if (!isHome) {
        setActive('')
        return
      }
      let current = 'home'
      for (const id of NAV_SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure)
    }
    window.requestAnimationFrame(measure)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [isHome])

  const goTo = (id: string) => {
    setOpen(false)
    if (!isHome) {
      navigate('/')
      window.setTimeout(() => scrollToSection(id), 260)
      return
    }
    scrollToSection(id)
  }

  return (
    <>
      {/* Scroll progress */}
      <div aria-hidden className="fixed inset-x-0 top-0 z-[70] h-[2px] bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-accent via-accent2 to-accent3 transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <motion.header
        initial={{ y: reduce ? 0 : -28, opacity: reduce ? 1 : 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[60] px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <div
          className={`mx-auto flex max-w-shell items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:px-4 ${
            scrolled
              ? 'border-line bg-surface/80 shadow-[0_18px_50px_-30px_rgb(3_5_18/0.7)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault()
                goTo('home')
              }
            }}
            className="group flex items-center gap-2.5 pl-1"
            aria-label={`${personalInfo.name} — home`}
          >
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-[13px] bg-gradient-to-br from-accent via-accent2 to-accent3 text-[13px] font-bold text-white shadow-[0_10px_28px_-12px_rgb(var(--accent-2)/0.9)]">
              <span className="relative z-10 font-display">{personalInfo.initials}</span>
              <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent_20%,rgb(255_255_255/0.45)_50%,transparent_80%)]" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-[15px] font-semibold tracking-tight">Nadid</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                design · code
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-0.5 rounded-full border border-line bg-surface2/60 p-1 lg:flex">
            {navItems.map((item) => {
              const isActive = isHome && active === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(item.id)}
                  className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-300 ${
                    isActive ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      className="absolute inset-0 -z-10 rounded-full border border-line bg-surface shadow-sm"
                    />
                  )}
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn btn-ghost hidden !px-4 !py-2 text-[13px] md:inline-flex"
            >
              <FiDownload className="h-4 w-4" />
              Résumé
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/70 text-fg transition-colors hover:border-accent/50 lg:hidden"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  key={open ? 'close' : 'menu'}
                  initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 grid place-items-center"
                >
                  {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-canvas/85 backdrop-blur-xl"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.nav
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-3 mt-20 overflow-hidden rounded-3xl border border-line bg-surface/95 p-5 shadow-panel sm:mx-5"
            >
              <span className="hairline-top" aria-hidden />
              <ul className="divide-y divide-line/70">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.4 }}
                  >
                    <button
                      type="button"
                      onClick={() => goTo(item.id)}
                      className="flex w-full items-center justify-between gap-4 py-3.5 text-left"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[11px] text-faint">0{i + 1}</span>
                        <span className="font-display text-xl font-semibold tracking-tight">{item.label}</span>
                      </span>
                      <span className="flex items-center gap-2 text-xs text-muted">
                        {item.hint}
                        <FiArrowUpRight className="h-4 w-4 text-accent" />
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="btn btn-ghost w-full !py-2.5 text-[13px]"
                >
                  <FiDownload className="h-4 w-4" />
                  Résumé
                </a>
                <button type="button" onClick={() => goTo('contact')} className="btn btn-solid w-full !py-2.5 text-[13px]">
                  Hire me
                  <FiArrowUpRight className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-4 text-center font-mono text-[11px] text-faint">{personalInfo.email}</p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
