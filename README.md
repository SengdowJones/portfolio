# Portfolio - Sengdao Inthavong

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a Linear-inspired design system with clean typography, subtle animations, and excellent performance.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Linear-Inspired Design**: Clean, minimal aesthetic with carefully crafted design tokens
- **Responsive Design**: Mobile-first approach with excellent cross-device compatibility
- **Performance Optimized**: Fast loading times with Next.js optimizations
- **SEO Ready**: Comprehensive meta tags and structured data
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **Developer Experience**: ESLint, Prettier, and TypeScript for code quality

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **Icons**: Lucide React
- **Utilities**: clsx for conditional styling
- **Code Quality**: ESLint + Prettier
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles and Tailwind imports
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
│   └── ui/            # Base UI components (Button, Card, Section)
├── lib/               # Utility functions and constants
│   ├── constants.ts   # Site configuration and data
│   └── utils.ts       # Helper functions
└── styles/            # Additional styles (if needed)
```

## 🎨 Design System

The portfolio uses a Linear-inspired design system with:

- **Color Palette**: Neutral grays with subtle blue accent
- **Typography**: Inter font family with proper scale
- **Spacing**: 8px grid system for consistent spacing
- **Shadows**: Subtle elevation with carefully crafted shadows
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sengdao/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 📝 Customization

### Personal Information

Update your personal information in `src/lib/constants.ts`:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  url: 'https://yourdomain.com',
  links: {
    twitter: 'https://twitter.com/yourhandle',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    email: 'hello@yourdomain.com',
  },
}
```

### Projects

Add your projects to the `projects` array in `src/lib/constants.ts`:

```typescript
export const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/your-project.jpg',
    link: 'https://yourproject.com',
    github: 'https://github.com/yourusername/yourproject',
  },
]
```

### Skills

Update your skills in `src/lib/constants.ts`:

```typescript
export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript'],
  },
  // Add more categories...
]
```

## 🎯 Design Principles

- **Minimalism**: Clean, uncluttered design that focuses on content
- **Accessibility**: WCAG 2.1 AA compliant with proper contrast ratios
- **Performance**: Optimized for Core Web Vitals and fast loading
- **Responsive**: Mobile-first design that works on all devices
- **Consistency**: Unified design system with reusable components

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:

- Responsive typography that scales appropriately
- Flexible grid layouts that adapt to screen size
- Touch-friendly interactive elements
- Optimized images for different screen densities

## 🔧 Development

### Code Style

The project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

### Component Architecture

Components are built with:
- **Composition over inheritance**
- **Props interfaces** for type safety
- **Forward refs** for DOM access when needed
- **Consistent naming conventions**

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: hello@sengdao.dev
- **LinkedIn**: [linkedin.com/in/sengdao](https://linkedin.com/in/sengdao)
- **GitHub**: [github.com/sengdao](https://github.com/sengdao)

---

Built with ❤️ by Sengdao Inthavong
