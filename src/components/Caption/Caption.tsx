import React from 'react';
import type { CaptionProps } from './Caption.types';
import { cn } from '../../utils';

export const Caption = React.forwardRef<HTMLSpanElement, CaptionProps>(
  (
    {
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
      <span
        ref={ref}
        className={cn('text-caption text-gray-500', className)}
        style={customStyle}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Caption.displayName = 'Caption';

