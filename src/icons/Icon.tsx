import React from 'react';
import type { IconName, IconProps } from './icon.types';
import { cn } from '../utils';
import { iconRegistry } from './icons';

const sizeMap: Record<string, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-10 h-10',
};

export interface IconComponentProps extends IconProps {
  name: IconName;
}

/**
 * Icon component that renders the specified icon
 */
export function Icon({ name, size = 'md', className, color, ...props }: IconComponentProps) {
  const IconComponent = iconRegistry[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={cn(sizeMap[size], className)}
      color={color}
      {...props}
    />
  );
}

