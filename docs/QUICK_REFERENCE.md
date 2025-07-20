# Portfolio Quick Reference Guide

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📁 Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable components
│   └── ui/          # Base UI components
├── hooks/           # Custom React hooks
├── lib/             # API services and utilities
├── types/           # TypeScript definitions
└── utils/           # Utility functions
```

## 🔧 Essential Imports

```typescript
// Types
import { Project, BlogPost, ContactInfo, Experience, Skill } from '@/types';

// Utilities
import { cn, formatDate, slugify, debounce, throttle } from '@/utils';

// Hooks
import { useLocalStorage, useDebounce, useWindowSize, useIntersectionObserver } from '@/hooks';

// Components
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';

// API
import { ProjectsAPI, BlogAPI, ContactAPI, ExperienceAPI, SkillsAPI } from '@/lib/api';
```

## 🎨 Component Usage

### Button
```tsx
<Button variant="primary" size="lg" loading={isLoading}>
  Submit
</Button>
```

### Card
```tsx
<Card interactive variant="elevated">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

## 🔗 API Usage

### Fetch Data
```typescript
const response = await ProjectsAPI.getAll();
if (response.success) {
  setProjects(response.data);
} else {
  setError(response.error);
}
```

### Error Handling
```typescript
import { handleApiResponse } from '@/lib/api';

handleApiResponse(
  response,
  (data) => setData(data),
  (error) => setError(error)
);
```

## 🎣 Hook Examples

### Local Storage
```typescript
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

### Debounced Search
```typescript
const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search, 300);
```

### Intersection Observer
```typescript
const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
```

## 🛠 Utility Functions

### Class Names
```typescript
const className = cn('base-class', condition && 'conditional-class', customClass);
```

### Date Formatting
```typescript
formatDate('2023-12-01'); // "December 2023"
formatDate('2023-12-01', { includeDay: true }); // "December 1, 2023"
```

### Text Processing
```typescript
slugify('Hello World'); // "hello-world"
truncateText('Long text...', 50); // "Long text..."
```

## 📝 TypeScript Patterns

### API Response
```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
```

### Component Props
```typescript
interface ComponentProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}
```

## 🎯 Common Patterns

### Loading State
```tsx
if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
return <div>{data}</div>;
```

### Conditional Rendering
```tsx
{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}
```

### Event Handlers
```typescript
const handleClick = useCallback(() => {
  // Handler logic
}, [dependency]);
```

## 🔍 Development Tools

### Generate Docs
```bash
npm run docs
```

### Type Check
```bash
npm run type-check
```

### Lint
```bash
npm run lint
```

## 📚 Key Concepts

- **Type Safety**: Always use TypeScript interfaces
- **Error Handling**: Handle all API responses
- **Performance**: Use React.memo, useCallback, useMemo
- **Accessibility**: Include ARIA attributes
- **Composition**: Prefer small, composable components

## 🚨 Common Gotchas

1. **API Responses**: Always check `response.success` before using data
2. **Hooks**: Only call hooks at the top level
3. **Keys**: Always provide unique keys for list items
4. **Dependencies**: Include all dependencies in useEffect/useCallback arrays
5. **State Updates**: Use functional updates for state that depends on previous state

## 📖 Full Documentation

For complete documentation, see [API.md](./API.md) or generate TypeDoc:

```bash
npm run docs
```