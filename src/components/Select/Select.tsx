import React from 'react';
import type { SelectProps, SelectOption } from './Select.types';
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

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = 'md',
      error = false,
      helperText,
      label,
      options = [],
      placeholder,
      className,
      id,
      children,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
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
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
          {children}
        </select>
        {helperText && (
          <p className={cn('mt-1 text-sm', error ? 'text-danger-600' : 'text-gray-500')}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

