import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiUser,
  FiMessageSquare,
  FiGithub,
  FiLinkedin,
  FiYoutube,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { personalInfo } from '../data/personalInfo'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Contact info cards
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: personalInfo.whatsapp,
      href: `https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`,
      color: 'from-green-400 to-green-600'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  // Social links
  const socialLinks = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FiYoutube, href: personalInfo.youtube, label: 'YouTube' },
  ]

  // Handle form submit with EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration - তোমার credentials দাও এখানে
      const result = await emailjs.sendForm(
        'service_txbtksp',      // তোমার Service ID
        'template_evg46x1',     // তোমার Template ID
        formRef.current!,
        'E_drX_54q2yI762gs'       // তোমার Public Key
      )

      console.log('Email sent successfully:', result.text)
      setSubmitStatus('success')
      formRef.current?.reset()

      setTimeout(() => setSubmitStatus('idle'), 5000)

    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Let's get in touch and work together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Intro Text */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Let's Talk! 👋
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out through any of the following channels.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card p-4 group hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3"
                >
                  <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <p className="text-green-700 dark:text-green-400 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3"
                >
                  <FiAlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <p className="text-red-700 dark:text-red-400 font-medium">
                    Failed to send. Please email me directly.
                  </p>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field - IMPORTANT: name="from_name" */}
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      required
                      placeholder="John Doe"
                      className="input-field pl-12"
                    />
                  </div>
                </div>

                {/* Email Field - IMPORTANT: name="from_email" */}
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      required
                      placeholder="john@example.com"
                      className="input-field pl-12"
                    />
                  </div>
                </div>

                {/* Message Field - IMPORTANT: name="message" */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Hi, I'd like to discuss a project..."
                      className="input-field pl-12 resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 text-center">
                I usually respond within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact