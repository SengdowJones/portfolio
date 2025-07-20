import { forwardRef } from 'react'
import { clsx } from 'clsx'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'tertiary' | 'gradient'
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <section
        className={clsx(
          'section',
          {
            'bg-white dark:bg-gray-950': variant === 'default',
            'bg-gray-50 dark:bg-gray-900': variant === 'secondary',
            'bg-gray-100 dark:bg-gray-800': variant === 'tertiary',
            'gradient-bg': variant === 'gradient',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="container">
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = 'Section'

export { Section } 