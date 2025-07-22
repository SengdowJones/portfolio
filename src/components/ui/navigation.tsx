'use client'

import { useState, useEffect, useCallback } from 'react'
import { forwardRef } from 'react'
import { clsx } from 'clsx'
import { Menu, X } from 'lucide-react'
import { Button } from './button'
import { Container } from './container'
import { siteConfig } from '@/lib/constants'
import { createPortal } from 'react-dom';

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

    // Open menu
    const openMenu = () => {
      setMenuVisible(true);
      setTimeout(() => setIsOpen(true), 10); // allow DOM to render
    };
    // Close menu with animation
    const closeMenu = () => {
      setIsOpen(false);
      setIsClosing(true);
      setTimeout(() => {
        setMenuVisible(false);
        setIsClosing(false);
      }, 300); // match slideout/fadeout duration
    };

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // When menuVisible becomes true, open menu
    useEffect(() => {
      if (menuVisible) setIsOpen(true);
    }, [menuVisible]);

    // Close on Escape key
    useEffect(() => {
      if (!menuVisible) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeMenu();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [menuVisible]);

    // Overlay click handler (optional, closes if click on background)
    const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) closeMenu();
    }, []);

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
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out',
          isScrolled
            ? 'bg-gray-950 shadow-md shadow-black/10 backdrop-blur-md'
            : 'bg-gray-950 backdrop-blur-md'
        )}
        ref={ref}
        {...props}
      >
        {/* Solid background to reduce blue bleed */}
        <div className="absolute inset-0 bg-gray-950 opacity-100"></div>

        <Container size="5xl" className="relative z-10 px-8">
          <div className="flex h-14 items-center justify-between overflow-hidden py-2">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              {logo || (
                <button
                  onClick={scrollToTop}
                  className="text-lg font-semibold text-gray-100 tracking-tight hover:text-white transition-colors cursor-pointer"
                >
                  {siteConfig.name}
                </button>
              )}
            </div>

            {/* Desktop Navigation - Absolutely Centered */}
            <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 h-full items-center justify-center">
              <div className="flex space-x-5">
                {items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative group text-sm text-gray-400/80 font-normal px-3 py-2 transition-colors duration-200 cursor-pointer rounded-md focus-visible:outline-none"
                    onClick={e => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      closeMenu();
                    }}
                    role="link"
                    tabIndex={0}
                  >
                    {/* Animated pill background */}
                    <span
                      className="absolute inset-x-0 inset-y-[4px] z-0 rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100 bg-gray-800 transition-all duration-200"
                      aria-hidden="true"
                    />
                    <span className="relative z-10 group-hover:text-white group-focus-visible:text-white transition-colors duration-200">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Action Buttons - Right */}
            <div className="hidden md:flex items-center flex-shrink-0">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900 font-semibold text-xs px-3 py-1.5 transition-colors hover:bg-gray-900 hover:text-white hover:border-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                style={{ fontSize: '0.85rem', paddingTop: '0.35rem', paddingBottom: '0.35rem' }}
              >
                Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => (menuVisible ? closeMenu() : openMenu())}
                className="p-2 h-9 w-9 text-gray-300 hover:text-white hover:bg-gray-800"
              >
                {menuVisible ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {menuVisible && typeof window !== 'undefined' && createPortal(
            <div
              className={`md:hidden fixed inset-0 w-full h-full z-50 bg-gray-950 bg-opacity-95 flex flex-col pt-4 overflow-y-auto border-t border-gray-800/20 transition-opacity duration-300 ease-in-out ${isOpen && !isClosing ? 'animate-fadein' : 'animate-fadeout'}`}
              onClick={handleOverlayClick}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-900/70 hover:bg-gray-800 text-gray-300 hover:text-white transition-colors"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
              <div className={`py-3 space-y-1 w-full px-4 transition-transform duration-300 ease-in-out transform ${isOpen && !isClosing ? 'animate-slidein' : 'animate-slideout'}`}>
                {items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block w-full text-left px-2 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                    onClick={e => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      closeMenu();
                    }}
                    role="link"
                    tabIndex={0}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-3">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="w-full rounded-none bg-white text-gray-900 hover:bg-gray-100 font-medium text-xs py-2" 
                    onClick={() => { handleContactClick(); closeMenu(); }}
                  >
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>,
            document.body
          )}
        </Container>
      </nav>
    )
  }
)

Navigation.displayName = 'Navigation'

export { Navigation } 