import { Link } from 'react-router-dom'
import { FiArrowLeft, FiHome } from 'react-icons/fi'
import { liveProjects } from '../data/projects'
import ProjectCard from '../components/Projects/ProjectCard'
import { Reveal } from '../components/ui/Reveal'

export default function NotFoundPage() {
  return (
    <div className="section pt-32">
      <div className="shell">
        <p className="kicker">
          <span className="dot bg-gold" aria-hidden />
          error 404
        </p>
        <h1 className="h-display mt-4">
          This page got
          <br />
          <span className="text-gradient">deleted by design.</span>
        </h1>
        <p className="lede mt-5 max-w-xl">
          The link you followed doesn’t exist any more — or never did. The work below definitely does.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="btn btn-solid">
            <FiHome className="h-4 w-4" />
            Back home
          </Link>
          <Link to="/projects" className="btn btn-ghost">
            <FiArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </div>

        <Reveal group className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {liveProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Reveal>
      </div>
    </div>
  )
}
