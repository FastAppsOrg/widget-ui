export interface DividerProps extends Omit<React.HTMLAttributes<HTMLHRElement>, 'color'> {
  /**
   * Color of the divider; accepts border color token, a primitive color token, a CSS string, or theme-aware { light, dark }.
   * Valid tokens: default subtle strong
   * Primitive color token: e.g. red-100, blue-900, gray-500
   */
  color?: string | { light?: string; dark?: string };

  /**
   * Thickness of the divider line; accepts a numeric pixel value or a CSS string.
   */
  size?: number | string;

  /**
   * Outer spacing applied above and below the divider; accepts a spacing unit or a CSS string.
   * By default, the divider will space itself dynamically based on its siblings' default spacings.
   */
  spacing?: number | string;

  /**
   * Flush the divider to the edge of its container, removing surrounding padding.
   */
  flush?: boolean;
}

