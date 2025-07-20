'use client'

import { Moon } from 'lucide-react'
import { Button } from './button'

export function ThemeToggle() {
  // Only dark mode is supported, so render a static icon or message
  return (
    <Button
      variant="ghost"
      size="sm"
      className="relative w-10 h-10 p-0 cursor-not-allowed opacity-50"
      aria-label="Dark mode only"
      disabled
    >
      <Moon className="h-5 w-5" />
      <span className="sr-only">Dark mode only</span>
    </Button>
  )
} 