export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 65 },
      { name: "Python", level: 60 },
      { name: "C", level: 55 },
      { name: "C++", level: 50 },
      { name: "Java", level: 45 },
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "React.js", level: 70 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 75 },
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "Express.js", level: 55 },
      { name: "MongoDB", level: 60 },
      { name: "MySQL", level: 50 },
    ]
  },
  {
    category: "Graphic Design",
    skills: [
      { name: "Adobe Photoshop", level: 95 },
      { name: "Adobe Illustrator", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Canva", level: 90 },
      { name: "Adobe XD", level: 75 },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 70 },
      { name: "VS Code", level: 85 },
      { name: "Postman", level: 60 },
      { name: "npm", level: 70 },
    ]
  }
]