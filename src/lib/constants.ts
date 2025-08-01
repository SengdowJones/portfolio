

export const siteConfig = {
  name: 'Sengdao Inthavong',
  title: 'Software Engineer',
  description: 'Software engineer crafting digital experiences with React, Java, and cloud technologies.',
  email: 'imsengdao@gmail.com',
  linkedin: 'https://linkedin.com/in/sengdao-inthavong',
  github: 'https://github.com/SengdowJones',
  location: 'Chicago, IL',
}

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const skills = [
  {
    category: 'Frontend, UI & UX',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Figma', 'Responsive Design', 'Accessibility']
  },
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'Node.js', 'Python', 'REST APIs', 'GraphQL', 'Layered Architecture']
  },
  {
    category: 'Databases, Tools & DevOps',
    items: ['PostgreSQL', 'SQL', 'Liquibase', 'Git', 'Jenkins', 'Docker', 'CI/CD', 'Jira', 'Agile']
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS Certified Cloud Practitioner', 'AWS (EKS, Lambda, S3, RDS)', 'Terraform']
  }
]

export const experience = [
  {
    title: 'Software Engineer',
    company: 'JPMorganChase',
    period: 'Aug 2024 - Present',
    location: 'Chicago, IL',
    description: 'Modernizing banking workflows through full-stack development with React and Java, delivering reusable components with the Salt design system and building backend APIs with Spring Boot.',
    technologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'Liquibase', 'Salt Design System', 'Jest']
  },
  {
    title: 'Software Engineer Intern',
    company: 'JPMorganChase',
    period: 'Jun 2023 - Aug 2023',
    location: 'Chicago, IL',
    description: 'Orchestrated a full-stack proof-of-concept with React and AWS (Terraform, Lambda, API Gateway, EventBridge) to simulate scalable, event-driven workflows; later adopted by internal engineering team for further validation.',
    technologies: ['React', 'AWS', 'Terraform', 'Lambda', 'API Gateway', 'EventBridge']
  },
  {
    title: 'Software Engineer Intern',
    company: 'Optum',
    period: 'Jun 2022 - Aug 2022',
    location: 'Schaumburg, IL',
    description: 'Led an Azure proof of concept using emerging cloud services to build scalable, cost-efficient data pipelines for >500K healthcare records, and built an interactive Power BI dashboard to deliver real-time, actionable insights.',
    technologies: ['Azure', 'Power BI', 'Data Pipelines', 'Python']
  },
  {
    title: 'Research Assistant',
    company: 'Tech Innovations for Inclusive Learning & Teaching Lab',
    period: 'Jun 2021 - Jun 2022',
    location: 'Evanston, IL',
    description: 'Developed interactive visualizations interpreting classroom audio data, tracking speaker activity, sentiment, and transcripts, to assist educators in monitoring discussions while navigating student privacy concerns.',
    technologies: ['D3.js', 'Data Visualization', 'Audio Processing', 'Privacy Compliance']
  }
]

export const projects = [
  {
    title: 'No-Code Smart Contracts Tool',
    brief: 'No-code UI for deploying Ethereum contracts',
    description: 'Built user interface using Google AppSheet and Solidity to empower non-developers to deploy Ethereum contracts. Awarded 2nd runner-up and $2,000 prize at Hack with Google: Workspace and AppSheet 2023.',
    technologies: ['Google AppSheet', 'Solidity', 'Ethereum', 'Smart Contracts'],
    github: 'https://github.com/ahkim3/google-hackathon-23'
  },
  {
    title: 'Chess Opening Hierarchy - Data Visualization',
    brief: 'D3.js chess opening visualizer by rating',
    description: 'Created an interactive D3.js visualization of chess openings by player rating, revealing strategy trends across ratings. Won Best Undergraduate Visualization and $200 prize at 2022 Northwestern Data Visualization Contest.',
    technologies: ['D3.js', 'Data Visualization', 'Chess Analysis', 'Interactive Charts'],
    link: 'https://doi.org/10.21985/n2-ttqd-s984'
  },
  {
    title: 'Exploding Chickens - Multiplayer Card Game',
    brief: 'Online multiplayer card game with real-time logic',
    description: 'Designed responsive UI components with TailwindCSS to improve gameplay clarity and flow. Implemented backend logic for turn-based mechanics, supporting 1,900+ games and 4,600+ player eliminations.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'WebSockets', 'Game Logic'],
    link: 'https://bit.ly/exploding-chickens'
  },
  {
    title: 'Sleepcat - A Sleep Tracker App Wireframe',
    brief: 'Gamified sleep tracker app wireframe in Figma',
    description: 'Crafted and prototyped a gamified sleep tracker app wireframe in Figma, driven by personal experience to increase user motivation for healthier sleep habits through visual rewards and intuitive, engaging UX features.',
    technologies: ['Figma', 'UX Design', 'Wireframing', 'Gamification', 'Sleep Tracking'],
    github: null,
    link: 'https://bit.ly/sleepcat-app'
  }
]

export const education = [
  {
    degree: 'M.S. in Computer Science',
    school: 'Northwestern University',
    period: 'Sep 2023 - Jun 2024',
    gpa: '4.00/4.00',
    location: 'Evanston, IL'
  },
  {
    degree: 'B.S. in Computer Science',
    school: 'Northwestern University',
    period: 'Sep 2020 - Jun 2023',
    gpa: '3.75/4.00',
    location: 'Evanston, IL'
  }
]