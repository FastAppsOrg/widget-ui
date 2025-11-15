import React, { useState } from 'react';
import type { ImageProps } from './Image.types';
import { cn } from '../../utils';

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      fallback,
      showPlaceholder = false,
      aspectRatio,
      className,
      style,
      onError,
      ...props
    },
    ref
  ) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(showPlaceholder);

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (fallback && !hasError) {
        setImgSrc(fallback);
        setHasError(true);
      } else {
        setHasError(true);
        if (onError) {
          onError(e);
        }
      }
      setIsLoading(false);
    };

    const handleLoad = () => {
      setIsLoading(false);
    };

    const customStyle: React.CSSProperties = {
      ...style,
      ...(aspectRatio && {
        aspectRatio,
      }),
    };

    return (
      <div className={cn('relative', className)} style={customStyle}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
        )}
        <img
          ref={ref}
          src={imgSrc}
          onError={handleError}
          onLoad={handleLoad}
          className={cn(
            'w-full h-full object-cover',
            isLoading && 'opacity-0',
            hasError && !fallback && 'hidden'
          )}
          {...props}
        />
        {hasError && !fallback && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
            <span>Image not available</span>
          </div>
        )}
      </div>
    );
  }
);

Image.displayName = 'Image';

