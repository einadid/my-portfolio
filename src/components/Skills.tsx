import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCode, FiServer, FiPenTool, FiTool, FiLayers, FiTerminal } from 'react-icons/fi'
import { skills } from '../data/skills'

const categoryIcons: Record<string, React.ElementType> = {
  'Programming Languages': FiTerminal,
  'Frontend Development': FiCode,
  'Backend Development': FiServer,
  'Graphic Design': FiPenTool,
  'Tools & Others': FiTool
}

const categoryColors: Record<string, string> = {
  'Programming Languages': 'from-yellow-500 to-orange-500',
  'Frontend Development': 'from-cyan-500 to-blue-500',
  'Backend Development': 'from-green-500 to-emerald-500',
  'Graphic Design': 'from-purple-500 to-pink-500',
  'Tools & Others': 'from-slate-500 to-slate-600'
}

const progressColors: Record<string, string> = {
  'Programming Languages': 'bg-gradient-to-r from-yellow-500 to-orange-500',
  'Frontend Development': 'bg-gradient-to-r from-cyan-500 to-blue-500',
  'Backend Development': 'bg-gradient-to-r from-green-500 to-emerald-500',
  'Graphic Design': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'Tools & Others': 'bg-gradient-to-r from-slate-500 to-slate-600'
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(cat => cat.category === activeCategory)

  // Check if last item needs centering (odd number of items)
  const isOddCount = filteredSkills.length % 2 !== 0
  const isOddCountLg = filteredSkills.length % 3 !== 0

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <FiLayers className="w-3.5 h-3.5" />
            All
          </button>

          {skills.map((category) => {
            const Icon = categoryIcons[category.category] || FiCode
            return (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {filteredSkills.map((category, catIdx) => {
              const Icon = categoryIcons[category.category] || FiCode
              const isLastItem = catIdx === filteredSkills.length - 1
              
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                  className={`card p-4 sm:p-5 w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] ${
                    isLastItem && isOddCount ? 'sm:last:w-[calc(50%-8px)] md:last:w-[calc(50%-8px)]' : ''
                  } ${
                    isLastItem && isOddCountLg && filteredSkills.length % 3 === 1 ? 'lg:last:w-[calc(33.333%-11px)]' : ''
                  }`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-4">
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${categoryColors[category.category]} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                        {category.category}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5 sm:space-y-3">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 truncate pr-2">
                            {skill.name}
                          </span>
                          <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 flex-shrink-0">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 sm:h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${progressColors[category.category]}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIdx * 0.1 }}
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
      </div>
    </section>
  )
}

export default Skills