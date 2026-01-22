import { motion } from 'framer-motion'
import { 
  FiGithub, 
  FiLinkedin, 
  FiYoutube, 
  FiMail,
  FiArrowUp,
  FiPhone,
  FiMapPin,
  FiExternalLink
} from 'react-icons/fi'
import { personalInfo } from '../data/personalInfo'

const Footer = () => {
  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  // Services
  const services = [
    'Web Development',
    'Graphic Design',
    'Logo Design',
    'UI/UX Design',
    'Brand Identity',
    'Illustration',
  ]

  // Social links
  const socialLinks = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:bg-gray-600' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: FiYoutube, href: personalInfo.youtube, label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:bg-cyan-600' },
  ]

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Scroll to section
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white relative">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-xl">EN</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Nadid</h3>
                <p className="text-cyan-400 text-xs">Designer & Developer</p>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed mb-6 text-sm text-justify">
              A passionate Graphic Designer & Junior Web Developer creating beautiful designs and building user-friendly applications.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 ${social.color}`}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <FiExternalLink className="w-5 h-5 text-cyan-400" />
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400">💼</span>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400">📬</span>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <FiMail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <p className="text-sm break-all">{personalInfo.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 group-hover:bg-green-500/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <FiPhone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                    <p className="text-sm">{personalInfo.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="text-slate-400 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Location</p>
                    <p className="text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {currentYear} <span className="text-cyan-400">Emamul Islam Nadid</span>. All rights reserved.
            </p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium transition-all duration-300 shadow-lg shadow-cyan-500/25"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowUp className="w-4 h-4" />
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer