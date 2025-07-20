/**
 * @fileoverview Reusable Card component with header, body, and footer sections
 * @author Sengdao Inthavong
 * @version 1.0.0
 */

import React from 'react';
import { cn } from '@/utils';

/**
 * Card component props interface
 * @interface CardProps
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card variant style */
  variant?: 'default' | 'bordered' | 'elevated' | 'flat';
  /** Whether the card is interactive (hover effects) */
  interactive?: boolean;
  /** Custom padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Custom class name */
  className?: string;
  /** Card content */
  children?: React.ReactNode;
}

/**
 * A flexible card component for displaying content in a contained format.
 * Supports multiple variants and can be made interactive.
 * 
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card description goes here</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Card content goes here.</p>
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 * 
 * // Interactive card
 * <Card interactive variant="elevated">
 *   <CardContent>
 *     <p>This card has hover effects</p>
 *   </CardContent>
 * </Card>
 * 
 * // Bordered card with custom padding
 * <Card variant="bordered" padding="lg">
 *   <p>Large padding card</p>
 * </Card>
 * ```
 * 
 * @param props - Card component props
 * @returns JSX.Element
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      interactive = false,
      padding = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Base styles for all cards
    const baseStyles = [
      'rounded-lg',
      'transition-all',
      'duration-200',
    ];

    // Variant styles
    const variantStyles = {
      default: [
        'bg-white',
        'border',
        'border-gray-200',
      ],
      bordered: [
        'bg-white',
        'border-2',
        'border-gray-300',
      ],
      elevated: [
        'bg-white',
        'shadow-lg',
        'border',
        'border-gray-100',
      ],
      flat: [
        'bg-gray-50',
      ],
    };

    // Interactive styles
    const interactiveStyles = interactive ? [
      'cursor-pointer',
      'hover:shadow-lg',
      'hover:scale-[1.02]',
      'active:scale-[0.98]',
    ] : [];

    // Padding styles
    const paddingStyles = {
      none: [],
      sm: ['p-3'],
      md: ['p-6'],
      lg: ['p-8'],
    };

    // Combine all styles
    const cardClasses = cn(
      baseStyles,
      variantStyles[variant],
      interactiveStyles,
      paddingStyles[padding],
      className
    );

    return (
      <div
        ref={ref}
        className={cardClasses}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * Card header component props interface
 * @interface CardHeaderProps
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Custom class name */
  className?: string;
  /** Header content */
  children?: React.ReactNode;
}

/**
 * Card header component for displaying titles and descriptions
 * 
 * @component
 * @example
 * ```tsx
 * <CardHeader>
 *   <CardTitle>Project Title</CardTitle>
 *   <CardDescription>A brief description of the project</CardDescription>
 * </CardHeader>
 * ```
 * 
 * @param props - CardHeader component props
 * @returns JSX.Element
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

/**
 * Card title component props interface
 * @interface CardTitleProps
 */
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** HTML heading level */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Custom class name */
  className?: string;
  /** Title content */
  children?: React.ReactNode;
}

/**
 * Card title component for displaying card titles
 * 
 * @component
 * @example
 * ```tsx
 * <CardTitle>My Project</CardTitle>
 * <CardTitle as="h3">Smaller Title</CardTitle>
 * ```
 * 
 * @param props - CardTitle component props
 * @returns JSX.Element
 */
export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Component = 'h3', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-2xl font-semibold leading-none tracking-tight',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

CardTitle.displayName = 'CardTitle';

/**
 * Card description component props interface
 * @interface CardDescriptionProps
 */
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Custom class name */
  className?: string;
  /** Description content */
  children?: React.ReactNode;
}

/**
 * Card description component for displaying card descriptions
 * 
 * @component
 * @example
 * ```tsx
 * <CardDescription>
 *   This is a detailed description of the card content.
 * </CardDescription>
 * ```
 * 
 * @param props - CardDescription component props
 * @returns JSX.Element
 */
export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

CardDescription.displayName = 'CardDescription';

/**
 * Card content component props interface
 * @interface CardContentProps
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Custom class name */
  className?: string;
  /** Content */
  children?: React.ReactNode;
}

/**
 * Card content component for displaying main card content
 * 
 * @component
 * @example
 * ```tsx
 * <CardContent>
 *   <p>This is the main content of the card.</p>
 *   <ul>
 *     <li>Feature 1</li>
 *     <li>Feature 2</li>
 *   </ul>
 * </CardContent>
 * ```
 * 
 * @param props - CardContent component props
 * @returns JSX.Element
 */
export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-6 pt-0', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

/**
 * Card footer component props interface
 * @interface CardFooterProps
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Custom class name */
  className?: string;
  /** Footer content */
  children?: React.ReactNode;
}

/**
 * Card footer component for displaying actions or additional information
 * 
 * @component
 * @example
 * ```tsx
 * <CardFooter>
 *   <Button variant="outline">Cancel</Button>
 *   <Button>Confirm</Button>
 * </CardFooter>
 * ```
 * 
 * @param props - CardFooter component props
 * @returns JSX.Element
 */
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center p-6 pt-0 gap-2', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export default Card;