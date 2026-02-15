export interface SocialLink {
  platform: string;
  url: string;
  iconName: 'Github' | 'Linkedin' | 'Twitter' | 'Mail';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string[];
  techStack: string[];
  link?: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4; // 0 is empty, 4 is most active
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  location: string;
  bannerUrl?: string;
}
