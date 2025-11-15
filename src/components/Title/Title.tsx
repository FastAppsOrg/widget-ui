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

const HeadingTag = React.forwardRef<HTMLHeadingElement, { level: number; children: React.ReactNode } & any>(
  ({ level, children, ...props }, ref) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag ref={ref} {...props}>{children}</Tag>;
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

