import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBookOpen, FiBriefcase, FiMail } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', href: '#home', icon: FiHome },
  // { name: 'About', href: '#about', icon: FiUser },
  { name: 'Projects', href: '#projects', icon: FiBriefcase },
  { name: 'Skills', href: '#skills', icon: FiCode },
  { name: 'Education', href: '#education', icon: FiBookOpen },
  { name: 'Contact', href: '#contact', icon: FiMail },
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

              {/* Mobile Menu Button - Now hidden since we have bottom nav */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hidden lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
        <nav className="flex items-center justify-around py-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '') && isHomePage
            const Icon = link.icon
            
            return (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`flex flex-col items-center justify-center p-2 min-w-[60px] rounded-lg transition-all ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 transition-all ${
                    isActive ? 'scale-110' : ''
                  }`} />
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-600 dark:bg-cyan-400 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
                <span className={`text-[10px] mt-1 font-medium ${
                  isActive ? 'opacity-100' : 'opacity-70'
                }`}>
                  {link.name}
                </span>
              </motion.button>
            )
          })}
        </nav>
      </div>

      {/* Add padding bottom to main content on mobile to account for bottom nav */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          body {
            padding-bottom: 70px;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar