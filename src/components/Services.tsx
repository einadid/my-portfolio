import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiAperture,
  FiCast,
  FiCpu,
  FiFigma,
  FiPenTool,
  FiLayers,
} from 'react-icons/fi'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal, RevealItem } from './ui/Reveal'
import { processSteps, services, type Service } from '../data/services'
import { useSpotlight } from '../lib/useSpotlight'

const icons: Record<Service['icon'], typeof FiAperture> = {
  brand: FiAperture,
  social: FiCast,
  frontend: FiLayers,
  app: FiCpu,
  illustration: FiPenTool,
}

function ServiceRow({ service }: { service: Service }) {
  const { ref, onMouseMove } = useSpotlight<HTMLDivElement>()
  const Icon = icons[service.icon]
  const [hovered, setHovered] = useState(false)

  return (
    <RevealItem className="border-t border-line/70 first:border-t-0">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="spot group relative grid grid-cols-1 items-start gap-4 py-6 transition-colors duration-500 md:grid-cols-12 md:gap-6 md:py-7"
      >
        <span
          aria-hidden
          className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent2 to-transparent transition-transform duration-500 group-hover:scale-x-100"
        />

        <div className="flex items-center gap-3 md:col-span-4">
          <span className="font-mono text-[11px] text-faint">{service.index}</span>
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition-all duration-500 ${
              hovered ? 'border-accent/50 bg-accent/10 text-accent' : 'border-line bg-surface2/60 text-muted'
            }`}
          >
            <Icon className="h-4 w-4" />
          </span>
          <h3 className="h-card max-w-xs">{service.title}</h3>
        </div>

        <p className="text-sm leading-relaxed text-muted md:col-span-5 md:text-[15px]">{service.blurb}</p>

        <ul className="flex flex-wrap gap-1.5 md:col-span-3 md:justify-end">
          {service.deliverables.slice(0, 3).map((d) => (
            <li key={d} className="chip">
              {d}
            </li>
          ))}
        </ul>

        <div className="md:col-span-12 md:-mt-2 md:flex md:justify-end">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
            {service.startingAt}
            <FiArrowUpRight
              className={`h-4 w-4 transition-all duration-500 ${
                hovered ? 'translate-x-0 text-accent opacity-100' : '-translate-x-1 opacity-0'
              }`}
            />
          </span>
        </div>
      </div>
    </RevealItem>
  )
}

export function Services() {
  return (
    <section id="services" className="section">
      <div className="shell">
        <SectionHeading
          kicker="Services"
          title={
            <>
              One person for the whole
              <br className="hidden sm:block" /> gap between idea and launch.
            </>
          }
          description="Design and build in the same head means fewer handoffs, fewer “that was never in the mockup” arguments, and a finished product that looks like the pitch."
          aside={
            <div className="panel-flat flex items-center gap-3 px-4 py-3">
              <FiFigma className="h-5 w-5 text-accent" />
              <p className="text-[13px] leading-snug text-muted">
                Design + development retainer available
                <br />
                <span className="text-fg">Monthly, per-project, or one-off.</span>
              </p>
            </div>
          }
        />

        <Reveal group className="mt-12">
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </Reveal>

        {/* process */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <h3 className="h-section !text-2xl sm:!text-3xl">How we’ll work</h3>
            <p className="lede mt-3">
              Four steps, fixed check-ins, no mystery invoices. You always know what is happening and what is next.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              <FiArrowUpRight className="h-3.5 w-3.5" />
              Typical timeline: 2–4 weeks
            </p>
          </Reveal>

          <Reveal group className="lg:col-span-8">
            <ol className="relative grid gap-3 sm:grid-cols-2">
              <span
                aria-hidden
                className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent/40 via-line to-transparent lg:block"
              />
              {processSteps.map((step) => (
                <RevealItem key={step.step}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="panel h-full p-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-accent/30 bg-accent/10 font-mono text-xs text-accent">
                        {step.step}
                      </span>
                      <span className="chip">{step.duration}</span>
                    </div>
                    <h4 className="h-card mt-4">{step.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </motion.div>
                </RevealItem>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Services
