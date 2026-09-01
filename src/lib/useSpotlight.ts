/**
 * Attaches a pointer-tracked radial highlight to an element that has the
 * `.spot` class (see index.css). Returns a ref to spread on the card.
 */
import { useCallback, useRef } from 'react'

export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  const onMouseMove = useCallback((event: React.MouseEvent<T>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }, [])

  return { ref, onMouseMove }
}
