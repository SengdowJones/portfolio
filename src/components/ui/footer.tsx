import { forwardRef } from 'react'
import { clsx } from 'clsx'

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <footer
        className={clsx(
          'py-6 border-t border-gray-800/50',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Sengdao Inthavong. All rights reserved.
            </p>
          </div>
          {children}
        </div>
      </footer>
    )
  }
)

Footer.displayName = 'Footer'

export { Footer } 