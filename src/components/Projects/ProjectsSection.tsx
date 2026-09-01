import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiPenTool, FiCode, FiGrid } from 'react-icons/fi'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import ProjectCard from './ProjectCard'
import { liveProjects, workInProgressProjects, type ProjectCategory } from '../../data/projects'

type Filter = 'all' | ProjectCategory

const filters: { id: Filter; label: string; Icon: typeof FiGrid }[] = [
  { id: 'all', label: 'Everything', Icon: FiGrid },
  { id: 'web', label: 'Web apps', Icon: FiCode },
  { id: 'design', label: 'Design', Icon: FiPenTool },
]

/** Bento span pattern so rows never leave a lonely card. */
const spans = [
  'lg:col-span-7',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-7',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
]

export function ProjectsSection() {
  const [active, setActive] = useState<Filter>('all')

  const shown = useMemo(() => {
    const list = active === 'all' ? liveProjects : liveProjects.filter((p) => p.category === active)
    // featured first, then the rest in file order
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured))
  }, [active])

  const wip = useMemo(
    () => (active === 'all' ? workInProgressProjects : workInProgressProjects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHeading
          kicker="Selected work"
          title={
            <>
              Things I designed,
              <br className="hidden sm:block" /> then actually shipped.
            </>
          }
          description="Marketplaces, booking platforms, brand systems. Every card below links to a short case study with screenshots, the real constraints and what I would do differently."
          aside={
            <div className="flex items-center gap-2">
              <Link to="/projects" className="btn btn-ghost">
                All projects
                <FiArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          }
        />

        {/* filter row */}
        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-4" delay={0.1}>
          <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-line bg-surface2/60 p-1">
            {filters.map(({ id, label, Icon }) => {
              const isActive = active === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActive(id)}
                  aria-pressed={isActive}
                  className={`relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                    isActive ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="work-filter"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full border border-line bg-surface shadow-sm"
                    />
                  )}
                  <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-accent' : ''}`} />
                  {label}
                </button>
              )
            })}
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            {shown.length} live {shown.length === 1 ? 'project' : 'projects'}
            {wip.length > 0 && ` · ${wip.length} in progress`}
          </p>
        </Reveal>

        {/* bento grid */}
        <Reveal group className="mt-6 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">
          {shown.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              size={i === 0 ? 'wide' : 'default'}
              wrapperClassName={spans[i] ?? 'lg:col-span-4'}
            />
          ))}
        </Reveal>

        {/* work in progress */}
        {wip.length > 0 && (
          <Reveal className="mt-6" delay={0.15}>
            <div className="panel-flat grid gap-3 p-4 sm:grid-cols-3 sm:p-5">
              <div className="sm:col-span-1">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-fg">
                  On the bench
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">
                  Built in the open — no case study yet, but the repos are public.
                </p>
              </div>
              <ul className="grid gap-2 sm:col-span-2 sm:grid-cols-3">
                {wip.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/projects/${p.id}`}
                      className="group flex h-full items-start justify-between gap-2 rounded-xl border border-line bg-surface/70 p-3 transition-colors hover:border-accent/40"
                    >
                      <span className="min-w-0">
                        <span className="block truncate font-display text-sm font-semibold">{p.name}</span>
                        <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                          {p.category === 'web' ? 'web app' : 'design'} · {p.year}
                        </span>
                      </span>
                      <FiArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection
