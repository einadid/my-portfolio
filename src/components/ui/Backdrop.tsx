/**
 * Fixed, non-interactive page backdrop: two drifting aurora blobs, a hairline
 * grid and a film-grain layer. Everything is CSS-animated and motion-safe.
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-canvas" />

      {/* aurora */}
      <div className="absolute -top-[18vh] -left-[12vw] h-[62vh] w-[62vh] rounded-full bg-accent/18 blur-[110px] animate-drift" />
      <div
        className="absolute top-[24vh] right-[-14vw] h-[70vh] w-[70vh] rounded-full bg-accent3/16 blur-[130px] animate-drift"
        style={{ animationDelay: '-9s' }}
      />
      <div
        className="absolute bottom-[-20vh] left-[28vw] h-[55vh] w-[55vh] rounded-full bg-accent2/12 blur-[120px] animate-drift"
        style={{ animationDelay: '-16s' }}
      />

      {/* structure */}
      <div className="absolute inset-0 grid-lines opacity-[0.35] mask-radial" />
      <div className="absolute inset-0 noise opacity-[0.16] mix-blend-soft-light dark:opacity-[0.22]" />

      {/* edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,transparent_40%,rgb(var(--canvas)/0.85)_100%)]" />
    </div>
  )
}
