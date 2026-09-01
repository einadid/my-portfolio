import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import {
  FiAlertCircle,
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiLoader,
  FiMail,
  FiMapPin,
  FiPhoneCall,
  FiSend,
  FiYoutube,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { personalInfo } from '../data/personalInfo'
import { useCopy } from '../lib/utils'

const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_txbtksp',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_evg46x1',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'E_drX_54q2yI762gs',
}

const channels = [
  {
    key: 'email',
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    Icon: FiMail,
    copy: personalInfo.email,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    value: personalInfo.phoneDisplay,
    href: `https://wa.me/${personalInfo.whatsapp.replace(/\D/g, '')}`,
    Icon: FaWhatsapp,
    copy: personalInfo.whatsapp,
  },
  {
    key: 'phone',
    label: 'Phone',
    value: personalInfo.phoneDisplay,
    href: `tel:${personalInfo.phone}`,
    Icon: FiPhoneCall,
    copy: personalInfo.phone,
  },
  {
    key: 'location',
    label: 'Location',
    value: personalInfo.location,
    href: 'https://maps.google.com/?q=South+Khulshi,+Chattogram',
    Icon: FiMapPin,
  },
]

const socials = [
  { label: 'GitHub', href: personalInfo.github, Icon: FiGithub },
  { label: 'LinkedIn', href: personalInfo.linkedin, Icon: FiLinkedin },
  { label: 'YouTube', href: personalInfo.youtube, Icon: FiYoutube },
]

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const { copied, copy } = useCopy()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, formRef.current, {
        publicKey: EMAILJS.publicKey,
      })
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    } finally {
      window.setTimeout(() => setStatus((s) => (s === 'idle' ? s : 'idle')), 6000)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="shell">
        <SectionHeading
          kicker="Contact"
          title={
            <>
              Got a brief?
              <br className="hidden sm:block" /> Send it over — I read everything.
            </>
          }
          description="Design work, a frontend build, or a rough idea you can’t yet describe. Tell me the goal and the deadline, and I’ll tell you honestly whether I’m the right person."
          aside={
            <div className="panel-flat inline-flex items-center gap-2.5 px-4 py-2.5">
              <FiClock className="h-4 w-4 text-accent" />
              <span className="text-[13px] text-muted">
                Replies in <span className="font-semibold text-fg">under 24h</span> · GMT+6
              </span>
            </div>
          }
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* channels */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col gap-3">
              {channels.map(({ key, label, value, href, Icon, copy: copyValue }) => (
                <div
                  key={key}
                  className="panel spot group flex items-center gap-4 p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/30"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface2/70 text-accent transition-colors group-hover:border-accent/40">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{label}</p>
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer noopener" className="block truncate text-sm font-medium text-fg hover:text-accent">
                      {value}
                    </a>
                  </div>
                  {copyValue && (
                    <button
                      type="button"
                      onClick={() => copy(copyValue)}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-faint transition-colors hover:border-accent/40 hover:text-accent"
                      aria-label={`Copy ${label.toLowerCase()}`}
                    >
                      {copied === copyValue ? (
                        <FiCheckCircle className="h-4 w-4 text-accent" />
                      ) : (
                        <FiCopy className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              ))}

              <div className="panel mt-auto overflow-hidden">
                <div className="relative p-5">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_0%_0%,rgb(var(--accent)/0.14),transparent_60%)]"
                  />
                  <p className="relative font-display text-lg font-semibold">Prefer to talk it through?</p>
                  <p className="relative mt-1.5 text-sm text-muted">
                    Book a 20-minute call — I’ll bring questions, a rough scope and an honest estimate.
                  </p>
                  <div className="relative mt-4 flex flex-wrap gap-2">
                    <a
                      href={`https://wa.me/${personalInfo.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-solid !py-2.5 text-[13px]"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                      WhatsApp me
                    </a>
                    <a
                      href={`mailto:${personalInfo.email}?subject=Project%20enquiry&body=Hi%20Nadid%2C%0A%0AI%20have%20a%20project%20I%27d%20like%20to%20discuss%3A%0A`}
                      className="btn btn-ghost !py-2.5 text-[13px]"
                    >
                      Email a brief
                      <FiArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-line/70 bg-surface2/40 px-5 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Elsewhere</span>
                  <div className="flex gap-1.5">
                    {socials.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={label}
                        className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal className="lg:col-span-7" delay={0.12}>
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="panel h-full p-5 sm:p-7"
              initial={false}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="h-card text-xl">Project enquiry</h3>
                <span className="chip">
                  <span className="dot bg-accent" aria-hidden />
                  secure · no spam
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="field-wrap">
                  <input id="from_name" name="from_name" required placeholder=" " className="field peer" autoComplete="name" />
                  <label htmlFor="from_name" className="field-label">
                    Your name
                  </label>
                </div>
                <div className="field-wrap">
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    required
                    placeholder=" "
                    className="field peer"
                    autoComplete="email"
                  />
                  <label htmlFor="from_email" className="field-label">
                    Email address
                  </label>
                </div>
              </div>

              <div className="field-wrap mt-4">
                <input id="subject" name="subject" required placeholder=" " className="field peer" />
                <label htmlFor="subject" className="field-label">
                  What is it about? (brand, website, both…)
                </label>
              </div>

              <div className="field-wrap mt-4">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder=" "
                  className="peer w-full resize-y rounded-xl border border-line bg-surface2/40 px-4 pb-3 pt-7 text-sm text-fg outline-none transition-all duration-300 focus:border-accent/50 focus:bg-surface"
                />
                <label htmlFor="message" className="field-label">
                  Brief, budget range and deadline
                </label>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {['Logo & brand', 'Social media kit', 'Landing page', 'Full web app'].map((tag) => (
                  <label key={tag} className="chip cursor-pointer transition-colors hover:border-accent/40 hover:text-fg">
                    <input
                      type="checkbox"
                      name="interest"
                      value={tag}
                      className="peer sr-only"
                      onChange={(e) => {
                        const el = e.currentTarget.closest('label')
                        el?.classList.toggle('border-accent/50', e.currentTarget.checked)
                        el?.classList.toggle('text-accent', e.currentTarget.checked)
                      }}
                    />
                    {tag}
                  </label>
                ))}
              </div>

              {status === 'success' && (
                <motion.p
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent"
                >
                  <FiCheckCircle className="h-4 w-4 shrink-0" />
                  Sent — thanks! Your message is in my inbox. I’ll reply within a day.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  role="alert"
                  aria-live="assertive"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex flex-wrap items-center gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-500"
                >
                  <FiAlertCircle className="h-4 w-4 shrink-0" />
                  Something blocked the send. Reach me directly at{' '}
                  <a href={`mailto:${personalInfo.email}`} className="underline">
                    {personalInfo.email}
                  </a>
                  .
                </motion.p>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line/70 pt-5">
                <p className="max-w-xs text-xs leading-relaxed text-faint">
                  Your details are only used to answer your enquiry. No lists, no tracking.
                </p>
                <button type="submit" disabled={status === 'sending'} className="btn btn-solid min-w-[11rem]">
                  {status === 'sending' ? (
                    <>
                      <FiLoader className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <FiSend className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
