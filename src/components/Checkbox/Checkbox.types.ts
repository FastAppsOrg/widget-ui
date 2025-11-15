export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label text for the checkbox
   */
  label?: string;

  /**
   * Whether the checkbox is in an error state
   */
  error?: boolean;

  /**
   * Helper text to display below the checkbox
   */
  helperText?: string;
}

