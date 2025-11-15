import React from 'react';
import type { BoxProps } from './Box.types';
import { cn } from '../../utils';

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      p,
      m,
      bg,
      borderRadius,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const customStyle: React.CSSProperties = {
      ...style,
      ...(p !== undefined && { padding: typeof p === 'number' ? `${p}px` : p }),
      ...(m !== undefined && { margin: typeof m === 'number' ? `${m}px` : m }),
      ...(bg && { backgroundColor: bg }),
      ...(borderRadius !== undefined && {
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
      }),
    };

    return (
      <div
        ref={ref}
        className={cn(className)}
        style={customStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Box.displayName = 'Box';

