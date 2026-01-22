export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  responsibilities: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    id: 1,
    role: "Freelance Graphic Designer",
    company: "Self-Employed / Various Clients",
    location: "Remote",
    duration: "2021 - Present",
    description: "Providing professional graphic design and illustration services to clients worldwide.",
    responsibilities: [
      "Creating logos, brand identities, and visual designs for businesses",
      "Designing social media graphics and marketing materials",
      "Developing illustrations and custom artwork",
      "Collaborating with clients to understand their design needs",
      "Delivering high-quality designs within deadlines"
    ],
    current: true
  }
];