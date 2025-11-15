import React from 'react';
import type { FormProps } from './Form.types';
import { cn } from '../../utils';

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (
    {
      onSubmit,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (onSubmit) {
        onSubmit(e);
      }
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cn('w-full', className)}
        {...props}
      >
        {children}
      </form>
    );
  }
);

Form.displayName = 'Form';

