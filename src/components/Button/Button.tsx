import React from 'react';
import type { ButtonProps } from './Button.types';
import { Icon } from '../../icons';
import { cn } from '../../utils';

const sizeClasses: Record<string, string> = {
  '3xs': 'h-[22px] px-2 text-xs',
  '2xs': 'h-[24px] px-2.5 text-xs',
  'xs': 'h-[26px] px-3 text-sm',
  'sm': 'h-[28px] px-3.5 text-sm',
  'md': 'h-[32px] px-4 text-base',
  'lg': 'h-[36px] px-5 text-base',
  'xl': 'h-[40px] px-6 text-lg',
  '2xl': 'h-[44px] px-7 text-lg',
  '3xl': 'h-[48px] px-8 text-xl',
};

// Color definitions
const buttonColors = {
  info: { base: '#0385ff', hover: '#006acb' },
  primary: { base: '#181818', hover: '#303030' },
  secondary: { base: '#5d5d5d', hover: '#414141' },
  discovery: { base: '#914ff7', hover: '#8046da' },
  success: { base: '#01a241', hover: '#01a241' },
  caution: { base: '#ba8e01', hover: '#906f00' },
  warning: { base: '#e25605', hover: '#b8490d' },
  danger: { base: '#df2e2a', hover: '#b92723' },
} as const;

const variantClasses: Record<string, Record<string, string>> = {
  solid: {
    info: 'text-white disabled:opacity-50 disabled:cursor-not-allowed',
    primary: 'text-white disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'text-white disabled:opacity-50 disabled:cursor-not-allowed',
    discovery: 'text-white disabled:opacity-50 disabled:cursor-not-allowed',
    success: 'text-white disabled:opacity-50 disabled:cursor-not-allowed',
    caution: 'text-white disabled:opacity-50 disabled:cursor-not-allowed',
    warning: 'text-white disabled:opacity-50 disabled:cursor-not-allowed',
    danger: 'text-white disabled:opacity-50 disabled:cursor-not-allowed',
  },
  soft: {
    info: 'disabled:opacity-50 disabled:cursor-not-allowed',
    primary: 'disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'disabled:opacity-50 disabled:cursor-not-allowed',
    discovery: 'disabled:opacity-50 disabled:cursor-not-allowed',
    success: 'disabled:opacity-50 disabled:cursor-not-allowed',
    caution: 'disabled:opacity-50 disabled:cursor-not-allowed',
    warning: 'disabled:opacity-50 disabled:cursor-not-allowed',
    danger: 'disabled:opacity-50 disabled:cursor-not-allowed',
  },
  outline: {
    info: 'border-2 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    primary: 'border-2 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'border-2 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    discovery: 'border-2 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    success: 'border-2 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    caution: 'border-2 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    warning: 'border-2 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    danger: 'border-2 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
  },
  ghost: {
    info: 'bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    primary: 'bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    discovery: 'bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    success: 'bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    caution: 'bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    warning: 'bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    danger: 'bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      submit = false,
      label,
      onClickAction,
      iconStart,
      iconEnd,
      style,
      iconSize = 'md',
      color = 'primary',
      variant = 'solid',
      size = 'lg',
      pill = true,
      uniform = false,
      block = false,
      disabled = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    // Determine actual color based on style prop or color prop
    const actualColor = style === 'primary' ? 'primary' : style === 'secondary' ? 'secondary' : color;

    // Determine actual variant based on style prop
    const actualVariant = style ? (style === 'primary' ? 'solid' : 'outline') : variant;

    const colorConfig = buttonColors[actualColor as keyof typeof buttonColors];
    const baseColor = colorConfig.base;
    const hoverColor = colorConfig.hover;

    // Helper function to convert hex to rgb
    function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    }

    // Generate dynamic styles based on variant
    const getVariantStyles = () => {
      switch (actualVariant) {
        case 'solid':
          return {
            backgroundColor: baseColor,
            color: '#ffffff',
          } as React.CSSProperties;
        case 'soft': {
          // Convert hex to rgba with 10% opacity for soft variant
          const rgb = hexToRgb(baseColor);
          return {
            backgroundColor: rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)` : baseColor,
            color: baseColor,
          } as React.CSSProperties;
        }
        case 'outline':
          return {
            borderColor: baseColor,
            color: baseColor,
            backgroundColor: 'transparent',
          } as React.CSSProperties;
        case 'ghost':
          return {
            color: baseColor,
            backgroundColor: 'transparent',
          } as React.CSSProperties;
        default:
          return {};
      }
    };

    // Get hover background color for soft/outline/ghost variants
    const getHoverBackgroundColor = () => {
      if (actualVariant === 'solid') {
        return hoverColor;
      }
      const rgb = hexToRgb(baseColor);
      if (rgb) {
        const opacity = actualVariant === 'soft' ? 0.2 : 0.1;
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
      }
      return baseColor;
    };

    const variantStyles = getVariantStyles();
    const hoverBgColor = getHoverBackgroundColor();

    const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed';
    
    const sizeClass = sizeClasses[size] || sizeClasses.lg;
    const variantClass = variantClasses[actualVariant]?.[actualColor] || variantClasses.solid.primary;
    const borderRadiusClass = pill ? 'rounded-full' : 'rounded-md';
    const uniformClass = uniform ? 'aspect-square' : '';
    const blockClass = block ? 'w-full' : '';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

    // Add hover styles using state
    const [isHovered, setIsHovered] = React.useState(false);
    
    const hoverStyles: React.CSSProperties = disabled || !isHovered 
      ? {} 
      : { backgroundColor: hoverBgColor };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      if (onClick) {
        onClick(e);
      }

      if (onClickAction) {
        // Dispatch action (in a real app, this would use a state management system)
        console.log('Action dispatched:', onClickAction);
      }
    };

    return (
      <button
        ref={ref}
        type={submit ? 'submit' : 'button'}
        disabled={disabled}
        onClick={handleClick}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ ...variantStyles, ...hoverStyles }}
        className={cn(
          baseClasses,
          sizeClass,
          variantClass,
          borderRadiusClass,
          uniformClass,
          blockClass,
          disabledClass,
          className
        )}
        {...props}
      >
        {iconStart && (
          <Icon
            name={iconStart}
            size={iconSize}
            className={label ? 'mr-2' : ''}
          />
        )}
        {label && <span>{label}</span>}
        {iconEnd && (
          <Icon
            name={iconEnd}
            size={iconSize}
            className={label ? 'ml-2' : ''}
          />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

