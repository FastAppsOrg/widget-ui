import type { Color, Size } from '../../types';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge color
   */
  color?: Color;

  /**
   * Badge size
   */
  size?: Size;

  /**
   * Badge variant
   */
  variant?: 'solid' | 'soft' | 'outline';

  /**
   * Whether the badge is rounded
   */
  pill?: boolean;
}

