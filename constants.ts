import {
  Profile,
  Experience,
  SocialLink,
  ContributionDay,
  Project,
} from "./types";

export const PROFILE: Profile = {
  name: "Sanket Pawar",
  role: "Software Engineer",
  bio: "Learning by building and iterating on backend systems.",
  location: "Pune,India",
  bannerUrl: "/static/thumbnail.png",
};

export const SOCIALS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/sanketttt26",
    iconName: "Github",
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "1",
    company: "Siemens",
    role: "Trainee",
    period: "Aug 2025 - Present",
    description: [
      "Performance Engineer with experience in performance testing and monitoring of web applications using Playwright, Grafana, and Prometheus",
    ],
    techStack: [".NET", "NodeJS", "TypeScript", "Playwright"],
  },
  {
    id: "2",
    company: "Siemens",
    role: "Intern",
    period: "Jan 2025 - July 2025",
    description: [
      "Collaborated with cross-functional teams to gain hands-on experience in technologies such as .NET,Springboot,C#,Angular",
    ],
    techStack: ["ASP.NET", "JavaScript", "MySQL"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p-1",
    title: "Project",
    period: "2025",
    description: [
      "Description",
    ],
    techStack: ["TypeScript", "Vite", "tRPC", "Tailwind"],
    link: "https://github.com/sanketttt26/",
  },
];
