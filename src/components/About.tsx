import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone, FiCalendar, FiCode, FiHeart, FiTarget, FiUser } from 'react-icons/fi'
import { personalInfo } from '../data/personalInfo'

const About = () => {
  const infoCards = [
    { icon: FiMapPin, label: 'Location', value: personalInfo.location, color: 'text-red-500' },
    { icon: FiMail, label: 'Email', value: personalInfo.email, color: 'text-cyan-500', href: `mailto:${personalInfo.email}` },
    { icon: FiPhone, label: 'Phone', value: personalInfo.phone, color: 'text-green-500', href: `tel:${personalInfo.phone}` },
    { icon: FiCalendar, label: 'Date of Birth', value: personalInfo.dob, color: 'text-purple-500' }
  ]

  const aboutCards = [
    { icon: FiCode, title: 'My Journey', description: personalInfo.about.journey, color: 'from-cyan-500 to-blue-500' },
    { icon: FiTarget, title: 'What I Enjoy', description: personalInfo.about.workEnjoy, color: 'from-purple-500 to-pink-500' },
    { icon: FiHeart, title: 'Hobbies & Interests', description: personalInfo.about.hobbies, color: 'from-orange-500 to-red-500' }
  ]

  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6 md:p-8 mb-8"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <FiUser className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Who Am I?</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">A little introduction about myself</p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg text-justify">
                    {personalInfo.shortBio}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl rotate-6 opacity-20" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
                      <img
                        src="/about-image.jpg"
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          if (target.parentElement) {
                            target.parentElement.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 flex items-center justify-center">
                                <div class="text-center text-white">
                                  <div class="text-5xl font-bold mb-2">EN</div>
                                  <p class="text-xs opacity-80">Add Image</p>
                                </div>
                              </div>
                            `
                          }
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg px-4 py-2 border border-slate-200 dark:border-slate-700">
                      <p className="text-xl font-bold text-cyan-500">3+</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Years Exp.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-1 gap-6">
              {aboutCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card p-6 group hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/20 mb-4">
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                          <span class="text-2xl font-bold text-white">EN</span>
                        </div>
                      `
                    }
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{personalInfo.name}</h3>
              <p className="text-cyan-500 font-medium mb-4">{personalInfo.designation}</p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div>
                  <p className="text-2xl font-bold text-cyan-500">3+</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Years Exp.</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-500">50+</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Projects</p>
                </div>
              </div>
            </motion.div>

            {infoCards.map((info, idx) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card p-4 group hover:shadow-md transition-all duration-300"
              >
                {info.href ? (
                  <a href={info.href} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">{info.label}</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center ${info.color}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">{info.label}</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6 bg-gradient-to-br from-cyan-500 to-blue-600 border-0"
            >
              <div className="text-center text-white">
                <h4 className="font-bold text-lg mb-2">Want to know more?</h4>
                <p className="text-cyan-100 text-sm mb-4">Download my resume for detailed information</p>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-2 bg-white text-cyan-600 rounded-lg font-medium hover:bg-cyan-50 transition-colors"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About