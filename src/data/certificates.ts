export interface Certificate {
  id: number
  name: string
  issuer: string
  year: string
  credentialId?: string
  image: string
  credentialUrl?: string
  description?: string
  skills: string[]
}

export const certificates: Certificate[] = [
  {
    id: 1,
    name: 'Professional Graphics Design',
    issuer: 'Creative IT Institute',
    year: '2023',
    credentialId: 'CIT-CH-PCD-220811501',
    image: '/certificates/graphic-design.webp',
    description:
      'One-year professional programme covering design theory, typography, logo and brand identity, packaging, print production and the Adobe suite. Completed 22 Aug 2022 – 30 Dec 2022.',
    credentialUrl: 'https://www.creativeitinstitute.com/courses/professional-graphics-design',
    skills: ['Brand Identity', 'Typography', 'Print Production', 'Photoshop', 'Illustrator'],
  },
  {
    id: 2,
    name: 'Web Development (MERN)',
    issuer: 'Programming Hero',
    year: '2025',
    image: '',
    description:
      'Structured path through HTML, CSS and JavaScript into React, Node.js, Express and MongoDB — with project-based assessments instead of quizzes.',
    credentialUrl: 'https://www.programming-hero.com/',
    skills: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
  },
]
