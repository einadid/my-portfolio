import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiSearch, FiGrid, FiCode, FiPenTool } from 'react-icons/fi'
import { projects, categoryLabels, type ProjectCategory } from '../data/projects'
import ProjectCard from '../components/Projects/ProjectCard'
import { Reveal } from '../components/ui/Reveal'
import { Marquee } from '../components/ui/Marquee'

type Filter = 'all' | ProjectCategory

const filters: { id: Filter; label: string; Icon: typeof FiGrid }[] = [
  { id: 'all', label: 'Everything', Icon: FiGrid },
  { id: 'web', label: 'Web apps', Icon: FiCode },
  { id: 'design', label: 'Design', Icon: FiPenTool },
]

export default function AllProjectsPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects
      .filter((p) => (filter === 'all' ? true : p.category === filter))
      .filter((p) =>
        q.length === 0
          ? true
          : [p.name, p.shortDescription, p.fullDescription, ...p.techStack].join(' ').toLowerCase().includes(q),
      )
      .sort((a, b) => Number(b.featured) - Number(a.featured) || b.year.localeCompare(a.year))
  }, [filter, query])

  const count = (id: Filter) => (id === 'all' ? projects.length : projects.filter((p) => p.category === id).length)

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-10 sm:pt-36">
        <div className="shell">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
          >
            <FiArrowLeft className="h-3.5 w-3.5" />
            Back home
          </Link>

          <h1 className="h-display mt-6 !text-4xl sm:!text-5xl lg:!text-6xl">
            The complete
            <br />
            <span className="text-gradient">archive.</span>
          </h1>

          <p className="lede mt-5 max-w-2xl">
            {projects.length} projects — client work, coursework and stubborn side quests. Filter by discipline, or
            search the stack you care about.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-line bg-surface2/60 p-1">
              {filters.map(({ id, label, Icon }) => {
                const isActive = filter === id
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setFilter(id)}
                    aria-pressed={isActive}
                    className={`relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                      isActive ? 'text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="all-projects-filter"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        className="absolute inset-0 -z-10 rounded-full border border-line bg-surface shadow-sm"
                      />
                    )}
                    <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-accent' : ''}`} />
                    {label}
                    <span className="font-mono text-[10px] text-faint">{count(id)}</span>
                  </button>
                )
              })}
            </div>

            <label className="relative ml-auto w-full max-w-xs">
              <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search React, brand, Tailwind…"
                className="w-full rounded-full border border-line bg-surface/70 py-2.5 pl-11 pr-4 text-sm outline-none transition-all placeholder:text-faint hover:border-accent/30 focus:border-accent/50 focus:bg-surface"
                aria-label="Search projects"
              />
            </label>
          </div>
        </div>

        <div className="mt-12 border-y border-line/70 bg-surface/40 py-3 backdrop-blur-sm">
          <Marquee items={Object.values(categoryLabels).concat('Case studies', 'Live sites', 'Print', 'Motion')} />
        </div>
      </section>

      <section className="pb-24 pt-10">
        <div className="shell">
          {results.length > 0 ? (
            <Reveal group className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {results.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Reveal>
          ) : (
            <div className="panel-flat grid place-items-center px-6 py-20 text-center">
              <p className="font-display text-xl font-semibold">Nothing matches “{query}”.</p>
              <p className="lede mt-2 max-w-md">
                Try a broader term — or clear the filters and browse everything.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setFilter('all')
                }}
                className="btn btn-solid mt-6"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
