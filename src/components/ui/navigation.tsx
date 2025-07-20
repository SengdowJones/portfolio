'use client'

import { useState, useEffect } from 'react'
import { forwardRef } from 'react'
import { clsx } from 'clsx'
import { Menu, X } from 'lucide-react'
import { Button } from './button'
import { siteConfig } from '@/lib/constants'

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  items: Array<{ name: string; href: string }>
  logo?: React.ReactNode
}

const Navigation = forwardRef<HTMLElement, NavigationProps>(
  ({ className, items, logo, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsOpen(false)
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setIsOpen(false)
    }

    const handleContactClick = () => {
      window.location.href = `mailto:${siteConfig.email}?subject=Portfolio Contact - Let's work together`
    }

    return (
      <nav
        className={clsx(
          'sticky top-0 z-50 w-full transition-all duration-300 ease-out',
          {
            'bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50': isScrolled,
            'bg-gray-950': !isScrolled,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              {logo || (
                <button
                  onClick={scrollToTop}
                  className="text-xl font-semibold text-gray-100 tracking-tight hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {siteConfig.name}
                </button>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
              <div className="ml-4 flex items-center gap-2">
                <Button variant="primary" size="sm" onClick={handleContactClick}>
                  Get in touch
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 h-10 w-10"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-800/50">
              <div className="py-4 space-y-1">
                {items.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-400 hover:text-gray-100 hover:bg-gray-800 rounded-lg transition-all duration-200 ease-out"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="px-4 pt-4">
                  <Button variant="primary" size="sm" className="w-full" onClick={handleContactClick}>
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    )
  }
)

Navigation.displayName = 'Navigation'

export { Navigation } 