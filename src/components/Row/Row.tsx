import React from 'react';
import type { RowProps } from './Row.types';
import { cn } from '../../utils';

const alignMap: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyMap: Record<string, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

export const Row = React.forwardRef<HTMLDivElement, RowProps>(
  (
    {
      gap,
      align = 'start',
      justify = 'start',
      wrap = false,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const customStyle: React.CSSProperties = {
      ...style,
      ...(gap !== undefined && { gap: typeof gap === 'number' ? `${gap}px` : gap }),
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-row',
          alignMap[align],
          justifyMap[justify],
          wrap && 'flex-wrap',
          className
        )}
        style={customStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Row.displayName = 'Row';

