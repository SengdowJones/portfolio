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
      window.location.href = `mailto:${siteConfig.email}?subject=Portfolio Inquiry - Hello from your website`
    }

    return (
      <nav
        className={clsx(
          'sticky top-0 z-50 w-full transition-all duration-300 ease-out',
          {
            'bg-gray-950/95 backdrop-blur-md': isScrolled,
            'bg-gray-950/90': !isScrolled,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Gradient background to match hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950 to-gray-950 opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/5 via-transparent to-purple-950/5"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-950/3 via-transparent to-indigo-950/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              {logo || (
                <button
                  onClick={scrollToTop}
                  className="text-lg font-semibold text-gray-100 tracking-tight hover:text-white transition-colors cursor-pointer"
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
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <div className="ml-6 flex items-center">
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={handleContactClick}
                  className="bg-white text-gray-900 hover:bg-gray-100 font-medium"
                >
                  Get in touch
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 h-9 w-9 text-gray-300 hover:text-white hover:bg-gray-800"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-800/20">
              <div className="py-4 space-y-1">
                {items.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="px-4 pt-4">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="w-full bg-white text-gray-900 hover:bg-gray-100 font-medium" 
                    onClick={handleContactClick}
                  >
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