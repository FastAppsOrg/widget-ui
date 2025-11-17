import React from 'react';
import type { InputProps } from './Input.types';
import { cn } from '../../utils';
import type { Size } from '../../types';

// Size specifications
const sizeSpec: Record<Size, {
  heightPx: number;
  fontPx: number;
  fontSizeClass: string;
}> = {
  '3xs': { heightPx: 22, fontPx: 12, fontSizeClass: 'text-xs' },
  '2xs': { heightPx: 24, fontPx: 12, fontSizeClass: 'text-xs' },
  'xs': { heightPx: 26, fontPx: 14, fontSizeClass: 'text-sm' },
  'sm': { heightPx: 28, fontPx: 14, fontSizeClass: 'text-sm' },
  'md': { heightPx: 32, fontPx: 14, fontSizeClass: 'text-base' },
  'lg': { heightPx: 36, fontPx: 14, fontSizeClass: 'text-base' },
  'xl': { heightPx: 40, fontPx: 16, fontSizeClass: 'text-lg' },
  '2xl': { heightPx: 44, fontPx: 16, fontSizeClass: 'text-lg' },
  '3xl': { heightPx: 48, fontPx: 16, fontSizeClass: 'text-xl' },
};

// Gutter size to padding mapping (in pixels)
const gutterSizeMap: Record<'2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl', number> = {
  '2xs': 6,
  'xs': 8,
  'sm': 10,
  'md': 12,
  'lg': 14,
  'xl': 16,
};

// Map size to default gutterSize
const sizeToGutterSize: Record<Size, '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'> = {
  '3xs': '2xs',
  '2xs': 'xs',
  'xs': 'xs',
  'sm': 'sm',
  'md': 'md',
  'lg': 'lg',
  'xl': 'lg',
  '2xl': 'xl',
  '3xl': 'xl',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'outline',
      gutterSize,
      error = false,
      helperText,
      label,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const spec = sizeSpec[size] || sizeSpec['md'];
    const effectiveGutterSize = gutterSize || sizeToGutterSize[size];
    const paddingX = gutterSizeMap[effectiveGutterSize];

    // Variant styles
    const variantStyles = (() => {
      switch (variant) {
        case 'solid':
          return 'bg-[#181818] text-white border-[#181818]';
        case 'soft':
          return 'bg-[#EBEBEB] border-[#EBEBEB]';
        case 'outline':
          return 'bg-white border-[#D3D3D3]';
        case 'ghost':
          return 'bg-transparent border-transparent';
        default:
          return 'bg-white border-[#D3D3D3]';
      }
    })();

    // Focus styles based on variant
    const focusStyles = (() => {
      if (error) {
        return 'focus:border-danger-500';
      }
      switch (variant) {
        case 'solid':
          return 'focus:border-[#303030] focus:bg-[#303030]';
        case 'soft':
          return 'focus:border-[#E2E2E2] focus:bg-[#E2E2E2]';
        case 'outline':
          return 'focus:border-[#828282]';
        case 'ghost':
          return 'focus:bg-[#EBEBEB]';
        default:
          return 'focus:border-[#828282]';
      }
    })();

    // Placeholder color based on variant
    const placeholderColor = variant === 'solid' 
      ? 'placeholder:text-[#8E8E8E]' 
      : 'placeholder:text-[#8E8E8E]';

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full rounded-lg border',
            'focus:outline-none transition-colors',
            'disabled:cursor-not-allowed disabled:opacity-50',
            variantStyles,
            focusStyles,
            placeholderColor,
            'placeholder:font-light',
            spec.fontSizeClass,
            error && 'border-danger-500 focus:border-danger-500',
            className
          )}
          style={{
            height: spec.heightPx,
            fontSize: spec.fontPx,
            paddingLeft: paddingX,
            paddingRight: paddingX,
            color: variant === 'solid' ? '#FFFFFF' : '#282828',
          }}
          {...props}
        />
        {helperText && (
          <p className={cn('mt-1 text-sm', error ? 'text-danger-600' : 'text-gray-500')}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

