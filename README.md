# Sengdao Inthavong - Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, inspired by Linear's design aesthetic.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Ready**: Meta tags, structured data, and optimized for search engines
- **Smooth Animations**: Custom scroll reveal animations and micro-interactions
- **Dark Theme**: Elegant dark theme with subtle gradients and effects

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.2
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React 0.525.0
- **Deployment**: Vercel
- **Code Quality**: ESLint, Prettier

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component (simplified)
├── components/            # Reusable UI components
│   ├── sections/          # Page sections
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CodeShowcaseSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   └── ProjectsSection.tsx
│   └── ui/               # Base UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── container.tsx
│       ├── navigation.tsx
│       ├── section.tsx
│       └── index.ts      # Component exports
├── lib/                  # Utilities and configuration
│   ├── constants.ts      # Site content and configuration
│   ├── hooks.ts          # Custom React hooks
│   ├── theme.tsx         # Theme configuration
│   └── utils.ts          # Utility functions
└── styles/               # Additional styles (if needed)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SengdowJones/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Content Updates

All content is centralized in `src/lib/constants.ts`:

- **Personal Information**: Update `siteConfig` object
- **Navigation**: Modify `navigation` array
- **Skills**: Update `skills` array with your expertise
- **Experience**: Add/modify entries in `experience` array
- **Projects**: Update `projects` array with your work
- **Education**: Modify `education` array

### Styling

- **Colors**: Customize in `tailwind.config.ts`
- **Typography**: Update font families and sizes in `globals.css`
- **Animations**: Modify scroll reveal animations in `hooks.ts`

### Components

Each section is modular and can be easily modified:

- **HeroSection**: Landing page with call-to-action
- **AboutSection**: Personal info, skills, and achievements
- **ExperienceSection**: Work history timeline
- **ProjectsSection**: Featured projects showcase
- **ContactSection**: Contact information and social links

## 🔧 Development Guidelines

### Code Organization

1. **Component Structure**: Each section is a separate component for maintainability
2. **Custom Hooks**: Business logic is extracted into reusable hooks
3. **Utility Functions**: Common functions are centralized in `utils.ts`
4. **Type Safety**: Full TypeScript implementation with strict typing

### Best Practices

- **Component Props**: Use TypeScript interfaces for all component props
- **Error Handling**: Implement proper error boundaries and fallbacks
- **Performance**: Use React.memo and useCallback for expensive operations
- **Accessibility**: Include proper ARIA labels and semantic HTML
- **Responsive Design**: Test on multiple screen sizes

### Adding New Features

1. **Create Component**: Add new component in appropriate directory
2. **Add Types**: Define TypeScript interfaces if needed
3. **Update Constants**: Add any new content to `constants.ts`
4. **Test**: Ensure responsive design and accessibility
5. **Document**: Update README if adding new functionality

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Build**: Vercel automatically detects Next.js
3. **Deploy**: Push to main branch triggers automatic deployment

### Manual Deployment

1. **Build**: `npm run build`
2. **Start**: `npm run start`
3. **Deploy**: Upload to your hosting provider

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with code splitting
- **Images**: Optimized and responsive

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sengdao Inthavong**
- Email: imsengdao@gmail.com
- LinkedIn: [sengdao-inthavong](https://linkedin.com/in/sengdao-inthavong)
- GitHub: [SengdowJones](https://github.com/SengdowJones)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
