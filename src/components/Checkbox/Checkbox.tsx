import React from 'react';
import type { CheckboxProps } from './Checkbox.types';
import { cn } from '../../utils';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      name,
      error = false,
      helperText,
      className,
      id,
      onChangeAction,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        <style>
          {`
            #${checkboxId}:checked + span svg {
              opacity: 1;
            }
            #${checkboxId}:checked + span svg polyline {
              stroke-dasharray: 30;
              stroke-dashoffset: 0;
              transition: stroke-dashoffset 0.3s ease-out;
            }
            #${checkboxId} + span svg polyline {
              stroke-dasharray: 30;
              stroke-dashoffset: 30;
              transition: stroke-dashoffset 0.3s ease-out;
            }
          `}
        </style>
        <div className="flex items-center">
          <input
            ref={ref}
            type="checkbox"
            name={name}
            id={checkboxId}
            className={cn(
              // Hide native box but keep it accessible; use peer for styling the custom box
              'peer sr-only',
              'focus:outline-none focus:ring-0 focus:ring-offset-0',
              className
            )}
            onChange={(e) => {
              if (onChangeAction) {
                // Replace this with your app's dispatcher/integration as needed
                // For now we keep parity with other components.
                // eslint-disable-next-line no-console
                console.log('Action dispatched:', onChangeAction);
              }
            }}
            {...props}
          />
          <span
            aria-hidden="true"
            onClick={() => {
              const el = document.getElementById(checkboxId) as HTMLInputElement | null;
              el?.click();
            }}
            className={cn(
              'relative inline-flex items-center justify-center',
              'h-[18px] w-[18px] rounded-md border border-[#CCCCCC] hover:border-[#AEAEAE] disabled:hover:border-[#CCCCCC]',
              'cursor-pointer transition-colors duration-100 ease-out',
              // checked fill transition
              'bg-white peer-checked:bg-[#181818] peer-checked:border-transparent',
              // disabled state
              'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
              // Icon visibility
              'peer-checked:[&>svg]:opacity-100'
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                'text-white opacity-0 transition-opacity duration-100 ease-out'
              )}
              style={{ width: '12px', height: '12px' }}
              aria-hidden="true"
            >
              <polyline points="4 12 9 17 20 6" />
            </svg>
          </span>
          {label && (
            <label htmlFor={checkboxId} className="ml-2 text-sm font-normal text-[#0E0E0E] cursor-pointer">
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

