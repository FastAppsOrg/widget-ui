import type { Action } from '../../types';
 
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'defaultValue'> {
  /** The name of the form control field. */
  name: string;
  /** Optional label text rendered next to the checkbox. */
  label?: string;
  /** The initial checked state of the checkbox. */
  defaultChecked?: boolean;
  /** Action dispatched when the checked state changes. */
  onChangeAction?: Action;
  /** Disable interactions and apply disabled styles. @default false */
  disabled?: boolean;
  /** Mark the checkbox as required for form submission. @default false */
  required?: boolean;
  /** Whether the checkbox is in an error state */
  error?: boolean;
  /** Helper text to display below the checkbox */
  helperText?: string;
}

