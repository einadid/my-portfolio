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
    thumbnail: "/projects/brand-design/thumb.png",
    images: [
      "/projects/brand-design/1.png",
      "/projects/brand-design/2.png",
      "/projects/brand-design/3.png"
    ],
    techStack: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva"],
    category: "design",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Understanding diverse client requirements",
      "Creating unique designs that stand out",
      "Balancing creativity with brand guidelines"
    ],
    futurePlans: [
      "Expand into motion graphics",
      "Create animated logo versions",
      "Develop comprehensive brand books"
    ],
    featured: true
  },
  {
    id: "3",
    name: "E-commerce UI/UX Design",
    shortDescription: "Complete UI/UX design for an e-commerce platform.",
    fullDescription: "A full UI/UX design project for an e-commerce platform, including user research, wireframes, high-fidelity mockups, and interactive prototypes. The design focuses on user experience, accessibility, and modern aesthetics.",
    thumbnail: "/projects/ecommerce/thumb.png",
    images: [
      "/projects/ecommerce/1.png",
      "/projects/ecommerce/2.png",
      "/projects/ecommerce/3.png",
      "/projects/ecommerce/4.png",
      "/projects/ecommerce/5.png"
    ],
    techStack: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    category: "design",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Creating intuitive navigation for complex product categories",
      "Designing for both mobile and desktop experiences",
      "Ensuring accessibility compliance"
    ],
    futurePlans: [
      "Convert designs to React components",
      "Add micro-interactions and animations",
      "Create a design system documentation"
    ],
    featured: true
  },
  {
    id: "4",
    name: "Restaurant Website",
    shortDescription: "A beautiful restaurant website with online menu and reservation system.",
    fullDescription: "A fully functional restaurant website featuring an interactive menu, online table reservation system, and a gallery showcasing the restaurant's ambiance and dishes.",
    thumbnail: "/projects/restaurant/thumb.png",
    images: [
      "/projects/restaurant/1.png",
      "/projects/restaurant/2.png",
      "/projects/restaurant/3.png"
    ],
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    category: "web",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Implementing real-time reservation system",
      "Creating an appealing food gallery",
      "Mobile-first responsive design"
    ],
    futurePlans: [
      "Add online ordering system",
      "Implement payment gateway",
      "Add customer reviews section"
    ],
    featured: true
  },
  {
    id: "5",
    name: "Social Media Graphics Pack",
    shortDescription: "A comprehensive social media graphics package for businesses.",
    fullDescription: "A complete social media graphics package including post templates, story templates, highlight covers, and promotional banners designed for various platforms like Instagram, Facebook, and LinkedIn.",
    thumbnail: "/projects/social-media/thumb.png",
    images: [
      "/projects/social-media/1.png",
      "/projects/social-media/2.png",
      "/projects/social-media/3.png",
      "/projects/social-media/4.png"
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
    featured: true
  },
  {
    id: "6",
    name: "Task Management App",
    shortDescription: "A productivity app for managing tasks and projects efficiently.",
    fullDescription: "A full-featured task management application with drag-and-drop functionality, project organization, deadline tracking, and team collaboration features.",
    thumbnail: "/projects/task-app/thumb.png",
    images: [
      "/projects/task-app/1.png",
      "/projects/task-app/2.png",
      "/projects/task-app/3.png"
    ],
    techStack: ["React", "TypeScript", "Redux", "Firebase"],
    category: "web",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Implementing drag-and-drop functionality",
      "Real-time sync across devices",
      "Complex state management"
    ],
    futurePlans: [
      "Add calendar integration",
      "Implement notifications",
      "Add team chat feature"
    ],
    featured: true
  },
  // Additional Projects (More section এ দেখাবে)
  {
    id: "7",
    name: "Logo Design Collection",
    shortDescription: "A collection of creative logo designs for various businesses.",
    fullDescription: "A diverse collection of logo designs created for startups, small businesses, and personal brands. Each logo is crafted to represent the unique identity and values of the brand.",
    thumbnail: "/projects/logos/thumb.png",
    images: [
      "/projects/logos/1.png",
      "/projects/logos/2.png",
      "/projects/logos/3.png"
    ],
    techStack: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    category: "design",
    liveUrl: "",
    githubUrl: "",
    challenges: [
      "Creating memorable and unique logos",
      "Ensuring scalability across different sizes",
      "Meeting diverse client expectations"
    ],
    futurePlans: [
      "Create animated logo versions",
      "Expand to 3D logo designs",
      "Add logo usage guidelines"
    ],
    featured: false
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