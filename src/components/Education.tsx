import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiBook, FiBriefcase, FiAward, FiCalendar, FiMapPin, FiChevronRight, FiExternalLink, FiX, FiZoomIn } from 'react-icons/fi'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { certificates } from '../data/certificates'

type TabType = 'education' | 'experience' | 'certificates'

const Education = () => {
  const [activeTab, setActiveTab] = useState<TabType>('education')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCertName, setSelectedCertName] = useState<string>('')

  const tabs = [
    { id: 'education' as TabType, label: 'Education', icon: FiBook, count: education.length },
    { id: 'experience' as TabType, label: 'Experience', icon: FiBriefcase, count: experience.length },
    { id: 'certificates' as TabType, label: 'Certificates', icon: FiAward, count: certificates.length },
  ]

  const openImageModal = (image: string, name: string) => {
    setSelectedImage(image)
    setSelectedCertName(name)
    document.body.style.overflow = 'hidden'
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setSelectedCertName('')
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="education" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">My academic and professional journey</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-slate-900 shadow-md z-10" />
                    <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="card p-6 hover:shadow-lg transition-all duration-300 group">
                        {edu.current && (
                          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium rounded-full mb-3">Currently Pursuing</span>
                        )}
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">{edu.degree}</h3>
                        <p className="text-cyan-500 font-medium mb-3">{edu.institution}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
                          <span className="flex items-center gap-1"><FiCalendar className="w-4 h-4" />{edu.duration}</span>
                          <span className="flex items-center gap-1"><FiMapPin className="w-4 h-4" />{edu.location}</span>
                        </div>
                        {edu.description && <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.description}</p>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-slate-900 shadow-md z-10" />
                    <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="card p-6 hover:shadow-lg transition-all duration-300 group">
                        {exp.current && (
                          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium rounded-full mb-3">Currently Working</span>
                        )}
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">{exp.role}</h3>
                        <p className="text-purple-500 font-medium mb-3">{exp.company}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
                          <span className="flex items-center gap-1"><FiCalendar className="w-4 h-4" />{exp.duration}</span>
                          <span className="flex items-center gap-1"><FiMapPin className="w-4 h-4" />{exp.location}</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <FiChevronRight className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />{resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, idx) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="card overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div 
                      className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 cursor-pointer overflow-hidden"
                      onClick={() => openImageModal(cert.image, cert.name)}
                    >
                      <img src={cert.image} alt={cert.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                            <FiZoomIn className="w-6 h-6 text-slate-700" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">{cert.name}</h3>
                      <p className="text-amber-500 font-medium text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 mb-3">
                        <FiCalendar className="w-4 h-4" />{cert.year}
                      </div>
                      {cert.description && <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{cert.description}</p>}
                      <div className="flex gap-2">
                        <button onClick={() => openImageModal(cert.image, cert.name)} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                          <FiZoomIn className="w-4 h-4" />View
                        </button>
                        {cert.credentialUrl && (
                          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors text-sm font-medium">
                            <FiExternalLink className="w-4 h-4" />Verify
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeImageModal}
          >
            <button onClick={closeImageModal} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10">
              <FiX className="w-6 h-6 text-white" />
            </button>
            <div className="absolute top-4 left-4 text-white"><h3 className="text-lg font-bold">{selectedCertName}</h3></div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt={selectedCertName} className="w-full h-full object-contain rounded-lg shadow-2xl" />
            </motion.div>
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">Click outside or press ESC to close</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Education