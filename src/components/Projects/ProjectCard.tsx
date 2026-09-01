import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiCode, FiExternalLink, FiLayers } from 'react-icons/fi'
import { SmartImage, MonogramFallback } from '../ui/SmartImage'
import { useSpotlight } from '../../lib/useSpotlight'
import { categoryLabels, type Project } from '../../data/projects'
import { RevealItem } from '../ui/Reveal'

interface ProjectCardProps {
  project: Project
  className?: string
  /** Grid classes live on the reveal wrapper so the card fills its cell. */
  wrapperClassName?: string
  /** wide = large hero-ish card with more copy */
  size?: 'wide' | 'default'
}

export function ProjectCard({
  project,
  className = '',
  wrapperClassName = '',
  size = 'default',
}: ProjectCardProps) {
  const { ref, onMouseMove } = useSpotlight<HTMLDivElement>()
  const isWide = size === 'wide'
  const isLive = project.status === 'live'

  const card = (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`spot panel group/card relative flex h-full flex-col overflow-hidden p-2.5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/35 ${className}`}
    >
      {/* artwork */}
      <div
        className={`relative overflow-hidden rounded-[1.15rem] ${
          isWide ? 'aspect-16/9 lg:aspect-16/10' : 'aspect-16/10'
        }`}
      >
        <SmartImage
          src={project.thumbnail}
          alt={`${project.name} preview`}
          sizes="(min-width: 1024px) 46rem, 100vw"
          className="h-full w-full"
          imgClassName="object-cover transition-transform duration-[1.4s] ease-out group-hover/card:scale-[1.07]"
          fallback={
            <div className="relative h-full w-full">
              <MonogramFallback label={project.name} />
              <div className="absolute inset-0 grid place-items-center">
                <span className="chip">screenshots coming soon</span>
              </div>
            </div>
          }
        />

        {/* legibility veil */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgb(6_8_18/0.72)] via-[rgb(6_8_18/0.1)] to-transparent"
        />

        {/* top row tags */}
        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          <span className="tag border border-white/15 bg-[rgb(8_10_20/0.55)] font-mono uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
            {categoryLabels[project.category]}
          </span>
          {project.featured && isLive && (
            <span className="tag bg-gold/15 font-mono uppercase tracking-[0.14em] text-gold ring-1 ring-gold/25 backdrop-blur-md">
              ★ featured
            </span>
          )}
        </div>

        {/* bottom row: quick actions */}
        <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="tag border border-white/10 bg-[rgb(8_10_20/0.5)] font-mono text-[10px] normal-case tracking-normal text-white/75 backdrop-blur-md"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="tag bg-[rgb(8_10_20/0.5)] font-mono text-[10px] text-white/60 backdrop-blur-md">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
          <div className="relative z-20 flex gap-1.5 opacity-0 transition-all duration-300 group-hover/card:opacity-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.name} live site`}
                className="grid h-8 w-8 place-items-center rounded-full bg-white text-[rgb(10_12_22)] transition-transform hover:-translate-y-0.5"
              >
                <FiExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.name} source code`}
                className="grid h-8 w-8 place-items-center rounded-full bg-[rgb(8_10_20/0.6)] text-white ring-1 ring-white/20 backdrop-blur-md transition-transform hover:-translate-y-0.5"
              >
                <FiCode className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* copy */}
      <div className={`flex flex-1 flex-col px-2.5 pb-1.5 pt-4 ${isWide ? 'sm:px-4' : ''}`}>
        <div className="flex items-baseline justify-between gap-3">
          <h3
            className={`font-display font-bold tracking-tight transition-colors group-hover/card:text-accent ${
              isWide ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
          >
            <Link
              to={`/projects/${project.id}`}
              className="after:absolute after:inset-0 after:z-10 after:content-[''] focus-visible:outline-none"
              aria-label={`${project.name} — open case study`}
            >
              {project.name}
            </Link>
          </h3>
          <span className="font-mono text-[11px] text-faint">{project.year}</span>
        </div>

        <p className={`mt-2 text-sm leading-relaxed text-muted ${isWide ? 'max-w-2xl sm:text-[15px]' : ''}`}>
          {project.shortDescription}
        </p>

        {isWide && project.highlights.length > 0 && (
          <ul className="mt-4 hidden gap-x-6 gap-y-1.5 sm:grid sm:grid-cols-2">
            {project.highlights.slice(0, 4).map((h) => (
              <li key={h} className="flex items-start gap-2 text-[13px] text-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-line/70 pt-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
            {project.images.length > 0 ? (
              <>
                <FiLayers className="h-3.5 w-3.5" />
                {project.images.length} screens
              </>
            ) : (
              <>
                <FiLayers className="h-3.5 w-3.5" />
                in progress
              </>
            )}
          </span>
          <span className="inline-flex items-center gap-1 font-display text-sm font-semibold text-accent">
            Case study
            <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <RevealItem className={`h-full ${wrapperClassName}`}>{card}</RevealItem>
  )
}

export default ProjectCard
