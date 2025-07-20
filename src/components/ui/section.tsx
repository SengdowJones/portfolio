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
            'bg-background': variant === 'default',
            'bg-background-secondary': variant === 'secondary',
            'bg-background-tertiary': variant === 'tertiary',
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