export type ProjectCategory = 'web' | 'design'
export type ProjectStatus = 'live' | 'progress'

export interface Project {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  thumbnail: string
  images: string[]
  techStack: string[]
  category: ProjectCategory
  status: ProjectStatus
  year: string
  role: string
  client?: string
  highlights: string[]
  liveUrl?: string
  githubUrl?: string
  behanceUrl?: string
  challenges: string[]
  futurePlans: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'homehero',
    name: 'HomeHero',
    shortDescription:
      'A full-stack marketplace that connects homeowners with trusted local electricians, plumbers and cleaners.',
    fullDescription:
      'HomeHero is a two-sided service marketplace. Homeowners browse providers by category, check ratings and availability, and book a slot in a few taps. Providers publish their services, accept or decline requests and manage their pipeline from a dedicated dashboard. The UI leans on layered glass panels, soft 3D depth and motion that stays at 60fps on mid-range phones, while the API handles JWT sessions, role-based routes and booking state transitions.',
    thumbnail: '/projects/homehero/cover.webp',
    images: [
      '/projects/homehero/1.webp',
      '/projects/homehero/2.webp',
      '/projects/homehero/3.webp',
      '/projects/homehero/4.webp',
      '/projects/homehero/5.webp',
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth', 'JWT'],
    category: 'web',
    status: 'live',
    year: '2025',
    role: 'Full-stack developer & UI designer',
    highlights: [
      'Two roles — client & provider — with one shared design system',
      'Booking flow reduced to 3 steps with optimistic state updates',
      'Deployed on Vercel with a live REST API',
    ],
    liveUrl: 'https://homehero-client.vercel.app/',
    githubUrl: 'https://github.com/einadid/homehero-client-v2.git',
    challenges: [
      'Designing a booking system that works for two completely different user roles',
      'Keeping Firebase Auth and JWT sessions in sync without forcing re-logins',
      'Animating glass panels and 3D cards without dropping frames on low-end devices',
      'Uploading and serving provider images through the ImgBB API',
    ],
    futurePlans: [
      'Real-time chat between clients and providers',
      'Stripe / SSLCommerz payment integration',
      'Admin dashboard for moderation and disputes',
      'Email notifications on booking status changes',
    ],
    featured: true,
  },
  {
    id: 'ticketbari',
    name: 'TicketBari',
    shortDescription:
      'Bus, train, launch and plane ticket booking platform with vendor and admin dashboards.',
    fullDescription:
      'TicketBari lets travellers search across four transport types, filter by time, operator and fare class, and pay through Stripe. Vendors publish trips, set seats and watch occupancy in real time; admins approve vendors, manage routes and read analytics. Three role-scoped dashboards share one component library, and dark/light mode is first-class rather than an afterthought.',
    thumbnail: '/projects/ticketbari/cover.webp',
    images: [
      '/projects/ticketbari/1.webp',
      '/projects/ticketbari/2.webp',
      '/projects/ticketbari/3.webp',
      '/projects/ticketbari/4.webp',
      '/projects/ticketbari/5.webp',
      '/projects/ticketbari/6.webp',
      '/projects/ticketbari/7.webp',
    ],
    techStack: ['React', 'Tailwind CSS', 'DaisyUI', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Firebase Auth'],
    category: 'web',
    status: 'live',
    year: '2025',
    role: 'Frontend lead & UI designer',
    highlights: [
      'Seat-level booking with live inventory locking',
      'Three role-based dashboards on a single design system',
      'Stripe checkout wired into the booking lifecycle',
    ],
    liveUrl: 'https://ticketbari-client.vercel.app',
    githubUrl: 'https://github.com/einadid/ticketbari-project-client',
    challenges: [
      'Role-based access control for User, Vendor and Admin without duplicating UI',
      'Keeping payment state and booking state consistent if a request fails halfway',
      'Large ticket datasets — virtualised lists and cached filters',
      'Designing one dark theme that works across three dashboard densities',
    ],
    futurePlans: [
      'Live chat between travellers and vendors',
      'Email + SMS notifications for itinerary changes',
      'Admin analytics with revenue and route performance',
      'Native mobile app built on the same API',
    ],
    featured: true,
  },
  {
    id: 'gamehub',
    name: 'GameHub',
    shortDescription:
      'An immersive single-page game library with rich motion, protected routes and a dark urban aesthetic.',
    fullDescription:
      'GameHub is a game discovery platform built as a single-page app. Visitors browse trending and upcoming titles, open cinematic detail views, and support indie developers directly. The interface is deliberately loud — layered gradients, GSAP scroll choreography, Swiper carousels and Framer Motion micro-interactions — balanced against lazy-loaded media so the first paint stays fast. Firebase handles auth and Firestore-backed favourites.',
    thumbnail: '/projects/gamehub/cover.webp',
    images: [
      '/projects/gamehub/thumb.webp',
      '/projects/gamehub/2.webp',
      '/projects/gamehub/3.webp',
      '/projects/gamehub/4.webp',
      '/projects/gamehub/5.webp',
      '/projects/gamehub/6.webp',
      '/projects/gamehub/8.webp',
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'DaisyUI', 'Framer Motion', 'GSAP', 'Swiper', 'Firebase'],
    category: 'web',
    status: 'live',
    year: '2025',
    role: 'Developer & motion designer',
    highlights: [
      'Scroll-driven storytelling with GSAP + Framer Motion together',
      'Protected routes and Firebase auth with optimistic UI',
      'Heavy media kept fast with lazy loading and skeleton states',
    ],
    liveUrl: 'https://gamehubhero.netlify.app',
    githubUrl: 'https://github.com/einadid/gamehub-client',
    challenges: [
      'Running three animation libraries without fighting over the same elements',
      'Keeping protected routes snappy while auth state is still resolving',
      'Immersive full-bleed artwork on mobile data connections',
    ],
    futurePlans: [
      'User reviews and ratings',
      'Developer profiles and direct support links',
      'Wishlist and personal library sync',
      'Community comments per title',
    ],
    featured: true,
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity Collection',
    shortDescription:
      'Logo systems, colour languages and brand guidelines built for small businesses and personal labels.',
    fullDescription:
      'A selection of identity projects delivered between 2021 and 2025: wordmarks, monograms, stationery, packaging mockups and social kits. Each one starts with a mood board and a written positioning note, ends with a scalable vector system, and is stress-tested at favicon size and at billboard size. The strongest of these were also animated for launch reels.',
    thumbnail: '/projects/brand-design/cover.webp',
    images: ['/projects/brand-design/thmb.webp'],
    techStack: ['Illustrator', 'Photoshop', 'Figma', 'Brand Strategy', 'Print Production'],
    category: 'design',
    status: 'live',
    year: '2021 — 2025',
    role: 'Brand & identity designer',
    client: 'Confidential client work',
    highlights: [
      'Logo, wordmark, monogram and stationery sets for small businesses',
      'Full guideline documents: type scale, colour, spacing, misuse rules',
      'Print-ready artwork with correct bleed and colour profiles',
    ],
    behanceUrl: 'https://www.behance.net/gallery/158498809/Business-card-or-stationery',
    githubUrl: 'https://www.behance.net/einadid',
    challenges: [
      'Turning vague briefs like “make it premium” into measurable design decisions',
      'Keeping one identity legible from a stamp to a billboard',
      'Balancing client taste against what the brand actually needs',
    ],
    futurePlans: ['Motion identity kits for each brand', 'Packaging case studies with photography'],
    featured: true,
  },
  {
    id: 'quickmed',
    name: 'QuickMed Pharmacy',
    shortDescription:
      'Pharmacy web system with authentication, catalogue search, online ordering and billing.',
    fullDescription:
      'QuickMed is a working pharmacy platform built on PHP and MySQL. Customers browse a searchable medicine catalogue, add items to a cart, place orders and receive an itemised bill; the admin side manages stock, prices and order status. The project was my first end-to-end experience of sessions, relational schema design and deploying a real database-backed app to shared hosting.',
    thumbnail: '/projects/quickmed/cover.webp',
    images: [
      '/projects/quickmed/1.webp',
      '/projects/quickmed/2.webp',
      '/projects/quickmed/3.webp',
      '/projects/quickmed/4.webp',
      '/projects/quickmed/5.webp',
      '/projects/quickmed/6.webp',
      '/projects/quickmed/7.webp',
    ],
    techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'phpMyAdmin'],
    category: 'web',
    status: 'live',
    year: '2024',
    role: 'Sole developer',
    highlights: [
      'Relational schema for medicines, stock and orders',
      'Session-based auth with separate admin panel',
      'Printable itemised billing from any order',
    ],
    liveUrl: 'https://quickmed.free.nf/',
    githubUrl: 'https://github.com/einadid/quickmed.git',
    challenges: [
      'Connecting server-rendered pages with session state on shared hosting',
      'Modelling stock, expiry and dosage without over-engineering the schema',
      'Deploying and configuring MySQL through InfinityFree and phpMyAdmin',
    ],
    futurePlans: [
      'Payment gateway integration',
      'Prescription upload for pharmacist review',
      'Rebuild the front end as a React SPA on the same API',
    ],
    featured: false,
  },
  {
    id: 'social-media-kit',
    name: 'Social Media Graphics Pack',
    shortDescription:
      'Post templates, story sets and highlight covers designed for Instagram, Facebook and LinkedIn.',
    fullDescription:
      'A production-ready social kit: feed posts, stories, carousel frames, highlight covers and promo banners, all built on one grid so a brand looks identical across aspect ratios. Every template ships with editable layer names, a defined type scale and safe zones so non-designers on the client team can swap copy without breaking the layout.',
    thumbnail: '/projects/social-media/cover.webp',
    images: [
      '/projects/social-media/1.webp',
      '/projects/social-media/2.webp',
      '/projects/social-media/3.webp',
      '/projects/social-media/4.webp',
      '/projects/social-media/5.webp',
    ],
    techStack: ['Photoshop', 'Illustrator', 'Canva', 'Figma'],
    category: 'design',
    status: 'live',
    year: '2023',
    role: 'Designer',
    client: 'Various client brands',
    highlights: [
      'One grid, five formats — 1:1, 4:5, 9:16, 16:9, 1.91:1',
      'Editable Canva handover so clients ship without a designer',
      'One template system instead of ad-hoc files per platform',
    ],
    challenges: [
      'Keeping hierarchy readable at thumb size in a crowded feed',
      'Designing text-safe zones around platform UI overlays',
      'Export pipelines that survive nine different compression passes',
    ],
    futurePlans: ['Animated reel covers and motion templates', 'TikTok and YouTube Shorts formats'],
    featured: false,
  },
  {
    id: 'portfolio-site',
    name: 'This Portfolio',
    shortDescription:
      'The site you are on — a React + Tailwind portfolio with a dark-first design system.',
    fullDescription:
      'A rebuild of my own portfolio as a design-system exercise: one set of colour tokens driving both themes, a display/body/mono type scale, scroll-linked reveals that respect reduced-motion preferences, and images converted to WebP with responsive crops. Lighthouse-friendly, keyboard-navigable, and deployed on Vercel.',
    thumbnail: '/projects/portfolio/cover.webp',
    images: [
      '/projects/portfolio/1.webp',
      '/projects/portfolio/2.webp',
      '/projects/portfolio/3.webp',
      '/projects/portfolio/4.webp',
      '/projects/portfolio/5.webp',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    category: 'web',
    status: 'live',
    year: '2026',
    role: 'Designer & developer',
    highlights: [
      'Token-driven theming — light and dark from one variable set',
      'WebP images and font preconnect for a fast first paint',
      'Reduced-motion and focus-visible support built in',
    ],
    liveUrl: 'https://einadid.vercel.app',
    githubUrl: 'https://github.com/einadid/my-portfolio.git',
    challenges: [
      'Making one component library look intentional in two very different themes',
      'Motion that feels premium without blocking interaction',
      'Serving heavy design screenshots without wrecking load time',
    ],
    futurePlans: ['A writing section for design and front-end notes', 'CMS-backed project entries'],
    featured: false,
  },
  {
    id: 'weather-dashboard',
    name: 'Weather Dashboard',
    shortDescription:
      'Forecast dashboard with geolocation search and weather-driven animation. Currently in build.',
    fullDescription:
      'A weather dashboard built on the OpenWeather API: current conditions, an hourly strip, a seven-day forecast, saved cities and animated backgrounds that respond to the actual sky. The layout is done, the data layer is half-wired — I am shipping it in the open and will replace this card with screenshots and a live link when it goes out.',
    thumbnail: '',
    images: [],
    techStack: ['React', 'Tailwind CSS', 'OpenWeather API'],
    category: 'web',
    status: 'progress',
    year: '2026',
    role: 'Solo project',
    highlights: ['Geolocation + text search', 'Animated conditions', 'Saved cities with localStorage'],
    challenges: ['Caching API responses to stay inside rate limits', 'Translating eight weather codes into four design moods'],
    futurePlans: ['Severe weather alerts', 'Widget-style embed for my own site'],
    featured: false,
  },
  {
    id: 'business-cards',
    name: 'Business Card Series',
    shortDescription: 'Print-first business cards with foil, spot UV and die-cut experiments.',
    fullDescription:
      'A small ongoing series of business card designs exploring material as part of the identity: soft-touch laminate, spot UV, letterpress and one die-cut corner. Each card is designed at 3:2 with 3mm bleed and tested on the actual printer stock before handover. Case photos are being shot — this entry will be filled in with the final set.',
    thumbnail: '',
    images: [],
    techStack: ['Illustrator', 'InDesign', 'Photoshop', 'Print Production'],
    category: 'design',
    status: 'progress',
    year: '2026',
    role: 'Designer',
    highlights: ['3mm bleed, CMYK proofing, spot UV layers', 'Soft-touch and letterpress finishes tested'],
    challenges: ['Legibility at card scale with heavy ink coverage', 'Keeping one concept across four different paper stocks'],
    futurePlans: ['NFC digital card', 'QR handoff to portfolio and vCard'],
    featured: false,
  },
  {
    id: 'blog-platform',
    name: 'Blog Platform',
    shortDescription: 'A writing platform with rich-text editing, tags and MDX-friendly posts.',
    fullDescription:
      'A blog engine I want to use for my own notes: markdown-first editing, image uploads through Cloudinary, tags, reading time, comment threads and a CMS-light admin. The schema and editor prototype exist; front end is next. Shown here as an open commitment rather than finished work.',
    thumbnail: '',
    images: [],
    techStack: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Cloudinary'],
    category: 'web',
    status: 'progress',
    year: '2026',
    role: 'Solo project',
    highlights: ['Markdown + MDX authoring', 'Reading time and tag search', 'SEO-ready post schema'],
    challenges: ['Designing an editor that feels good on a laptop and a phone', 'Keeping images optimised without a build step'],
    futurePlans: ['Newsletter subscribe', 'Analytics dashboard for writers'],
    featured: false,
  },
]

export const liveProjects = projects.filter((p) => p.status === 'live')
export const workInProgressProjects = projects.filter((p) => p.status === 'progress')

export const getProject = (id?: string) => projects.find((p) => p.id === id)

export const categoryLabels: Record<ProjectCategory, string> = {
  web: 'Web Development',
  design: 'Graphic Design',
}
