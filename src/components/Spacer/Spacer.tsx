import React from 'react';
import type { SpacerProps } from './Spacer.types';

export const Spacer: React.FC<SpacerProps> = ({ minSize = 'auto' }) => {
  const minSizeValue = minSize === 'auto' ? 'auto' : typeof minSize === 'number' ? `${minSize}px` : minSize;

  const style: React.CSSProperties = {
    flex: 1,
    minWidth: minSizeValue,
    minHeight: minSizeValue,
  };

  return <div style={style} />;
};

Spacer.displayName = 'Spacer';

