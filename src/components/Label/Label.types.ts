export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Whether the label is required
   */
  required?: boolean;

  /**
   * Text color
   */
  color?: string;
}

