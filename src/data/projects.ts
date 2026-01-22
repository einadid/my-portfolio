export interface Project {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  thumbnail: string
  images: string[]
  techStack: string[]
  category: 'web' | 'design' | 'both'
  liveUrl?: string
  githubUrl?: string
  challenges: string[]
  futurePlans: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Personal Portfolio Website",
    shortDescription: "A modern, responsive portfolio website built with React and Tailwind CSS.",
    fullDescription: "A fully responsive personal portfolio website showcasing my skills, projects, and experience. Built with modern technologies including React, TypeScript, and Tailwind CSS. Features dark/light mode toggle, smooth animations, and optimized performance.",
    thumbnail: "/projects/portfolio/1.jpg",
    images: [
      "/projects/portfolio/1.jpg",
      "/projects/portfolio/2.png",
      "/projects/portfolio/3.png",
      "/projects/portfolio/4.png",
      "/projects/portfolio/5.png"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router"],
    category: "web",
    liveUrl: "https://einadid.vercel.app",
    githubUrl: "https://github.com/einadid/my-portfolio.git",
    challenges: [
      "Implementing smooth dark/light theme switching",
      "Creating responsive layouts for all screen sizes",
      "Optimizing performance and load times"
    ],
    futurePlans: [
      "Add blog section for sharing knowledge",
      "Implement contact form with email integration",
      "Add more interactive animations"
    ],
    featured: true
  },
  {
    id: "2",
    name: "Brand Identity Design Collection",
    shortDescription: "A collection of brand identity designs created for various clients.",
    fullDescription: "A comprehensive showcase of brand identity projects including logo design, color palettes, typography, and brand guidelines. Each project demonstrates my ability to create cohesive visual identities that effectively communicate brand values.",
    thumbnail: "/projects/brand-design/thmb.png",
    images: [
      "/projects/brand-design/thmb.png"
    ],
    techStack: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva"],
    category: "design",
    liveUrl: "https://www.behance.net/gallery/158498809/Business-card-or-stationery",
    githubUrl: "https://www.behance.net/einadid",
    challenges: [
      "Understanding diverse client requirements",
      "Creating unique designs that stand out",
      "Balancing creativity with brand guidelines"
    ],
    futurePlans: [
      "Expand into motion graphics"
    ],
    featured: true
  },
 {
  id: "3",
  name: "QuickMed Pharmacy Website",
  shortDescription: "A dynamic pharmacy management and e-commerce website.",
  fullDescription: "QuickMed Pharmacy Website is a dynamic web-based pharmacy system developed using PHP and CSS. The project includes user authentication, online ordering, and billing features with a clean and responsive interface. It is hosted on InfinityFree, demonstrating a complete full-stack web application.",
  thumbnail: "/projects/quickmed/1.png",
  images: [
    "/projects/quickmed/1.png",
    "/projects/quickmed/2.png",
    "/projects/quickmed/3.png",
    "/projects/quickmed/4.png",
    "/projects/quickmed/5.png",
    "/projects/quickmed/6.png",
    "/projects/quickmed/7.png",
  ],
  techStack: [
    "PHP",
    "HTML5",
    "CSS3",
    "MySQL",
    "JavaScript (Basic)",
    "VS Code",
    "InfinityFree Hosting",
    "phpMyAdmin"
  ],
  category: "web",
  liveUrl: "https://quickmed.free.nf/",
  githubUrl: "https://github.com/einadid/quickmed.git",
  challenges: [
    "Connecting frontend pages with PHP backend logic",
    "Managing medicine data using MySQL",
    "Deploying and configuring the project on InfinityFree"
  ],
  futurePlans: [
    "Add online payment gateway integration",
    "Enhance UI/UX design for better user experience"
  ],
  featured: true
},
{
  id: "4",
  name: "HomeHero – Local Household Service Finder",
  shortDescription: "A full-stack platform connecting homeowners with trusted local service professionals.",
  fullDescription: "HomeHero is a modern full-stack web application that connects homeowners with local service providers such as electricians, plumbers, and cleaners. Users can browse services, book appointments, manage bookings, and leave verified reviews. Service providers can list services, manage requests, and track their business through a dedicated dashboard. The platform features secure authentication, a robust booking system, and a modern UI with glassmorphism and 3D interactions.",
  thumbnail: "/projects/homehero/thumb.png",
  images: [
    "/projects/homehero/1.png",
    "/projects/homehero/2.png",
    "/projects/homehero/3.png",
    "/projects/homehero/4.png",
    "/projects/homehero/5.png"
  ],
  techStack: [
    "React.js (Vite)",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase Authentication",
    "JWT",
    "Vercel (Client & Server Deployment)",
    "GitHub",
    "ImgBB Image Hosting API",
    "Firebase Console",
    "Postman"
  ],
  category: "web",
  liveUrl: "https://homehero-client.vercel.app/",
  githubUrl: "https://github.com/einadid/homehero-client-v2.git",
  challenges: [
    "Implementing secure authentication with JWT and Firebase",
    "Designing a role-based booking system for clients and providers",
    "Managing real-time booking status updates",
    "Building a modern and responsive UI with animations"
  ],
  futurePlans: [
    "Real-time chat between clients and service providers",
    "Payment gateway integration (Stripe / SSLCommerz)",
    "Admin dashboard for user and service management",
    "Email notifications for booking updates"
  ],
  featured: true
}
,
  {
    id: "5",
    name: "Social Media Graphics Pack",
    shortDescription: "A comprehensive social media graphics package for businesses.",
    fullDescription: "A complete social media graphics package including post templates, story templates, highlight covers, and promotional banners designed for various platforms like Instagram, Facebook, and LinkedIn.",
    thumbnail: "/projects/social-media/2.jpg",
    images: [
      "/projects/social-media/1.jpg",
      "/projects/social-media/2.jpg",
      "/projects/social-media/3.jpg",
      "/projects/social-media/4.jpg",
      "/projects/social-media/5.jpg"
    ],
    techStack: ["Adobe Photoshop", "Canva", "Adobe Illustrator"],
    category: "design",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Creating consistent brand identity across platforms",
      "Designing for different aspect ratios",
      "Balancing text and visuals"
    ],
    futurePlans: [
      "Add animated post templates",
      "Create video thumbnail templates",
      "Expand to TikTok and YouTube formats"
    ],
    featured: false
  },
{
  id: "6",
  name: "TicketBari – Online Ticket Booking Platform",
  shortDescription: "A MERN stack platform for booking bus, train, launch, and plane tickets online.",
  fullDescription: "TicketBari is a full-featured online ticket booking platform that allows users to search, filter, and book tickets for Bus, Train, Launch, and Plane journeys. The system supports three user roles—User, Vendor, and Admin—with role-based dashboards, secure authentication, Stripe payment integration, booking status tracking, and a modern responsive UI with dark and light mode support.",
  thumbnail: "/projects/ticketbari/thumb.png",
  images: [
    "/projects/ticketbari/1.png",
    "/projects/ticketbari/2.png",
    "/projects/ticketbari/3.png",
    "/projects/ticketbari/4.png",
    "/projects/ticketbari/5.png",
    "/projects/ticketbari/6.png", 
    "/projects/ticketbari/7.png"
  ],
  techStack: [
    "React (Vite)",
    "Tailwind CSS",
    "DaisyUI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase Authentication",
    "JWT",
    "Stripe"
  ],
  category: "web",
  liveUrl: "https://ticketbari-client.vercel.app",
  githubUrl: "https://github.com/einadid/ticketbari-project-client",
  challenges: [
    "Implementing role-based access for User, Vendor, and Admin",
    "Integrating secure Stripe payment with booking flow",
    "Handling complex state and data fetching across dashboards",
    "Optimizing performance for large ticket datasets"
  ],
  futurePlans: [
    "Add real-time chat between users and vendors",
    "Implement email and SMS notifications",
    "Build an admin analytics dashboard",
    "Add mobile app version"
  ],
  featured: true
},
{
  id: "7",
  name: "GameHub – A Modern Game Library",
  shortDescription: "An immersive single-page application for discovering and supporting game developers.",
  fullDescription: "GameHub is a modern and interactive online game library built as a single-page application. It allows users to explore popular and upcoming games through a visually rich, urban-themed UI. The platform features secure authentication, protected routes, advanced animations, interactive effects, and a fully responsive design to deliver an engaging gaming-inspired user experience.",
  thumbnail: "/projects/gamehub/thumb.png",
  images: [
    "/projects/gamehub/7.png",
    "/projects/gamehub/2.png",
    "/projects/gamehub/3.png",
    "/projects/gamehub/4.png",
    "/projects/gamehub/5.png",
    "/projects/gamehub/6.png",
    "/projects/gamehub/8.png"
  ],
  techStack: [
    "React",
    "Vite",
    "Tailwind CSS",
    "DaisyUI",
    "Firebase Authentication",
    "Firebase Firestore",
    "Framer Motion",
    "GSAP",
    "Swiper.js"
  ],
  category: "web",
  liveUrl: "https://gamehubhero.netlify.app",
  githubUrl: "https://github.com/einadid/gamehub-client",
  challenges: [
    "Implementing complex animations without affecting performance",
    "Managing protected routes with Firebase authentication",
    "Creating immersive UI effects while maintaining responsiveness",
    "Synchronizing multiple animation libraries smoothly"
  ],
  futurePlans: [
    "Add user game reviews and ratings",
    "Introduce game developer profiles",
    "Implement favorites and wishlist system",
    "Add community features such as comments or forums"
  ],
  featured: true
},
  {
    id: "8",
    name: "Weather Dashboard",
    shortDescription: "A weather application with beautiful UI and accurate forecasts.",
    fullDescription: "A weather dashboard application that displays current weather conditions, hourly and weekly forecasts, with beautiful animations and a clean user interface.",
    thumbnail: "/projects/weather/thumb.png",
    images: [
      "/projects/weather/1.png",
      "/projects/weather/2.png"
    ],
    techStack: ["React", "OpenWeather API", "Tailwind CSS"],
    category: "web",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Working with weather APIs",
      "Creating weather-based animations",
      "Handling geolocation"
    ],
    futurePlans: [
      "Add severe weather alerts",
      "Implement location search",
      "Add weather widgets"
    ],
    featured: false
  },
  {
    id: "9",
    name: "Business Card Designs",
    shortDescription: "Professional business card designs for corporate clients.",
    fullDescription: "A collection of professional business card designs featuring modern layouts, creative typography, and brand-consistent color schemes for various corporate clients.",
    thumbnail: "/projects/business-cards/thumb.png",
    images: [
      "/projects/business-cards/1.png",
      "/projects/business-cards/2.png",
      "/projects/business-cards/3.png"
    ],
    techStack: ["Adobe Illustrator", "Adobe InDesign", "Photoshop"],
    category: "design",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Fitting information in limited space",
      "Ensuring print-ready quality",
      "Creating memorable designs"
    ],
    futurePlans: [
      "Add digital business cards",
      "Create QR code integration",
      "Offer custom shapes"
    ],
    featured: false
  },
  {
    id: "10",
    name: "Blog Platform",
    shortDescription: "A modern blogging platform with rich text editing.",
    fullDescription: "A full-featured blogging platform with user authentication, rich text editing, image uploads, comments, and social sharing capabilities.",
    thumbnail: "/projects/blog/thumb.png",
    images: [
      "/projects/blog/1.png",
      "/projects/blog/2.png",
      "/projects/blog/3.png"
    ],
    techStack: ["Next.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
    category: "web",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Implementing rich text editor",
      "Optimizing image uploads",
      "SEO optimization"
    ],
    futurePlans: [
      "Add newsletter feature",
      "Implement analytics",
      "Add monetization options"
    ],
    featured: false
  }
]