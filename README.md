# Portfolio Website

The 1st iteration of Sengdao Inthavong's personal website. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Type Safety**: Comprehensive TypeScript coverage
- **Reusable Components**: Well-documented component library
- **Custom Hooks**: Powerful React hooks for common functionality
- **API Services**: Complete API layer with error handling
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized for speed and SEO

## 📚 Documentation

### Quick Start
See [Quick Reference Guide](./docs/QUICK_REFERENCE.md) for immediate usage examples.

### Complete API Documentation
See [API Documentation](./docs/API.md) for comprehensive documentation of all public APIs, functions, and components.

### Generate TypeDoc
```bash
npm run docs
```
This generates detailed TypeDoc documentation in the `docs/` directory.

## 🛠 Development

### Installation
```bash
npm install
# or
yarn install
```

### Development Server
```bash
npm run dev
# or
yarn dev
```

### Build for Production
```bash
npm run build
# or
yarn build
```

### Type Checking
```bash
npm run type-check
# or
yarn type-check
```

### Linting
```bash
npm run lint
# or
yarn lint
```

## 📁 Project Structure

```
src/
├── app/              # Next.js app directory (pages and layouts)
├── components/       # Reusable React components
│   └── ui/          # Base UI components (Button, Card, etc.)
├── hooks/           # Custom React hooks
├── lib/             # API services and utilities
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
docs/                # Documentation files
├── API.md           # Complete API documentation
└── QUICK_REFERENCE.md # Quick reference guide
```

## 🔧 Key APIs

### Utility Functions
- `cn()` - Intelligent class name merging
- `formatDate()` - Date formatting utilities
- `slugify()` - URL slug generation
- `debounce()` / `throttle()` - Function optimization
- `isValidEmail()` - Email validation
- And many more...

### Custom Hooks
- `useLocalStorage()` - Persistent state management
- `useDebounce()` - Debounced values
- `useWindowSize()` - Responsive breakpoints
- `useIntersectionObserver()` - Viewport intersection
- `useScrollPosition()` - Scroll tracking
- And many more...

### UI Components
- `<Button>` - Flexible button component with variants
- `<Card>` - Composable card component
- `<ButtonGroup>` - Button grouping
- All components are fully typed and documented

### API Services
- `ProjectsAPI` - Portfolio project management
- `BlogAPI` - Blog post operations
- `ContactAPI` - Contact form handling
- `ExperienceAPI` - Work/education history
- `SkillsAPI` - Technical skills
- `AnalyticsAPI` - Event tracking

## 💡 Usage Examples

### Basic Component Usage
```tsx
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary" size="lg">
          Click me
        </Button>
      </CardContent>
    </Card>
  );
}
```

### API Usage
```tsx
import { ProjectsAPI, handleApiResponse } from '@/lib/api';
import { useEffect, useState } from 'react';

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await ProjectsAPI.getAll();
      handleApiResponse(
        response,
        (data) => {
          setProjects(data);
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setLoading(false);
        }
      );
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  return <div>{/* Render projects */}</div>;
}
```

### Custom Hook Usage
```tsx
import { useLocalStorage, useDebounce } from '@/hooks';

function SearchComponent() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <p>Theme: {theme}</p>
      <p>Searching for: {debouncedSearch}</p>
    </div>
  );
}
```

## 🎨 Design System

The project includes a comprehensive design system with:
- Consistent color palette
- Typography scale
- Spacing system
- Component variants
- Responsive breakpoints
- Animation utilities

## ♿ Accessibility

All components are built with accessibility in mind:
- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Screen reader support
- High contrast support
- Focus management

## 🚀 Performance

Optimized for performance with:
- Code splitting
- Image optimization
- Bundle analysis
- React optimization patterns
- Lazy loading
- Caching strategies

## 📝 Contributing

1. Follow the established patterns
2. Add comprehensive documentation for new APIs
3. Include TypeScript types for all functions
4. Add JSDoc comments with examples
5. Test components thoroughly
6. Follow accessibility guidelines

## 📄 License

MIT License - see LICENSE file for details.

---

**Need Help?** Check the [documentation](./docs/API.md) or [quick reference](./docs/QUICK_REFERENCE.md) for detailed usage instructions.
