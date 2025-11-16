import React from 'react';
import type { IconProps } from '../icon.types';

export const DotsHorizontal: React.FC<IconProps> = ({ className, color, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} color={color} {...props}>
      <path d="M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
    </svg>
  );
};


