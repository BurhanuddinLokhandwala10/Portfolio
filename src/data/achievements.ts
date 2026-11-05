import { EducationItem, AchievementItem } from '../types';

export const EDUCATION_DATA: EducationItem = {
  institution: 'Vidyalankar Institute of Technology (VIT)',
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Information Technology',
  timeline: '2023 – 2027 (Current: 3rd Year, Semester 5)',
  score: '9.6 / 10',
  scoreType: 'Cumulative Grade Point Average (CGPA)',
  location: 'Mumbai, Maharashtra, India',
  highlights: [
    'Consistently ranked at top academic percentile with a 9.6/10 CGPA.',
    'Rigorous coursework in Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, and Computer Networks.',
    'Active participant in collegiate hackathons, technical symposia, and coding collectives.',
  ],
};

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'devops-residency',
    title: 'DevOps Engineering Residency',
    organization: 'L&T STA (Larsen & Toubro Skill Training Academy)',
    year: '2026',
    duration: '60 Hours Intensive Residency',
    type: 'Residency',
    badge: 'Industry Residency',
    description:
      'Completed an intensive 60-hour hands-on engineering residency covering real-world DevOps workflows, continuous integration pipelines, infrastructure concepts, and production delivery practices.',
    outcomes: [
      'Gained applied experience with CI/CD pipeline design and build automation.',
      'Studied containerization fundamentals, environment isolation, and artifact registries.',
      'Explored infrastructure monitoring, log aggregation, and deployment automation techniques.',
    ],
  },
  {
    id: 'techsprint-hackathon',
    title: 'TechSprint Hackathon — Second Runner-Up',
    organization: 'GDGoC (Google Developer Groups on Campus) VIT Mumbai',
    year: '2026',
    type: 'Hackathon',
    badge: '2nd Runner-Up',
    teamProject: 'HireDesk',
    description:
      'Awarded Second Runner-Up among competitive collegiate teams for building HireDesk, an intelligent recruitment and candidate workflow orchestration platform.',
    outcomes: [
      'Engineered backend API endpoints for candidate tracking, stage transitions, and evaluation pipelines.',
      'Collaborated under strict hackathon deadlines to deliver a fully functional demo with live data persistence.',
      'Presented technical architecture and demo to a panel of engineering judges.',
    ],
  },
];

