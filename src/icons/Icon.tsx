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

  // If explicit width/height provided via style, do not apply default size classes
  const hasExplicitSize =
    (props as any)?.style?.width != null || (props as any)?.style?.height != null;
  const sizeClass = hasExplicitSize ? '' : sizeMap[size];
  const explicitWidth = (props as any)?.style?.width as number | string | undefined;
  const explicitHeight = (props as any)?.style?.height as number | string | undefined;

  return (
    <IconComponent
      // avoid passing size when explicit px is provided
      {...(!hasExplicitSize ? { size } : {})}
      className={cn(sizeClass, className)}
      color={color}
      // enforce attributes for broader CSS environments
      {...(hasExplicitSize ? { width: explicitWidth, height: explicitHeight } as any : {})}
      {...props}
    />
  );
}

