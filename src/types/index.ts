export interface ProjectArchitecture {
  summary: string;
  databaseDesign: string;
  dataFlow: string[];
  keyChallenges: string[];
  endpoints: { method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'WS'; path: string; description: string }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Full Stack & Distributed' | 'Real-Time Communication' | 'Client Production';
  isFlagship?: boolean;
  clientProject?: boolean;
  featured: boolean;
  description: string;
  problemStatement: string;
  engineeringSolution: string;
  techStack: string[];
  keyContributions: string[];
  architecture?: ProjectArchitecture;
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  screenshots?: { caption: string; alt: string; url?: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    description?: string;
    isKey?: boolean;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  timeline: string;
  score: string;
  scoreType: string;
  location: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  type: 'Residency' | 'Hackathon';
  duration?: string;
  badge?: string;
  description: string;
  teamProject?: string;
  outcomes: string[];
}

