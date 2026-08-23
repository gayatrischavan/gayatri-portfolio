export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  details?: ProjectDetails;
}

export interface ProjectDetails {
  overview: string;
  problem: string;
  solution: string;
  architecture?: string[];
  myContributions: string[];
  challengesAndSolutions: string[];
  screenshots?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  highlights: string[];
  duration?: string; // Optional if not provided
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
}
