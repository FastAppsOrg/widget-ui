import type { Size, Variant, Action } from '../../types';

export interface DatePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * The name of the form control field. When the form is submitted, the value
   * will be included in the onSubmitAction payload using this key. Dot paths are supported.
   */
  name: string;

  /**
   * Action dispatched when the date value changes.
   */
  onChangeAction?: Action;

  /**
   * Placeholder text shown when no date is selected.
   */
  placeholder?: string;

  /**
   * Initial ISO date string (e.g., 2024-01-31).
   */
  defaultValue?: string;

  /**
   * Earliest selectable ISO date (inclusive).
   */
  min?: string;

  /**
   * Latest selectable ISO date (inclusive).
   */
  max?: string;

  /**
   * Visual variant of the control.
   * @default "outline"
   */
  variant?: Variant;

  /**
   * Controls the size of the control.
   * @default "md"
   */
  size?: Size;

  /**
   * Preferred side to render the calendar.
   */
  side?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * Preferred alignment of the calendar relative to the control.
   * @default "center"
   */
  align?: 'start' | 'center' | 'end';

  /**
   * Determines if the datepicker should be a fully rounded pill shape.
   * @default false
   */
  pill?: boolean;

  /**
   * Extends datepicker to 100% width.
   * @default false
   */
  block?: boolean;

  /**
   * Show a clear control to unset the value.
   * @default false
   */
  clearable?: boolean;

  /**
   * Disables interactions and applies disabled styles.
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional horizontal padding (in px) applied to the text label
   * ("Pick a date" or selected date). Does not affect icon paddings.
   * @default 0
   */
  textPaddingX?: number;
}

