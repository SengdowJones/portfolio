'use client'

import { forwardRef } from 'react'
import { clsx } from 'clsx'
import { useIntersectionObserver } from '@/lib/hooks'

export interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'tertiary' | 'gradient'
  delay?: number
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ className, variant = 'default', children, delay = 0, ...props }, ref) => {
    const { ref: intersectionRef, isIntersecting } = useIntersectionObserver()

    return (
      <section
        className={clsx(
          'section transition-all duration-700 ease-out',
          {
            'bg-background': variant === 'default',
            'bg-background-secondary': variant === 'secondary',
            'bg-background-tertiary': variant === 'tertiary',
            'gradient-bg': variant === 'gradient',
            'opacity-0 translate-y-8': !isIntersecting,
            'opacity-100 translate-y-0': isIntersecting,
          },
          className
        )}
        ref={(node) => {
          // Handle both refs
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
          intersectionRef.current = node
        }}
        style={{ transitionDelay: `${delay}ms` }}
        {...props}
      >
        <div className="container">
          {children}
        </div>
      </section>
    )
  }
)

AnimatedSection.displayName = 'AnimatedSection'

export { AnimatedSection } 