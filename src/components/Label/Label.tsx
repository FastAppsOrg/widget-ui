import React from 'react';
import type { LabelProps } from './Label.types';
import { cn } from '../../utils';

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      required = false,
      color,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const customStyle: React.CSSProperties = {
      ...style,
      ...(color && { color }),
    };

    return (
      <label
        ref={ref}
        className={cn(
          'block text-sm font-medium text-gray-700',
          className
        )}
        style={customStyle}
        {...props}
      >
        {children}
        {required && <span className="text-danger-500 ml-1">*</span>}
      </label>
    );
  }
);

Label.displayName = 'Label';

