export interface Project {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  image: string
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
    image: "/projects/portfolio.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router"],
    category: "web",
    liveUrl: "https://einadid.github.io",
    githubUrl: "https://github.com/einadid/portfolio",
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
    image: "/projects/brand-design.png",
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
    image: "/projects/ecommerce-ui.png",
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
  }
]