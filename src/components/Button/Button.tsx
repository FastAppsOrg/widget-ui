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

const variantClasses: Record<string, Record<string, string>> = {
  solid: {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-300',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800 disabled:bg-secondary-300',
    info: 'bg-info-600 text-white hover:bg-info-700 active:bg-info-800 disabled:bg-info-300',
    success: 'bg-success-600 text-white hover:bg-success-700 active:bg-success-800 disabled:bg-success-300',
    caution: 'bg-caution-600 text-white hover:bg-caution-700 active:bg-caution-800 disabled:bg-caution-300',
    warning: 'bg-warning-600 text-white hover:bg-warning-700 active:bg-warning-800 disabled:bg-warning-300',
    danger: 'bg-danger-600 text-white hover:bg-danger-700 active:bg-danger-800 disabled:bg-danger-300',
    discovery: 'bg-discovery-600 text-white hover:bg-discovery-700 active:bg-discovery-800 disabled:bg-discovery-300',
  },
  soft: {
    primary: 'bg-primary-100 text-primary-700 hover:bg-primary-200 active:bg-primary-300 disabled:bg-primary-50 disabled:text-primary-300',
    secondary: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 active:bg-secondary-300 disabled:bg-secondary-50 disabled:text-secondary-300',
    info: 'bg-info-100 text-info-700 hover:bg-info-200 active:bg-info-300 disabled:bg-info-50 disabled:text-info-300',
    success: 'bg-success-100 text-success-700 hover:bg-success-200 active:bg-success-300 disabled:bg-success-50 disabled:text-success-300',
    caution: 'bg-caution-100 text-caution-700 hover:bg-caution-200 active:bg-caution-300 disabled:bg-caution-50 disabled:text-caution-300',
    warning: 'bg-warning-100 text-warning-700 hover:bg-warning-200 active:bg-warning-300 disabled:bg-warning-50 disabled:text-warning-300',
    danger: 'bg-danger-100 text-danger-700 hover:bg-danger-200 active:bg-danger-300 disabled:bg-danger-50 disabled:text-danger-300',
    discovery: 'bg-discovery-100 text-discovery-700 hover:bg-discovery-200 active:bg-discovery-300 disabled:bg-discovery-50 disabled:text-discovery-300',
  },
  outline: {
    primary: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:border-primary-300 disabled:text-primary-300',
    secondary: 'border-2 border-secondary-600 text-secondary-600 hover:bg-secondary-50 active:bg-secondary-100 disabled:border-secondary-300 disabled:text-secondary-300',
    info: 'border-2 border-info-600 text-info-600 hover:bg-info-50 active:bg-info-100 disabled:border-info-300 disabled:text-info-300',
    success: 'border-2 border-success-600 text-success-600 hover:bg-success-50 active:bg-success-100 disabled:border-success-300 disabled:text-success-300',
    caution: 'border-2 border-caution-600 text-caution-600 hover:bg-caution-50 active:bg-caution-100 disabled:border-caution-300 disabled:text-caution-300',
    warning: 'border-2 border-warning-600 text-warning-600 hover:bg-warning-50 active:bg-warning-100 disabled:border-warning-300 disabled:text-warning-300',
    danger: 'border-2 border-danger-600 text-danger-600 hover:bg-danger-50 active:bg-danger-100 disabled:border-danger-300 disabled:text-danger-300',
    discovery: 'border-2 border-discovery-600 text-discovery-600 hover:bg-discovery-50 active:bg-discovery-100 disabled:border-discovery-300 disabled:text-discovery-300',
  },
  ghost: {
    primary: 'text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-primary-300',
    secondary: 'text-secondary-600 hover:bg-secondary-50 active:bg-secondary-100 disabled:text-secondary-300',
    info: 'text-info-600 hover:bg-info-50 active:bg-info-100 disabled:text-info-300',
    success: 'text-success-600 hover:bg-success-50 active:bg-success-100 disabled:text-success-300',
    caution: 'text-caution-600 hover:bg-caution-50 active:bg-caution-100 disabled:text-caution-300',
    warning: 'text-warning-600 hover:bg-warning-50 active:bg-warning-100 disabled:text-warning-300',
    danger: 'text-danger-600 hover:bg-danger-50 active:bg-danger-100 disabled:text-danger-300',
    discovery: 'text-discovery-600 hover:bg-discovery-50 active:bg-discovery-100 disabled:text-discovery-300',
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

    const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed';
    
    const sizeClass = sizeClasses[size] || sizeClasses.lg;
    const variantClass = variantClasses[actualVariant]?.[actualColor] || variantClasses.solid.primary;
    const borderRadiusClass = pill ? 'rounded-full' : 'rounded-md';
    const uniformClass = uniform ? 'aspect-square' : '';
    const blockClass = block ? 'w-full' : '';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

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

