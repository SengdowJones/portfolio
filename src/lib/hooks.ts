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

export function usePerformanceMonitor() {
  const [performanceData, setPerformanceData] = useState({
    isSlowConnection: false,
    memoryUsage: 0,
    renderTime: 0,
    isLowPerformance: false
  })

  useEffect(() => {
    // Check connection speed
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    if (connection) {
      const isSlowConnection = connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g'
      setPerformanceData(prev => ({ ...prev, isSlowConnection }))
    }

    // Check memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory
      const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit
      setPerformanceData(prev => ({ ...prev, memoryUsage }))
    }

    // Monitor frame rate
    let frameCount = 0
    let lastTime = performance.now()
    let isLowPerformance = false

    const checkPerformance = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        isLowPerformance = fps < 30
        
        setPerformanceData(prev => ({ 
          ...prev, 
          isLowPerformance,
          renderTime: currentTime - lastTime 
        }))
        
        frameCount = 0
        lastTime = currentTime
      }
      
      requestAnimationFrame(checkPerformance)
    }

    const rafId = requestAnimationFrame(checkPerformance)
    
    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [])

  return performanceData
}

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [])

  return prefersReducedMotion
}

export function useScrollReveal() {
  const scrollRefs = useRef<(HTMLElement | null)[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)
  const performanceData = usePerformanceMonitor()
  const prefersReducedMotion = useReducedMotion()

  // Initialize the observer with performance considerations
  const initObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    // Skip complex animations on low-performance devices or slow connections
    const shouldUseReducedAnimations = performanceData.isLowPerformance || 
                                     performanceData.isSlowConnection || 
                                     prefersReducedMotion

    // Ensure IntersectionObserver is available
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              
              // Add reduced motion class if needed
              if (shouldUseReducedAnimations) {
                entry.target.classList.add('reduced-motion')
              }
              
              // Unobserve after revealing to improve performance
              if (observerRef.current) {
                observerRef.current.unobserve(entry.target)
              }
            }
          })
        },
        {
          threshold: shouldUseReducedAnimations ? 0.05 : 0.1,
          rootMargin: shouldUseReducedAnimations ? '0px 0px -20px 0px' : '0px 0px -100px 0px'
        }
      )

      // Observe all current refs
      scrollRefs.current.forEach((ref) => {
        if (ref && observerRef.current) {
          observerRef.current.observe(ref)
        }
      })
    }
  }, [performanceData.isLowPerformance, performanceData.isSlowConnection, prefersReducedMotion])

  useEffect(() => {
    // Initialize observer with performance consideration delay
    const initDelay = performanceData.isLowPerformance ? 100 : 300
    const initTimer = setTimeout(() => {
      initObserver()
    }, initDelay)

    // Fallback: Force reveal all elements after delay (reduced for low performance)
    const fallbackDelay = performanceData.isLowPerformance ? 1500 : 3000
    const fallbackTimer = setTimeout(() => {
      scrollRefs.current.forEach((ref) => {
        if (ref && !ref.classList.contains('revealed')) {
          ref.classList.add('revealed')
          if (performanceData.isLowPerformance || prefersReducedMotion) {
            ref.classList.add('reduced-motion')
          }
        }
      })
    }, fallbackDelay)

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      clearTimeout(initTimer)
      clearTimeout(fallbackTimer)
    }
  }, [initObserver, performanceData.isLowPerformance, prefersReducedMotion])

  const addScrollRef = useCallback((el: HTMLElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el)
      // Observe the new element immediately if observer is ready
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    }
  }, [])

  return { addScrollRef, performanceData }
}

export function useLoadingState() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 100) {
          setIsLoading(false)
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    // Force complete loading after reasonable time
    const timeout = setTimeout(() => {
      setLoadProgress(100)
      setIsLoading(false)
      clearInterval(interval)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return { isLoading, loadProgress }
}

export function useViewportSize() {
  const [viewportSize, setViewportSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setViewportSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024
      })
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return viewportSize
} 