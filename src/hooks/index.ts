/**
 * @fileoverview Custom React hooks for the portfolio website
 * @author Sengdao Inthavong
 * @version 1.0.0
 */

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { debounce, throttle } from '@/utils';

/**
 * Custom hook for managing local storage with TypeScript support
 * @template T The type of the stored value
 * @param key - The localStorage key
 * @param initialValue - Initial value if key doesn't exist
 * @returns Tuple of [value, setValue, removeValue]
 * @example
 * ```typescript
 * function ThemeToggle() {
 *   const [theme, setTheme, removeTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
 *   
 *   return (
 *     <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
 *       Current theme: {theme}
 *     </button>
 *   );
 * }
 * ```
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  // Get value from localStorage on initial load
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  // Remove value from localStorage
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}

/**
 * Custom hook for debounced values
 * @template T The type of the value
 * @param value - Value to debounce
 * @param delay - Debounce delay in milliseconds
 * @returns Debounced value
 * @example
 * ```typescript
 * function SearchInput() {
 *   const [searchTerm, setSearchTerm] = useState('');
 *   const debouncedSearchTerm = useDebounce(searchTerm, 300);
 *   
 *   useEffect(() => {
 *     if (debouncedSearchTerm) {
 *       performSearch(debouncedSearchTerm);
 *     }
 *   }, [debouncedSearchTerm]);
 *   
 *   return (
 *     <input
 *       value={searchTerm}
 *       onChange={(e) => setSearchTerm(e.target.value)}
 *       placeholder="Search..."
 *     />
 *   );
 * }
 * ```
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Custom hook for detecting window resize events
 * @returns Object with current window dimensions
 * @example
 * ```typescript
 * function ResponsiveComponent() {
 *   const { width, height } = useWindowSize();
 *   
 *   return (
 *     <div>
 *       <p>Window size: {width} x {height}</p>
 *       {width < 768 && <MobileMenu />}
 *       {width >= 768 && <DesktopMenu />}
 *     </div>
 *   );
 * }
 * ```
 */
export function useWindowSize(): { width: number; height: number } {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = throttle(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

/**
 * Custom hook for scroll position tracking
 * @returns Object with scroll position and direction
 * @example
 * ```typescript
 * function ScrollIndicator() {
 *   const { scrollY, scrollDirection } = useScrollPosition();
 *   
 *   return (
 *     <div className={`header ${scrollDirection === 'down' ? 'hidden' : 'visible'}`}>
 *       Scroll position: {scrollY}px
 *     </div>
 *   );
 * }
 * ```
 */
export function useScrollPosition(): {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
} {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDirection('up');
      }
      
      setScrollY(currentScrollY);
      prevScrollY.current = currentScrollY;
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollDirection };
}

/**
 * Custom hook for intersection observer
 * @param options - IntersectionObserver options
 * @returns Tuple of [ref, isIntersecting, entry]
 * @example
 * ```typescript
 * function AnimatedSection() {
 *   const [ref, isIntersecting] = useIntersectionObserver({
 *     threshold: 0.1,
 *     rootMargin: '0px 0px -100px 0px'
 *   });
 *   
 *   return (
 *     <div
 *       ref={ref}
 *       className={`transition-opacity duration-500 ${
 *         isIntersecting ? 'opacity-100' : 'opacity-0'
 *       }`}
 *     >
 *       Content appears when scrolled into view
 *     </div>
 *   );
 * }
 * ```
 */
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
): [React.RefObject<HTMLElement>, boolean, IntersectionObserverEntry | null] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
      },
      options
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return [elementRef, isIntersecting, entry];
}

/**
 * Custom hook for click outside detection
 * @param callback - Function to call when clicking outside
 * @returns Ref to attach to the element
 * @example
 * ```typescript
 * function Modal({ onClose }: { onClose: () => void }) {
 *   const modalRef = useClickOutside<HTMLDivElement>(onClose);
 *   
 *   return (
 *     <div className="modal-overlay">
 *       <div ref={modalRef} className="modal-content">
 *         Modal content
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 */
export function useClickOutside<T extends HTMLElement>(
  callback: () => void
): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [callback]);

  return ref;
}

/**
 * Custom hook for managing previous value
 * @template T The type of the value
 * @param value - Current value
 * @returns Previous value
 * @example
 * ```typescript
 * function Counter() {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePrevious(count);
 *   
 *   return (
 *     <div>
 *       <p>Current: {count}</p>
 *       <p>Previous: {prevCount}</p>
 *       <button onClick={() => setCount(count + 1)}>Increment</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

/**
 * Custom hook for copy to clipboard functionality
 * @returns Tuple of [copyToClipboard function, copied state]
 * @example
 * ```typescript
 * function CopyButton({ text }: { text: string }) {
 *   const [copyToClipboard, copied] = useClipboard();
 *   
 *   return (
 *     <button onClick={() => copyToClipboard(text)}>
 *       {copied ? 'Copied!' : 'Copy'}
 *     </button>
 *   );
 * }
 * ```
 */
export function useClipboard(): [(text: string) => Promise<void>, boolean] {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  }, []);

  return [copyToClipboard, copied];
}

/**
 * Custom hook for managing async operations
 * @template T The type of the data
 * @template E The type of the error
 * @param asyncFunction - Async function to execute
 * @returns Object with data, loading, error states and execute function
 * @example
 * ```typescript
 * function UserProfile({ userId }: { userId: string }) {
 *   const { data: user, loading, error, execute } = useAsync(
 *     () => fetchUser(userId),
 *     [userId]
 *   );
 *   
 *   if (loading) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error.message}</div>;
 *   if (!user) return null;
 *   
 *   return <div>Hello, {user.name}!</div>;
 * }
 * ```
 */
export function useAsync<T, E = Error>(
  asyncFunction: () => Promise<T>,
  dependencies: React.DependencyList = []
): {
  data: T | null;
  loading: boolean;
  error: E | null;
  execute: () => Promise<void>;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await asyncFunction();
      setData(result);
    } catch (err) {
      setError(err as E);
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    execute();
  }, [execute]);

  return { data, loading, error, execute };
}

/**
 * Custom hook for managing toggle state
 * @param initialValue - Initial boolean value
 * @returns Tuple of [value, toggle function, setValue function]
 * @example
 * ```typescript
 * function ToggleExample() {
 *   const [isOpen, toggle, setIsOpen] = useToggle(false);
 *   
 *   return (
 *     <div>
 *       <p>Status: {isOpen ? 'Open' : 'Closed'}</p>
 *       <button onClick={toggle}>Toggle</button>
 *       <button onClick={() => setIsOpen(true)}>Force Open</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useToggle(
  initialValue: boolean = false
): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle, setValue];
}

/**
 * Custom hook for media query matching
 * @param query - CSS media query string
 * @returns Boolean indicating if the query matches
 * @example
 * ```typescript
 * function ResponsiveComponent() {
 *   const isMobile = useMediaQuery('(max-width: 768px)');
 *   const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
 *   const isDesktop = useMediaQuery('(min-width: 1025px)');
 *   
 *   return (
 *     <div>
 *       {isMobile && <MobileLayout />}
 *       {isTablet && <TabletLayout />}
 *       {isDesktop && <DesktopLayout />}
 *     </div>
 *   );
 * }
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, [query]);

  return matches;
}