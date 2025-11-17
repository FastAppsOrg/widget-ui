import React from 'react';
import type { RowProps } from './Row.types';
import { cn } from '../../utils';

const alignMap: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};

const justifyMap: Record<string, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  stretch: 'justify-stretch',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const wrapMap: Record<string, string> = {
  nowrap: 'flex-nowrap',
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
};

const radiusMap: Record<string, string> = {
  '2xs': 'rounded-[2px]',
  xs: 'rounded-[4px]',
  sm: 'rounded-[6px]',
  md: 'rounded-[8px]',
  lg: 'rounded-[12px]',
  xl: 'rounded-[16px]',
  '2xl': 'rounded-[24px]',
  '3xl': 'rounded-[32px]',
  '4xl': 'rounded-[48px]',
  full: 'rounded-full',
  '100%': 'rounded-full',
  none: 'rounded-none',
};

const surfaceColorMap: Record<string, string> = {
  surface: '#ffffff',
  'surface-secondary': '#f5f5f5',
  'surface-tertiary': '#e5e5e5',
  'surface-elevated': '#ffffff',
  'surface-elevated-secondary': '#fafafa',
};

function resolveBackgroundColor(background: string | { light?: string; dark?: string } | undefined): string | undefined {
  if (!background) return undefined;

  if (typeof background === 'object') {
    return background.light;
  }

  if (background in surfaceColorMap) {
    return surfaceColorMap[background];
  }

  return background;
}

export const Row = React.forwardRef<HTMLDivElement, RowProps>(
  (
    {
      children,
      align,
      justify,
      wrap = 'nowrap',
      flex,
      gap,
      padding,
      border,
      background,
      height,
      width,
      size,
      minHeight,
      minWidth,
      minSize,
      maxHeight,
      maxWidth,
      maxSize,
      aspectRatio,
      radius,
      margin,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const customStyle: React.CSSProperties = {
      ...style,
      ...(gap !== undefined && { gap: typeof gap === 'number' ? `${gap}px` : gap }),
      ...(flex !== undefined && { flex: typeof flex === 'number' ? flex : flex }),
      ...(height !== undefined && { height: typeof height === 'number' ? `${height}px` : height }),
      ...(width !== undefined && { width: typeof width === 'number' ? `${width}px` : width }),
      ...(size !== undefined && {
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
      }),
      ...(minHeight !== undefined && { minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight }),
      ...(minWidth !== undefined && { minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth }),
      ...(minSize !== undefined && {
        minWidth: typeof minSize === 'number' ? `${minSize}px` : minSize,
        minHeight: typeof minSize === 'number' ? `${minSize}px` : minSize,
      }),
      ...(maxHeight !== undefined && { maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight }),
      ...(maxWidth !== undefined && { maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth }),
      ...(maxSize !== undefined && {
        maxWidth: typeof maxSize === 'number' ? `${maxSize}px` : maxSize,
        maxHeight: typeof maxSize === 'number' ? `${maxSize}px` : maxSize,
      }),
      ...(aspectRatio !== undefined && { aspectRatio: typeof aspectRatio === 'number' ? aspectRatio : aspectRatio }),
      ...(padding !== undefined && {
        padding: typeof padding === 'object'
          ? `${padding.top ?? 0}px ${padding.right ?? 0}px ${padding.bottom ?? 0}px ${padding.left ?? 0}px`
          : typeof padding === 'number'
          ? `${padding}px`
          : padding,
      }),
      ...(margin !== undefined && {
        margin: typeof margin === 'object'
          ? `${margin.top ?? 0}px ${margin.right ?? 0}px ${margin.bottom ?? 0}px ${margin.left ?? 0}px`
          : typeof margin === 'number'
          ? `${margin}px`
          : margin,
      }),
      ...(border !== undefined && {
        border:
          typeof border === 'object'
            ? `${border.width ?? 1}px ${border.style ?? 'solid'} ${border.color ?? '#000'}`
            : `${border}px solid #000`,
      }),
      ...(background !== undefined && {
        backgroundColor: resolveBackgroundColor(background),
      }),
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-row',
          align && alignMap[align],
          justify && justifyMap[justify],
          wrap && wrapMap[wrap],
          radius && radiusMap[radius],
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
