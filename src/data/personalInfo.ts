export const personalInfo = {
  name: 'Emamul Islam Nadid',
  firstName: 'Emamul Islam',
  lastName: 'Nadid',
  initials: 'EN',
  tagline: 'Graphic Designer & Web Developer',
  headline: ['Graphic Designer', 'Frontend Developer', 'Visual Problem Solver', 'React Enthusiast'],
  shortBio:
    'I turn rough ideas into clean, memorable design — and then build it for the web. Three years of client-level graphic design, now shipping responsive React interfaces with the same attention to detail.',
  availability: 'Available for freelance & remote work',

  // Contact
  email: 'einadid0123@gmail.com',
  phone: '+8801678791177',
  phoneDisplay: '+880 1678 791177',
  whatsapp: '+8801678791177',
  location: 'South Khulshi, Chattogram, Bangladesh',
  city: 'Chattogram, BD',
  timezone: 'Asia/Dhaka',

  // Social links
  github: 'https://github.com/einadid',
  linkedin: 'https://linkedin.com/in/einadid',
  youtube: 'https://youtube.com/@einadid',
  behance: 'https://www.behance.net/einadid',
  facebook: '',
  twitter: '',

  // Resume
  resumeUrl: '/resume.pdf',

  // About — long form
  about: {
    intro:
      'I am a freelance graphic designer with 3+ years of professional experience across branding, illustration and marketing design. Today I work at the seam between design and code: I design the interface, then build it as a fast, accessible React application.',
    journey:
      'Design came first — logos, posters and full brand systems for clients in Bangladesh and abroad, learned the hard way through real deadlines and real feedback. Programming followed because I wanted to ship the things I was drawing. I study Computer Science and Engineering at Port City International University and keep building: dashboards, booking platforms and marketing sites.',
    workEnjoy:
      'I like problems that end in something usable. A booking flow that finally makes sense, a landing page that loads in under a second, a brand mark that survives being shrunk to a favicon. I care about typography, spacing, states, empty screens — the unglamorous 20% that decides whether a product feels finished.',
    hobbies:
      'Badminton on the roof, long night coding sessions with music, sketching in a paper notebook, and tearing apart other people’s portfolios to see how they did that one animation.',
    languages: ['Bangla (native)', 'English (professional)'],
  },

  // Facts
  dob: 'June 18, 2002',
  /** First paid design commission — everything "years of experience" is derived from this. */
  since: 2021,
} as const

export type PersonalInfo = typeof personalInfo
