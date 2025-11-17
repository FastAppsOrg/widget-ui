import type { Action } from '../../types';

export interface RadioOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * The name of the form control field. When the form is submitted, the value
   * will be included in the onSubmitAction payload using this key. Dot paths are supported.
   */
  name: string;

  /**
   * Array of options to render as radio items.
   */
  options: RadioOption[];

  /**
   * Accessible label for the radio group; falls back to name.
   */
  ariaLabel?: string;

  /**
   * Action dispatched when the selected value changes.
   */
  onChangeAction?: Action;

  /**
   * Initial selected value of the radio group.
   */
  defaultValue?: string | number;

  /**
   * Layout direction of the radio items.
   * @default "row"
   */
  direction?: 'row' | 'col';

  /**
   * Disable interactions and apply disabled styles for the entire group.
   * @default false
   */
  disabled?: boolean;

  /**
   * Mark the group as required for form submission.
   * @default false
   */
  required?: boolean;
}

