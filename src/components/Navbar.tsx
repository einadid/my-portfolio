import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section detection
  useEffect(() => {
    if (!isHomePage) return
    const handleScroll = () => {
      for (const link of navLinks) {
        const element = document.getElementById(link.href.replace('#', ''))
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(link.href.replace('#', ''))
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Scroll to section - FIXED VERSION
  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '')
    
    // Close menu first
    setIsOpen(false)
    
    // Reset body styles immediately
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
    document.body.style.top = ''

    // Small delay to let menu close, then scroll
    setTimeout(() => {
      if (!isHomePage) {
        window.location.href = '/' + href
        return
      }

      const element = document.getElementById(sectionId)
      if (element) {
        const navbarHeight = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  // Lock/unlock body scroll
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${scrollY}px`
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
  }, [isOpen])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
    }
  }, [])

  return (
    <>
      {/* Main Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800'
            : 'bg-white dark:bg-slate-950'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 relative z-[60]" 
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-lg">EN</span>
              </motion.div>
              <span className="text-xl font-bold text-slate-800 dark:text-white hidden sm:block">
                Nadid
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/50 p-1.5 rounded-2xl">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '') && isHomePage
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow-md'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 relative z-[60]">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white dark:bg-slate-900 shadow-2xl z-[60] lg:hidden flex flex-col"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                    <span className="text-white font-bold">EN</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 dark:text-white block">Menu</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Navigation</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Links */}
              <nav className="flex-1 overflow-y-auto p-5">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.replace('#', '') && isHomePage
                    return (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className={`w-full text-left px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 flex items-center gap-4 ${
                            isActive
                              ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-500'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border-l-4 border-transparent hover:border-slate-300 dark:hover:border-slate-600'
                          }`}
                        >
                          <span className={`w-3 h-3 rounded-full flex-shrink-0 ${
                            isActive 
                              ? 'bg-cyan-500' 
                              : 'bg-slate-300 dark:bg-slate-600'
                          }`} />
                          <span className="flex-1">{link.name}</span>
                          {isActive && (
                            <span className="text-xs bg-cyan-500 text-white px-2 py-0.5 rounded-full">
                              Active
                            </span>
                          )}
                        </button>
                      </motion.li>
                    )
                  })}
                </ul>

                {/* Quick Contact Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl text-white"
                >
                  <h4 className="font-bold mb-2">Get in Touch</h4>
                  <p className="text-sm text-cyan-100 mb-3">
                    Have a project in mind? Let's talk!
                  </p>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full py-2.5 bg-white text-cyan-600 rounded-lg font-medium hover:bg-cyan-50 transition-colors"
                  >
                    Contact Me
                  </button>
                </motion.div>
              </nav>

              {/* Menu Footer */}
              <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex-shrink-0">
                <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                  © 2025 Emamul Islam Nadid
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-1">
                  Graphic Designer & Web Developer
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar