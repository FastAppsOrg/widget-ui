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
              'h-[18px] w-[18px] rounded-lg border border-[#CCCCCC] hover:border-[#AEAEAE] disabled:hover:border-[#CCCCCC]',
              'cursor-pointer transition-colors duration-100 ease-out',
              // checked fill transition
              'bg-white peer-checked:bg-[#181818]',
              // disabled state
              'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed'
            )}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-0 peer-checked:opacity-100 transition-opacity duration-100 ease-out"
              aria-hidden="true"
            >
              <path d="M3 6.5L5 8.5L9 4.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

