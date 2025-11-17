import React, { useState } from 'react';
import type { RadioGroupProps } from './RadioGroup.types';
import { cn } from '../../utils';

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      options,
      ariaLabel,
      onChangeAction,
      defaultValue,
      direction = 'row',
      disabled = false,
      required = false,
      className,
      ...props
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = useState<string | number | undefined>(defaultValue);

    const handleChange = (optionValue: string | number) => {
      setSelectedValue(optionValue);
      if (onChangeAction) {
        // Replace this with your app's dispatcher/integration as needed
        // eslint-disable-next-line no-console
        console.log('Action dispatched:', onChangeAction);
      }
    };

    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-label={ariaLabel || name}
        className={cn('w-full', className)}
        {...props}
      >
        <div
          className={cn(
            'flex',
            direction === 'row' ? 'flex-row gap-4' : 'flex-col gap-2'
          )}
        >
          {options.map((option) => {
            const optionId = `radio-${name}-${option.value}`;
            const isChecked = selectedValue === option.value;
            const isOptionDisabled = disabled || option.disabled;

            return (
              <div key={option.value} className="flex items-center">
                <style>
                  {`
                    #${optionId}:checked + span.radio-checked {
                      background-color: #181818;
                      border-color: transparent;
                    }
                    #${optionId}:checked + span.radio-checked::after {
                      opacity: 1;
                      transform: scale(1);
                    }
                    span.radio-checked::after {
                      content: '';
                      position: absolute;
                      width: 6px;
                      height: 6px;
                      border-radius: 50%;
                      background-color: #FFFFFF;
                      opacity: 1;
                      transform: scale(1);
                      transition: opacity 0.15s ease-out, transform 0.1s ease-out;
                    }
                    span.radio-unchecked::after {
                      content: '';
                      position: absolute;
                      width: 6px;
                      height: 6px;
                      border-radius: 50%;
                      background-color: #FFFFFF;
                      opacity: 0;
                      transform: scale(0);
                      transition: opacity 0.15s ease-out, transform 0.1s ease-out;
                    }
                  `}
                </style>
                <input
                  type="radio"
                  id={optionId}
                  name={name}
                  value={option.value}
                  checked={isChecked}
                  onChange={() => handleChange(option.value)}
                  disabled={isOptionDisabled}
                  required={required}
                  className={cn(
                    'peer sr-only',
                    'focus:outline-none focus:ring-0 focus:ring-offset-0'
                  )}
                />
                <span
                  aria-hidden="true"
                  onClick={() => {
                    if (!isOptionDisabled) {
                      const el = document.getElementById(optionId) as HTMLInputElement | null;
                      el?.click();
                    }
                  }}
                  className={cn(
                    'relative inline-flex items-center justify-center',
                    'h-[16px] w-[16px] rounded-full border border-[#CCCCCC]',
                    'cursor-pointer transition-colors duration-100 ease-out',
                    // checked fill transition
                    isChecked 
                      ? 'bg-[#181818] border-transparent radio-checked hover:border-transparent' 
                      : 'bg-white radio-unchecked hover:border-[#AEAEAE]',
                    // disabled state
                    'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed disabled:hover:border-[#CCCCCC]',
                    isOptionDisabled && 'opacity-50 cursor-not-allowed'
                  )}
                />
                <label
                  htmlFor={optionId}
                  className={cn(
                    'ml-2 text-sm font-normal text-[#0E0E0E] cursor-pointer',
                    isOptionDisabled && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  {option.label}
                  {required && <span className="text-danger-600 ml-1">*</span>}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';


