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
    { name: 'Web Development', icon: '🌐' },
    { name: 'Graphic Design', icon: '🎨' },
    { name: 'UI/UX Design', icon: '📱' },
    { name: 'Brand Identity', icon: '🎯' },
    { name: 'Illustration', icon: '🖌️' },
  ]

  // Social links
  const socialLinks = [
    { 
      icon: FiGithub, 
      href: personalInfo.github, 
      label: 'GitHub', 
      gradient: 'from-gray-600 to-gray-800' 
    },
    { 
      icon: FiLinkedin, 
      href: personalInfo.linkedin, 
      label: 'LinkedIn', 
      gradient: 'from-blue-500 to-blue-700' 
    },
    { 
      icon: FiYoutube, 
      href: personalInfo.youtube, 
      label: 'YouTube', 
      gradient: 'from-red-500 to-red-700' 
    },
    { 
      icon: FiMail, 
      href: `mailto:${personalInfo.email}`, 
      label: 'Email', 
      gradient: 'from-cyan-500 to-cyan-700' 
    },
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-950 dark:to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      
      {/* Main Footer Content */}
      <motion.div 
        className="container-custom py-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          
          {/* Column 1 - Brand & Social */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            {/* Brand */}
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 flex items-center justify-center shadow-xl shadow-cyan-500/30"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-white font-bold text-xl relative z-10">EN</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text">
                  Nadid
                </h3>
                <p className="text-cyan-400 text-xs font-medium">Designer & Developer</p>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed mb-5 text-sm">
              Crafting beautiful digital experiences through innovative design and clean code. 
              Transforming ideas into reality with passion and precision.
            </p>
            
            {/* Social Links */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm">Connect With Me</h5>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 overflow-hidden"
                    title={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <social.icon className="w-4 h-4 relative z-10" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-cyan-400 group-hover:scale-150 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li 
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="text-slate-400 text-sm flex items-center gap-2 hover:text-cyan-400 transition-all duration-300 cursor-default">
                    <span className="text-base group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
              Get In Touch
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="group block"
                >
                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-800/30 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FiMail className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-slate-500 mb-0.5 font-medium">Email Address</p>
                      <p className="text-xs text-slate-300 group-hover:text-cyan-400 transition-colors truncate">
                        {personalInfo.email}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="group block"
                >
                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-800/30 border border-slate-800 hover:border-green-500/50 hover:bg-slate-800/50 transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FiPhone className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-slate-500 mb-0.5 font-medium">Phone Number</p>
                      <p className="text-xs text-slate-300 group-hover:text-green-400 transition-colors">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-800/30 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-4 h-4 text-red-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-slate-500 mb-0.5 font-medium">Location</p>
                    <p className="text-xs text-slate-300">{personalInfo.location}</p>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-slate-400 text-sm">
              © {currentYear}{' '}
              <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Emamul Islam Nadid
              </span>
              . All rights reserved.
            </p>
            <p className="text-slate-600 text-xs mt-0.5">
              Designed & Developed with passion ✨
            </p>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold overflow-hidden shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2">
              <FiArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              <span>Back to Top</span>
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </footer>
  )
}


export default Footer