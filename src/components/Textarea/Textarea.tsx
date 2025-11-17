import React from 'react';
import type { TextareaProps } from './Textarea.types';
import { cn } from '../../utils';
import type { Size } from '../../types';

// Size specifications (same as Input)
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

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      name,
      defaultValue,
      required = false,
      placeholder,
      autoSelect = false,
      autoFocus = false,
      disabled = false,
      variant = 'outline',
      size = 'md',
      gutterSize,
      rows = 3,
      autoResize = false,
      maxRows,
      allowAutofillExtensions = false,
      error = false,
      helperText,
      label,
      className,
      id,
      onChange,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const spec = sizeSpec[size] || sizeSpec['md'];
    const effectiveGutterSize = gutterSize || sizeToGutterSize[size];
    const paddingX = gutterSizeMap[effectiveGutterSize];
    const paddingY = Math.max(6, paddingX * 0.5); // Vertical padding based on gutter
    const effectiveMaxRows = maxRows ?? Math.max(rows, 10);

    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const setRefs = (node: HTMLTextAreaElement | null) => {
      textareaRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
      }
    };

    // Auto-select on mount
    React.useEffect(() => {
      if (autoSelect && textareaRef.current) {
        textareaRef.current.select();
      }
    }, [autoSelect]);

    // Auto-resize functionality
    const adjustHeight = React.useCallback(() => {
      if (!autoResize || !textareaRef.current) return;

      const textarea = textareaRef.current;
      // Reset height to auto to get accurate scrollHeight
      textarea.style.height = 'auto';
      
      // Calculate line height based on font size and padding
      const computedStyle = window.getComputedStyle(textarea);
      const lineHeight = parseFloat(computedStyle.lineHeight) || spec.heightPx;
      const minHeight = lineHeight * rows + (paddingY * 2);
      const maxHeight = lineHeight * effectiveMaxRows + (paddingY * 2);
      
      const scrollHeight = textarea.scrollHeight;
      const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
      
      textarea.style.height = `${newHeight}px`;
      textarea.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden';
    }, [autoResize, rows, effectiveMaxRows, spec.heightPx, paddingY]);

    React.useEffect(() => {
      if (autoResize) {
        adjustHeight();
      }
    }, [autoResize, adjustHeight, defaultValue]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (autoResize) {
        adjustHeight();
      }
      onChange?.(e);
    };

    // Variant styles (same as Input, but only soft and outline)
    const variantStyles = (() => {
      switch (variant) {
        case 'soft':
          return 'bg-[#EBEBEB] border-[#EBEBEB]';
        case 'outline':
          return 'bg-white border-[#D3D3D3]';
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
        case 'soft':
          return 'focus:border-[#BFBFBF]';
        case 'outline':
          return 'focus:border-[#828282]';
        default:
          return 'focus:border-[#828282]';
      }
    })();

    // Placeholder color
    const placeholderColor = 'placeholder:text-[#8E8E8E]';

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <textarea
          ref={setRefs}
          id={textareaId}
          name={name}
          defaultValue={defaultValue}
          required={required}
          placeholder={placeholder}
          autoFocus={autoFocus}
          disabled={disabled}
          rows={rows}
          autoComplete={allowAutofillExtensions ? 'on' : 'off'}
          className={cn(
            'w-full rounded-lg border',
            'focus:outline-none transition-colors',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'resize-none',
            variantStyles,
            focusStyles,
            placeholderColor,
            'placeholder:font-light',
            spec.fontSizeClass,
            error && 'border-danger-500 focus:border-danger-500',
            autoResize && 'overflow-hidden',
            className
          )}
          style={{
            fontSize: spec.fontPx,
            paddingLeft: paddingX,
            paddingRight: paddingX,
            paddingTop: paddingY,
            paddingBottom: paddingY,
            color: '#282828',
          }}
          onChange={handleChange}
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

Textarea.displayName = 'Textarea';

