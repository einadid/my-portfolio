import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiAward,
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiExternalLink,
  FiMapPin,
  FiBookOpen,
  FiX,
  FiZoomIn,
} from 'react-icons/fi'
import { SectionHeading } from './ui/SectionHeading'
import { SmartImage, MonogramFallback } from './ui/SmartImage'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { certificates, type Certificate } from '../data/certificates'
import { useEscapeKey, useLockBodyScroll } from '../lib/utils'

type Tab = 'experience' | 'education' | 'certificates'

const tabs: { id: Tab; label: string; Icon: typeof FiAward; count: number }[] = [
  { id: 'experience', label: 'Experience', Icon: FiBriefcase, count: experience.length },
  { id: 'education', label: 'Education', Icon: FiBookOpen, count: education.length },
  { id: 'certificates', label: 'Certificates', Icon: FiAward, count: certificates.length },
]

function Meta({ items }: { items: { Icon: typeof FiCalendar; text: string }[] }) {
  return (
    <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
      {items.map(({ Icon, text }) => (
        <li key={text} className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
          <Icon className="h-3.5 w-3.5 text-accent/80" />
          {text}
        </li>
      ))}
    </ul>
  )
}

function TimelineEntry({
  year,
  title,
  subtitle,
  current,
  children,
  accent = 'from-accent to-accent3',
}: {
  year: string
  title: string
  subtitle: string
  current?: boolean
  children?: React.ReactNode
  accent?: string
}) {
  return (
    <li className="relative pl-8 pb-8 last:pb-0 sm:pl-10">
      <span aria-hidden className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-line via-line/40 to-transparent" />
      <span
        aria-hidden
        className={`absolute -left-[5px] top-1.5 grid h-2.5 w-2.5 place-items-center rounded-full bg-gradient-to-br ${accent} ring-4 ring-canvas`}
      >
        {current && <span className={`absolute inset-0 rounded-full bg-gradient-to-br ${accent} animate-ping-soft`} />}
      </span>
      <div className="panel spot p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/30 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="chip">{year}</span>
          {current && (
            <span className="tag bg-accent/10 text-accent ring-1 ring-inset ring-accent/25">
              <span className="dot bg-accent animate-pulse" aria-hidden />
              active
            </span>
          )}
        </div>
        <h3 className="h-card mt-3.5 text-xl">{title}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{subtitle}</p>
        {children}
      </div>
    </li>
  )
}

