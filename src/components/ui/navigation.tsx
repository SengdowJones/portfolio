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
      requestAnimationFrame(() => setIsOpen(true));
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
      closeMenu();
    }

    return (
      <nav
        className={clsx(
          'nav-container',
          isScrolled
            ? 'nav-container-scrolled'
            : 'nav-container-default'
        )}
        ref={ref}
        {...props}
      >
        {/* Subtle gradient overlay that fades to transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/20 via-gray-950/10 to-transparent"></div>

        <Container size="5xl" className="relative z-10">
          <div className="flex h-14 items-center justify-between overflow-hidden py-2 w-full">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              {logo || (
                <button
                  onClick={scrollToTop}
                  className="nav-logo"
                >
                  {siteConfig.name}
                </button>
              )}
            </div>

            {/* Desktop Navigation - Centered using flex-1 */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-5">
                {items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-link group"
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
                      className="nav-link-background"
                      aria-hidden="true"
                    />
                    <span className="nav-link-text">
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

            {/* Mobile menu button and Resume button (always visible in mobile) */}
            <div className="md:hidden flex items-center gap-2 flex-shrink-0">
              {/* Show hamburger menu button when menu is closed, X button when open */}
              {!menuVisible ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={openMenu}
                  className="p-2 h-9 w-9 text-gray-300 hover:text-white hover:bg-gray-800"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMenu}
                  className="p-2 h-9 w-9 text-gray-300 hover:text-white hover:bg-gray-800"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </Container>

        {/* Mobile Navigation Overlay: only the menu links slide in below the top bar */}
        {menuVisible && typeof window !== 'undefined' && createPortal(
          <div
            className={`nav-mobile-overlay ${isOpen && !isClosing ? 'animate-fadein' : 'animate-fadeout'}`}
            style={{ pointerEvents: menuVisible ? 'auto' : 'none' }}
            onClick={handleOverlayClick}
          >
            <div className="px-8">
              <nav className="flex-1 flex flex-col justify-start py-4 space-y-2">
                {items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-mobile-link"
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
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume"
                    className="nav-resume-button"
                    style={{ fontSize: '0.95rem' }}
                  >
                    Resume
                  </a>
                </div>
              </nav>
            </div>
          </div>,
          document.body
        )}
      </nav>
    )
  }
)

Navigation.displayName = 'Navigation'

export { Navigation } 