/**
 * @fileoverview Utility functions for the portfolio website
 * @author Sengdao Inthavong
 * @version 1.0.0
 */

import { type ClassValue, clsx } from './clsx';
import { twMerge } from './tailwind-merge';

/**
 * Combines multiple class names and merges Tailwind CSS classes intelligently
 * @param inputs - Class names to combine
 * @returns Merged class string
 * @example
 * ```typescript
 * const className = cn('bg-blue-500', 'hover:bg-blue-600', 'px-4 py-2');
 * // Returns: "bg-blue-500 hover:bg-blue-600 px-4 py-2"
 * 
 * // Handles conflicts automatically
 * const conflicting = cn('bg-blue-500', 'bg-red-500');
 * // Returns: "bg-red-500" (red takes precedence)
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string into a human-readable format
 * @param dateString - ISO date string or date in YYYY-MM format
 * @param options - Formatting options
 * @returns Formatted date string
 * @example
 * ```typescript
 * formatDate('2023-12-01');
 * // Returns: "December 2023"
 * 
 * formatDate('2023-12-01', { includeDay: true });
 * // Returns: "December 1, 2023"
 * 
 * formatDate('present');
 * // Returns: "Present"
 * ```
 */
export function formatDate(
  dateString: string,
  options: {
    includeDay?: boolean;
    format?: 'short' | 'long';
  } = {}
): string {
  if (dateString === 'present') {
    return 'Present';
  }

  const { includeDay = false, format = 'long' } = options;
  
  try {
    const date = new Date(dateString);
    
    if (includeDay) {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: format,
        day: 'numeric',
      });
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: format,
    });
  } catch (error) {
    console.error('Invalid date format:', dateString);
    return dateString;
  }
}

/**
 * Calculates reading time for a given text
 * @param text - Text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200)
 * @returns Reading time in minutes
 * @example
 * ```typescript
 * const content = "Lorem ipsum dolor sit amet..."; // 500 words
 * const readingTime = calculateReadingTime(content);
 * // Returns: 3 (minutes)
 * 
 * const fastReader = calculateReadingTime(content, 300);
 * // Returns: 2 (minutes)
 * ```
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  const wordCount = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readingTime); // Minimum 1 minute
}

/**
 * Slugifies a string for use in URLs
 * @param text - Text to convert to slug
 * @returns URL-safe slug
 * @example
 * ```typescript
 * slugify('Getting Started with Next.js');
 * // Returns: "getting-started-with-nextjs"
 * 
 * slugify('React & TypeScript: A Perfect Match!');
 * // Returns: "react-typescript-a-perfect-match"
 * ```
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Debounces a function call
 * @param func - Function to debounce
 * @param wait - Delay in milliseconds
 * @returns Debounced function
 * @example
 * ```typescript
 * const searchHandler = debounce((query: string) => {
 *   console.log('Searching for:', query);
 * }, 300);
 * 
 * // Usage in React component:
 * const debouncedSearch = useCallback(
 *   debounce((query: string) => performSearch(query), 300),
 *   []
 * );
 * ```
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttles a function call
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 * @example
 * ```typescript
 * const scrollHandler = throttle(() => {
 *   console.log('Scroll event fired');
 * }, 100);
 * 
 * window.addEventListener('scroll', scrollHandler);
 * ```
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Validates an email address
 * @param email - Email address to validate
 * @returns True if email is valid
 * @example
 * ```typescript
 * isValidEmail('user@example.com'); // Returns: true
 * isValidEmail('invalid-email');    // Returns: false
 * ```
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Truncates text to a specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @param suffix - Suffix to add (default: '...')
 * @returns Truncated text
 * @example
 * ```typescript
 * truncateText('This is a very long text', 10);
 * // Returns: "This is a..."
 * 
 * truncateText('Short text', 20);
 * // Returns: "Short text" (no truncation needed)
 * ```
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
  if (text.length <= maxLength) {
    return text;
  }
  
  return text.substring(0, maxLength - suffix.length) + suffix;
}

/**
 * Generates a random ID string
 * @param length - Length of the ID (default: 8)
 * @returns Random ID string
 * @example
 * ```typescript
 * generateId(); // Returns: "a1b2c3d4"
 * generateId(12); // Returns: "a1b2c3d4e5f6"
 * ```
 */
export function generateId(length: number = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length)
    .padEnd(length, '0');
}

/**
 * Capitalizes the first letter of each word
 * @param text - Text to capitalize
 * @returns Capitalized text
 * @example
 * ```typescript
 * capitalizeWords('hello world'); // Returns: "Hello World"
 * capitalizeWords('javaScript developer'); // Returns: "JavaScript Developer"
 * ```
 */
export function capitalizeWords(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Formats a number with thousand separators
 * @param num - Number to format
 * @returns Formatted number string
 * @example
 * ```typescript
 * formatNumber(1234); // Returns: "1,234"
 * formatNumber(1234567); // Returns: "1,234,567"
 * ```
 */
export function formatNumber(num: number): string {
  return num.toLocaleString();
}

/**
 * Gets the contrast color (black or white) for a given background color
 * @param hexColor - Hex color code
 * @returns 'black' or 'white'
 * @example
 * ```typescript
 * getContrastColor('#ffffff'); // Returns: 'black'
 * getContrastColor('#000000'); // Returns: 'white'
 * getContrastColor('#3b82f6'); // Returns: 'white'
 * ```
 */
export function getContrastColor(hexColor: string): 'black' | 'white' {
  // Remove # if present
  const color = hexColor.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance > 0.5 ? 'black' : 'white';
}

/**
 * Copies text to clipboard
 * @param text - Text to copy
 * @returns Promise that resolves to success boolean
 * @example
 * ```typescript
 * const handleCopy = async () => {
 *   const success = await copyToClipboard('Hello, World!');
 *   if (success) {
 *     console.log('Text copied successfully!');
 *   }
 * };
 * ```
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy text:', error);
    return false;
  }
}

/**
 * Scrolls to an element smoothly
 * @param elementId - ID of the element to scroll to
 * @param offset - Offset from the top (default: 0)
 * @example
 * ```typescript
 * scrollToElement('about-section');
 * scrollToElement('contact', -100); // Scroll with 100px offset
 * ```
 */
export function scrollToElement(elementId: string, offset: number = 0): void {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }
  
  const elementPosition = element.offsetTop + offset;
  
  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth',
  });
}