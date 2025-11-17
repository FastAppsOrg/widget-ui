import type { Action } from '../../types';

export type WidgetComponent = React.ReactElement;

export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  /**
   * Child components to render inside the container.
   */
  children?: WidgetComponent[] | WidgetComponent;

  /**
   * Action dispatched when the form is submitted.
   */
  onSubmitAction?: Action;

  /**
   * Flex direction for laying out form children.
   * @default "col"
   */
  direction?: 'row' | 'col';

  /**
   * Cross-axis alignment of children.
   */
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';

  /**
   * Main-axis distribution of children.
   */
  justify?: 'start' | 'center' | 'end' | 'stretch' | 'between' | 'around' | 'evenly';

  /**
   * Wrap behavior for flex items.
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  /**
   * Flex growth/shrink factor.
   */
  flex?: string | number;

  /**
   * Gap between direct children; accepts a spacing unit or a CSS string.
   */
  gap?: string | number;

  /**
   * Inner padding; accepts a spacing unit, a CSS string, or a padding object.
   */
  padding?: string | number | { top?: string | number; right?: string | number; bottom?: string | number; left?: string | number };

  /**
   * Border applied to the container; accepts a numeric pixel value or a border object.
   */
  border?: number | { width?: number; style?: string; color?: string };

  /**
   * Background color; accepts surface color token, a primitive color token, a CSS string, or theme-aware { light, dark }.
   */
  background?: string | { light?: string; dark?: string };

  /**
   * Explicit height; accepts a numeric pixel value or a CSS string.
   */
  height?: string | number;

  /**
   * Explicit width; accepts a numeric pixel value or a CSS string.
   */
  width?: string | number;

  /**
   * Shorthand to set both width and height; accepts a numeric pixel value or a CSS string.
   */
  size?: string | number;

  /**
   * Minimum height constraint; accepts a numeric pixel value or a CSS string.
   */
  minHeight?: string | number;

  /**
   * Minimum width constraint; accepts a numeric pixel value or a CSS string.
   */
  minWidth?: string | number;

  /**
   * Shorthand to set both minWidth and minHeight; accepts a numeric pixel value or a CSS string.
   */
  minSize?: string | number;

  /**
   * Maximum height constraint; accepts a numeric pixel value or a CSS string.
   */
  maxHeight?: string | number;

  /**
   * Maximum width constraint; accepts a numeric pixel value or a CSS string.
   */
  maxWidth?: string | number;

  /**
   * Shorthand to set both maxWidth and maxHeight; accepts a numeric pixel value or a CSS string.
   */
  maxSize?: string | number;

  /**
   * Aspect ratio of the box (e.g., 16/9); accepts a numeric value or a CSS string.
   */
  aspectRatio?: string | number;

  /**
   * Border radius; accepts a radius token.
   */
  radius?: 'sm' | 'md' | 'lg' | 'full' | 'xl' | '2xl' | '2xs' | 'xs' | '3xl' | '4xl' | '100%' | 'none';

  /**
   * Outer margin; accepts a spacing unit, a CSS string, or a margin object.
   */
  margin?: string | number | { top?: string | number; right?: string | number; bottom?: string | number; left?: string | number };
}

