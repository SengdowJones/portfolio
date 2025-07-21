import { useEffect, useRef, useState, useCallback } from 'react'

export function useIntersectionObserver(options: IntersectionObserverInit = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsIntersecting(true)
          setHasIntersected(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [hasIntersected, options])

  return { ref, isIntersecting }
}

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

export function useScrollReveal() {
  const scrollRefs = useRef<(HTMLElement | null)[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Initialize the observer
  const initObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    // Ensure IntersectionObserver is available
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px' // Start revealing slightly before element enters viewport
        }
      )

      // Observe all current refs
      scrollRefs.current.forEach((ref) => {
        if (ref && observerRef.current) {
          observerRef.current.observe(ref)
        }
      })
    }
  }, [])

  useEffect(() => {
    // Initialize observer on mount with a longer delay to ensure hero is visible first
    const initTimer = setTimeout(() => {
      initObserver()
    }, 300) // Increased delay to ensure hero section is visible

    // Fallback: Force reveal all elements after a longer delay only if needed
    const fallbackTimer = setTimeout(() => {
      scrollRefs.current.forEach((ref) => {
        if (ref && !ref.classList.contains('revealed')) {
          ref.classList.add('revealed')
        }
      })
    }, 3000) // Longer fallback time - only as emergency backup

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      clearTimeout(initTimer)
      clearTimeout(fallbackTimer)
    }
  }, [initObserver])

  const addScrollRef = useCallback((el: HTMLElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el)
      // Observe the new element immediately
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    }
  }, [])

  return { addScrollRef }
} 