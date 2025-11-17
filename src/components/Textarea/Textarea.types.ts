import type { Size } from '../../types';

export type GutterSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'rows'> {
  /**
   * The name of the form control field. When the form is submitted, the value
   * will be included in the onSubmitAction payload using this key. Dot paths are supported.
   */
  name?: string;

  /**
   * Initial value of the textarea.
   */
  defaultValue?: string;

  /**
   * Mark the textarea as required for form submission.
   * @default false
   */
  required?: boolean;

  /**
   * Placeholder text shown when empty.
   */
  placeholder?: string;

  /**
   * Select all contents of the textarea when it mounts.
   * @default false
   */
  autoSelect?: boolean;

  /**
   * Autofocus the textarea when it mounts.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Disable interactions and apply disabled styles.
   * @default false
   */
  disabled?: boolean;

  /**
   * Visual style of the textarea.
   * @default "outline"
   */
  variant?: 'soft' | 'outline';

  /**
   * Size of the textarea
   * @default "md"
   */
  size?: Size;

  /**
   * Controls gutter on the edges of the textarea, defaults to value from size
   */
  gutterSize?: GutterSize;

  /**
   * Initial number of visible rows.
   * @default 3
   */
  rows?: number;

  /**
   * Automatically grow/shrink to fit content.
   * @default false
   */
  autoResize?: boolean;

  /**
   * Maximum number of rows when auto-resizing.
   * @default Math.max(rows, 10)
   */
  maxRows?: number;

  /**
   * Allow password managers / autofill extensions to appear.
   * @default false
   */
  allowAutofillExtensions?: boolean;

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

