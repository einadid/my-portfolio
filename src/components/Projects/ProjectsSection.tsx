import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGrid, FiCode, FiPenTool, FiChevronRight } from 'react-icons/fi'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

type CategoryFilter = 'all' | 'web' | 'design'

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all')

  const filters = [
    { id: 'all' as CategoryFilter, label: 'All Projects', icon: FiGrid },
    { id: 'web' as CategoryFilter, label: 'Web Development', icon: FiCode },
    { id: 'design' as CategoryFilter, label: 'Graphic Design', icon: FiPenTool },
  ]

  // Filter projects by category
  const filteredByCategory = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  // Show only featured projects (first 6)
  const featuredProjects = filteredByCategory.filter(p => p.featured).slice(0, 6)
  
  // Total count
  const totalCount = filteredByCategory.length

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Featured work and recent projects</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-1.5 sm:gap-3 mb-6 sm:mb-8"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm'
              }`}
            >
              <filter.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{filter.label}</span>
              <span className="sm:hidden">{filter.label.split(' ')[0]}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Showing <span className="font-bold text-cyan-500">{featuredProjects.length}</span> featured projects
            {totalCount > 6 && (
              <> • <Link to="/projects" className="text-cyan-500 hover:text-cyan-600 font-medium underline">View all {totalCount}</Link></>
            )}
          </p>
        </motion.div>

        {/* Projects Grid - 2 columns on mobile, 2 on tablet, 3 on desktop */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Projects Message */}
        {featuredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <FiGrid className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
              No featured projects
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm sm:text-base">
              No featured projects match the selected filter.
            </p>
            <Link to="/projects" className="btn-primary text-sm sm:text-base">
              View All Projects
            </Link>
          </motion.div>
        )}

        {/* View All Projects Button */}
        {totalCount > 6 && featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8 sm:mt-12"
          >
            <Link
              to="/projects"
              className="btn-primary group inline-flex text-sm sm:text-base"
            >
              <FiGrid className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">View All Projects ({totalCount} total)</span>
              <span className="sm:hidden">View All ({totalCount})</span>
              <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection