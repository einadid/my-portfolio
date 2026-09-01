export interface Service {
  id: string
  index: string
  title: string
  blurb: string
  deliverables: string[]
  startingAt?: string
  icon: 'brand' | 'social' | 'frontend' | 'app' | 'illustration'
}

export const services: Service[] = [
  {
    id: 'brand-identity',
    index: '01',
    title: 'Brand Identity & Logo Design',
    blurb:
      'Marks, type and colour systems that hold up on a shop board and in a favicon — with the guidelines to keep them that way.',
    deliverables: ['Logo + wordmark + monogram', 'Colour & type system', 'Brand guideline PDF', 'Stationery set'],
    startingAt: 'From 2 concepts, 3 revisions',
    icon: 'brand',
  },
  {
    id: 'social-marketing',
    index: '02',
    title: 'Social & Marketing Design',
    blurb:
      'Feed posts, stories, banners and ad creative built on a grid, delivered in every ratio your platforms actually ask for.',
    deliverables: ['Post & story templates', 'Ad banners, all sizes', 'Editable Canva handoff', 'Thumbnail & cover art'],
    startingAt: 'Per-campaign or monthly kit',
    icon: 'social',
  },
  {
    id: 'frontend-build',
    index: '03',
    title: 'Frontend Development',
    blurb:
      'Your design turned into a fast, responsive React + Tailwind build — accessible states, real content, no template bloat.',
    deliverables: ['React / TypeScript build', 'Responsive to 320px', 'Dark & light theming', 'Core Web Vitals pass'],
    startingAt: 'Landing pages to 10-screen apps',
    icon: 'frontend',
  },
  {
    id: 'web-app-uiux',
    index: '04',
    title: 'Web App UI / UX',
    blurb:
      'Dashboards, booking flows and admin panels: the boring screens designed so carefully that nobody has to ask how they work.',
    deliverables: ['Flows & wireframes', 'Component library', 'Interactive Figma prototype', 'Handoff specs'],
    startingAt: 'Discovery-first, 1–2 weeks',
    icon: 'app',
  },
  {
    id: 'illustration',
    index: '05',
    title: 'Illustration & Artwork',
    blurb:
      'Custom vector illustration for apps, packaging and campaigns — including empty states that don’t look like stock art.',
    deliverables: ['Vector scenes & spot art', 'Icon set (24/48px grid)', 'Print-ready artwork', 'Source files included'],
    startingAt: 'Per piece or per set',
    icon: 'illustration',
  },
]

export interface ProcessStep {
  step: string
  title: string
  description: string
  duration: string
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Brief & audit',
    description:
      'A short call or a written brief. I read what you already have, ask the annoying questions, and write back the goal in one sentence you can disagree with.',
    duration: 'Day 1–2',
  },
  {
    step: '02',
    title: 'Design direction',
    description:
      'Two or three real directions — mood, type, colour, layout — with rationale. You pick one, we stop redesigning decisions that were never made.',
    duration: 'Week 1',
  },
  {
    step: '03',
    title: 'Build & refine',
    description:
      'Pixels become components, components become pages. Weekly preview link, comments handled in the doc, revisions batched so nothing churns.',
    duration: 'Week 2–3',
  },
  {
    step: '04',
    title: 'Handover & support',
    description:
      'Deploy, source files, a short handover note and 14 days of fixes included. You own everything when we are done.',
    duration: 'Week 4',
  },
]
