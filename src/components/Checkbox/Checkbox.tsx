import React from 'react';
import type { CheckboxProps } from './Checkbox.types';
import { cn } from '../../utils';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error = false,
      helperText,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        <div className="flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={cn(
              'h-4 w-4 rounded border-gray-300 text-primary-600',
              'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error && 'border-danger-500',
              className
            )}
            {...props}
          />
          {label && (
            <label htmlFor={checkboxId} className="ml-2 text-sm font-medium text-gray-700">
              {label}
            </label>
          )}
        </div>
        {helperText && (
          <p className={cn('mt-1 text-sm', error ? 'text-danger-600' : 'text-gray-500')}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

