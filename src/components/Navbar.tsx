import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHome, FiCode, FiBookOpen, FiBriefcase, FiMail } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', href: '#home', icon: FiHome },
  { name: 'Projects', href: '#projects', icon: FiBriefcase },
  { name: 'Skills', href: '#skills', icon: FiCode },
  { name: 'Education', href: '#education', icon: FiBookOpen },
  { name: 'Contact', href: '#contact', icon: FiMail },
]

const Navbar = () => {
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

  // Scroll to section
  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '')

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
  }

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
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 relative z-[60]"
            >
              <motion.div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-base sm:text-lg">EN</span>
              </motion.div>
              <span className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white hidden sm:block">
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

            {/* Right Side - Theme Toggle */}
            <div className="flex items-center gap-3 relative z-[60]">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 safe-area-bottom">
        <nav className="flex items-center justify-around py-2 px-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '') && isHomePage
            const Icon = link.icon
            
            return (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`flex flex-col items-center justify-center p-2 min-w-[56px] rounded-xl transition-all ${
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
                      layoutId="bottomNavIndicator"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-500 rounded-full"
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

      {/* Global Styles for Bottom Nav Spacing */}
      <style>
        {`
          @media (max-width: 1023px) {
            body {
              padding-bottom: 70px;
            }
          }
          .safe-area-bottom {
            padding-bottom: env(safe-area-inset-bottom);
          }
        `}
      </style>
    </>
  )
}

export default Navbar