import React from 'react';
import type { DividerProps } from './Divider.types';
import { cn } from '../../utils';
import { colorTokens } from '../../theme/tokens';

// Border color token mappings
const borderColorTokenMap: Record<string, string> = {
  default: '#E0E0E0',
  subtle: '#F5F5F5',
  strong: '#BDBDBD',
};

// Helper function to resolve border color
function resolveBorderColor(
  color: string | { light?: string; dark?: string } | undefined
): string {
  if (!color) {
    return borderColorTokenMap.default;
  }

  // Theme-aware color object
  if (typeof color === 'object') {
    // For now, use light value (can be enhanced with theme detection)
    return color.light || borderColorTokenMap.default;
  }

  // Border color token
  if (color in borderColorTokenMap) {
    return borderColorTokenMap[color];
  }

  // Primitive color token (e.g., "red-100", "blue-900", "gray-500", "primary-500", "secondary-300")
  const primitiveColorMatch = color.match(/^([a-z]+)-(\d+)$/);
  if (primitiveColorMatch) {
    const [, colorName, shade] = primitiveColorMatch;
    const shadeNum = parseInt(shade, 10) as keyof typeof colorTokens.primary;
    
    // Check if the color name exists in our color tokens
    if (colorName in colorTokens) {
      const tokenColor = colorTokens[colorName as keyof typeof colorTokens];
      if (shadeNum in tokenColor) {
        return tokenColor[shadeNum];
      }
    }
  }

  // CSS string or other color value (e.g., "#E0E0E0", "rgb(224, 224, 224)", "red")
  return color;
}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      color = 'default',
      size = 1,
      spacing,
      flush = false,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const borderColor = resolveBorderColor(color);
    const borderWidth = typeof size === 'number' ? `${size}px` : size;
    
    const spacingValue = spacing !== undefined
      ? typeof spacing === 'number' ? `${spacing}px` : spacing
      : undefined;

    const customStyle: React.CSSProperties = {
      ...style,
      borderTop: `${borderWidth} solid ${borderColor}`,
      borderBottom: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      margin: flush 
        ? 0 
        : spacingValue !== undefined 
          ? `${spacingValue} 0` 
          : '0', // Reset default browser margins when spacing is not provided to allow dynamic spacing
      width: '100%',
    };

    return (
      <hr
        ref={ref}
        className={cn(flush && 'm-0', className)}
        style={customStyle}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

