import type { Size } from '../../types';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Size of the input
   */
  size?: Size;

  /**
   * Whether the input is in an error state
   */
  error?: boolean;

  /**
   * Helper text to display below the input
   */
  helperText?: string;

  /**
   * Label text for the input
   */
  label?: string;
}

