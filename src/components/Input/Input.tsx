import React from 'react';
import type { InputProps } from './Input.types';
import { cn } from '../../utils';

const sizeClasses: Record<string, string> = {
  '3xs': 'h-[22px] px-2 text-xs',
  '2xs': 'h-[24px] px-2.5 text-xs',
  'xs': 'h-[26px] px-3 text-sm',
  'sm': 'h-[28px] px-3.5 text-sm',
  'md': 'h-[32px] px-4 text-base',
  'lg': 'h-[36px] px-5 text-base',
  'xl': 'h-[40px] px-6 text-lg',
  '2xl': 'h-[44px] px-7 text-lg',
  '3xl': 'h-[48px] px-8 text-xl',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      error = false,
      helperText,
      label,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full rounded-md border bg-white px-3 py-2 text-sm',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            sizeClasses[size],
            error
              ? 'border-danger-500 focus:border-danger-500 focus:ring-danger-500'
              : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500',
            className
          )}
          {...props}
        />
        {helperText && (
          <p className={cn('mt-1 text-sm', error ? 'text-danger-600' : 'text-gray-500')}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

