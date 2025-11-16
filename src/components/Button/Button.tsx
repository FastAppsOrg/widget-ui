import React from 'react';
import type { ButtonProps } from './Button.types';
import { Icon } from '../../icons';
import { cn } from '../../utils';

const sizeClasses: Record<string, string> = {
  '3xs': 'h-[22px] px-1.5 text-xs',     // 22px height, 6px x-padding, 12px text
  '2xs': 'h-[24px] px-2 text-xs',       // 24px height, 8px x-padding, 12px text
  'xs':  'h-[26px] px-2.5 text-sm',     // 26px height, 10px x-padding, 14px text
  'sm':  'h-[28px] px-3 text-sm',       // 28px height, 12px x-padding, 14px text
  'md':  'h-[32px] px-3.5 text-sm',     // 32px height, 14px x-padding, 14px text
  'lg':  'h-[36px] px-4 text-sm',       // 36px height, 16px x-padding, 14px text
  'xl':  'h-[40px] px-[18px] text-sm',  // 40px height, 18px x-padding, 14px text
  '2xl': 'h-[44px] px-[18px] text-base',// 44px height, 18px x-padding, 16px text
  '3xl': 'h-[48px] px-[22px] text-base',// 48px height, 22px x-padding, 16px text
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
    info: 'border bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    primary: 'border bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'border bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    discovery: 'border bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    success: 'border bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    caution: 'border bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    warning: 'border bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    danger: 'border bg-transparent disabled:opacity-50 disabled:cursor-not-allowed',
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
      onClickAction = 'loading',
      iconStart,
      iconEnd,
      style,
      iconSize = 'md',
      color = 'primary',
      variant,
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
    const isVariantProvided = actualVariant !== undefined;
    // When variant is not provided, we default to 'solid' but use token colors
    const resolvedVariant: 'solid' | 'soft' | 'outline' | 'ghost' = (actualVariant ?? 'solid') as any;

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
      if (!isVariantProvided) {
        // Token colors path when variant is not explicitly provided
        switch (resolvedVariant) {
          case 'solid':
            return { backgroundColor: baseColor, color: '#ffffff' } as React.CSSProperties;
          case 'soft': {
            const rgb = hexToRgb(baseColor);
            return { backgroundColor: rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)` : baseColor, color: baseColor } as React.CSSProperties;
          }
          case 'outline':
            return { borderColor: baseColor, color: baseColor, backgroundColor: 'transparent' } as React.CSSProperties;
          case 'ghost':
            return { color: baseColor, backgroundColor: 'transparent' } as React.CSSProperties;
          default:
            return {};
        }
      }
      // Neutral palette per spec when variant is provided
      switch (resolvedVariant) {
        case 'solid':
          return {
            // solid: basic color 181818
            backgroundColor: '#181818',
            color: '#ffffff',
          } as React.CSSProperties;
        case 'soft': {
          return {
            // soft: basic color EBEBEB
            backgroundColor: '#EBEBEB',
            color: '#181818',
          } as React.CSSProperties;
        }
        case 'outline':
          return {
            // outline: no color + border D8D8D8
            borderColor: '#D8D8D8',
            color: '#181818',
            backgroundColor: 'transparent',
          } as React.CSSProperties;
        case 'ghost':
          return {
            // ghost: no color
            color: '#181818',
            backgroundColor: 'transparent',
          } as React.CSSProperties;
        default:
          return {};
      }
    };

    // Get hover styles per variant
    const getHoverStyles = (): React.CSSProperties => {
      if (!isVariantProvided) {
        // Token-based hover when variant not provided
        switch (resolvedVariant) {
          case 'solid':
            return { backgroundColor: hoverColor };
          case 'soft': {
            const rgb = hexToRgb(baseColor);
            return rgb ? { backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)` } : {};
          }
          case 'outline': {
            const rgb = hexToRgb(baseColor);
            return {
              backgroundColor: rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)` : 'transparent',
              borderColor: hoverColor,
            };
          }
          case 'ghost': {
            const rgb = hexToRgb(baseColor);
            return rgb ? { backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)` } : {};
          }
          default:
            return {};
        }
      }
      switch (resolvedVariant) {
        case 'solid':
          // hover color: 303030
          return { backgroundColor: '#303030' };
        case 'soft':
          // hover color: E2E2E2
          return { backgroundColor: '#E2E2E2' };
        case 'outline':
          // hover: FAFAFA + border CBCBCB
          return { backgroundColor: '#FAFAFA', borderColor: '#CBCBCB' };
        case 'ghost':
          // hover: EBEBEB
          return { backgroundColor: '#EBEBEB' };
        default:
          return {};
      }
    };

    const variantStyles = getVariantStyles();
    const hoverStylesSpec = getHoverStyles();

    const baseClasses = 'relative inline-flex items-center justify-center font-normal transition-colors duration-100 transition-transform active:scale-[0.97] disabled:cursor-not-allowed';
    
    const sizeClass = sizeClasses[size] || sizeClasses.lg;
    const variantClass = variantClasses[resolvedVariant]?.[actualColor] || variantClasses.solid.primary;
    const borderRadiusClass = pill ? 'rounded-full' : 'rounded-md';
    const uniformClass = uniform ? 'aspect-square' : '';
    const blockClass = block ? 'w-full' : '';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

    // Add hover styles using state
    const [isHovered, setIsHovered] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isFading, setIsFading] = React.useState(false);
    // Remove blue focus ring entirely per spec
    
    const hoverStyles: React.CSSProperties = (disabled || !isHovered || isLoading || isFading)
      ? {}
      : hoverStylesSpec;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || isLoading) {
        e.preventDefault();
        return;
      }

      if (onClick) {
        onClick(e);
      }

      if (onClickAction) {
        // Dispatch action (in a real app, this would use a state management system)
        console.log('Action dispatched:', onClickAction);
        // Trigger loading when action is 'loading'
        if (
          onClickAction === 'loading' ||
          (typeof onClickAction === 'object' && (onClickAction as any)?.type === 'loading')
        ) {
          // Immediately start fade for label/icons
          setIsFading(true);
          // Start loading after 200ms to allow label/icon transition
          window.setTimeout(() => {
            setIsLoading(true);
            // Keep loading for 1s after it starts
            window.setTimeout(() => {
              setIsLoading(false);
              setIsFading(false);
            }, 1000);
          }, 200);
        }
      }
    };

    return (
      <button
        ref={ref}
        type={submit ? 'submit' : 'button'}
        // Keep background and interactivity style; do not disable visually during loading
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
          disabled ? 'opacity-50 cursor-not-allowed' : '',
          isLoading ? 'cursor-default' : '',
          className
        )}
        {...props}
      >
        {/* Overlay spinner, absolute centered; preserves size by keeping label/icons rendered with opacity-0 */}
        {isLoading && (
          <span
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <span
              className="inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin"
            />
          </span>
        )}
        {iconStart && (
          <span
            className={cn(
              label ? 'mr-2' : '',
              'transition-opacity duration-200',
              (isFading || isLoading) ? 'opacity-0' : 'opacity-100'
            )}
            style={{ transitionDuration: '200ms' }}
          >
            <Icon name={iconStart} size={iconSize} />
          </span>
        )}
        {label && (
          <span
            className={cn(
              'transition-opacity duration-200',
              (isFading || isLoading) ? 'opacity-0' : 'opacity-100'
            )}
            style={{ transitionDuration: '200ms' }}
          >
            {label}
          </span>
        )}
        {iconEnd && (
          <span
            className={cn(
              label ? 'ml-2' : '',
              'transition-opacity duration-200',
              (isFading || isLoading) ? 'opacity-0' : 'opacity-100'
            )}
            style={{ transitionDuration: '200ms' }}
          >
            <Icon name={iconEnd} size={iconSize} />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

