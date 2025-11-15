import React from 'react';
import type { SpacerProps } from './Spacer.types';

export const Spacer: React.FC<SpacerProps> = ({ size = 16, direction = 'vertical' }) => {
  const style: React.CSSProperties = {
    [direction === 'vertical' ? 'height' : 'width']: typeof size === 'number' ? `${size}px` : size,
    [direction === 'vertical' ? 'width' : 'height']: '100%',
  };

  return <div style={style} />;
};

Spacer.displayName = 'Spacer';

