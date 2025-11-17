import type { Size, Variant } from '../../types';

export type GutterSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Size of the input
   * @default "md"
   */
  size?: Size;

  /**
   * Visual variant of the input
   * @default "outline"
   */
  variant?: Variant;

  /**
   * Controls gutter on the edges of the input, defaults to value from size
   */
  gutterSize?: GutterSize;

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

