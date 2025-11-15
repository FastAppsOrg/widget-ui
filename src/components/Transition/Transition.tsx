import React, { useState, useEffect } from 'react';
import type { TransitionProps } from './Transition.types';
import { cn } from '../../utils';

const transitionClasses: Record<string, { enter: string; enterActive: string; exit: string; exitActive: string }> = {
  fade: {
    enter: 'opacity-0',
    enterActive: 'opacity-100 transition-opacity',
    exit: 'opacity-100',
    exitActive: 'opacity-0 transition-opacity',
  },
  slide: {
    enter: 'transform translate-x-full',
    enterActive: 'transform translate-x-0 transition-transform',
    exit: 'transform translate-x-0',
    exitActive: 'transform translate-x-full transition-transform',
  },
  scale: {
    enter: 'transform scale-0',
    enterActive: 'transform scale-100 transition-transform',
    exit: 'transform scale-100',
    exitActive: 'transform scale-0 transition-transform',
  },
  'slide-fade': {
    enter: 'opacity-0 transform translate-y-4',
    enterActive: 'opacity-100 transform translate-y-0 transition-all',
    exit: 'opacity-100 transform translate-y-0',
    exitActive: 'opacity-0 transform translate-y-4 transition-all',
  },
};

export const Transition: React.FC<TransitionProps> = ({
  show,
  type = 'fade',
  duration = 300,
  children,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(show);
  const [isActive, setIsActive] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      // Trigger enter animation on next frame
      requestAnimationFrame(() => {
        setIsActive(true);
      });
    } else {
      setIsActive(false);
      // Wait for exit animation to complete
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  if (!isVisible) {
    return null;
  }

  const classes = transitionClasses[type];
  const currentClass = isActive ? classes.enterActive : classes.enter;

  return (
    <div
      className={cn(currentClass, className)}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

Transition.displayName = 'Transition';

