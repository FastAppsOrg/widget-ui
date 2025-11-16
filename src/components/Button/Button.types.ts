import type { IconName } from '../../icons/icon.types';
import type { Color, Variant, Size, IconSize, Style, Action } from '../../types';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /**
   * Configure the button as a submit button for the nearest form.
   * @default false
   */
  submit?: boolean;

  /**
   * Text to display inside the button.
   */
  label?: string;

  /**
   * Action dispatched on click.
   */
  onClickAction?: Action | string;

  /**
   * Icon shown before the label. Can be used without a label to create an icon-only button.
   * Available icons: "agent" | "analytics" | "atom" | "batch" | "bolt" | "book-open" | "book-closed" | "book-clock" | "bug" | "calendar" | "chart" | "check" | "check-circle" | "check-circle-filled" | "chevron-left" | "chevron-right" | "circle-question" | "compass" | "confetti" | "cube" | "desktop" | "document" | "dot" | "dots-horizontal" | "dots-vertical" | "empty-circle" | "external-link" | "globe" | "keys" | "lab" | "images" | "info" | "lifesaver" | "lightbulb" | "mail" | "map-pin" | "maps" | "mobile" | "name" | "notebook" | "notebook-pencil" | "page-blank" | "phone" | "play" | "plus" | "profile" | "profile-card" | "reload" | "star" | "star-filled" | "search" | "sparkle" | "sparkle-double" | "square-code" | "square-image" | "square-text" | "suitcase" | "settings-slider" | "user" | "wreath" | "write" | "write-alt" | "write-alt2"
   */
  iconStart?: IconName;

  /**
   * Optional icon shown after the label.
   * Available icons: "agent" | "analytics" | "atom" | "batch" | "bolt" | "book-open" | "book-closed" | "book-clock" | "bug" | "calendar" | "chart" | "check" | "check-circle" | "check-circle-filled" | "chevron-left" | "chevron-right" | "circle-question" | "compass" | "confetti" | "cube" | "desktop" | "document" | "dot" | "dots-horizontal" | "dots-vertical" | "empty-circle" | "external-link" | "globe" | "keys" | "lab" | "images" | "info" | "lifesaver" | "lightbulb" | "mail" | "map-pin" | "maps" | "mobile" | "name" | "notebook" | "notebook-pencil" | "page-blank" | "phone" | "play" | "plus" | "profile" | "profile-card" | "reload" | "star" | "star-filled" | "search" | "sparkle" | "sparkle-double" | "square-code" | "square-image" | "square-text" | "suitcase" | "settings-slider" | "user" | "wreath" | "write" | "write-alt" | "write-alt2"
   */
  iconEnd?: IconName;

  /**
   * Convenience preset for button style.
   * @default undefined
   */
  style?: Style;

  /**
   * Size of the icon.
   * @default "md"
   */
  iconSize?: IconSize;

  /**
   * Color of the button; accepts a button color token.
   * @default "primary"
   */
  color?: Color;

  /**
   * Visual variant of the button; accepts a control variant token.
   * @default "solid"
   */
  variant?: Variant;

  /**
   * Controls the overall size of the button; maps to the following height values:
   * - 3xs: 22px
   * - 2xs: 24px
   * - xs: 26px
   * - sm: 28px
   * - md: 32px
   * - lg: 36px
   * - xl: 40px
   * - 2xl: 44px
   * - 3xl: 48px
   * @default "lg"
   */
  size?: Size;

  /**
   * Determines if the button should be a fully rounded pill shape.
   * @default true
   */
  pill?: boolean;

  /**
   * Determines if the button should have matching width and height, based on the size.
   * @default false
   */
  uniform?: boolean;

  /**
   * Extends button to 100% of available width.
   * @default false
   */
  block?: boolean;

  /**
   * Disables interactions and applies disabled styles.
   * @default false
   */
  disabled?: boolean;
}

