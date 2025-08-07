import { useEffect, useRef, useCallback, useState } from 'react'

export function useScrollReveal() {
  const scrollRefs = useRef<(HTMLElement | null)[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  // Initialize the observer
  const initObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    // Ensure IntersectionObserver is available
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && !reduceMotion) {
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
  }, [reduceMotion])

  useEffect(() => {
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      setReduceMotion(mq.matches)
      const handler = () => setReduceMotion(mq.matches)
      mq.addEventListener?.('change', handler)
      return () => mq.removeEventListener?.('change', handler)
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
      if (reduceMotion) {
        el.classList.add('revealed')
      } else if (observerRef.current) {
        observerRef.current.observe(el)
      }
    }
  }, [reduceMotion])

  return { addScrollRef }
} 

// Track the currently active section id based on scroll position
export function useActiveSection(sectionIds: string[], rootMargin: string = '-50% 0px -45% 0px') {
  const [activeId, setActiveId] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || sectionIds.length === 0) return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))
        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin }
    )

    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [sectionIds, rootMargin])

  return activeId
}