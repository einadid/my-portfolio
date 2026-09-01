export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  id: string
  category: string
  blurb: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    category: 'Frontend',
    blurb: 'Interfaces, state, motion',
    skills: [
      { name: 'React.js', level: 82 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'TypeScript', level: 70 },
      { name: 'JavaScript (ES2023)', level: 84 },
      { name: 'HTML5 & semantics', level: 92 },
      { name: 'CSS3 / animations', level: 86 },
      { name: 'Bootstrap / DaisyUI', level: 78 },
    ],
  },
  {
    id: 'backend',
    category: 'Backend',
    blurb: 'APIs, data, auth',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Express.js', level: 68 },
      { name: 'MongoDB / Mongoose', level: 72 },
      { name: 'MySQL', level: 62 },
      { name: 'PHP', level: 60 },
      { name: 'Firebase Auth', level: 74 },
      { name: 'REST API design', level: 66 },
    ],
  },
  {
    id: 'design',
    category: 'Design',
    blurb: 'Brand, layout, pixels',
    skills: [
      { name: 'Adobe Photoshop', level: 95 },
      { name: 'Adobe Illustrator', level: 90 },
      { name: 'Figma', level: 86 },
      { name: 'Canva', level: 92 },
      { name: 'Logo & brand identity', level: 90 },
      { name: 'UI / UX design', level: 78 },
      { name: 'Adobe XD', level: 72 },
    ],
  },
  {
    id: 'languages',
    category: 'CS Fundamentals',
    blurb: 'University core',
    skills: [
      { name: 'C', level: 68 },
      { name: 'C++', level: 64 },
      { name: 'Python', level: 66 },
      { name: 'Java', level: 55 },
      { name: 'Data structures', level: 60 },
      { name: 'OOP & design', level: 66 },
    ],
  },
  {
    id: 'workflow',
    category: 'Workflow',
    blurb: 'Ship, review, iterate',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Vite / npm tooling', level: 76 },
      { name: 'Postman', level: 68 },
      { name: 'VS Code workflow', level: 90 },
      { name: 'Vercel / Netlify deploy', level: 78 },
      { name: 'Web performance', level: 64 },
    ],
  },
]

/** Everything the flat "toolbelt" grid shows. */
export const toolbelt: { name: string; kind: 'code' | 'design' | 'ship' }[] = [
  { name: 'React', kind: 'code' },
  { name: 'TypeScript', kind: 'code' },
  { name: 'Tailwind CSS', kind: 'code' },
  { name: 'Node.js', kind: 'code' },
  { name: 'Express', kind: 'code' },
  { name: 'MongoDB', kind: 'code' },
  { name: 'Framer Motion', kind: 'code' },
  { name: 'Vite', kind: 'code' },
  { name: 'Photoshop', kind: 'design' },
  { name: 'Illustrator', kind: 'design' },
  { name: 'Figma', kind: 'design' },
  { name: 'Canva', kind: 'design' },
  { name: 'After Effects', kind: 'design' },
  { name: 'Git & GitHub', kind: 'ship' },
  { name: 'Vercel', kind: 'ship' },
  { name: 'Netlify', kind: 'ship' },
  { name: 'Postman', kind: 'ship' },
  { name: 'Firebase', kind: 'ship' },
]

/** Marquee strip in the hero. */
export const marqueeItems = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'MongoDB',
  'Photoshop',
  'Illustrator',
  'Figma',
  'Brand Identity',
  'Next.js',
  'Express',
  'UI/UX',
  'Illustration',
]

/** Headline numbers for the hero strip. `liveProjects` is passed in so it stays accurate. */
export function getStats(liveProjectCount: number, sinceYear = 2021) {
  const years = new Date().getFullYear() - sinceYear
  return [
    { value: `${years}+`, label: 'Years designing', note: `client work since ${sinceYear}` },
    { value: String(liveProjectCount), label: 'Projects shipped', note: 'each with a case study' },
    { value: String(skillCategories.length), label: 'Practice areas', note: 'design, code, workflow' },
    { value: '< 24h', label: 'Reply time', note: 'usually much faster' },
  ] as const
}
