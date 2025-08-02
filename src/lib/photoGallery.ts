// Photo gallery utility functions
// This system uses simple filenames with manual display names for better control

export interface PhotoItem {
  src: string
  alt: string
  caption: string
}

export interface PhotoGallery {
  title: string
  photos: PhotoItem[]
}

// Define the folder structure and how photos should be categorized
const photoCategories = {
  travel: {
    title: 'Travel Adventures',
    folder: 'travel'
  },
  hackathons: {
    title: 'Hackathons',
    folder: 'hackathons'
  },
  team: {
    title: 'Team Moments',
    folder: 'team'
  },
  hobbies: {
    title: 'Hobbies & Interests',
    folder: 'hobbies'
  }
}

// Photo mappings with simple filenames and custom display names
const photoMappings = {
  travel: [
    { filename: 'sf_bridge.jpg', alt: 'San Francisco Bridge', caption: 'Golden Gate Bridge, San Francisco' },
    { filename: 'nearmtfuji.JPG', alt: 'Near Mount Fuji', caption: 'Near Mount Fuji, Japan' },
    { filename: 'japanginza.JPG', alt: 'Japan Ginza', caption: 'Ginza District, Tokyo, Japan' }
  ],
  hackathons: [
    { filename: 'badhacks.jpg', alt: 'BadHacks 2022', caption: 'BadHacks 2022' },
    { filename: 'wildhacks.jpeg', alt: 'WildHacks 2024', caption: 'WildHacks 2024' },
    { filename: 'hackwithgoogle.jpg', alt: 'Hack with Google 2022', caption: 'Hack with Google 2022 - 3rd Place ($2,000)' }
  ],
  team: [
    { filename: 'ieeechaos.jpg', alt: 'IEEE Exec Photo', caption: 'Northwestern IEEE Exec Board 2024' },
    { filename: 'ieeeshowcase.jpg', alt: 'IEEE Showcase', caption: 'IEEE Project Showcase 2023' }
  ],
  hobbies: [
    { filename: 'chess.jpg', alt: 'Chess Game', caption: 'National High School Chess Championship 2019' },
    { filename: 'volleyball.jpg', alt: 'Volleyball Game', caption: 'Northwestern University Intramural Volleyball Champions 2023' }
  ]
}

// Function to generate photo arrays from mappings
export function generatePhotoGalleries(): Record<string, PhotoGallery> {
  const galleries: Record<string, PhotoGallery> = {}

  // Build galleries from mappings
  Object.entries(photoCategories).forEach(([key, category]) => {
    const photos = photoMappings[key as keyof typeof photoMappings] || []
    
    const photoItems = photos.map(photo => ({
      src: `/life_adventures/${category.folder}/${photo.filename}`,
      alt: photo.alt,
      caption: photo.caption
    }))
    
    galleries[key] = {
      title: category.title,
      photos: photoItems
    }
  })

  return galleries
}

// Instructions for adding new photos:
// 1. Add your photo file to the appropriate folder in public/life_adventures/
//    - Use simple, descriptive filenames (e.g., 'vacation_hawaii.jpg')
// 2. Add a new entry to the photoMappings object above:
//    { filename: 'vacation_hawaii.jpg', alt: 'Vacation in Hawaii', caption: 'Amazing vacation experience' }
// 3. Done! The gallery will automatically include the new photo

// Example: To add a new travel photo:
// 1. Place vacation_hawaii.jpg in public/life_adventures/travel/
// 2. Add to photoMappings.travel array:
//    { filename: 'vacation_hawaii.jpg', alt: 'Vacation in Hawaii', caption: 'Amazing vacation experience' } 