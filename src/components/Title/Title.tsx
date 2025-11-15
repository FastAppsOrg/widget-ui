import React from 'react';
import type { TitleProps } from './Title.types';
import { cn } from '../../utils';

const sizeClasses: Record<string, string> = {
  sm: 'text-title-sm',
  md: 'text-title-md',
  lg: 'text-title-lg',
  xl: 'text-title-xl',
  '2xl': 'text-title-2xl',
};

const alignClasses: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const HeadingTag = React.forwardRef<HTMLHeadingElement, { level: 1 | 2 | 3 | 4 | 5 | 6; children: React.ReactNode } & React.HTMLAttributes<HTMLHeadingElement>>(
  ({ level, children, ...props }, ref) => {
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    return React.createElement(Tag, { ref, ...props }, children);
  }
);

HeadingTag.displayName = 'HeadingTag';

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  (
    {
      level = 1,
      size = 'lg',
      color,
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
      <HeadingTag
        ref={ref}
        level={level}
        className={cn(
          'font-bold',
          sizeClasses[size],
          alignClasses[align],
          className
        )}
        style={customStyle}
        {...props}
      >
        {children}
      </HeadingTag>
    );
  }
);

Title.displayName = 'Title';

