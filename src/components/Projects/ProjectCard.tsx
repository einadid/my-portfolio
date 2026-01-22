import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowRight, FiImage } from 'react-icons/fi'

interface Project {
  id: string
  name: string
  shortDescription: string
  thumbnail: string
  images: string[]
  techStack: string[]
  category: 'web' | 'design' | 'both'
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden group"
    >
      {/* Project Image */}
      <div className="relative h-52 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 overflow-hidden">
        {/* Fallback Gradient with Emoji */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">
            {project.category === 'web' ? '💻' : project.category === 'design' ? '🎨' : '🚀'}
          </span>
        </div>

        {/* Thumbnail Image */}
        <img
          src={project.thumbnail}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
            project.category === 'web'
              ? 'bg-blue-500/80 text-white'
              : project.category === 'design'
              ? 'bg-purple-500/80 text-white'
              : 'bg-green-500/80 text-white'
          }`}>
            {project.category === 'web' ? 'Web Dev' : project.category === 'design' ? 'Design' : 'Full Stack'}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/80 text-white backdrop-blur-md">
              ⭐ Featured
            </span>
          </div>
        )}

        {/* Image Count Badge */}
        {project.images.length > 0 && (
          <div className="absolute bottom-3 right-3 z-10">
            <span className="px-2 py-1 rounded-lg text-xs font-medium bg-black/50 text-white backdrop-blur-md flex items-center gap-1">
              <FiImage className="w-3 h-3" />
              {project.images.length}
            </span>
          </div>
        )}

        {/* Overlay with Quick Links */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4 z-20">
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                title="Live Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                title="View Code"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors line-clamp-1">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500 rounded text-xs">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium text-sm group/link"
        >
          View Details
          <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard