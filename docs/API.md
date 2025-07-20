# Portfolio API Documentation

**Version:** 1.0.0  
**Author:** Sengdao Inthavong  
**Last Updated:** December 2024  

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Type Definitions](#type-definitions)
- [Utility Functions](#utility-functions)
- [Custom Hooks](#custom-hooks)
- [UI Components](#ui-components)
- [API Services](#api-services)
- [Error Handling](#error-handling)
- [Examples](#examples)
- [Best Practices](#best-practices)

## Overview

This documentation covers all public APIs, functions, and components available in the portfolio website codebase. The project is built with Next.js, TypeScript, and Tailwind CSS, providing a comprehensive set of reusable utilities and components.

## Getting Started

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

### Building Documentation

```bash
npm run docs
# or
yarn docs
```

This will generate TypeDoc documentation in the `docs/` directory.

## Type Definitions

All type definitions are located in `src/types/index.ts`. Here are the main interfaces:

### Core Types

#### `NavigationItem`
Represents a navigation menu item.

```typescript
interface NavigationItem {
  label: string;        // Display text
  href: string;         // URL or path
  external?: boolean;   // Opens in new tab
}
```

**Example:**
```typescript
const navItem: NavigationItem = {
  label: 'About',
  href: '/about',
  external: false
};
```

#### `Project`
Represents a portfolio project.

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
```

**Example:**
```typescript
const project: Project = {
  id: 'portfolio-website',
  title: 'Portfolio Website',
  description: 'A modern portfolio built with Next.js',
  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  imageUrl: '/images/portfolio.jpg',
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/user/repo',
  featured: true
};
```

#### `Skill`
Represents a technical skill with proficiency level.

```typescript
interface Skill {
  name: string;
  category: string;
  proficiency: number;  // 0-100
  icon?: string;
}
```

#### `Experience`
Represents work experience or education.

```typescript
interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;    // YYYY-MM format
  endDate: string | 'present';
  description: string;
  achievements?: string[];
}
```

#### `ContactInfo`
Represents contact information and social links.

```typescript
interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}
```

#### `BlogPost`
Represents a blog post or article.

```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;      // Markdown
  publishedAt: string;  // YYYY-MM-DD
  tags: string[];
  readingTime: number;  // Minutes
  imageUrl?: string;
}
```

#### `ApiResponse<T>`
Generic API response wrapper.

```typescript
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}
```

## Utility Functions

Located in `src/utils/index.ts`. All functions are exported and fully typed.

### `cn(...inputs: ClassValue[]): string`
Combines and merges Tailwind CSS classes intelligently.

```typescript
import { cn } from '@/utils';

const className = cn('bg-blue-500', 'hover:bg-blue-600', 'px-4 py-2');
// Result: "bg-blue-500 hover:bg-blue-600 px-4 py-2"

// Handles conflicts automatically
const conflicting = cn('bg-blue-500', 'bg-red-500');
// Result: "bg-red-500" (red takes precedence)
```

### `formatDate(dateString: string, options?: object): string`
Formats date strings into human-readable format.

```typescript
import { formatDate } from '@/utils';

formatDate('2023-12-01');
// Result: "December 2023"

formatDate('2023-12-01', { includeDay: true });
// Result: "December 1, 2023"

formatDate('present');
// Result: "Present"
```

**Options:**
- `includeDay?: boolean` - Include day in output
- `format?: 'short' | 'long'` - Month format

### `calculateReadingTime(text: string, wordsPerMinute?: number): number`
Calculates estimated reading time for text content.

```typescript
import { calculateReadingTime } from '@/utils';

const content = "Lorem ipsum dolor sit amet..."; // 500 words
const readingTime = calculateReadingTime(content);
// Result: 3 (minutes)

const fastReader = calculateReadingTime(content, 300);
// Result: 2 (minutes)
```

### `slugify(text: string): string`
Converts text to URL-safe slug.

```typescript
import { slugify } from '@/utils';

slugify('Getting Started with Next.js');
// Result: "getting-started-with-nextjs"

slugify('React & TypeScript: A Perfect Match!');
// Result: "react-typescript-a-perfect-match"
```

### `debounce<T>(func: T, wait: number): (...args: Parameters<T>) => void`
Creates a debounced version of a function.

```typescript
import { debounce } from '@/utils';

const searchHandler = debounce((query: string) => {
  console.log('Searching for:', query);
}, 300);

// Usage in React component:
const debouncedSearch = useCallback(
  debounce((query: string) => performSearch(query), 300),
  []
);
```

### `throttle<T>(func: T, limit: number): (...args: Parameters<T>) => void`
Creates a throttled version of a function.

```typescript
import { throttle } from '@/utils';

const scrollHandler = throttle(() => {
  console.log('Scroll event fired');
}, 100);

window.addEventListener('scroll', scrollHandler);
```

### `isValidEmail(email: string): boolean`
Validates email addresses.

```typescript
import { isValidEmail } from '@/utils';

isValidEmail('user@example.com'); // true
isValidEmail('invalid-email');    // false
```

### `truncateText(text: string, maxLength: number, suffix?: string): string`
Truncates text to specified length.

```typescript
import { truncateText } from '@/utils';

truncateText('This is a very long text', 10);
// Result: "This is a..."

truncateText('Short text', 20);
// Result: "Short text" (no truncation needed)
```

### Additional Utilities

- `generateId(length?: number): string` - Generate random ID
- `capitalizeWords(text: string): string` - Capitalize first letter of each word
- `formatNumber(num: number): string` - Format numbers with separators
- `getContrastColor(hexColor: string): 'black' | 'white'` - Get contrast color
- `copyToClipboard(text: string): Promise<boolean>` - Copy text to clipboard
- `scrollToElement(elementId: string, offset?: number): void` - Smooth scroll to element

## Custom Hooks

Located in `src/hooks/index.ts`. All hooks follow React conventions and are fully typed.

### `useLocalStorage<T>(key: string, initialValue: T)`
Manages localStorage with TypeScript support.

**Returns:** `[value, setValue, removeValue]`

```typescript
import { useLocalStorage } from '@/hooks';

function ThemeToggle() {
  const [theme, setTheme, removeTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}
```

### `useDebounce<T>(value: T, delay: number): T`
Returns debounced value.

```typescript
import { useDebounce } from '@/hooks';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  
  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

### `useWindowSize(): { width: number; height: number }`
Tracks window dimensions with resize events.

```typescript
import { useWindowSize } from '@/hooks';

function ResponsiveComponent() {
  const { width, height } = useWindowSize();
  
  return (
    <div>
      <p>Window size: {width} x {height}</p>
      {width < 768 && <MobileMenu />}
      {width >= 768 && <DesktopMenu />}
    </div>
  );
}
```

### `useScrollPosition(): { scrollY: number; scrollDirection: 'up' | 'down' | null }`
Tracks scroll position and direction.

```typescript
import { useScrollPosition } from '@/hooks';

function ScrollIndicator() {
  const { scrollY, scrollDirection } = useScrollPosition();
  
  return (
    <div className={`header ${scrollDirection === 'down' ? 'hidden' : 'visible'}`}>
      Scroll position: {scrollY}px
    </div>
  );
}
```

### `useIntersectionObserver(options?: IntersectionObserverInit)`
Observes element intersection with viewport.

**Returns:** `[ref, isIntersecting, entry]`

```typescript
import { useIntersectionObserver } from '@/hooks';

function AnimatedSection() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`}
    >
      Content appears when scrolled into view
    </div>
  );
}
```

### `useClickOutside<T>(callback: () => void): React.RefObject<T>`
Detects clicks outside an element.

```typescript
import { useClickOutside } from '@/hooks';

function Modal({ onClose }: { onClose: () => void }) {
  const modalRef = useClickOutside<HTMLDivElement>(onClose);
  
  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal-content">
        Modal content
      </div>
    </div>
  );
}
```

### Additional Hooks

- `usePrevious<T>(value: T): T | undefined` - Track previous value
- `useClipboard(): [copyFn, copied]` - Clipboard operations
- `useAsync<T>(asyncFn, deps): { data, loading, error, execute }` - Async operations
- `useToggle(initial): [value, toggle, setValue]` - Toggle state
- `useMediaQuery(query: string): boolean` - Media query matching

## UI Components

### Button Component

Located in `src/components/ui/Button.tsx`.

#### Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}
```

#### Usage Examples

```tsx
import { Button } from '@/components/ui/Button';
import { ChevronLeft, Download } from 'lucide-react';

// Basic usage
<Button>Click me</Button>

// With variant and size
<Button variant="primary" size="lg">
  Large Primary Button
</Button>

// With icons
<Button leftIcon={<ChevronLeft />} variant="outline">
  Go Back
</Button>

<Button rightIcon={<Download />} variant="secondary">
  Download Resume
</Button>

// Loading state
<Button loading disabled>
  Submitting...
</Button>

// Full width
<Button fullWidth variant="primary">
  Full Width Button
</Button>

// Custom styling
<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  Gradient Button
</Button>
```

#### ButtonGroup Component

```tsx
import { Button, ButtonGroup } from '@/components/ui/Button';

<ButtonGroup>
  <Button variant="outline">First</Button>
  <Button variant="outline">Second</Button>
  <Button variant="outline">Third</Button>
</ButtonGroup>

// Vertical orientation
<ButtonGroup orientation="vertical">
  <Button variant="outline">Top</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Bottom</Button>
</ButtonGroup>
```

### Card Component

Located in `src/components/ui/Card.tsx`.

#### Main Card Props

```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated' | 'flat';
  interactive?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}
```

#### Usage Examples

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Complete card structure
<Card>
  <CardHeader>
    <CardTitle>Project Title</CardTitle>
    <CardDescription>A brief description of the project</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the main content of the card.</p>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
    </ul>
  </CardContent>
  <CardFooter>
    <Button variant="outline">View Details</Button>
    <Button>Live Demo</Button>
  </CardFooter>
</Card>

// Interactive card with hover effects
<Card interactive variant="elevated">
  <CardContent>
    <p>This card has hover effects and transforms on interaction</p>
  </CardContent>
</Card>

// Bordered card with custom padding
<Card variant="bordered" padding="lg">
  <p>This card has a prominent border and large padding</p>
</Card>

// Flat card without shadow
<Card variant="flat" padding="sm">
  <p>Minimal flat design with small padding</p>
</Card>
```

#### Card Sub-components

**CardHeader**
```tsx
<CardHeader className="text-center">
  <CardTitle as="h2">Custom Title</CardTitle>
  <CardDescription>Optional description</CardDescription>
</CardHeader>
```

**CardTitle**
```tsx
<CardTitle as="h1">Main Title</CardTitle>
<CardTitle as="h3">Subtitle</CardTitle>
```

**CardContent**
```tsx
<CardContent className="space-y-4">
  <p>Paragraph content</p>
  <div>Other content</div>
</CardContent>
```

**CardFooter**
```tsx
<CardFooter className="justify-between">
  <Button variant="outline">Cancel</Button>
  <Button>Confirm</Button>
</CardFooter>
```

## API Services

Located in `src/lib/api.ts`. All API services return `Promise<ApiResponse<T>>`.

### ProjectsAPI

#### `getAll(): Promise<ApiResponse<Project[]>>`
Fetches all projects.

```typescript
import { ProjectsAPI } from '@/lib/api';

const response = await ProjectsAPI.getAll();
if (response.success) {
  const projects = response.data; // Project[]
  console.log(`Found ${projects.length} projects`);
} else {
  console.error(response.error);
}
```

#### `getFeatured(): Promise<ApiResponse<Project[]>>`
Fetches only featured projects.

```typescript
const response = await ProjectsAPI.getFeatured();
if (response.success) {
  const featuredProjects = response.data;
  // Display featured projects on homepage
}
```

#### `getById(id: string): Promise<ApiResponse<Project>>`
Fetches a single project by ID.

```typescript
const response = await ProjectsAPI.getById('project-1');
if (response.success) {
  const project = response.data;
  console.log(project.title);
}
```

#### `create(project: Omit<Project, 'id'>): Promise<ApiResponse<Project>>`
Creates a new project (admin only).

```typescript
const newProject = {
  title: 'My New Project',
  description: 'A cool project',
  technologies: ['React', 'TypeScript'],
  imageUrl: '/images/project.jpg'
};

const response = await ProjectsAPI.create(newProject);
if (response.success) {
  console.log('Project created:', response.data);
}
```

#### `update(id: string, updates: Partial<Project>): Promise<ApiResponse<Project>>`
Updates an existing project (admin only).

```typescript
const response = await ProjectsAPI.update('project-1', {
  title: 'Updated Project Title',
  featured: true
});
```

#### `delete(id: string): Promise<ApiResponse<void>>`
Deletes a project (admin only).

```typescript
const response = await ProjectsAPI.delete('project-1');
if (response.success) {
  console.log('Project deleted successfully');
}
```

### BlogAPI

#### `getAll(page?: number, limit?: number): Promise<ApiResponse<BlogPost[]>>`
Fetches blog posts with pagination.

```typescript
import { BlogAPI } from '@/lib/api';

const response = await BlogAPI.getAll(1, 5);
if (response.success) {
  const posts = response.data;
  const { total, page, limit } = response.meta;
  console.log(`Page ${page} of ${Math.ceil(total / limit)}`);
}
```

#### `getById(id: string): Promise<ApiResponse<BlogPost>>`
Fetches a single blog post.

```typescript
const response = await BlogAPI.getById('my-first-post');
if (response.success) {
  const post = response.data;
  console.log(post.title, post.content);
}
```

#### `search(query: string): Promise<ApiResponse<BlogPost[]>>`
Searches blog posts.

```typescript
const response = await BlogAPI.search('react hooks');
if (response.success) {
  const matchingPosts = response.data;
  console.log(`Found ${matchingPosts.length} posts`);
}
```

#### `getByTag(tag: string): Promise<ApiResponse<BlogPost[]>>`
Fetches posts by tag.

```typescript
const response = await BlogAPI.getByTag('typescript');
if (response.success) {
  const typescriptPosts = response.data;
}
```

### ContactAPI

#### `getInfo(): Promise<ApiResponse<ContactInfo>>`
Fetches contact information.

```typescript
import { ContactAPI } from '@/lib/api';

const response = await ContactAPI.getInfo();
if (response.success) {
  const contact = response.data;
  console.log(contact.email, contact.social.github);
}
```

#### `sendMessage(message: ContactMessage): Promise<ApiResponse<void>>`
Sends a contact form message.

```typescript
const response = await ContactAPI.sendMessage({
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Hello',
  message: 'Great portfolio!'
});

if (response.success) {
  console.log('Message sent successfully');
}
```

### ExperienceAPI

#### `getWork(): Promise<ApiResponse<Experience[]>>`
Fetches work experience.

```typescript
import { ExperienceAPI } from '@/lib/api';

const response = await ExperienceAPI.getWork();
if (response.success) {
  const workExperience = response.data;
  workExperience.forEach(job => {
    console.log(`${job.title} at ${job.company}`);
  });
}
```

#### `getEducation(): Promise<ApiResponse<Experience[]>>`
Fetches education history.

```typescript
const response = await ExperienceAPI.getEducation();
if (response.success) {
  const education = response.data;
  // Display education timeline
}
```

### SkillsAPI

#### `getAll(): Promise<ApiResponse<Skill[]>>`
Fetches all skills.

```typescript
import { SkillsAPI } from '@/lib/api';

const response = await SkillsAPI.getAll();
if (response.success) {
  const skills = response.data;
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});
}
```

#### `getByCategory(category: string): Promise<ApiResponse<Skill[]>>`
Fetches skills by category.

```typescript
const response = await SkillsAPI.getByCategory('Programming Languages');
if (response.success) {
  const programmingSkills = response.data;
}
```

### AnalyticsAPI

#### `trackPageView(page: string, title?: string): Promise<ApiResponse<void>>`
Tracks page views.

```typescript
import { AnalyticsAPI } from '@/lib/api';

useEffect(() => {
  AnalyticsAPI.trackPageView('/about', 'About - Portfolio');
}, []);
```

#### `trackEvent(event: string, properties?: object): Promise<ApiResponse<void>>`
Tracks custom events.

```typescript
// Track button clicks
const handleDownloadResume = () => {
  AnalyticsAPI.trackEvent('resume_download', {
    source: 'header_button',
    format: 'pdf'
  });
};

// Track project views
AnalyticsAPI.trackEvent('project_view', {
  project_id: 'portfolio-website',
  project_title: 'Portfolio Website'
});
```

### Utility Function

#### `handleApiResponse<T>(response, onSuccess, onError): void`
Handles API responses consistently.

```typescript
import { ProjectsAPI, handleApiResponse } from '@/lib/api';

const response = await ProjectsAPI.getAll();
handleApiResponse(
  response,
  (projects) => {
    setProjects(projects);
    setLoading(false);
  },
  (error) => {
    setError(error);
    setLoading(false);
  }
);
```

## Error Handling

### ApiError Class

Custom error class for API-related errors.

```typescript
import { ApiError } from '@/lib/api';

try {
  // API call
} catch (error) {
  if (error instanceof ApiError) {
    console.error(`API Error ${error.status}: ${error.message}`);
    console.error('Additional data:', error.data);
  }
}
```

### Error Response Format

All API functions return a consistent error format:

```typescript
{
  success: false,
  error: "Error message describing what went wrong"
}
```

## Examples

### Complete React Component Example

```tsx
import React, { useEffect, useState } from 'react';
import { ProjectsAPI, handleApiResponse } from '@/lib/api';
import { useDebounce, useIntersectionObserver } from '@/hooks';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Project } from '@/types';
import { formatDate, truncateText } from '@/utils';

interface ProjectsGridProps {
  featuredOnly?: boolean;
}

export function ProjectsGrid({ featuredOnly = false }: ProjectsGridProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const response = featuredOnly 
        ? await ProjectsAPI.getFeatured()
        : await ProjectsAPI.getAll();
      
      handleApiResponse(
        response,
        (data) => {
          setProjects(data);
          setError(null);
        },
        (err) => {
          setError(err);
          setProjects([]);
        }
      );
      
      setLoading(false);
    };

    fetchProjects();
  }, [featuredOnly]);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    project.technologies.some(tech => 
      tech.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
  );

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-t-lg" />
            <CardContent className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Error loading projects: {error}</p>
        <Button onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {!featuredOnly && (
        <div className="max-w-md">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      )}

      <div 
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${
          isIntersecting ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {filteredProjects.map((project) => (
          <Card key={project.id} interactive variant="elevated">
            <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                {truncateText(project.description, 120)}
              </p>
            </CardContent>
            <div className="p-6 pt-0 flex gap-2">
              {project.liveUrl && (
                <Button 
                  as="a" 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="primary"
                >
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="outline"
                >
                  View Code
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {searchTerm ? 'No projects match your search.' : 'No projects found.'}
          </p>
        </div>
      )}
    </div>
  );
}
```

### Custom Hook Example

```tsx
import { useState, useEffect } from 'react';
import { ProjectsAPI } from '@/lib/api';
import { Project } from '@/types';

export function useProjects(featuredOnly: boolean = false) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = featuredOnly 
        ? await ProjectsAPI.getFeatured()
        : await ProjectsAPI.getAll();

      if (response.success) {
        setProjects(response.data || []);
      } else {
        setError(response.error || 'Failed to fetch projects');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, [featuredOnly]);

  return { projects, loading, error, refetch };
}

// Usage
function ProjectsList() {
  const { projects, loading, error, refetch } = useProjects(true);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>{project.title}</div>
      ))}
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}
```

## Best Practices

### 1. Type Safety
Always use TypeScript interfaces and avoid `any` types:

```typescript
// ✅ Good
interface UserData {
  id: string;
  name: string;
  email: string;
}

