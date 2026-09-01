import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiArrowLeft,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiTarget,
  FiTrendingUp,
  FiX,
  FiZoomIn,
} from 'react-icons/fi'
import { getProject, projects } from '../data/projects'
import { personalInfo } from '../data/personalInfo'
import { SmartImage, MonogramFallback } from '../components/ui/SmartImage'
import { Reveal } from '../components/ui/Reveal'
import { useEscapeKey, useLockBodyScroll } from '../lib/utils'

export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const project = getProject(id)
  const index = project ? projects.findIndex((p) => p.id === project.id) : -1
  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1]
  const next = index >= 0 && index < projects.length - 1 ? projects[index + 1] : projects[0]

  const [lightbox, setLightbox] = useState<number | null>(null)
  const gallery = project?.images ?? []
  const total = gallery.length
  const activeImage = lightbox !== null && lightbox < total ? gallery[lightbox] : undefined

  const close = () => setLightbox(null)
  const step = (dir: number) =>
    setLightbox((current) => (current === null || total === 0 ? current : (current + dir + total) % total))

  useLockBodyScroll(activeImage !== undefined)
  useEscapeKey(close, activeImage !== undefined)

  /* Arrow-key navigation inside the lightbox. */
  useEffect(() => {
    if (activeImage === undefined) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImage, total])

  if (!project) {
    return (
      <div className="shell section pt-40 text-center">
        <p className="kicker justify-center">
          <span className="dot bg-gold" aria-hidden />
          404 · missing project
        </p>
        <h1 className="h-section mt-4">That case study isn’t here.</h1>
        <p className="lede mx-auto mt-3 max-w-md">
          The project may have been renamed. The full archive is one click away.
        </p>
        <Link to="/projects" className="btn btn-solid mt-7">
          <FiArrowLeft className="h-4 w-4" />
          Browse all projects
        </Link>
      </div>
    )
  }

  return (
    <article className="pt-24 sm:pt-28">
      <div className="shell">
        {/* breadcrumb + actions */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
          >
            <FiArrowLeft className="h-3.5 w-3.5" />
            All projects
          </Link>
          <div className="flex flex-wrap gap-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" className="btn btn-solid !py-2 text-[13px]">
                <FiExternalLink className="h-4 w-4" />
                Live site
              </a>
            )}
            {project.behanceUrl && (
              <a href={project.behanceUrl} target="_blank" rel="noreferrer noopener" className="btn btn-solid !py-2 text-[13px]">
                <FiExternalLink className="h-4 w-4" />
                Behance
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer noopener" className="btn btn-ghost !py-2 text-[13px]">
                <FiGithub className="h-4 w-4" />
                Source
              </a>
            )}
          </div>
        </div>

        {/* title block */}
        <header className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip">
                <span className="dot bg-accent" aria-hidden />
                {project.year}
              </span>
              <span className="chip">{project.role}</span>
              {project.client && <span className="chip">{project.client}</span>}
              <span
                className={`chip ${
                  project.status === 'live' ? 'border-accent/40 text-accent' : 'border-gold/40 text-gold'
                }`}
              >
                {project.status === 'live' ? 'live project' : 'in progress'}
              </span>
            </div>

            <h1 className="h-display mt-5 !text-4xl sm:!text-5xl lg:!text-[3.4rem]">{project.name}</h1>
            <p className="lede mt-5 max-w-2xl">{project.shortDescription}</p>
          </div>

          <Reveal className="lg:col-span-5 lg:pt-3">
            <dl className="panel grid grid-cols-2 gap-px overflow-hidden bg-line/50 p-px">
              {[
                { term: 'Discipline', detail: project.category === 'web' ? 'Web development' : 'Graphic design' },
                { term: 'Screens', detail: `${project.images.length || '—'}` },
                { term: 'Timeline', detail: project.status === 'live' ? 'Shipped' : 'In build' },
                { term: 'Handover', detail: 'Source + docs' },
              ].map((row) => (
                <div key={row.term} className="bg-surface px-4 py-3.5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{row.term}</dt>
                  <dd className="mt-1 text-sm font-medium text-fg">{row.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </header>

        {/* cover */}
        <Reveal className="mt-10">
          <button
            type="button"
            onClick={() => project.images.length > 0 && setLightbox(0)}
            className="group relative block w-full overflow-hidden rounded-[1.8rem] border border-line bg-surface/60 p-2 text-left"
            disabled={project.images.length === 0}
          >
            <SmartImage
              src={project.thumbnail}
              alt={`${project.name} cover`}
              eager
              sizes="(min-width: 1280px) 1240px, 94vw"
              className="aspect-16/9 w-full rounded-[1.4rem]"
              imgClassName="transition-transform duration-[1.4s] ease-out group-hover:scale-[1.02]"
              fallback={<MonogramFallback label={project.name} />}
            />
            {project.images.length > 0 && (
              <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgb(8_10_20/0.6)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/85 backdrop-blur-md">
                <FiZoomIn className="h-3.5 w-3.5" />
                Open gallery
              </span>
            )}
          </button>
        </Reveal>

        {/* body */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="h-section !text-2xl sm:!text-3xl">The brief, in my words</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">{project.fullDescription}</p>
            </Reveal>

            {project.highlights.length > 0 && (
              <Reveal className="mt-8" delay={0.08}>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="panel-flat flex items-start gap-3 p-4 text-sm leading-snug text-fg">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                        <FiTarget className="h-3 w-3" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {project.challenges.length > 0 && (
              <Reveal className="mt-10" delay={0.05}>
                <h3 className="h-card flex items-center gap-2 text-lg">
                  <FiTarget className="h-4 w-4 text-accent" />
                  What pushed back
                </h3>
                <ol className="mt-4 grid gap-3">
                  {project.challenges.map((c, i) => (
                    <li key={c} className="flex items-start gap-4 border-t border-line/70 pt-3 text-sm text-muted">
                      <span className="font-mono text-[11px] text-faint">0{i + 1}</span>
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            )}

            {project.futurePlans.length > 0 && (
              <Reveal className="mt-10" delay={0.05}>
                <h3 className="h-card flex items-center gap-2 text-lg">
                  <FiTrendingUp className="h-4 w-4 text-accent" />
                  Next on the list
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.futurePlans.map((p) => (
                    <li
                      key={p}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface2/50 px-3.5 py-1.5 text-[13px] text-muted"
                    >
                      <span className="dot bg-accent/60" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <aside className="lg:col-span-4">
            <Reveal className="sticky top-24" delay={0.1}>
              <div className="panel p-5">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Stack used</h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-line bg-surface2/60 px-2.5 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="my-5 divider" />

                <p className="text-sm leading-relaxed text-muted">
                  Want something like {project.name.split(' – ')[0]} for your own product?
                </p>
                <div className="mt-4 grid gap-2">
                  <a href={`mailto:${personalInfo.email}?subject=Project%20like%20${encodeURIComponent(project.name)}`} className="btn btn-solid w-full !py-2.5 text-[13px]">
                    Start a conversation
                  </a>
                  <Link to="/#contact" className="btn btn-ghost w-full !py-2.5 text-[13px]">
                    Contact form
                  </Link>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* gallery */}
        {gallery.length > 1 && (
          <Reveal className="mt-14">
            <div className="flex items-end justify-between gap-4">
              <h2 className="h-section !text-2xl sm:!text-3xl">
                Screens
                <span className="ml-2 font-mono text-sm font-normal text-faint">
                  {String(gallery.length).padStart(2, '0')}
                </span>
              </h2>
              <p className="hidden text-xs text-faint sm:block">Click any screen to zoom</p>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {gallery.map((img, i) => (
                <li key={img}>
                  <button
                    type="button"
                    onClick={() => setLightbox(i)}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-surface/60 p-1.5 text-left transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/35"
                  >
                    <SmartImage
                      src={img}
                      alt={`${project.name} screen ${i + 1}`}
                      sizes="(min-width: 768px) 46vw, 92vw"
                      className="aspect-16/10 w-full rounded-xl"
                      imgClassName="transition-transform duration-1000 group-hover:scale-[1.04]"
                      fallback={<MonogramFallback label={`${i + 1}`} />}
                    />
                    <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-[rgb(8_10_20/0.55)] text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                      <FiZoomIn className="h-3.5 w-3.5" />
                    </span>
                    <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {/* prev / next */}
        <nav aria-label="Project navigation" className="mt-16 grid gap-4 border-t border-line/70 pt-8 sm:grid-cols-2">
          <Link to={`/projects/${prev.id}`} className="group flex items-center gap-3 text-left">
            <FiChevronLeft className="h-5 w-5 shrink-0 text-faint transition-all group-hover:-translate-x-1 group-hover:text-accent" />
            <span className="min-w-0">
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Previous</span>
              <span className="block truncate font-display text-base font-semibold group-hover:text-accent">
                {prev.name}
              </span>
            </span>
          </Link>
          <Link to={`/projects/${next.id}`} className="group flex items-center justify-end gap-3 text-right">
            <span className="min-w-0">
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Next</span>
              <span className="block truncate font-display text-base font-semibold group-hover:text-accent">
                {next.name}
              </span>
            </span>
            <FiChevronRight className="h-5 w-5 shrink-0 text-faint transition-all group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        </nav>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {activeImage !== undefined && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} gallery`}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgb(4_5_12/0.88)] p-3 backdrop-blur-md sm:p-8"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <FiX className="h-5 w-5" />
            </button>

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    step(-1)
                  }}
                  aria-label="Previous screen"
                  className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
                >
                  <FiChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    step(1)
                  }}
                  aria-label="Next screen"
                  className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
                >
                  <FiChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            <motion.figure
              key={activeImage}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[86vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/40"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt={`${project.name} screen ${(lightbox ?? 0) + 1}`}
                className="max-h-[80vh] w-full object-contain"
              />
              <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
                <span className="inline-flex items-center gap-2">
                  <FiLayers className="h-3.5 w-3.5" />
                  {project.name}
                </span>
                <span>
                  {String((lightbox ?? 0) + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
              </figcaption>
            </motion.figure>

            <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
              ← → to browse · esc to close
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
