import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import Navbar from '../components/Navbar'

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Project Not Found
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link to="/" className="btn-primary">
              <FiArrowLeft /> Back to Home
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-custom">
          {/* Back Button */}
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 mb-8 transition-colors font-medium"
          >
            <FiArrowLeft /> Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.category === 'web' 
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : project.category === 'design'
                  ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                  : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
              }`}>
                {project.category === 'web' ? 'Web Development' : project.category === 'design' ? 'Graphic Design' : 'Web & Design'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {project.name}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Image Placeholder */}
          <div className="w-full h-64 md:h-[400px] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-2xl mb-12 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-slate-300 dark:bg-slate-600 flex items-center justify-center">
                <span className="text-3xl">🖼️</span>
              </div>
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                Project Screenshot
              </span>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  About This Project
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Challenges */}
              <div className="card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  🎯 Challenges Faced
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Plans */}
              <div className="card p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  🚀 Future Improvements
                </h2>
                <ul className="space-y-3">
                  {project.futurePlans.map((plan, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="text-cyan-500 mt-1">→</span>
                      {plan}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div className="card p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
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

              {/* Links */}
              <div className="card p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  🔗 Project Links
                </h3>
                <div className="space-y-3">
                  {project.liveUrl ? (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 transition-colors font-medium"
                    >
                      <FiExternalLink className="w-5 h-5" /> 
                      Live Demo
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
                      <FiExternalLink className="w-5 h-5" /> 
                      No Live Demo
                    </div>
                  )}
                  
                  {project.githubUrl ? (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium"
                    >
                      <FiGithub className="w-5 h-5" /> 
                      View Code
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
                      <FiGithub className="w-5 h-5" /> 
                      Private Repository
                    </div>
                  )}
                </div>
              </div>

              {/* Category Info */}
              <div className="card p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  📂 Category
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {project.category === 'web' 
                    ? 'This is a web development project built with modern technologies.' 
                    : project.category === 'design'
                    ? 'This is a graphic design project created using professional design tools.'
                    : 'This project combines both web development and graphic design.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetailsPage