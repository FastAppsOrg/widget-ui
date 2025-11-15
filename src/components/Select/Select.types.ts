import type { Size } from '../../types';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Size of the select
   */
  size?: Size;

  /**
   * Whether the select is in an error state
   */
  error?: boolean;

  /**
   * Helper text to display below the select
   */
  helperText?: string;

  /**
   * Label text for the select
   */
  label?: string;

  /**
   * Options for the select
   */
  options?: SelectOption[];

  /**
   * Placeholder text
   */
  placeholder?: string;
}

