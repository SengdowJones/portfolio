'use client'

import { useState, useEffect, useCallback } from 'react'
import { forwardRef } from 'react'
import { clsx } from 'clsx'
import { Menu, X } from 'lucide-react'
import { Button } from './button'
import { Container } from './container'
import { siteConfig } from '@/lib/constants'
import { createPortal } from 'react-dom'

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  items: Array<{ name: string; href: string }>
  logo?: React.ReactNode
}

const Navigation = forwardRef<HTMLElement, NavigationProps>(
  ({ items, logo, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [activeSection, setActiveSection] = useState('')

    // Enhanced scroll tracking with progress and active section
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        
        // Update scroll state
        setIsScrolled(scrollY > 10)
        
        // Calculate scroll progress
        const maxScroll = documentHeight - windowHeight
        const progress = Math.min((scrollY / maxScroll) * 100, 100)
        setScrollProgress(progress)
        
        // Update active section
        const sections = items.map(item => item.href.substring(1))
        let current = ''
        
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
              current = sectionId
            }
          }
        }
        setActiveSection(current)
      }
      
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll() // Initial call
      return () => window.removeEventListener('scroll', handleScroll)
    }, [items])

    // Open menu with improved animation
    const openMenu = () => {
      setMenuVisible(true)
      document.body.style.overflow = 'hidden' // Prevent background scroll
      requestAnimationFrame(() => setIsOpen(true))
    }

    // Close menu with animation
    const closeMenu = () => {
      setIsOpen(false)
      setIsClosing(true)
      document.body.style.overflow = '' // Restore background scroll
      setTimeout(() => {
        setMenuVisible(false)
        setIsClosing(false)
      }, 300)
    }

    // Close on Escape key
    useEffect(() => {
      if (!menuVisible) return
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeMenu()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }, [menuVisible])

    // Cleanup on unmount
    useEffect(() => {
      return () => {
        document.body.style.overflow = ''
      }
    }, [])

    // Overlay click handler
    const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) closeMenu()
    }, [])

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      closeMenu()
    }

    const handleContactClick = () => {
      window.location.href = `mailto:${siteConfig.email}?subject=Portfolio Inquiry - Hello from your website`
    }

    const handleNavClick = (href: string) => {
      closeMenu()
      if (href.startsWith('#')) {
        const element = document.getElementById(href.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    return (
      <>
        {/* Scroll Progress Indicator */}
        <div 
          className="scroll-indicator"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
        
        <nav
          className={clsx(
            'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out',
            isScrolled
              ? 'bg-gray-950/95 shadow-lg shadow-black/20 backdrop-blur-md border-b border-gray-800/50'
              : 'bg-gray-950/80 backdrop-blur-md'
          )}
          ref={ref}
          {...props}
          role="navigation"
          aria-label="Main navigation"
        >
          <Container size="5xl" className="relative z-10 px-4 sm:px-8">
            <div className="flex h-16 items-center justify-between overflow-hidden py-2">
              {/* Logo */}
              <div className="flex items-center flex-shrink-0">
                {logo || (
                  <button
                    onClick={scrollToTop}
                    className="text-lg font-semibold text-gray-100 tracking-tight 
                             hover:text-white transition-colors cursor-pointer
                             focus-visible:outline-none focus-visible:ring-2 
                             focus-visible:ring-blue-400 focus-visible:ring-offset-2 
                             focus-visible:ring-offset-gray-900 rounded-md px-2 py-1"
                    aria-label="Go to top of page"
                  >
                    {siteConfig.name}
                  </button>
                )}
              </div>

              {/* Desktop Navigation - Centered */}
              <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 h-full items-center justify-center">
                <div className="flex items-center space-x-1">
                  {items.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={clsx(
                        'nav-link',
                        activeSection === item.href.substring(1) && 'nav-link-active'
                      )}
                      aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop Contact Button */}
              <div className="hidden md:flex items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleContactClick}
                  className="text-sm font-medium"
                >
                  Contact
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={openMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md 
                           text-gray-300 hover:text-gray-50 hover:bg-gray-800/50 
                           transition-colors duration-200
                           focus-visible:outline-none focus-visible:ring-2 
                           focus-visible:ring-blue-400"
                  aria-expanded={isOpen}
                  aria-label="Open main menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Container>
        </nav>

        {/* Mobile Menu Overlay */}
        {menuVisible && createPortal(
          <div
            className={clsx(
              'fixed inset-0 z-[60] md:hidden',
              isOpen && !isClosing ? 'animate-fadein' : 'animate-fadeout'
            )}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-sm" />
            
            {/* Menu content */}
            <div
              className={clsx(
                'relative bg-gray-900 border-b border-gray-800 shadow-xl',
                isOpen && !isClosing ? 'animate-slidein' : 'animate-slideout'
              )}
            >
              <Container size="5xl" className="px-4 sm:px-8">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo in mobile menu */}
                  <button
                    onClick={scrollToTop}
                    className="text-lg font-semibold text-gray-100 tracking-tight 
                             hover:text-white transition-colors
                             focus-visible:outline-none focus-visible:ring-2 
                             focus-visible:ring-blue-400 rounded-md px-2 py-1"
                    aria-label="Go to top of page"
                  >
                    {siteConfig.name}
                  </button>
                  
                  {/* Close button */}
                  <button
                    onClick={closeMenu}
                    className="inline-flex items-center justify-center p-2 rounded-md 
                             text-gray-300 hover:text-gray-50 hover:bg-gray-800/50 
                             transition-colors duration-200
                             focus-visible:outline-none focus-visible:ring-2 
                             focus-visible:ring-blue-400"
                    aria-label="Close main menu"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </Container>
              
              {/* Mobile navigation links */}
              <div className="border-t border-gray-800">
                <Container size="5xl" className="px-4 sm:px-8 py-6">
                  <div className="space-y-4" id="mobile-menu-title">
                    {items.map((item, index) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={clsx(
                          'block w-full text-left px-4 py-3 text-lg font-medium rounded-lg 
                           transition-all duration-200 ease-out',
                          activeSection === item.href.substring(1)
                            ? 'text-gray-50 bg-gray-800/50 border-l-4 border-blue-400'
                            : 'text-gray-300 hover:text-gray-50 hover:bg-gray-800/30'
                        )}
                        style={{ animationDelay: `${index * 50}ms` }}
                        aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                      >
                        {item.name}
                      </button>
                    ))}
                    
                    {/* Mobile contact button */}
                    <div className="pt-4 border-t border-gray-800">
                      <Button
                        variant="primary"
                        size="md"
                        onClick={handleContactClick}
                        className="w-full"
                      >
                        Contact Me
                      </Button>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </div>,
          document.body
        )}
      </>
    )
  }
)

Navigation.displayName = 'Navigation'

export { Navigation } 