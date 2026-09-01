export interface Experience {
  id: number
  role: string
  company: string
  type: string
  location: string
  duration: string
  description: string
  responsibilities: string[]
  stack?: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    id: 1,
    role: 'Freelance Graphic Designer',
    company: 'Self-employed — international clients',
    type: 'Freelance',
    location: 'Remote',
    duration: '2021 — Present',
    description:
      'Client design work since 2021 across brand identity, marketing and illustration — briefed, delivered and invoiced by me, with repeat clients in retail, food and personal brands.',
    responsibilities: [
      'Translate loose briefs into brand systems: logo, palette, typography, usage rules',
      'Produce monthly social and campaign design for recurring clients',
      'Prepare print-ready artwork with correct bleed, colour profiles and export presets',
      'Run projects end-to-end — scope, timeline, revisions, handover and follow-up',
      'Ship on the agreed date with documented, editable source files every time',
    ],
    stack: ['Illustrator', 'Photoshop', 'Figma', 'Canva', 'InDesign'],
    current: true,
  },
  {
    id: 2,
    role: 'Web Developer — self-driven builds',
    company: 'Independent practice & client projects',
    type: 'Self-directed',
    location: 'Chattogram / Remote',
    duration: '2024 — Present',
    description:
      'Moved from mockups to shipped products: full-stack MERN applications designed and built by me, from database schema to Vercel deployment, plus UI work on team projects.',
    responsibilities: [
      'Build responsive React + Tailwind interfaces with reusable component systems',
      'Design REST APIs in Node/Express with MongoDB and Firebase authentication',
      'Handle role-based flows, payments and dashboards end-to-end',
      'Deploy, monitor and iterate: Vercel, Netlify, custom domains and analytics',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    current: true,
  },
]
