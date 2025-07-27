'use client'

import React from 'react'

interface Star {
  id: number
  top: number
  left: number
  size: 'small' | 'medium' | 'large'
  color: 'white' | 'blue' | 'purple'
  animation: string
  opacity: number
}

const generateStars = (count: number): Star[] => {
  const stars: Star[] = []
  const colors: ('white' | 'blue' | 'purple')[] = ['white', 'blue', 'purple']
  const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large']
  const animations = [
    'satellite-flash',
    'satellite-flash-delay-1',
    'satellite-flash-delay-2',
    'satellite-flash-delay-3',
    'satellite-flash-random-1',
    'satellite-flash-random-2',
    'satellite-flash-random-3',
    'satellite-flash-random-4',
    'satellite-flash-random-5',
    'lighthouse-signal',
    'lighthouse-signal-delay-1',
    'lighthouse-signal-delay-2',
    'lighthouse-signal-delay-3',
    'lighthouse-signal-random-1',
    'lighthouse-signal-random-2',
    'lighthouse-signal-random-3',
    'lighthouse-signal-random-4',
    'lighthouse-signal-random-5'
  ]

  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      top: Math.random() * 100, // 0-100%
      left: Math.random() * 100, // 0-100%
      size: sizes[Math.floor(Math.random() * sizes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      animation: animations[Math.floor(Math.random() * animations.length)],
      opacity: 0.4 + Math.random() * 0.4 // 0.4-0.8
    })
  }

  return stars
}

interface StarfieldBackgroundProps {
  starCount?: number
  className?: string
}

export default function StarfieldBackground({ 
  starCount = 80, 
  className = '' 
}: StarfieldBackgroundProps) {
  const stars = generateStars(starCount)

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-400'
      case 'purple':
        return 'text-purple-400'
      default:
        return 'text-white'
    }
  }

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'small':
        return 'star-small'
      case 'large':
        return 'star-medium'
      default:
        return ''
    }
  }

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950 to-gray-950 opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/5 via-transparent to-purple-950/5"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-950/3 via-transparent to-indigo-950/3"></div>
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute star ${getSizeClass(star.size)} ${getColorClass(star.color)} ${star.animation}`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </div>
  )
} 