'use client'

import { createContext, useEffect, useState } from 'react'

type Theme = 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const defaultContext: ThemeContextType = {
  theme: 'dark',
  toggleTheme: () => {},
}

const ThemeContext = createContext<ThemeContextType>(defaultContext)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<Theme>('dark')

  useEffect(() => {
    // Force dark mode
    const root = window.document.documentElement
    root.classList.remove('light')
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  const toggleTheme = () => {
    // Do nothing - prevent theme switching
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

 