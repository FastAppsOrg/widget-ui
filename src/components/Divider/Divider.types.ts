export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /**
   * Orientation of the divider
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Whether to show text in the divider
   */
  text?: string;
}

