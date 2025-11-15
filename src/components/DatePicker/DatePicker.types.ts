import type { Size } from '../../types';

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * Size of the date picker
   */
  size?: Size;

  /**
   * Whether the date picker is in an error state
   */
  error?: boolean;

  /**
   * Helper text to display below the date picker
   */
  helperText?: string;

  /**
   * Label text for the date picker
   */
  label?: string;
}

