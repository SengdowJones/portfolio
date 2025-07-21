// Site configuration types
export interface SiteConfig {
  name: string
  title: string
  description: string
  email: string
  linkedin: string
  github: string
  location: string
}

// Navigation types
export interface NavigationItem {
  name: string
  href: string
}

// Skills types
export interface SkillGroup {
  category: string
  items: string[]
}

// Experience types
export interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string
  technologies: string[]
}

// Project types
export interface Project {
  title: string
  description: string
  technologies: string[]
  github?: string
  link?: string
}

// Education types
export interface Education {
  degree: string
  school: string
  period: string
  gpa: string
  location: string
}

// Component prop types
export interface ScrollRevealProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export interface HeroSectionProps {
  onEmailContact: () => void
  onScrollToProjects: () => void
}

// UI Component types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
  hover?: boolean
  className?: string
  children: React.ReactNode
}

export interface SectionProps {
  variant?: 'default' | 'secondary'
  className?: string
  id?: string
  children: React.ReactNode
}

export interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  children: React.ReactNode
} 