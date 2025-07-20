export const siteConfig = {
  name: 'Sengdao Inthavong',
  title: 'Sengdao Inthavong - Software Engineer',
  description: 'Software engineer passionate about building exceptional digital experiences. Specializing in modern web technologies and user-centered design.',
  url: 'https://sengdao.dev',
  ogImage: 'https://sengdao.dev/og.jpg',
  links: {
    twitter: 'https://twitter.com/sengdao',
    github: 'https://github.com/sengdao',
    linkedin: 'https://linkedin.com/in/sengdao',
    email: 'hello@sengdao.dev',
  },
}

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
  },
]

export const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and responsive design.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    image: '/projects/ecommerce.jpg',
    link: 'https://ecommerce-demo.com',
    github: 'https://github.com/sengdao/ecommerce-platform',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    image: '/projects/task-app.jpg',
    link: 'https://task-app-demo.com',
    github: 'https://github.com/sengdao/task-management',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects and skills with modern design and smooth animations.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    image: '/projects/portfolio.jpg',
    link: 'https://sengdao.dev',
    github: 'https://github.com/sengdao/portfolio',
    featured: true,
  },
]

export const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Leading development of web applications using modern technologies and best practices.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description: 'Built and maintained multiple web applications with focus on user experience and performance.',
    technologies: ['Next.js', 'Python', 'PostgreSQL', 'Docker'],
  },
]

export const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'University Name',
    period: '2016 - 2020',
    description: 'Focused on software engineering and web development.',
  },
] 