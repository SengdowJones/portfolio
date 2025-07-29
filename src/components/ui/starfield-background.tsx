'use client'

// Constants
// Default seed value for deterministic random number generation.
// Chosen arbitrarily to ensure consistent starfield appearance across renders.
const DEFAULT_SEED = 12345

// Cell positioning factors for star distribution
const CELL_RANDOMNESS_FACTOR = 0.8  // Controls how much randomness within each grid cell
const CELL_PADDING_FACTOR = 0.1     // Controls padding from cell edges

// Opacity range for star appearance
const MIN_OPACITY = 0.4             // Minimum opacity value for stars
const OPACITY_RANGE = 0.4           // Range of opacity variation (0.4-0.8)

interface Star {
  id: number
  top: number
  left: number
  size: 'small' | 'medium' | 'large'
  color: 'white' | 'blue' | 'purple'
  animation: string
  opacity: number
}

// Deterministic random number generator using a seed
class SeededRandom {
  private seed: number

  constructor(seed: number) {
    this.seed = seed
  }

  next(): number {
    // Linear Congruential Generator (LCG) formula:
    // new_seed = (old_seed * multiplier + increment) % modulus
    // Constants 9301, 49297, and 233280 are commonly used parameters for LCGs.
    // These values are chosen to provide a good balance of randomness and performance.
    this.seed = (this.seed * 9301 + 49297) % 233280
    return this.seed / 233280
  }
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

  // Use a fixed seed for deterministic generation
  const rng = new SeededRandom(DEFAULT_SEED)

  // Create a grid for even distribution
  const gridSize = Math.ceil(Math.sqrt(count))
  const cellWidth = 100 / gridSize
  const cellHeight = 100 / gridSize

  for (let i = 0; i < count; i++) {
    // Calculate grid position
    const gridRow = Math.floor(i / gridSize)
    const gridCol = i % gridSize
    
    // Add randomness within each grid cell
    const cellTop = gridRow * cellHeight + (rng.next() * cellHeight * CELL_RANDOMNESS_FACTOR) + (cellHeight * CELL_PADDING_FACTOR)
    const cellLeft = gridCol * cellWidth + (rng.next() * cellWidth * CELL_RANDOMNESS_FACTOR) + (cellWidth * CELL_PADDING_FACTOR)

    stars.push({
      id: i,
      top: cellTop,
      left: cellLeft,
      size: sizes[Math.floor(rng.next() * sizes.length)],
      color: colors[Math.floor(rng.next() * colors.length)],
      animation: animations[Math.floor(rng.next() * animations.length)],
      opacity: MIN_OPACITY + rng.next() * OPACITY_RANGE // MIN_OPACITY to MIN_OPACITY + OPACITY_RANGE
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
        return 'star-large'
      default:
        return ''
    }
  }

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Gradient overlays - increased opacity for better content visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950 to-gray-950 opacity-98"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-transparent to-purple-950/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-950/15 via-transparent to-indigo-950/15"></div>
      
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