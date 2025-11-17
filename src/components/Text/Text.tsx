import React, { useEffect, useState } from 'react';
import type { TextProps, TextSize } from './Text.types';
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
  start: 'text-left',
  center: 'text-center',
  end: 'text-right',
  left: 'text-left',
  right: 'text-right',
  justify: 'text-justify',
};

const lineHeightPx: Record<TextSize, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      value,
      size = 'md',
      color,
      weight = 'normal',
      streaming = false,
      italic = false,
      lineThrough = false,
      width,
      minLines,
      editable = false,
      textAlign: textAlignProp,
      align,
      truncate = false,
      maxLines,
      className,
      style,
      children,
      onInput,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const childString = typeof children === 'string' ? children : undefined;
    const [editableValue, setEditableValue] = useState(value ?? childString ?? '');

    useEffect(() => {
      if (value !== undefined) {
        setEditableValue(value);
      } else if (childString !== undefined) {
        setEditableValue(childString);
      }
    }, [value, childString]);

    const resolvedTextAlign = textAlignProp ?? align ?? 'start';
    const alignmentClass = alignClasses[resolvedTextAlign] ?? alignClasses.start;
    const isEditable = Boolean(editable);
    const editableConfig = typeof editable === 'object' ? editable : undefined;
    const shouldTruncate = truncate && !maxLines;

    const customStyle: React.CSSProperties = {
      ...style,
      ...(color && { color }),
      ...(width !== undefined && { width: typeof width === 'number' ? `${width}px` : width }),
      ...(minLines !== undefined && minLines > 0 && {
        minHeight: `${lineHeightPx[size] * minLines}px`,
      }),
      ...(maxLines !== undefined &&
        maxLines > 0 && {
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: maxLines,
          overflow: 'hidden',
          wordBreak: 'break-word',
        }),
    };

    const handleInput = (event: React.FormEvent<HTMLParagraphElement>) => {
      if (isEditable) {
        const nextValue = event.currentTarget.textContent ?? '';
        setEditableValue(nextValue);
        editableConfig?.onChange?.(nextValue);
      }

      onInput?.(event);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLParagraphElement>) => {
      if (
        isEditable &&
        editableConfig?.onSubmit &&
        event.key === 'Enter' &&
        !event.shiftKey
      ) {
        event.preventDefault();
        editableConfig.onSubmit(editableValue);
      }

      onKeyDown?.(event);
    };

    const content = isEditable ? editableValue : value ?? children;

    return (
      <p
        ref={ref}
        className={cn(
          sizeClasses[size],
          weightClasses[weight],
          alignmentClass,
          italic && 'italic',
          lineThrough && 'line-through',
          shouldTruncate && 'truncate',
          isEditable && 'outline-none focus-visible:ring-1 focus-visible:ring-gray-300',
          className
        )}
        style={customStyle}
        data-streaming={streaming ? 'true' : undefined}
        contentEditable={isEditable || undefined}
        suppressContentEditableWarning={isEditable}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {content}
      </p>
    );
  }
);

Text.displayName = 'Text';