const user: UserData = await fetchUser();

// ❌ Bad
const user: any = await fetchUser();
```

### 2. Error Handling
Always handle API responses properly:

```typescript
// ✅ Good
const response = await ProjectsAPI.getAll();
if (response.success) {
  setProjects(response.data);
} else {
  setError(response.error);
}

// ❌ Bad
const projects = await ProjectsAPI.getAll();
setProjects(projects); // Assumes success
```

### 3. Component Composition
Use composition over large monolithic components:

```typescript
// ✅ Good
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// ❌ Bad
<Card title="Title" content="Content" />
```

### 4. Custom Hooks
Extract reusable logic into custom hooks:

```typescript
// ✅ Good
function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  // ... implementation
  return { data, loading, error };
}

// ❌ Bad
function Component() {
  // Repeated API logic in every component
}
```

### 5. Accessibility
Always include proper ARIA attributes and semantic HTML:

```typescript
// ✅ Good
<button
  aria-disabled={loading}
  aria-label="Submit form"
  disabled={loading}
>
  {loading ? 'Loading...' : 'Submit'}
</button>

// ❌ Bad
<div onClick={handleClick}>Submit</div>
```

### 6. Performance
Use React optimization techniques:

```typescript
// ✅ Good
const MemoizedComponent = React.memo(Component);

const handleClick = useCallback(() => {
  // Handler logic
}, [dependency]);

const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// ❌ Bad
// Recreating functions and objects on every render
```

### 7. Consistent Naming
Follow consistent naming conventions:

```typescript
// ✅ Good
const useUserData = () => { /* hook */ };
const UserProfile = () => { /* component */ };
const getUserById = () => { /* function */ };

// ❌ Bad
const userData = () => { /* unclear if hook or function */ };
const userProfile = () => { /* should be PascalCase for component */ };
```

### 8. Documentation
Always document complex functions and components:

```typescript
/**
 * Calculates the reading time for a given text
 * @param text - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200)
 * @returns Reading time in minutes
 * @example
 * ```typescript
 * const time = calculateReadingTime('Hello world', 200);
 * console.log(time); // 1
 * ```
 */
function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  // Implementation
}
```

---

**Need help?** Check the inline documentation in the source code or generate the full TypeDoc documentation using `npm run docs`.

**Contributing:** Follow the established patterns and add comprehensive documentation for any new public APIs.