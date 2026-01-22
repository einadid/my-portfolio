import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiCode, 
  FiServer, 
  FiPenTool, 
  FiTool,
  FiLayers,
  FiTerminal
} from 'react-icons/fi'
import { skills } from '../data/skills'

// Category icons mapping
const categoryIcons: Record<string, React.ElementType> = {
  'Programming Languages': FiTerminal,
  'Frontend Development': FiCode,
  'Backend Development': FiServer,
  'Graphic Design': FiPenTool,
  'Tools & Others': FiTool
}

// Category colors mapping
const categoryColors: Record<string, string> = {
  'Programming Languages': 'from-yellow-500 to-orange-500',
  'Frontend Development': 'from-cyan-500 to-blue-500',
  'Backend Development': 'from-green-500 to-emerald-500',
  'Graphic Design': 'from-purple-500 to-pink-500',
  'Tools & Others': 'from-slate-500 to-slate-600'
}

// Progress bar colors
const progressColors: Record<string, string> = {
  'Programming Languages': 'bg-gradient-to-r from-yellow-500 to-orange-500',
  'Frontend Development': 'bg-gradient-to-r from-cyan-500 to-blue-500',
  'Backend Development': 'bg-gradient-to-r from-green-500 to-emerald-500',
  'Graphic Design': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'Tools & Others': 'bg-gradient-to-r from-slate-500 to-slate-600'
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(cat => cat.category === activeCategory)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {/* All Button */}
          <button
            onClick={() => setActiveCategory('all')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <FiLayers className="w-4 h-4" />
            All
          </button>

          {/* Category Buttons */}
          {skills.map((category) => {
            const Icon = categoryIcons[category.category] || FiCode
            return (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.category}</span>
                <span className="sm:hidden">{category.category.split(' ')[0]}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((category) => {
              const Icon = categoryIcons[category.category] || FiCode
              
              return (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  className="card p-6"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${categoryColors[category.category]} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {category.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        {/* Skill Name and Percentage */}
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${progressColors[category.category]}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: skillIndex * 0.1,
                              ease: 'easeOut'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {skills.map((category) => {
            const Icon = categoryIcons[category.category] || FiCode
            const totalLevel = category.skills.reduce((acc, skill) => acc + skill.level, 0)
            const avgLevel = Math.round(totalLevel / category.skills.length)

            return (
              <div
                key={category.category}
                className="card p-4 text-center group hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-br ${categoryColors[category.category]} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {avgLevel}%
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                  {category.category.split(' ')[0]}
                </p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills