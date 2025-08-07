'use client'

import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { forwardRef } from 'react'
import { clsx } from 'clsx'
import { Menu, X } from 'lucide-react'
import { Button } from './button'
import { Container } from './container'
import { siteConfig } from '@/lib/constants'
import { createPortal } from 'react-dom';
import { useActiveSection } from '@/lib/hooks'

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

    // Active section highlighting
    const sectionIds = useMemo(() => items
      .map((i) => i.href)
      .filter((href) => href.startsWith('#'))
      .map((href) => href.replace('#', '')),
    [items])
    const activeId = useActiveSection(sectionIds)

    const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null)
    const hamburgerRef = useRef<HTMLButtonElement | null>(null)

    // Open menu
    const openMenu = () => {
      setMenuVisible(true);
      requestAnimationFrame(() => setIsOpen(true));
      // Lock scroll
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden'
      }
      // Move focus to first link after portal mounts
      setTimeout(() => {
        firstMobileLinkRef.current?.focus()
      }, 10)
    };
    // Close menu with animation
    const closeMenu = () => {
      setIsOpen(false);
      setIsClosing(true);
      setTimeout(() => {
        setMenuVisible(false);
        setIsClosing(false);
        // Unlock scroll
        if (typeof document !== 'undefined') {
          document.body.style.overflow = ''
        }
        // Restore focus to hamburger
        hamburgerRef.current?.focus()
      }, 300); // match slideout/fadeout duration
    };

    useEffect(() => {
      const handleScroll = () => {
        // Show navbar only after scrolling past hero section (roughly 100vh)
        // But always show on mobile
        const heroHeight = window.innerHeight;
        const isMobile = window.innerWidth < 768; // md breakpoint
        setIsScrolled(isMobile || window.scrollY > heroHeight * 0.8)
      }
      window.addEventListener('scroll', handleScroll)
      // Also check on resize to handle orientation changes
      window.addEventListener('resize', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
      }
    }, [])

    // Close on Escape key and trap Tab within menu when open
    useEffect(() => {
      if (!menuVisible) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeMenu();
        if (e.key === 'Tab') {
          // Simple focus trap: keep focus inside overlay
          const focusable = Array.from(document.querySelectorAll(
            '#mobile-menu-overlay a, #mobile-menu-overlay button'
          )) as HTMLElement[]
          if (focusable.length === 0) return
          const first = focusable[0]
          const last = focusable[focusable.length - 1]
          const active = document.activeElement as HTMLElement | null
          if (e.shiftKey) {
            if (active === first) {
              e.preventDefault()
              last.focus()
            }
          } else {
            if (active === last) {
              e.preventDefault()
              first.focus()
            }
          }
        }
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
            : 'nav-container-hidden'
        )}
        ref={ref}
        role="navigation"
        aria-label="Primary"
        {...props}
      >


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
                    className={clsx('nav-link group', activeId && item.href === `#${activeId}` && 'nav-link-active')}
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
                    aria-current={activeId && item.href === `#${activeId}` ? 'page' : undefined}
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
                   aria-controls="mobile-menu-overlay"
                   aria-expanded={menuVisible}
                  ref={hamburgerRef}
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
            className={clsx('nav-mobile-overlay', {
              'animate-fadein': isOpen && !isClosing,
              'animate-fadeout': !(isOpen && !isClosing),
            })}
            style={{ pointerEvents: menuVisible ? 'auto' : 'none' }}
            onClick={handleOverlayClick}
            id="mobile-menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="px-8">
              <nav className="flex-1 flex flex-col justify-start py-4 space-y-2">
                {items.map((item, idx) => (
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
                    ref={idx === 0 ? firstMobileLinkRef : undefined}
                    aria-current={activeId && item.href === `#${activeId}` ? 'page' : undefined}
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