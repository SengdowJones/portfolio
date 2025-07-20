# Portfolio Documentation

Welcome to the comprehensive documentation for the Portfolio website project.

## 📖 Documentation Files

### [📋 Quick Reference Guide](./QUICK_REFERENCE.md)
Essential patterns, imports, and usage examples for quick development.

### [📚 Complete API Documentation](./API.md)
Comprehensive documentation covering all public APIs, functions, and components including:
- Type definitions
- Utility functions
- Custom hooks
- UI components
- API services
- Error handling
- Best practices
- Complete examples

## 🚀 Getting Started

1. **Quick Start**: Check the [Quick Reference](./QUICK_REFERENCE.md) for immediate usage
2. **Deep Dive**: Read the [Full API Documentation](./API.md) for comprehensive understanding
3. **Generate TypeDoc**: Run `npm run docs` for auto-generated documentation

## 🔧 Development Workflow

### For New Developers
1. Read the [Quick Reference](./QUICK_REFERENCE.md)
2. Explore the examples in the [API Documentation](./API.md)
3. Start with the existing patterns

### For Experienced Developers
1. Check the [API Documentation](./API.md) for specific function signatures
2. Use TypeScript IntelliSense for inline documentation
3. Generate TypeDoc for the most up-to-date API reference

## 📁 Code Organization

All documented code follows these principles:
- **Type Safety**: Full TypeScript coverage
- **Documentation**: JSDoc comments with examples
- **Consistency**: Established patterns and naming conventions
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized React patterns

## 🛠 Available APIs

### Core Utilities
- **Class Management**: `cn()` for intelligent class merging
- **Date Handling**: `formatDate()`, `calculateReadingTime()`
- **Text Processing**: `slugify()`, `truncateText()`, `capitalizeWords()`
- **Performance**: `debounce()`, `throttle()`
- **Validation**: `isValidEmail()`
- **Browser APIs**: `copyToClipboard()`, `scrollToElement()`

### Custom Hooks
- **State Management**: `useLocalStorage()`, `useToggle()`, `usePrevious()`
- **Performance**: `useDebounce()`, `useAsync()`
- **UI Interactions**: `useClickOutside()`, `useIntersectionObserver()`
- **Browser APIs**: `useWindowSize()`, `useScrollPosition()`, `useMediaQuery()`
- **Clipboard**: `useClipboard()`

### UI Components
- **Button**: Flexible button with variants, sizes, icons, loading states
- **Card**: Composable card with header, content, footer sections
- **ButtonGroup**: Grouped button layouts

### API Services
- **Projects**: Portfolio project management
- **Blog**: Blog post operations with search and pagination
- **Contact**: Contact form and information handling
- **Experience**: Work history and education
- **Skills**: Technical skills with proficiency levels
- **Analytics**: Event tracking and page views

## 📝 Contributing

When adding new APIs:
1. Follow existing patterns
2. Add comprehensive TypeScript types
3. Include JSDoc documentation with examples
4. Update the relevant documentation files
5. Test thoroughly

## 🔍 Finding Information

- **Quick answers**: [Quick Reference](./QUICK_REFERENCE.md)
- **Detailed docs**: [API Documentation](./API.md)
- **Type information**: TypeScript IntelliSense in your editor
- **Generated docs**: Run `npm run docs` for TypeDoc output
- **Source code**: All code includes inline documentation

---

**Happy coding!** 🚀