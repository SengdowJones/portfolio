/**
 * @fileoverview Core type definitions for the portfolio website
 * @author Sengdao Inthavong
 * @version 1.0.0
 */

/**
 * Represents a navigation item in the website header
 * @interface NavigationItem
 * @example
 * ```typescript
 * const navItem: NavigationItem = {
 *   label: 'About',
 *   href: '/about',
 *   external: false
 * };
 * ```
 */
export interface NavigationItem {
  /** Display text for the navigation item */
  label: string;
  /** URL or path for the navigation link */
  href: string;
  /** Whether the link opens in a new tab */
  external?: boolean;
}

/**
 * Represents a project in the portfolio
 * @interface Project
 * @example
 * ```typescript
 * const project: Project = {
 *   id: 'portfolio-website',
 *   title: 'Portfolio Website',
 *   description: 'A modern portfolio built with Next.js',
 *   technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
 *   imageUrl: '/images/portfolio.jpg',
 *   liveUrl: 'https://example.com',
 *   githubUrl: 'https://github.com/user/repo',
 *   featured: true
 * };
 * ```
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;
  /** Project title */
  title: string;
  /** Brief description of the project */
  description: string;
  /** Array of technologies used */
  technologies: string[];
  /** URL to project image/screenshot */
  imageUrl: string;
  /** Live demo URL (optional) */
  liveUrl?: string;
  /** GitHub repository URL (optional) */
  githubUrl?: string;
  /** Whether this project should be featured */
  featured?: boolean;
}

/**
 * Represents a skill category with proficiency level
 * @interface Skill
 * @example
 * ```typescript
 * const skill: Skill = {
 *   name: 'TypeScript',
 *   category: 'Programming Languages',
 *   proficiency: 90,
 *   icon: 'typescript-icon'
 * };
 * ```
 */
export interface Skill {
  /** Name of the skill */
  name: string;
  /** Category the skill belongs to */
  category: string;
  /** Proficiency level (0-100) */
  proficiency: number;
  /** Icon identifier or URL */
  icon?: string;
}

/**
 * Represents work experience or education entry
 * @interface Experience
 * @example
 * ```typescript
 * const experience: Experience = {
 *   id: 'software-engineer-acme',
 *   title: 'Software Engineer',
 *   company: 'Acme Corp',
 *   location: 'San Francisco, CA',
 *   startDate: '2022-01',
 *   endDate: '2023-12',
 *   description: 'Developed web applications using React and Node.js',
 *   achievements: ['Improved performance by 40%', 'Led team of 3 developers']
 * };
 * ```
 */
export interface Experience {
  /** Unique identifier */
  id: string;
  /** Job title or degree */
  title: string;
  /** Company or institution name */
  company: string;
  /** Location */
  location: string;
  /** Start date (YYYY-MM format) */
  startDate: string;
  /** End date (YYYY-MM format) or 'present' */
  endDate: string | 'present';
  /** Description of role or studies */
  description: string;
  /** Key achievements or accomplishments */
  achievements?: string[];
}

/**
 * Represents contact information
 * @interface ContactInfo
 * @example
 * ```typescript
 * const contact: ContactInfo = {
 *   email: 'hello@example.com',
 *   phone: '+1 (555) 123-4567',
 *   location: 'San Francisco, CA',
 *   social: {
 *     github: 'https://github.com/username',
 *     linkedin: 'https://linkedin.com/in/username',
 *     twitter: 'https://twitter.com/username'
 *   }
 * };
 * ```
 */
export interface ContactInfo {
  /** Email address */
  email: string;
  /** Phone number (optional) */
  phone?: string;
  /** Location/city */
  location?: string;
  /** Social media links */
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

/**
 * Represents a blog post or article
 * @interface BlogPost
 * @example
 * ```typescript
 * const post: BlogPost = {
 *   id: 'getting-started-nextjs',
 *   title: 'Getting Started with Next.js',
 *   excerpt: 'Learn the basics of Next.js framework',
 *   content: 'Full blog post content...',
 *   publishedAt: '2023-12-01',
 *   tags: ['Next.js', 'React', 'Web Development'],
 *   readingTime: 5
 * };
 * ```
 */
export interface BlogPost {
  /** Unique identifier */
  id: string;
  /** Post title */
  title: string;
  /** Brief excerpt */
  excerpt: string;
  /** Full content (markdown) */
  content: string;
  /** Publication date (YYYY-MM-DD) */
  publishedAt: string;
  /** Array of tags */
  tags: string[];
  /** Estimated reading time in minutes */
  readingTime: number;
  /** Featured image URL (optional) */
  imageUrl?: string;
}

/**
 * Component props for sections that can be animated
 * @interface AnimatedSectionProps
 */
export interface AnimatedSectionProps {
  /** Child elements to render */
  children: React.ReactNode;
  /** CSS class name */
  className?: string;
  /** Animation delay in milliseconds */
  delay?: number;
}

/**
 * Generic API response wrapper
 * @interface ApiResponse
 * @template T The type of data returned
 */
export interface ApiResponse<T = any> {
  /** Whether the request was successful */
  success: boolean;
  /** Response data */
  data?: T;
  /** Error message if unsuccessful */
  error?: string;
  /** Additional metadata */
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}

/**
 * Theme configuration
 * @interface ThemeConfig
 */
export interface ThemeConfig {
  /** Color scheme */
  mode: 'light' | 'dark' | 'system';
  /** Primary color */
  primaryColor: string;
  /** Font family */
  fontFamily: string;
}

/**
 * SEO metadata
 * @interface SEOData
 */
export interface SEOData {
  /** Page title */
  title: string;
  /** Meta description */
  description: string;
  /** Keywords */
  keywords?: string[];
  /** Canonical URL */
  canonical?: string;
  /** Open Graph data */
  openGraph?: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
}