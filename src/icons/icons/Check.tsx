import React from 'react';
import type { IconProps } from '../icon.types';

export const Check: React.FC<IconProps> = ({ className, color, strokeWidth, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      color={color}
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

