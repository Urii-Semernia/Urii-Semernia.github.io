
import { Skill, Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: 'Yurii Semernia',
  title: 'Quality Assurance Engineer',
  email: 'uriisemernya@gmail.com',
  summary: 'Highly experienced Quality Assurance Engineer, specializing in testing web and mobile applications. Expert in Agile Scrum teams, guiding QA activities and guiding QA team members using Kanban methodology to successfully release products.',
  linkedIn: 'https://www.linkedin.com/in/uriisemernya',
  telegram: 'https://t.me/uriisemernya',
  whatsapp: 'https://wa.me/uriisemernya'
};

export const SKILLS: Skill[] = [
  { name: 'Test Case Creation', category: 'core' },
  { name: 'Functional/Non-Functional Testing', category: 'core' },
  { name: 'API Testing (Postman/Swagger)', category: 'tech' },
  { name: 'Mobile Testing (iOS/Android)', category: 'tech' },
  { name: 'Jira & Trello', category: 'tools' },
  { name: 'BrowserStack', category: 'tools' },
  { name: 'MySQL', category: 'tech' },
  { name: 'SDLC/STLC', category: 'core' },
  { name: 'Git & Bash', category: 'tech' },
  { name: 'Figma & DevTools', category: 'tools' },
  { name: 'Proxyman', category: 'tools' },
  { name: 'Agile/Scrum/Kanban', category: 'core' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'BrainRocket',
    role: 'QA Engineer',
    period: 'January 2021 - April 2023',
    location: 'Limassol, Cyprus',
    achievements: [
      'Experienced in end-to-end QA process flow, including creating test plans, test cases, and bug reports.',
      'Conducted testing at various stages of development from requirements analysis to direct testing.',
      'Proficient in web and mobile app testing.',
      'Estimated, prioritized, planned and coordinated testing activities.',
      'Maintained effective communication with developers and product owners.'
    ]
  },
  {
    company: 'Soft2Bet',
    role: 'QA Engineer',
    period: 'March 2020 - January 2021',
    location: 'Kyiv, Ukraine',
    achievements: [
      'Conducted functional, regression, and user acceptance testing for web and mobile applications.',
      'Performed testing for both mobile (iOS/Android) and web platforms.',
      'Created and analyzed test cases based on product requirements.',
      'Collaborated with developers throughout the end-to-end software development process.'
    ]
  }
];

export const EDUCATION: Education = {
  institution: 'Kyiv National Economic University named after Vadym Hetman',
  degree: 'Diploma of Higher Education, Faculty of Management',
  date: 'June 2017',
  location: 'Kyiv, Ukraine'
};
