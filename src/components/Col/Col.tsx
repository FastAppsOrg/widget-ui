import React from 'react';
import type { ColProps } from './Col.types';
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

const spanMap: Record<number, string> = {
  1: 'w-1/12',
  2: 'w-2/12',
  3: 'w-3/12',
  4: 'w-4/12',
  5: 'w-5/12',
  6: 'w-6/12',
  7: 'w-7/12',
  8: 'w-8/12',
  9: 'w-9/12',
  10: 'w-10/12',
  11: 'w-11/12',
  12: 'w-full',
};

export const Col = React.forwardRef<HTMLDivElement, ColProps>(
  (
    {
      span,
      gap,
      align = 'start',
      justify = 'start',
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
          'flex flex-col',
          alignMap[align],
          justifyMap[justify],
          span && spanMap[span],
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

Col.displayName = 'Col';

