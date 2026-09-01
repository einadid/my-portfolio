export interface Education {
  id: number
  degree: string
  field?: string
  institution: string
  location: string
  duration: string
  result?: string
  description?: string
  focus?: string[]
  current?: boolean
}

export const education: Education[] = [
  {
    id: 1,
    degree: 'B.Sc. in Computer Science & Engineering',
    field: 'CSE',
    institution: 'Port City International University',
    location: 'Chattogram, Bangladesh',
    duration: '2023 — Present',
    description:
      'Balancing a full CSE load with client design work. Coursework focuses on programming foundations, data structures, databases and software engineering — the theory behind what I already build for clients.',
    focus: ['Data Structures', 'OOP', 'Database Systems', 'Software Engineering', 'Web Technologies'],
    current: true,
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate (Science)',
    institution: 'Hajigonj Model Govt. College',
    location: 'Chandpur, Bangladesh',
    duration: '2019 — 2021',
    description:
      'Science group with maths and ICT. First exposure to writing real code — visual basic labs, a lot of curiosity and one very slow college computer lab.',
  },
]
