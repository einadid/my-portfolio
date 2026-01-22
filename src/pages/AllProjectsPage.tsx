import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGrid, FiCode, FiPenTool, FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from '../components/Projects/ProjectCard'
import Navbar from '../components/Navbar'

type CategoryFilter = 'all' | 'web' | 'design'

const AllProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all')

  const filters = [
    { id: 'all' as CategoryFilter, label: 'All Projects', icon: FiGrid },
    { id: 'web' as CategoryFilter, label: 'Web Development', icon: FiCode },
    { id: 'design' as CategoryFilter, label: 'Graphic Design', icon: FiPenTool },
  ]

  // Filter projects by category
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  // Separate featured and non-featured
  const featuredProjects = filteredProjects.filter(p => p.featured)
  const otherProjects = filteredProjects.filter(p => !p.featured)

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {/* Back Button */}
            <Link 
              to="/#projects" 
              className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium mb-6 transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              All Projects
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Explore my complete portfolio of web development and graphic design projects
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-700'
                }`}
              >
                <filter.icon className="w-5 h-5" />
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Project Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-slate-600 dark:text-slate-400">
                Found <span className="font-bold text-cyan-500">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
              </p>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-bold text-amber-500">{featuredProjects.length}</span> Featured
              </p>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured Projects */}
              {featuredProjects.length > 0 && (
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      ⭐ Featured Projects
                    </h2>
                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm font-medium">
                      {featuredProjects.length}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project, index) => (
                      <ProjectCard 
                        key={project.id} 
                        project={project} 
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Other Projects */}
              {otherProjects.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      📂 More Projects
                    </h2>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium">
                      {otherProjects.length}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                      <ProjectCard 
                        key={project.id} 
                        project={project} 
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* No Projects */}
              {filteredProjects.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <FiGrid className="w-10 h-10 text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    No Projects Found
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8">
                    No projects match the selected filter.
                  </p>
                  <button
                    onClick={() => setActiveFilter('all')}
                    className="btn-primary"
                  >
                    View All Projects
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="card p-6 text-center">
              <p className="text-3xl font-bold text-cyan-500 mb-2">{projects.length}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Projects</p>
            </div>
            <div className="card p-6 text-center">
              <p className="text-3xl font-bold text-blue-500 mb-2">
                {projects.filter(p => p.category === 'web').length}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Web Development</p>
            </div>
            <div className="card p-6 text-center">
              <p className="text-3xl font-bold text-purple-500 mb-2">
                {projects.filter(p => p.category === 'design').length}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Graphic Design</p>
            </div>
            <div className="card p-6 text-center">
              <p className="text-3xl font-bold text-amber-500 mb-2">
                {projects.filter(p => p.featured).length}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Featured</p>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link to="/#projects" className="btn-secondary">
              <FiArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  )
}

export default AllProjectsPage