import { FiMapPin } from 'react-icons/fi'
import { personalInfo } from '../../data/personalInfo'
import { useLocalTime } from '../../lib/utils'

/**
 * Small "available for work" pill with location and live local time —
 * a detail that quietly signals the site is maintained.
 */
export function StatusPill({ className = '' }: { className?: string }) {
  const time = useLocalTime(personalInfo.timezone)

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 backdrop-blur-md ${className}`}
    >
      <span className="inline-flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 rounded-full bg-accent animate-ping-soft" />
          <span className="relative h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg">{personalInfo.availability}</span>
      </span>
      <span className="hidden h-3 w-px bg-line sm:block" />
      <span className="hidden items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:inline-flex">
        <FiMapPin className="h-3 w-3 text-accent" />
        {personalInfo.city}
        {time && <span className="text-faint">· {time}</span>}
      </span>
    </div>
  )
}

export default StatusPill
