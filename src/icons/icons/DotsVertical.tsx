import React from 'react';
import type { IconProps } from '../icon.types';

export const DotsVertical: React.FC<IconProps> = ({ className, color, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} color={color} {...props}>
      <path d="M12 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    </svg>
  );
};


