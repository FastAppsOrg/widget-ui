import React from 'react';
import type { RadioGroupProps } from './RadioGroup.types';
import { cn } from '../../utils';

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      value,
      onChange,
      options,
      label,
      error = false,
      helperText,
      direction = 'vertical',
      className,
      ...props
    },
    ref
  ) => {
    const groupId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;

    const handleChange = (optionValue: string | number) => {
      if (onChange) {
        onChange(optionValue);
      }
    };

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <div
          className={cn(
            'flex',
            direction === 'horizontal' ? 'flex-row gap-4' : 'flex-col gap-2'
          )}
        >
          {options.map((option) => {
            const optionId = `${groupId}-${option.value}`;
            const isChecked = value === option.value;

            return (
              <div key={option.value} className="flex items-center">
                <input
                  type="radio"
                  id={optionId}
                  name={name}
                  value={option.value}
                  checked={isChecked}
                  onChange={() => handleChange(option.value)}
                  disabled={option.disabled}
                  className={cn(
                    'h-4 w-4 border-gray-300 text-primary-600',
                    'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    error && 'border-danger-500'
                  )}
                />
                <label
                  htmlFor={optionId}
                  className={cn(
                    'ml-2 text-sm font-medium',
                    option.disabled ? 'text-gray-400' : 'text-gray-700'
                  )}
                >
                  {option.label}
                </label>
              </div>
            );
          })}
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

RadioGroup.displayName = 'RadioGroup';

