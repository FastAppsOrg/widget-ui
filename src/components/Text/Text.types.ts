import type React from 'react';

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextAlign = 'start' | 'center' | 'end';

export interface TextEditableConfig {
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
}

export interface TextProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'children'> {
  /**
   * Text content to render
   */
  value?: string;

  /**
   * Text size variant
   */
  size?: TextSize;

  /**
   * Text color
   */
  color?: string;

  /**
   * Font weight
   */
  weight?: TextWeight;

  /**
   * Enable streaming transitions
   */
  streaming?: boolean;

  /**
   * Italicize the text
   */
  italic?: boolean;

  /**
   * Display a line-through decoration
   */
  lineThrough?: boolean;

  /**
   * Optional width constraint
   */
  width?: number | string;

  /**
   * Reserve space for a minimum number of lines
   */
  minLines?: number;

  /**
   * Enable inline editing support
   */
  editable?: boolean | TextEditableConfig;

  /**
   * Horizontal alignment
   */
  textAlign?: TextAlign;

  /**
   * @deprecated Use textAlign instead.
   */
  align?: 'left' | 'center' | 'right' | 'justify';

  /**
   * Truncate overflow with ellipsis
   */
  truncate?: boolean;

  /**
   * Clamp text to a maximum number of lines
   */
  maxLines?: number;

  /**
   * Optional React children fallback
   */
  children?: React.ReactNode;
}

