import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiExternalLink, FiGithub, FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'
import { projects } from '../data/projects'
import Navbar from '../components/Navbar'

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === id)
  
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Image modal functions
  const openModal = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (project && selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % project.images.length)
    }
  }

  const prevImage = () => {
    if (project && selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + project.images.length) % project.images.length)
    }
  }

  // Project না পাওয়া গেলে
  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Project Not Found
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link to="/" className="btn-primary">
              <FiArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-950">
        <div className="container-custom">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/#projects" 
              className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-medium mb-8 transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                project.category === 'web' 
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : project.category === 'design'
                  ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                  : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
              }`}>
                {project.category === 'web' ? '💻 Web Development' : project.category === 'design' ? '🎨 Graphic Design' : '🚀 Full Stack'}
              </span>
              {project.featured && (
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                  ⭐ Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {project.name}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
              {project.shortDescription}
            </p>
          </motion.div>

          {/* Image Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            {/* Main Image */}
            <div 
              className="relative w-full h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden cursor-pointer group mb-4"
              onClick={() => openModal(activeImageIndex)}
            >
              <img
                src={project.images[activeImageIndex] || project.thumbnail}
                alt={`${project.name} - Image ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              
              {/* Zoom Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <FiZoomIn className="w-8 h-8 text-slate-700" />
                  </div>
                </div>
              </div>

              {/* Fallback */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="text-center">
                  <div className="text-8xl mb-4">{project.category === 'web' ? '💻' : '🎨'}</div>
                  <p className="text-slate-500 dark:text-slate-400">Project Screenshot</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {project.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                      activeImageIndex === index 
                        ? 'ring-2 ring-cyan-500 ring-offset-2 dark:ring-offset-slate-950' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-2xl">
                            ${index + 1}
                          </div>
                        `
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Image Count */}
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              📸 {project.images.length} screenshot{project.images.length > 1 ? 's' : ''} • Click to view full size
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  📋 About This Project
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                  {project.fullDescription}
                </p>
              </div>

              <div className="card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  🎯 Challenges Faced
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  🚀 Future Improvements
                </h2>
                <ul className="space-y-3">
                  {project.futurePlans.map((plan, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="text-cyan-500 mt-1">→</span>
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="card p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  🛠️ Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  🔗 Project Links
                </h3>
                <div className="space-y-3">
                  {project.liveUrl ? (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors font-medium"
                    >
                      <FiExternalLink className="w-5 h-5" /> 
                      View Live Demo
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
                      <FiExternalLink className="w-5 h-5" /> 
                      No Live Demo
                    </div>
                  )}
                  
                  {project.githubUrl ? (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium"
                    >
                      <FiGithub className="w-5 h-5" /> 
                      View Source Code
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
                      <FiGithub className="w-5 h-5" /> 
                      Private Repository
                    </div>
                  )}
                </div>
              </div>

              <Link 
                to="/projects"
                className="btn-secondary w-full justify-center"
              >
                <FiArrowLeft className="w-5 h-5" />
                Back to All Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <FiX className="w-6 h-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 text-white">
              <p className="text-lg font-medium">
                {selectedImage + 1} / {project.images.length}
              </p>
            </div>

            {/* Previous Button */}
            {project.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <FiChevronLeft className="w-8 h-8 text-white" />
              </button>
            )}

            {/* Next Button */}
            {project.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <FiChevronRight className="w-8 h-8 text-white" />
              </button>
            )}

            {/* Main Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={project.images[selectedImage]}
              alt={`${project.name} - Full Size`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    selectedImage === index 
                      ? 'bg-cyan-500 scale-125' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectDetailsPage