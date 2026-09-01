interface MarqueeProps {
  items: string[]
  className?: string
}

/** Infinite horizontal ticker. Duplicated track + CSS animation, paused on hover. */
export function Marquee({ items, className = '' }: MarqueeProps) {
  const row = (
    <ul className="flex shrink-0 items-center gap-8 pr-8" aria-hidden>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted sm:text-sm">{item}</span>
          <span className="dot bg-accent/60" aria-hidden />
        </li>
      ))}
    </ul>
  )

  return (
    <div className={`group/marquee mask-x-fade relative flex overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
        {row}
        {row}
      </div>
    </div>
  )
}
