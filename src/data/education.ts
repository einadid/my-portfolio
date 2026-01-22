export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description?: string;
  current?: boolean;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Port City International University",
    location: "Chittagong, Bangladesh",
    duration: "2023 - Present",
    description: "Currently pursuing B.Sc. in Computer Science with focus on programming, web development, and software engineering.",
    current: true
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Hajigonj Model Govt. College",
    location: "Chandpur, Bangladesh",
    duration: "2019 - 2021",
    description: "Completed higher secondary education with focus on Science."
  }
];