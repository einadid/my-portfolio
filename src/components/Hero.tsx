import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiYoutube, FiMail } from 'react-icons/fi'
import { personalInfo } from '../data/personalInfo'
import { projects } from '../data/projects'

const Hero = () => {
  const socialLinks = [
    { name: 'GitHub', url: personalInfo.github, icon: FiGithub, color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', url: personalInfo.linkedin, icon: FiLinkedin, color: 'hover:text-blue-600' },
    { name: 'YouTube', url: personalInfo.youtube, icon: FiYoutube, color: 'hover:text-red-500' },
    { name: 'Email', url: `mailto:${personalInfo.email}`, icon: FiMail, color: 'hover:text-cyan-500' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 sm:pt-24 lg:pt-20 pb-16 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-cyan-500 font-medium text-lg mb-2"
            >
               Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4"
            >
              <span className="text-cyan-500">{personalInfo.name.split(' ')[0]}</span>{' '}
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </motion.h1>

            {/* Designation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {personalInfo.designation}
              </h2>
            </motion.div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-justify lg:text-left"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a href={personalInfo.resumeUrl} download className="btn-primary">
                <FiDownload className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <FiMail className="w-5 h-5" />
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 scale-110" />
              
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ margin: '-10px' }}
              />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 flex items-center justify-center">
                          <div class="text-center text-white">
                            <div class="text-6xl sm:text-7xl lg:text-8xl font-bold mb-2">EN</div>
                            <p class="text-sm sm:text-base opacity-80">Add your photo</p>
                          </div>
                        </div>
                      `
                    }
                  }}
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -right-4 top-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg px-4 py-2 border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-2xl font-bold text-cyan-500">3+</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Years Exp.</p>
              </motion.div>

              {/* Projects Badge - DYNAMIC */}
              <motion.div
                className="absolute -left-4 bottom-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg px-4 py-2 border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <p className="text-2xl font-bold text-cyan-500">{projects.length}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Projects</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero