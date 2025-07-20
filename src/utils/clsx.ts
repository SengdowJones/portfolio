/**
 * @fileoverview Simple clsx implementation for class name concatenation
 * @author Sengdao Inthavong
 * @version 1.0.0
 */

export type ClassValue = 
  | string 
  | number 
  | boolean 
  | undefined 
  | null 
  | { [key: string]: boolean | undefined | null }
  | ClassValue[];

/**
 * Concatenates class names conditionally
 * @param inputs - Class values to concatenate
 * @returns Concatenated class string
 * @example
 * ```typescript
 * clsx('foo', 'bar'); // 'foo bar'
 * clsx('foo', true && 'bar'); // 'foo bar'
 * clsx('foo', false && 'bar'); // 'foo'
 * clsx({ foo: true, bar: false }); // 'foo'
 * ```
 */
export function clsx(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  
  for (const input of inputs) {
    if (!input) continue;
    
    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      const result = clsx(...input);
      if (result) classes.push(result);
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key);
      }
    }
  }
  
  return classes.join(' ');
}

export default clsx;