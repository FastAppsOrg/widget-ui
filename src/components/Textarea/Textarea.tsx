import React from 'react';
import type { TextareaProps } from './Textarea.types';
import { cn } from '../../utils';

const sizeClasses: Record<string, string> = {
  '3xs': 'min-h-[22px] px-2 py-1 text-xs',
  '2xs': 'min-h-[24px] px-2.5 py-1.5 text-xs',
  'xs': 'min-h-[26px] px-3 py-2 text-sm',
  'sm': 'min-h-[28px] px-3.5 py-2 text-sm',
  'md': 'min-h-[32px] px-4 py-2 text-base',
  'lg': 'min-h-[36px] px-5 py-2.5 text-base',
  'xl': 'min-h-[40px] px-6 py-3 text-lg',
  '2xl': 'min-h-[44px] px-7 py-3 text-lg',
  '3xl': 'min-h-[48px] px-8 py-4 text-xl',
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
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
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full rounded-md border bg-white px-3 py-2 text-sm',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'resize-y',
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

Textarea.displayName = 'Textarea';

