import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'
import StatusPill from './ui/StatusPill'
import RotatingText from './ui/RotatingText'
import { Marquee } from './ui/Marquee'
import { SmartImage, MonogramFallback } from './ui/SmartImage'
import { personalInfo } from '../data/personalInfo'
import { scrollToSection } from '../lib/utils'
import { getStats, marqueeItems } from '../data/skills'
import { liveProjects } from '../data/projects'

const socials = [
  { label: 'GitHub', href: personalInfo.github, Icon: FiGithub },
  { label: 'LinkedIn', href: personalInfo.linkedin, Icon: FiLinkedin },
  { label: 'Behance', href: personalInfo.behance, Icon: HiOutlineSparkles },
  { label: 'YouTube', href: personalInfo.youtube, Icon: FiYoutube },
]

const line = {
  hidden: { y: '112%' },
  show: (i: number) => ({
    y: '0%',
    transition: { duration: 0.9, delay: 0.12 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  const stats = getStats(liveProjects.length, 2021)
  const portraitRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 160, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 160, damping: 18 })

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = portraitRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  const scrollToWork = () => scrollToSection('work')

  return (
    <section id="home" className="relative isolate overflow-hidden pt-24 pb-10 sm:pt-28 lg:pt-32">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---------------------------------------------------------------- copy */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <StatusPill />
            </motion.div>

            <p className="kicker mt-7">Hi — I’m {personalInfo.name}</p>

            <h1 className="h-display mt-3">
              {['I design brands', 'that earn attention', '— then I build them.'].map((text, i) => (
                <span key={text} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    custom={i}
                    variants={line}
                    initial="hidden"
                    animate="show"
                    className={`block ${i === 1 ? 'text-gradient' : ''} ${
                      i === 2 ? 'text-fg/45 sm:text-fg/60' : ''
                    }`}
                  >
                    {text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="hidden h-px w-10 bg-gradient-to-r from-accent to-transparent sm:block" />
              <span className="font-display text-lg font-semibold text-fg sm:text-xl">
                <RotatingText words={personalInfo.headline} className="text-gradient" />
              </span>
              <span className="text-sm text-muted">in {personalInfo.location.split(',').slice(-2).join(',').trim()}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.6 }}
              className="lede mt-6 max-w-xl"
            >
              {personalInfo.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button type="button" onClick={scrollToWork} className="btn btn-solid group/work">
                See selected work
                <span className="text-[15px] text-white/70">({liveProjects.length})</span>
                <FiArrowDown className="h-4 w-4 transition-transform duration-300 group-hover/work:translate-y-0.5" />
              </button>
              <a href={personalInfo.resumeUrl} download className="btn btn-ghost">
                <FiDownload className="h-4 w-4" />
                Résumé
              </a>
              <a href={`mailto:${personalInfo.email}`} className="btn btn-soft !px-4 text-[13px]">
                {personalInfo.email}
                <FiArrowUpRight className="h-3.5 w-3.5 text-accent" />
              </a>
            </motion.div>

            {/* socials + stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center justify-between gap-6"
            >
              <div className="flex items-center gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    title={label}
                    className="icon-btn"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-2 text-sm text-muted"
              >
                <span className="link-underline">Currently taking new briefs</span>
                <FiArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          </div>

          {/* ---------------------------------------------------------------- portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[24rem] lg:col-span-5 lg:mx-0 lg:max-w-none"
          >
            <div
              ref={portraitRef}
              onPointerMove={onPointerMove}
              onPointerLeave={reset}
              style={{ perspective: 1000 }}
              className="group relative"
            >
              <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative rounded-[2.2rem] border border-line bg-surface/60 p-2.5 backdrop-blur-xl shadow-lift"
              >
                {/* corner ticks */}
                <span className="absolute left-4 top-4 h-5 w-5 rounded-tl-xl border-l border-t border-accent/50" aria-hidden />
                <span className="absolute bottom-4 right-4 h-5 w-5 rounded-br-xl border-b border-r border-accent3/50" aria-hidden />

                <SmartImage
                  src="/profile.webp"
                  alt={`${personalInfo.name}, ${personalInfo.tagline}`}
                  eager
                  sizes="(min-width:1024px) 380px, 80vw"
                  className="aspect-4/5 w-full rounded-[1.7rem]"
                  imgClassName="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                  fallback={<MonogramFallback label={personalInfo.name} />}
                />

                {/* gradient veil over the photo */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-2.5 rounded-[1.7rem] bg-gradient-to-t from-[rgb(7_8_16/0.55)] via-transparent to-transparent opacity-70 mix-blend-multiply dark:opacity-40"
                />

                {/* floating name plate */}
                <motion.div
                  style={{ transform: 'translateZ(40px)' }}
                  className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-[rgb(10_12_22/0.62)] px-3.5 py-2.5 backdrop-blur-md"
                >
                  <span className="min-w-0">
                    <span className="block truncate font-display text-sm font-semibold text-white">
                      {personalInfo.name}
                    </span>
                    <span className="block truncate font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
                      {personalInfo.tagline}
                    </span>
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent3 text-white">
                    <FiArrowUpRight className="h-4 w-4" />
                  </span>
                </motion.div>
              </motion.div>

              {/* orbiting chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-3 top-10 hidden rounded-2xl border border-line bg-surface/90 px-3 py-2 shadow-panel backdrop-blur-xl sm:block"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">Design</p>
                <p className="font-display text-sm font-semibold">Photoshop · Illustrator</p>
                <div className="mt-1.5 h-1 w-28 overflow-hidden rounded-full bg-surface2">
                  <div className="h-full w-[93%] rounded-full bg-gradient-to-r from-accent to-accent3" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute -right-2 bottom-24 rounded-2xl border border-line bg-surface/90 px-3 py-2 text-right shadow-panel backdrop-blur-xl"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">Currently</p>
                <p className="font-display text-sm font-semibold text-accent">B.Sc. in CSE</p>
                <p className="text-[11px] text-muted">Port City Intl. University</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* stat strip */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="panel mt-14 grid grid-cols-2 divide-line/70 md:mt-20 md:grid-cols-4 md:divide-x"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-0.5 px-5 py-4 sm:px-6 sm:py-5 ${i < 2 ? 'border-b border-line/70 md:border-b-0' : ''} ${
                i % 2 === 1 ? 'border-l border-line/70 md:border-l-0' : ''
              }`}
            >
              <dt className="order-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{stat.label}</dt>
              <dd className="order-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">{stat.value}</dd>
              <dd className="order-3 text-xs text-muted">{stat.note}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* tech ticker */}
      <div className="mt-14 border-y border-line/70 bg-surface/40 py-3 backdrop-blur-sm sm:mt-16">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  )
}

export default Hero
