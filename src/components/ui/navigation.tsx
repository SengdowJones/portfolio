'use client'

import { useState, useEffect } from 'react'
import { forwardRef } from 'react'
import { clsx } from 'clsx'
import { Menu, X } from 'lucide-react'
import { Button } from './button'

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

    return (
      <nav
        className={clsx(
          'sticky top-0 z-50 w-full transition-all duration-200 ease-out',
          {
            'bg-white/80 backdrop-blur-md border-b border-gray-200': isScrolled,
            'bg-white': !isScrolled,
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
                <span className="text-xl font-semibold text-foreground">
                  Sengdao
                </span>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link"
                >
                  {item.name}
                </button>
              ))}
              <Button variant="primary" size="sm">
                Get in touch
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {items.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 ease-out"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="px-3 pt-2">
                  <Button variant="primary" size="sm" className="w-full">
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