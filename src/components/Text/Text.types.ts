export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Text size variant
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Text color
   */
  color?: string;

  /**
   * Font weight
   */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';

  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify';
}

