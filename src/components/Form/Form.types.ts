export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /**
   * Callback fired when the form is submitted
   */
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

