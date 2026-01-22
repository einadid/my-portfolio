export interface Certificate {
  id: number
  name: string
  issuer: string
  year: string
  image: string
  credentialUrl?: string
  description?: string
}

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "Graphic Design Certificate",
    issuer: "Creative IT Institute",
    year: "2021",
    image: "/certificates/graphic-design.jpg",
    description: "Professional certification in graphic design principles and tools.",
    credentialUrl: "https://www.creativeitinstitute.com/courses/professional-graphics-design"
  },
  {
    id: 2,
    name: "Web Development Certificate",
    issuer: "Programming Hero",
    year: "2025",
    image: "/certificates/web-development.jpg",
    description: "Certification covering HTML, CSS, JavaScript, and modern web development.",
    credentialUrl: "https://www.programming-hero.com/"
  }
]