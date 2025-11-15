import React from 'react';
import type { BadgeProps } from './Badge.types';
import { cn } from '../../utils';

const sizeClasses: Record<string, string> = {
  '3xs': 'px-1.5 py-0.5 text-xs',
  '2xs': 'px-2 py-0.5 text-xs',
  'xs': 'px-2 py-1 text-xs',
  'sm': 'px-2.5 py-1 text-sm',
  'md': 'px-3 py-1 text-sm',
  'lg': 'px-3 py-1.5 text-base',
  'xl': 'px-4 py-2 text-base',
  '2xl': 'px-4 py-2 text-lg',
  '3xl': 'px-5 py-2.5 text-xl',
};

const variantClasses: Record<string, Record<string, string>> = {
  solid: {
    primary: 'bg-primary-600 text-white',
    secondary: 'bg-secondary-600 text-white',
    info: 'bg-info-600 text-white',
    success: 'bg-success-600 text-white',
    caution: 'bg-caution-600 text-white',
    warning: 'bg-warning-600 text-white',
    danger: 'bg-danger-600 text-white',
    discovery: 'bg-discovery-600 text-white',
  },
  soft: {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    info: 'bg-info-100 text-info-700',
    success: 'bg-success-100 text-success-700',
    caution: 'bg-caution-100 text-caution-700',
    warning: 'bg-warning-100 text-warning-700',
    danger: 'bg-danger-100 text-danger-700',
    discovery: 'bg-discovery-100 text-discovery-700',
  },
  outline: {
    primary: 'border border-primary-600 text-primary-600 bg-transparent',
    secondary: 'border border-secondary-600 text-secondary-600 bg-transparent',
    info: 'border border-info-600 text-info-600 bg-transparent',
    success: 'border border-success-600 text-success-600 bg-transparent',
    caution: 'border border-caution-600 text-caution-600 bg-transparent',
    warning: 'border border-warning-600 text-warning-600 bg-transparent',
    danger: 'border border-danger-600 text-danger-600 bg-transparent',
    discovery: 'border border-discovery-600 text-discovery-600 bg-transparent',
  },
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      color = 'primary',
      size = 'sm',
      variant = 'solid',
      pill = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium',
          sizeClasses[size],
          variantClasses[variant][color],
          pill ? 'rounded-full' : 'rounded-md',
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

