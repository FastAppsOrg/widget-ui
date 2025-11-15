import React from 'react';
import type { TextProps } from './Text.types';
import { cn } from '../../utils';

const sizeClasses: Record<string, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const weightClasses: Record<string, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const alignClasses: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      size = 'md',
      color,
      weight = 'normal',
      align = 'left',
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
      <p
        ref={ref}
        className={cn(
          sizeClasses[size],
          weightClasses[weight],
          alignClasses[align],
          className
        )}
        style={customStyle}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = 'Text';

