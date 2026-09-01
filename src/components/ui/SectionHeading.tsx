import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  kicker: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  aside?: ReactNode
  className?: string
}

/**
 * Every section header in the site: mono kicker, display title, one supporting line,
 * and an optional right-aligned action.
 */
export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
  aside,
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div
      className={`flex flex-col gap-6 ${
        centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'
      } ${className}`}
    >
      <Reveal className={centered ? 'max-w-2xl' : 'max-w-2xl'}>
        <div className={`kicker mb-4 ${centered ? 'justify-center' : ''}`}>
          <span className="dot bg-accent" aria-hidden />
          {kicker}
        </div>
        <h2 className="h-section">{title}</h2>
        {description ? <p className="lede mt-4 max-w-xl">{description}</p> : null}
      </Reveal>

      {aside ? (
        <Reveal className={centered ? '' : 'shrink-0'} delay={0.15}>
          {aside}
        </Reveal>
      ) : null}
    </div>
  )
}
