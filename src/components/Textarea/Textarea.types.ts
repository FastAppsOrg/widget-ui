import type { Size } from '../../types';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Size of the textarea
   */
  size?: Size;

  /**
   * Whether the textarea is in an error state
   */
  error?: boolean;

  /**
   * Helper text to display below the textarea
   */
  helperText?: string;

  /**
   * Label text for the textarea
   */
  label?: string;
}

