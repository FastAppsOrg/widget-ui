import type { Size, Variant, Action } from '../../types';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'onChange' | 'defaultValue'> {
  /** The name of the form control field. */
  name: string;
  /** Action dispatched when the value changes. */
  onChangeAction?: Action;
  /** Placeholder text shown when no value is selected. */
  placeholder?: string;
  /** Initial value of the select. */
  defaultValue?: string;
  /** Visual variant of the select. @default "outline" */
  variant?: Variant;
  /** Controls the size of the control. @default "md" */
  size?: Size;
  /** Determines if the select should be a fully rounded pill shape. @default false */
  pill?: boolean;
  /** Extends select to 100% width. @default false */
  block?: boolean;
  /** Show a clear control to unset the value. @default false */
  clearable?: boolean;
  /** Disable interactions and apply disabled styles. @default false */
  disabled?: boolean;
  /** Options for the select (required) */
  options: SelectOption[];
}

