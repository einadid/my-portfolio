import { motion } from 'framer-motion'
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { SmartImage, MonogramFallback } from './ui/SmartImage'
import { personalInfo } from '../data/personalInfo'

const facts = [
  { label: 'Based in', value: personalInfo.location },
  { label: 'Experience', value: `${new Date().getFullYear() - 2021}+ years, freelance` },
  { label: 'Studying', value: 'B.Sc. in CSE · Port City Intl. University' },
  { label: 'Languages', value: personalInfo.about.languages.join(' · ') },
]

const chapters = [
  { title: 'How I got here', text: personalInfo.about.journey },
  { title: 'What I like to work on', text: personalInfo.about.workEnjoy },
  { title: 'Off the clock', text: personalInfo.about.hobbies },
]

export function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHeading
          kicker="About"
          title="Designer who codes, developer who kerning-checks."
          description={personalInfo.about.intro}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-10">
          {/* portrait */}
          <Reveal className="lg:col-span-5">
            <div className="group relative">
              <div className="panel overflow-hidden p-2.5">
                <SmartImage
                  src="/about-portrait.webp"
                  alt={`${personalInfo.name} in a formal portrait`}
                  className="aspect-4/5 w-full rounded-[1.35rem]"
                  imgClassName="transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                  fallback={<MonogramFallback label={personalInfo.name} />}
                />
              </div>

              {/* caption plate */}
              <div className="panel absolute -bottom-5 left-4 right-4 flex items-center justify-between gap-3 px-4 py-3 sm:left-6 sm:right-6">
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold">Chattogram, Bangladesh</p>
                  <p className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                    working with clients worldwide
                  </p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent3 text-white">
                  <FiArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <motion.span
                aria-hidden
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-3 top-8 hidden rounded-2xl border border-line bg-surface/90 px-3 py-2 shadow-panel backdrop-blur-xl sm:block"
              >
                <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-faint">Since</span>
                <span className="block font-display text-sm font-semibold text-accent">2021</span>
              </motion.span>
            </div>
          </Reveal>

          {/* chapters + facts */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="grid gap-5">
              {chapters.map((chapter, i) => (
                <div key={chapter.title} className="panel spot p-5 sm:p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-faint">0{i + 1}</span>
                    <h3 className="h-card">{chapter.title}</h3>
                  </div>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{chapter.text}</p>
                </div>
              ))}

              <div className="panel-flat grid grid-cols-2 divide-x divide-y divide-line/70 overflow-hidden">
                {facts.map((fact) => (
                  <div key={fact.label} className="p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{fact.label}</p>
                    <p className="mt-1 text-sm font-medium leading-snug text-fg">{fact.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <div className="flex gap-2">
                  {[
                    { label: 'GitHub', href: personalInfo.github, Icon: FiGithub },
                    { label: 'LinkedIn', href: personalInfo.linkedin, Icon: FiLinkedin },
                    { label: 'YouTube', href: personalInfo.youtube, Icon: FiYoutube },
                  ].map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="icon-btn"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <a href={personalInfo.resumeUrl} download className="btn btn-solid">
                  <FiDownload className="h-4 w-4" />
                  Download résumé
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
