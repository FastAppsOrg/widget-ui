export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Column span (1-12)
   */
  span?: number;

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
}

