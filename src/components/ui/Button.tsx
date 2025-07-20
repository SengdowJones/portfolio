/**
 * @fileoverview Reusable Button component with multiple variants and states
 * @author Sengdao Inthavong
 * @version 1.0.0
 */

import React from 'react';
import { cn } from '@/utils';

/**
 * Button component props interface
 * @interface ButtonProps
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Icon to display before the button text */
  leftIcon?: React.ReactNode;
  /** Icon to display after the button text */
  rightIcon?: React.ReactNode;
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Custom class name */
  className?: string;
  /** Button content */
  children?: React.ReactNode;
}

/**
 * A flexible, accessible button component with multiple variants and states.
 * Supports icons, loading states, and different sizes.
 * 
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Button>Click me</Button>
 * 
 * // With variant and size
 * <Button variant="primary" size="lg">
 *   Large Primary Button
 * </Button>
 * 
 * // With icons
 * <Button leftIcon={<ChevronLeft />} variant="outline">
 *   Go Back
 * </Button>
 * 
 * // Loading state
 * <Button loading disabled>
 *   Submitting...
 * </Button>
 * 
 * // Full width
 * <Button fullWidth variant="primary">
 *   Full Width Button
 * </Button>
 * 
 * // Custom styling
 * <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
 *   Gradient Button
 * </Button>
 * ```
 * 
 * @param props - Button component props
 * @returns JSX.Element
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles for all buttons
    const baseStyles = [
      'inline-flex',
      'items-center',
      'justify-center',
      'font-medium',
      'rounded-md',
      'transition-all',
      'duration-200',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'disabled:pointer-events-none',
    ];

    // Variant styles
    const variantStyles = {
      primary: [
        'bg-primary-600',
        'text-white',
        'hover:bg-primary-700',
        'focus:ring-primary-500',
        'shadow-sm',
      ],
      secondary: [
        'bg-gray-100',
        'text-gray-900',
        'hover:bg-gray-200',
        'focus:ring-gray-500',
        'shadow-sm',
      ],
      outline: [
        'border',
        'border-gray-300',
        'text-gray-700',
        'bg-white',
        'hover:bg-gray-50',
        'focus:ring-primary-500',
      ],
      ghost: [
        'text-gray-700',
        'hover:bg-gray-100',
        'focus:ring-gray-500',
      ],
      link: [
        'text-primary-600',
        'hover:text-primary-700',
        'underline-offset-4',
        'hover:underline',
        'focus:ring-primary-500',
      ],
    };

    // Size styles
    const sizeStyles = {
      sm: ['px-3', 'py-1.5', 'text-sm', 'gap-1.5'],
      md: ['px-4', 'py-2', 'text-sm', 'gap-2'],
      lg: ['px-6', 'py-3', 'text-base', 'gap-2.5'],
    };

    // Full width styles
    const fullWidthStyles = fullWidth ? ['w-full'] : [];

    // Loading spinner component
    const LoadingSpinner = () => (
      <svg
        className="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

    // Combine all styles
    const buttonClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidthStyles,
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading && <LoadingSpinner />}
        {!loading && leftIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {children && <span>{children}</span>}
        {!loading && rightIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

/**
 * Button group component for grouping related buttons
 * @component
 * @example
 * ```tsx
 * <ButtonGroup>
 *   <Button variant="outline">First</Button>
 *   <Button variant="outline">Second</Button>
 *   <Button variant="outline">Third</Button>
 * </ButtonGroup>
 * ```
 */
export interface ButtonGroupProps {
  /** Button group content */
  children: React.ReactNode;
  /** Custom class name */
  className?: string;
  /** Orientation of the button group */
  orientation?: 'horizontal' | 'vertical';
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  orientation = 'horizontal',
}) => {
  const groupClasses = cn(
    'inline-flex',
    orientation === 'horizontal' ? 'flex-row' : 'flex-col',
    '[&>button]:rounded-none',
    '[&>button:first-child]:rounded-l-md',
    '[&>button:last-child]:rounded-r-md',
    orientation === 'vertical' && [
      '[&>button:first-child]:rounded-t-md',
      '[&>button:first-child]:rounded-l-none',
      '[&>button:last-child]:rounded-b-md',
      '[&>button:last-child]:rounded-r-none',
    ],
    '[&>button:not(:first-child)]:border-l-0',
    orientation === 'vertical' && [
      '[&>button:not(:first-child)]:border-l',
      '[&>button:not(:first-child)]:border-t-0',
    ],
    className
  );

  return <div className={groupClasses}>{children}</div>;
};

export default Button;