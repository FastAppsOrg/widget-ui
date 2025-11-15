import React from 'react';
import type { DatePickerProps } from './DatePicker.types';
import { Input } from '../Input';

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      size = 'md',
      error = false,
      helperText,
      label,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Input
        ref={ref}
        type="date"
        size={size}
        error={error}
        helperText={helperText}
        label={label}
        className={className}
        {...props}
      />
    );
  }
);

DatePicker.displayName = 'DatePicker';

