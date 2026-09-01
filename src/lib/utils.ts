import { useCallback, useEffect, useRef, useState } from 'react'

/** Lock page scrolling while a dialog / sheet is open. */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous || ''
    }
  }, [locked])
}

/** Call `handler` whenever Escape is pressed while `active`. */
export function useEscapeKey(handler: () => void, active = true) {
  const ref = useRef(handler)
  useEffect(() => {
    ref.current = handler
  }, [handler])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') ref.current()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])
}

/** 0 → 1 document scroll progress, plus a "has the page moved" flag. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
      setScrolled(window.scrollY > 24)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    window.requestAnimationFrame(update)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return { progress, scrolled }
}

/** Live clock for an IANA timezone, e.g. "Asia/Dhaka" → "06:42 PM". */
export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Intl.DateTimeFormat('en-GB', {
            timeZone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          }).format(new Date()),
        )
      } catch {
        setTime(new Date().toLocaleTimeString())
      }
    }
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [timeZone])
  return time
}

/** Copy-to-clipboard with a transient "copied" value for inline feedback. */
export function useCopy(resetAfter = 1600) {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = useCallback(
    async (value: string) => {
      try {
        await navigator.clipboard.writeText(value)
      } catch {
        // Fallback for browsers/contexts without the async clipboard API.
        const ta = document.createElement('textarea')
        ta.value = value
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        ta.remove()
      }
      setCopied(value)
      window.setTimeout(() => setCopied(null), resetAfter)
    },
    [resetAfter],
  )

  return { copied, copy }
}

/** Smooth scroll helper for in-page anchors, offset for the fixed header. */
export function scrollToSection(id: string, offset = 86) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - offset,
    behavior: reduce ? 'auto' : 'smooth',
  })
}
