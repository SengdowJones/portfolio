/**
 * @fileoverview API service functions for the portfolio website
 * @author Sengdao Inthavong
 * @version 1.0.0
 */

import { Project, BlogPost, ContactInfo, Experience, Skill, ApiResponse } from '@/types';

/**
 * Configuration for API endpoints
 * @constant
 */
const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
} as const;

/**
 * Custom error class for API errors
 * @class ApiError
 * @extends Error
 * @example
 * ```typescript
 * throw new ApiError('Failed to fetch data', 500, { originalError: error });
 * ```
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Generic fetch wrapper with error handling and TypeScript support
 * @template T The expected response data type
 * @param endpoint - API endpoint
 * @param options - Fetch options
 * @returns Promise resolving to API response
 * @example
 * ```typescript
 * const response = await fetchApi<Project[]>('/projects');
 * if (response.success) {
 *   console.log(response.data); // Project[]
 * }
 * ```
 */
async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_CONFIG.baseURL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

    const response = await fetch(url, {
      ...defaultOptions,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new ApiError(
        `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();
    
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error(`API Error for ${endpoint}:`, error);
    
    if (error instanceof ApiError) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

/**
 * Projects API service
 * @namespace ProjectsAPI
 */
export const ProjectsAPI = {
  /**
   * Fetches all projects
   * @returns Promise resolving to projects array
   * @example
   * ```typescript
   * const response = await ProjectsAPI.getAll();
   * if (response.success) {
   *   const projects = response.data; // Project[]
   *   console.log(`Found ${projects.length} projects`);
   * }
   * ```
   */
  async getAll(): Promise<ApiResponse<Project[]>> {
    return fetchApi<Project[]>('/projects');
  },

  /**
   * Fetches featured projects only
   * @returns Promise resolving to featured projects array
   * @example
   * ```typescript
   * const response = await ProjectsAPI.getFeatured();
   * if (response.success) {
   *   const featuredProjects = response.data;
   *   // Display featured projects on homepage
   * }
   * ```
   */
  async getFeatured(): Promise<ApiResponse<Project[]>> {
    return fetchApi<Project[]>('/projects?featured=true');
  },

  /**
   * Fetches a single project by ID
   * @param id - Project ID
   * @returns Promise resolving to project data
   * @example
   * ```typescript
   * const response = await ProjectsAPI.getById('project-1');
   * if (response.success) {
   *   const project = response.data;
   *   console.log(project.title);
   * }
   * ```
   */
  async getById(id: string): Promise<ApiResponse<Project>> {
    return fetchApi<Project>(`/projects/${id}`);
  },

  /**
   * Creates a new project (admin only)
   * @param project - Project data
   * @returns Promise resolving to created project
   * @example
   * ```typescript
   * const newProject = {
   *   title: 'My New Project',
   *   description: 'A cool project',
   *   technologies: ['React', 'TypeScript'],
   *   imageUrl: '/images/project.jpg'
   * };
   * 
   * const response = await ProjectsAPI.create(newProject);
   * if (response.success) {
   *   console.log('Project created:', response.data);
   * }
   * ```
   */
  async create(project: Omit<Project, 'id'>): Promise<ApiResponse<Project>> {
    return fetchApi<Project>('/projects', {
      method: 'POST',
      body: JSON.stringify(project),
    });
  },

  /**
   * Updates an existing project (admin only)
   * @param id - Project ID
   * @param updates - Partial project data
   * @returns Promise resolving to updated project
   * @example
   * ```typescript
   * const response = await ProjectsAPI.update('project-1', {
   *   title: 'Updated Project Title',
   *   featured: true
   * });
   * ```
   */
  async update(id: string, updates: Partial<Project>): Promise<ApiResponse<Project>> {
    return fetchApi<Project>(`/projects/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  },

  /**
   * Deletes a project (admin only)
   * @param id - Project ID
   * @returns Promise resolving to success status
   * @example
   * ```typescript
   * const response = await ProjectsAPI.delete('project-1');
   * if (response.success) {
   *   console.log('Project deleted successfully');
   * }
   * ```
   */
  async delete(id: string): Promise<ApiResponse<void>> {
    return fetchApi<void>(`/projects/${id}`, {
      method: 'DELETE',
    });
  },
};

/**
 * Blog API service
 * @namespace BlogAPI
 */
export const BlogAPI = {
  /**
   * Fetches all blog posts with pagination
   * @param page - Page number (default: 1)
   * @param limit - Posts per page (default: 10)
   * @returns Promise resolving to paginated blog posts
   * @example
   * ```typescript
   * const response = await BlogAPI.getAll(1, 5);
   * if (response.success) {
   *   const posts = response.data;
   *   const { total, page, limit } = response.meta;
   *   console.log(`Page ${page} of ${Math.ceil(total / limit)}`);
   * }
   * ```
   */
  async getAll(page: number = 1, limit: number = 10): Promise<ApiResponse<BlogPost[]>> {
    return fetchApi<BlogPost[]>(`/blog?page=${page}&limit=${limit}`);
  },

  /**
   * Fetches a single blog post by ID
   * @param id - Blog post ID
   * @returns Promise resolving to blog post data
   * @example
   * ```typescript
   * const response = await BlogAPI.getById('my-first-post');
   * if (response.success) {
   *   const post = response.data;
   *   console.log(post.title, post.content);
   * }
   * ```
   */
  async getById(id: string): Promise<ApiResponse<BlogPost>> {
    return fetchApi<BlogPost>(`/blog/${id}`);
  },

  /**
   * Searches blog posts by query
   * @param query - Search query
   * @returns Promise resolving to matching blog posts
   * @example
   * ```typescript
   * const response = await BlogAPI.search('react hooks');
   * if (response.success) {
   *   const matchingPosts = response.data;
   *   console.log(`Found ${matchingPosts.length} posts`);
   * }
   * ```
   */
  async search(query: string): Promise<ApiResponse<BlogPost[]>> {
    return fetchApi<BlogPost[]>(`/blog/search?q=${encodeURIComponent(query)}`);
  },

  /**
   * Fetches posts by tag
   * @param tag - Tag name
   * @returns Promise resolving to tagged blog posts
   * @example
   * ```typescript
   * const response = await BlogAPI.getByTag('typescript');
   * if (response.success) {
   *   const typescriptPosts = response.data;
   * }
   * ```
   */
  async getByTag(tag: string): Promise<ApiResponse<BlogPost[]>> {
    return fetchApi<BlogPost[]>(`/blog/tag/${encodeURIComponent(tag)}`);
  },
};

/**
 * Contact API service
 * @namespace ContactAPI
 */
export const ContactAPI = {
  /**
   * Fetches contact information
   * @returns Promise resolving to contact info
   * @example
   * ```typescript
   * const response = await ContactAPI.getInfo();
   * if (response.success) {
   *   const contact = response.data;
   *   console.log(contact.email, contact.social.github);
   * }
   * ```
   */
  async getInfo(): Promise<ApiResponse<ContactInfo>> {
    return fetchApi<ContactInfo>('/contact');
  },

  /**
   * Sends a contact form message
   * @param message - Contact form data
   * @returns Promise resolving to success status
   * @example
   * ```typescript
   * const response = await ContactAPI.sendMessage({
   *   name: 'John Doe',
   *   email: 'john@example.com',
   *   subject: 'Hello',
   *   message: 'Great portfolio!'
   * });
   * 
   * if (response.success) {
   *   console.log('Message sent successfully');
   * }
   * ```
   */
  async sendMessage(message: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<ApiResponse<void>> {
    return fetchApi<void>('/contact/send', {
      method: 'POST',
      body: JSON.stringify(message),
    });
  },
};

/**
 * Experience API service
 * @namespace ExperienceAPI
 */
export const ExperienceAPI = {
  /**
   * Fetches work experience
   * @returns Promise resolving to work experience array
   * @example
   * ```typescript
   * const response = await ExperienceAPI.getWork();
   * if (response.success) {
   *   const workExperience = response.data;
   *   workExperience.forEach(job => {
   *     console.log(`${job.title} at ${job.company}`);
   *   });
   * }
   * ```
   */
  async getWork(): Promise<ApiResponse<Experience[]>> {
    return fetchApi<Experience[]>('/experience/work');
  },

  /**
   * Fetches education history
   * @returns Promise resolving to education array
   * @example
   * ```typescript
   * const response = await ExperienceAPI.getEducation();
   * if (response.success) {
   *   const education = response.data;
   *   // Display education timeline
   * }
   * ```
   */
  async getEducation(): Promise<ApiResponse<Experience[]>> {
    return fetchApi<Experience[]>('/experience/education');
  },
};

/**
 * Skills API service
 * @namespace SkillsAPI
 */
export const SkillsAPI = {
  /**
   * Fetches all skills grouped by category
   * @returns Promise resolving to skills array
   * @example
   * ```typescript
   * const response = await SkillsAPI.getAll();
   * if (response.success) {
   *   const skills = response.data;
   *   const skillsByCategory = skills.reduce((acc, skill) => {
   *     if (!acc[skill.category]) acc[skill.category] = [];
   *     acc[skill.category].push(skill);
   *     return acc;
   *   }, {});
   * }
   * ```
   */
  async getAll(): Promise<ApiResponse<Skill[]>> {
    return fetchApi<Skill[]>('/skills');
  },

  /**
   * Fetches skills by category
   * @param category - Skill category
   * @returns Promise resolving to filtered skills
   * @example
   * ```typescript
   * const response = await SkillsAPI.getByCategory('Programming Languages');
   * if (response.success) {
   *   const programmingSkills = response.data;
   * }
   * ```
   */
  async getByCategory(category: string): Promise<ApiResponse<Skill[]>> {
    return fetchApi<Skill[]>(`/skills/category/${encodeURIComponent(category)}`);
  },
};

/**
 * Analytics API service for tracking portfolio interactions
 * @namespace AnalyticsAPI
 */
export const AnalyticsAPI = {
  /**
   * Tracks a page view
   * @param page - Page path
   * @param title - Page title
   * @returns Promise resolving to success status
   * @example
   * ```typescript
   * useEffect(() => {
   *   AnalyticsAPI.trackPageView('/about', 'About - Portfolio');
   * }, []);
   * ```
   */
  async trackPageView(page: string, title?: string): Promise<ApiResponse<void>> {
    return fetchApi<void>('/analytics/pageview', {
      method: 'POST',
      body: JSON.stringify({ page, title, timestamp: new Date().toISOString() }),
    });
  },

  /**
   * Tracks a custom event
   * @param event - Event name
   * @param properties - Event properties
   * @returns Promise resolving to success status
   * @example
   * ```typescript
   * // Track button clicks
   * const handleDownloadResume = () => {
   *   AnalyticsAPI.trackEvent('resume_download', {
   *     source: 'header_button',
   *     format: 'pdf'
   *   });
   * };
   * 
   * // Track project views
   * AnalyticsAPI.trackEvent('project_view', {
   *   project_id: 'portfolio-website',
   *   project_title: 'Portfolio Website'
   * });
   * ```
   */
  async trackEvent(event: string, properties?: Record<string, any>): Promise<ApiResponse<void>> {
    return fetchApi<void>('/analytics/event', {
      method: 'POST',
      body: JSON.stringify({
        event,
        properties,
        timestamp: new Date().toISOString(),
      }),
    });
  },
};

/**
 * Utility function to handle API responses consistently
 * @template T The expected data type
 * @param response - API response
 * @param onSuccess - Success callback
 * @param onError - Error callback
 * @example
 * ```typescript
 * const response = await ProjectsAPI.getAll();
 * handleApiResponse(
 *   response,
 *   (projects) => {
 *     setProjects(projects);
 *     setLoading(false);
 *   },
 *   (error) => {
 *     setError(error);
 *     setLoading(false);
 *   }
 * );
 * ```
 */
export function handleApiResponse<T>(
  response: ApiResponse<T>,
  onSuccess: (data: T) => void,
  onError: (error: string) => void
): void {
  if (response.success && response.data) {
    onSuccess(response.data);
  } else {
    onError(response.error || 'Unknown error occurred');
  }
}

export default {
  ProjectsAPI,
  BlogAPI,
  ContactAPI,
  ExperienceAPI,
  SkillsAPI,
  AnalyticsAPI,
  handleApiResponse,
};