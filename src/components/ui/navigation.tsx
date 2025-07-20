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

    const handleContactClick = () => {
      window.location.href = `mailto:${siteConfig.email}`
    }

    return (
      <nav
        className={clsx(
          'sticky top-0 z-50 w-full transition-all duration-300 ease-out',
          {
            'bg-white/80 backdrop-blur-md border-b border-gray-200/50': isScrolled,
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
                <span className="text-xl font-semibold text-gray-900 tracking-tight">
                  {siteConfig.name}
                </span>
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-600 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
              <div className="ml-4">
                <Button variant="primary" size="sm" onClick={handleContactClick}>
                  Get in touch
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
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
            <div className="md:hidden border-t border-gray-200/50">
              <div className="py-4 space-y-1">
                {items.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 ease-out"
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