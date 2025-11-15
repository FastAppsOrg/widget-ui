import React from 'react';
import type { DividerProps } from './Divider.types';
import { cn } from '../../utils';

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      text,
      className,
      ...props
    },
    ref
  ) => {
    if (orientation === 'vertical') {
      return (
        <div
          ref={ref as any}
          className={cn('w-px bg-gray-300 self-stretch', className)}
          {...(props as any)}
        />
      );
    }

    if (text) {
      return (
        <div className={cn('flex items-center my-4', className)}>
          <hr className="flex-1 border-t border-gray-300" />
          <span className="px-4 text-sm text-gray-500">{text}</span>
          <hr className="flex-1 border-t border-gray-300" />
        </div>
      );
    }

    return (
      <hr
        ref={ref}
        className={cn('border-t border-gray-300 my-4', className)}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

