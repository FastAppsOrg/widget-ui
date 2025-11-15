export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Title level (h1-h6)
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * Title size variant
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Text color
   */
  color?: string;

  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right';
}

