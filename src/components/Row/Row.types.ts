export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Gap between items
   */
  gap?: string | number;

  /**
   * Horizontal alignment
   */
  align?: 'start' | 'center' | 'end' | 'stretch';

  /**
   * Vertical alignment
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

  /**
   * Whether to wrap items
   */
  wrap?: boolean;
}

