export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Padding size
   */
  p?: string | number;

  /**
   * Margin size
   */
  m?: string | number;

  /**
   * Background color
   */
  bg?: string;

  /**
   * Border radius
   */
  borderRadius?: string | number;
}

