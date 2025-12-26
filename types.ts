
export interface Skill {
  name: string;
  category: 'core' | 'tools' | 'tech';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  location: string;
}
