/**
 * @fileoverview Simple tailwind-merge implementation for merging Tailwind CSS classes
 * @author Sengdao Inthavong
 * @version 1.0.0
 */

/**
 * Simple implementation of tailwind-merge functionality
 * Merges Tailwind CSS classes and handles conflicts by keeping the last occurrence
 * @param classNames - Class names to merge
 * @returns Merged class string
 * @example
 * ```typescript
 * twMerge('bg-red-500 bg-blue-500'); // 'bg-blue-500'
 * twMerge('p-4 px-6'); // 'p-4 px-6' (px-6 overrides px from p-4)
 * ```
 */
export function twMerge(classNames: string): string {
  if (!classNames) return '';
  
  const classes = classNames.split(' ').filter(Boolean);
  const classMap = new Map<string, string>();
  
  // Common Tailwind prefixes that should conflict with each other
  const conflictGroups = [
    // Colors
    ['bg-', 'text-', 'border-', 'ring-', 'divide-'],
    // Spacing
    ['p-', 'px-', 'py-', 'pt-', 'pr-', 'pb-', 'pl-'],
    ['m-', 'mx-', 'my-', 'mt-', 'mr-', 'mb-', 'ml-'],
    // Sizing
    ['w-', 'h-', 'min-w-', 'min-h-', 'max-w-', 'max-h-'],
    // Display
    ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'hidden'],
    // Position
    ['static', 'fixed', 'absolute', 'relative', 'sticky'],
    // Typography
    ['text-', 'font-', 'leading-', 'tracking-'],
  ];
  
  for (const className of classes) {
    let conflictKey = className;
    
    // Find which conflict group this class belongs to
    for (const group of conflictGroups) {
      if (group.includes(className)) {
        conflictKey = group[0]; // Use the first prefix as the key
        break;
      }
      
      // Check if class starts with any prefix in the group
      for (const prefix of group) {
        if (className.startsWith(prefix)) {
          conflictKey = prefix;
          break;
        }
      }
    }
    
    classMap.set(conflictKey, className);
  }
  
  return Array.from(classMap.values()).join(' ');
}

export default twMerge;