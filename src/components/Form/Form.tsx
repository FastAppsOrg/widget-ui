import React from 'react';
import type { FormProps } from './Form.types';
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

// Helper function to set nested object value by dot path
function setNestedValue(obj: Record<string, any>, path: string, value: any): void {
  const keys = path.split('.');
  let current = obj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current) || typeof current[key] !== 'object' || current[key] === null) {
      current[key] = {};
    }
    current = current[key];
  }
  
  current[keys[keys.length - 1]] = value;
}

// Helper function to collect form data
function collectFormData(form: HTMLFormElement): Record<string, any> {
  const formData = new FormData(form);
  const data: Record<string, any> = {};

  // Collect from FormData
  formData.forEach((value, key) => {
    setNestedValue(data, key, value);
  });

  // Also collect from form elements directly (for custom components)
  const elements = form.elements;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const name = element.getAttribute('name');
    
    if (name && !formData.has(name)) {
      if (element.type === 'checkbox') {
        const checkbox = element as HTMLInputElement;
        if (checkbox.checked) {
          setNestedValue(data, name, checkbox.value || true);
        }
      } else if (element.type === 'radio') {
        const radio = element as HTMLInputElement;
        if (radio.checked) {
          setNestedValue(data, name, radio.value);
        }
      } else if ('value' in element) {
        setNestedValue(data, name, element.value);
      }
    }
  }

  return data;
}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (
    {
      children,
      onSubmitAction,
      direction = 'col',
      align,
      justify,
      wrap,
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
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      if (onSubmitAction) {
        const form = e.currentTarget;
        const formData = collectFormData(form);
        
        const action: { type: string; payload?: unknown } = {
          type: onSubmitAction.type,
          payload: formData,
        };
        
        // Dispatch action (in a real app, this would go through a state management system)
        if (onSubmitAction.payload !== undefined) {
          action.payload = { ...onSubmitAction.payload, ...formData };
        }
        
        console.log('Form submitted with action:', action);
      }
    };

    // Build style object
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
        backgroundColor: typeof background === 'object' ? background.light : background,
      }),
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cn(
          'flex',
          direction === 'row' ? 'flex-row' : 'flex-col',
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
      </form>
    );
  }
);

Form.displayName = 'Form';

