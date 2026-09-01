import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowUpRight, FiCpu, FiTool } from 'react-icons/fi'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { skillCategories, toolbelt } from '../data/skills'
import { useSpotlight } from '../lib/useSpotlight'

const kindStyles: Record<string, string> = {
  code: 'border-accent/30 bg-accent/8 text-accent',
  design: 'border-accent3/30 bg-accent3/8 text-accent3',
  ship: 'border-gold/30 bg-gold/8 text-gold',
}

function SkillMeter({ name, level, delay }: { name: string; level: number; delay: number }) {
  const reduce = useReducedMotion()

  return (
    <li>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-fg">{name}</span>
        <span className="font-mono text-[11px] text-faint">{level}</span>
      </div>
      <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-surface2">
        <motion.div
          initial={{ width: reduce ? `${level}%` : 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent via-accent2 to-accent3"
        />
      </div>
    </li>
  )
}

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0]
  const { ref, onMouseMove } = useSpotlight<HTMLDivElement>()

  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHeading
          kicker="Skills"
          title={
            <>
              A stack chosen for
              <br className="hidden sm:block" /> shipping, not for résumés.
            </>
          }
          description="Numbers are honest self-assessments: 90 means I can design it, build it and defend the decisions in review."
          aside={
            <div className="flex flex-wrap gap-2">
              {(['code', 'design', 'ship'] as const).map((kind) => (
                <span key={kind} className={`tag border ${kindStyles[kind]}`}>
                  {kind === 'code' ? 'build' : kind === 'design' ? 'design' : 'ship'}
                </span>
              ))}
            </div>
          }
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* category rail */}
          <Reveal className="lg:col-span-4">
            <div
              role="tablist"
              aria-label="Skill categories"
              className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
            >
              {skillCategories.map((cat) => {
                const isActive = cat.id === activeId
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => setActiveId(cat.id)}
                    className={`group relative flex min-w-[10.5rem] shrink-0 items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-accent/35 bg-surface shadow-panel'
                        : 'border-line bg-surface2/40 hover:border-accent/25 hover:bg-surface'
                    }`}
                  >
                    <span className="min-w-0">
                      <span
                        className={`block font-display text-sm font-semibold tracking-tight ${
                          isActive ? 'text-fg' : 'text-muted group-hover:text-fg'
                        }`}
                      >
                        {cat.category}
                      </span>
                      <span className="mt-0.5 block truncate font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                        {cat.blurb}
                      </span>
                    </span>
                    <span
                      className={`font-mono text-[11px] transition-colors ${
                        isActive ? 'text-accent' : 'text-faint'
                      }`}
                    >
                      {String(cat.skills.length).padStart(2, '0')}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="skill-tab"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        className="absolute inset-y-3 -left-px w-[2px] rounded-full bg-gradient-to-b from-accent to-accent3"
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* meters */}
          <Reveal className="lg:col-span-8" delay={0.1}>
            <div
              ref={ref}
              onMouseMove={onMouseMove}
              className="spot panel h-full p-5 sm:p-7"
              role="tabpanel"
              aria-label={`${active.category} skills`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <FiCpu className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="h-card">{active.category}</h3>
                    <p className="text-xs text-muted">
                      {active.skills.length} areas · self-assessed {new Date().getFullYear()}
                    </p>
                  </div>
                </div>
                <span className="chip">{active.blurb}</span>
              </div>

              <ul className="mt-7 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {active.skills.map((skill, i) => (
                  <SkillMeter key={skill.name} name={skill.name} level={skill.level} delay={i * 0.06} />
                ))}
              </ul>

              <div className="mt-8 border-t border-line/70 pt-6">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                  <FiTool className="h-3.5 w-3.5 text-accent" />
                  Toolbelt
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {toolbelt.map((tool) => (
                    <li
                      key={tool.name}
                      className={`rounded-full border px-3 py-1.5 text-[13px] transition-all duration-300 hover:-translate-y-0.5 ${
                        kindStyles[tool.kind] ?? 'border-line bg-surface2/60 text-muted'
                      }`}
                    >
                      {tool.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* learning ticker */}
        <Reveal className="mt-5" delay={0.2}>
          <div className="panel-flat flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <p className="text-sm text-muted">
              <span className="font-semibold text-fg">Currently learning:</span> Next.js App Router, design systems at
              scale (tokens, docs, versioning) and Framer Motion beyond the basics.
            </p>
            <a
              href="https://github.com/einadid"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
            >
              See what I’m building
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Skills
