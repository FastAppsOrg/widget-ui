import type { IconName } from '../../icons/icon.types';
import type { Color, Variant, Size, IconSize, Style, Action } from '../../types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Configure the button as a submit button for the nearest form.
   */
  submit?: boolean;

  /**
   * Text to display inside the button.
   */
  label?: string;

  /**
   * Action dispatched on click.
   */
  onClickAction?: Action;

  /**
   * Icon shown before the label. Can be used without a label to create an icon-only button.
   */
  iconStart?: IconName;

  /**
   * Optional icon shown after the label.
   */
  iconEnd?: IconName;

  /**
   * Convenience preset for button style.
   */
  style?: Style;

  /**
   * Size of the icon.
   */
  iconSize?: IconSize;

  /**
   * Color of the button; accepts a button color token.
   */
  color?: Color;

  /**
   * Visual variant of the button; accepts a control variant token.
   */
  variant?: Variant;

  /**
   * Controls the overall size of the button.
   */
  size?: Size;

  /**
   * Determines if the button should be a fully rounded pill shape.
   */
  pill?: boolean;

  /**
   * Determines if the button should have matching width and height, based on the size.
   */
  uniform?: boolean;

  /**
   * Extends button to 100% of available width.
   */
  block?: boolean;

  /**
   * Disables interactions and applies disabled styles.
   */
  disabled?: boolean;
}

