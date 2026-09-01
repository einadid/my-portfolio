import { useState } from 'react'

interface SmartImageProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  /** Rendered when there is no image (or it fails) — usually a gradient monogram. */
  fallback?: React.ReactNode
  eager?: boolean
  sizes?: string
}

/**
 * Image with skeleton-to-fade loading and a graceful fallback, so a missing
 * asset never leaves a broken icon on the page.
 */
export function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  fallback,
  eager = false,
  sizes,
}: SmartImageProps) {
  const [state, setState] = useState<'loading' | 'ready' | 'error'>(src ? 'loading' : 'error')

  return (
    <div className={`relative overflow-hidden bg-surface2 ${className}`}>
      {state !== 'error' && (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : 'auto'}
          onLoad={() => setState('ready')}
          onError={() => setState('error')}
          className={`h-full w-full object-cover transition-all duration-700 ${
            state === 'ready' ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
          } ${imgClassName}`}
        />
      )}

      {state === 'loading' && <div className="absolute inset-0 animate-pulse bg-surface2" />}

      {state === 'error' && (fallback ?? null)}
    </div>
  )
}

/** Gradient monogram used as a fallback for missing project artwork. */
export function MonogramFallback({ label, className = '' }: { label: string; className?: string }) {
  const initials = label
    .replace(/[^\p{L}\p{N} ]/gu, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,rgb(var(--accent)/0.22),rgb(var(--accent-2)/0.16)_45%,rgb(var(--accent-3)/0.24))] ${className}`}
    >
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
      <span className="relative font-display text-4xl font-extrabold tracking-tight text-fg/70">{initials}</span>
    </div>
  )
}
