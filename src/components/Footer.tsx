import { Link } from 'react-router-dom'
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiYoutube } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'
import { personalInfo } from '../data/personalInfo'
import { navItems } from '../data/siteNav'
import { services } from '../data/services'
import { useReducedMotion } from 'framer-motion'
import { scrollToSection } from '../lib/utils'

export function Footer() {
  const year = new Date().getFullYear()
  const reduce = useReducedMotion()

  const jump = (id: string) => scrollToSection(id)

  const socials = [
    { label: 'GitHub', href: personalInfo.github, Icon: FiGithub },
    { label: 'LinkedIn', href: personalInfo.linkedin, Icon: FiLinkedin },
    { label: 'Behance', href: personalInfo.behance, Icon: HiOutlineSparkles },
    { label: 'YouTube', href: personalInfo.youtube, Icon: FiYoutube },
    { label: 'Email', href: `mailto:${personalInfo.email}`, Icon: FiMail },
  ]

  return (
    <footer className="relative mt-10 overflow-hidden border-t border-line bg-surface/50">
      <span aria-hidden className="hairline-top !inset-x-0" />

      <div className="shell relative py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
              className="group flex items-center gap-3 text-left"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent via-accent2 to-accent3 font-display text-sm font-bold text-white shadow-[0_16px_36px_-18px_rgb(var(--accent-2)/0.9)]">
                {personalInfo.initials}
              </span>
              <span>
                <span className="block font-display text-lg font-bold tracking-tight">{personalInfo.name}</span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                  {personalInfo.tagline}
                </span>
              </span>
            </button>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Design and front-end work from Chattogram for clients who care about the details. Currently open to
              freelance projects, internships and full-time junior roles.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer noopener"
                  aria-label={label}
                  title={label}
                  className="icon-btn"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* sitemap */}
          <nav className="lg:col-span-3" aria-label="Footer">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Sitemap</h2>
            <ul className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => jump(item.id)}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/projects" className="text-sm text-muted transition-colors hover:text-accent">
                  All projects
                </Link>
              </li>
            </ul>
          </nav>

          {/* services */}
          <div className="lg:col-span-2">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Services</h2>
            <ul className="mt-4 grid gap-2">
              {services.map((service) => (
                <li key={service.id} className="text-sm leading-snug text-muted">
                  {service.title.replace(/ &.*/, '')}
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-2">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Reach me</h2>
            <ul className="mt-4 grid gap-3 text-sm">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="break-all text-muted transition-colors hover:text-accent">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="text-muted transition-colors hover:text-accent">
                  {personalInfo.phoneDisplay}
                </a>
              </li>
              <li className="text-muted">{personalInfo.location}</li>
              <li>
                <a href={personalInfo.resumeUrl} download className="text-accent transition-colors hover:underline">
                  Download résumé (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* oversized wordmark */}
        <div aria-hidden className="pointer-events-none mt-12 select-none overflow-hidden">
          <p className="h-display !text-[17vw] leading-[0.8] tracking-[-0.05em] text-transparent [-webkit-text-stroke:1px_rgb(var(--line))] opacity-90">
            NADID
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-line/70 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] leading-relaxed text-faint">
            © {year} {personalInfo.name}. All rights reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            Built with React, TypeScript & Tailwind — designed in Figma, shipped on Vercel.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2 text-xs font-semibold text-muted transition-all hover:-translate-y-0.5 hover:border-accent/45 hover:text-accent"
          >
            Back to top
            <FiArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
