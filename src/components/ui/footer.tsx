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
          'py-4 border-t border-gray-800/30',
          className
        )}
        ref={ref}
        role="contentinfo"
        {...props}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-xs text-gray-600/70">
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