export function Journey() {
  const [tab, setTab] = useState<Tab>('experience')
  const [zoomed, setZoomed] = useState<Certificate | null>(null)

  useLockBodyScroll(!!zoomed)
  useEscapeKey(() => setZoomed(null), !!zoomed)

  return (
    <section id="journey" className="section">
      <div className="shell">
        <SectionHeading
          kicker="Journey"
          title={
            <>
              Design training,
              <br className="hidden sm:block" /> engineering degree, real clients.
            </>
          }
          description="The path that made this portfolio possible — formal study, self-taught building and paid work all happening at the same time."
          aside={
            <div role="tablist" aria-label="Journey sections" className="inline-flex flex-wrap gap-1 rounded-full border border-line bg-surface2/60 p-1">
              {tabs.map(({ id, label, Icon, count }) => {
                const isActive = tab === id
                return (
                  <button
                    key={id}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => setTab(id)}
                    className={`relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                      isActive ? 'text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="journey-tab"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        className="absolute inset-0 -z-10 rounded-full border border-line bg-surface shadow-sm"
                      />
                    )}
                    <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-accent' : ''}`} />
                    {label}
                    <span className="font-mono text-[10px] text-faint">{count}</span>
                  </button>
                )
              })}
            </div>
          }
        />

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {tab === 'experience' && (
                <ol className="mx-auto max-w-3xl">
                  {experience.map((exp) => (
                    <TimelineEntry
                      key={exp.id}
                      year={exp.duration}
                      title={exp.role}
                      subtitle={exp.company}
                      current={exp.current}
                      accent="from-accent2 to-accent3"
                    >
                      <Meta
                        items={[
                          { Icon: FiMapPin, text: exp.location },
                          { Icon: FiBriefcase, text: exp.type },
                        ]}
                      />
                      <p className="mt-4 text-sm leading-relaxed text-muted">{exp.description}</p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-[13px] leading-snug text-muted">
                            <FiCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.stack && (
                        <ul className="mt-5 flex flex-wrap gap-1.5">
                          {exp.stack.map((s) => (
                            <li key={s} className="chip">
                              {s}
                            </li>
                          ))}
                        </ul>
                      )}
                    </TimelineEntry>
                  ))}
                </ol>
              )}

              {tab === 'education' && (
                <ol className="mx-auto max-w-3xl">
                  {education.map((edu) => (
                    <TimelineEntry
                      key={edu.id}
                      year={edu.duration}
                      title={edu.degree}
                      subtitle={`${edu.institution} · ${edu.location}`}
                      current={edu.current}
                    >
                      {edu.description && (
                        <p className="mt-4 text-sm leading-relaxed text-muted">{edu.description}</p>
                      )}
                      {edu.focus && (
                        <ul className="mt-5 flex flex-wrap gap-1.5">
                          {edu.focus.map((f) => (
                            <li key={f} className="chip">
                              {f}
                            </li>
                          ))}
                        </ul>
                      )}
                      <Meta items={[{ Icon: FiCalendar, text: edu.location }]} />
                    </TimelineEntry>
                  ))}
                </ol>
              )}

              {tab === 'certificates' && (
                <ul className="grid gap-5 sm:grid-cols-2">
                  {certificates.map((cert) => (
                    <li key={cert.id} className="panel flex flex-col overflow-hidden">
                      <button
                        type="button"
                        onClick={() => cert.image && setZoomed(cert)}
                        disabled={!cert.image}
                        className="group/cert relative aspect-16/10 w-full overflow-hidden border-b border-line/70 text-left disabled:cursor-default"
                        aria-label={cert.image ? `Zoom ${cert.name}` : cert.name}
                      >
                        <SmartImage
                          src={cert.image}
                          alt={cert.name}
                          className="h-full w-full"
                          imgClassName="transition-transform duration-700 group-hover/cert:scale-[1.03]"
                          fallback={<MonogramFallback label={cert.issuer} />}
                        />
                        {cert.image && (
                          <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-[rgb(8_10_20/0.55)] text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover/cert:opacity-100">
                            <FiZoomIn className="h-4 w-4" />
                          </span>
                        )}
                        <span className="tag absolute left-3 top-3 bg-[rgb(8_10_20/0.55)] font-mono uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
                          {cert.year}
                        </span>
                      </button>

                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="h-card">{cert.name}</h3>
                        <p className="mt-1 text-sm font-medium text-accent">{cert.issuer}</p>
                        {cert.credentialId && (
                          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                            ID · {cert.credentialId}
                          </p>
                        )}
                        {cert.description && (
                          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{cert.description}</p>
                        )}
                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {cert.skills.map((s) => (
                            <li key={s} className="chip">
                              {s}
                            </li>
                          ))}
                        </ul>
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                          >
                            <FiExternalLink className="h-4 w-4" />
                            Verify credential
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* certificate lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-[rgb(4_5_12/0.82)] p-4 backdrop-blur-md"
            onClick={() => setZoomed(null)}
            role="dialog"
            aria-modal="true"
            aria-label={zoomed.name}
          >
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-white/70">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em]">{zoomed.name}</p>
              <button
                type="button"
                onClick={() => setZoomed(null)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Close"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            <motion.img
              src={zoomed.image}
              alt={zoomed.name}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[82vh] w-auto max-w-full rounded-2xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="chip absolute bottom-5 left-1/2 -translate-x-1/2 border-white/15 bg-white/10 text-white/70">
              Press ESC or click outside to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Journey
