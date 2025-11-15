export interface RadioOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Name attribute for all radio buttons in the group
   */
  name: string;

  /**
   * Selected value
   */
  value?: string | number;

  /**
   * Callback fired when the value changes
   */
  onChange?: (value: string | number) => void;

  /**
   * Options for the radio group
   */
  options: RadioOption[];

  /**
   * Label for the radio group
   */
  label?: string;

  /**
   * Whether the radio group is in an error state
   */
  error?: boolean;

  /**
   * Helper text to display below the radio group
   */
  helperText?: string;

  /**
   * Layout direction
   */
  direction?: 'horizontal' | 'vertical';
}

