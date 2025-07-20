import { forwardRef } from 'react'
import { clsx } from 'clsx'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, size = 'lg', ...props }, ref) => {
    return (
      <div
        className={clsx(
          'mx-auto px-4 sm:px-6 lg:px-8',
          {
            'max-w-3xl': size === 'sm',
            'max-w-4xl': size === 'md',
            'max-w-7xl': size === 'lg',
            'max-w-none': size === 'xl',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'

export { Container } 