export type TransitionType = 'fade' | 'slide' | 'scale' | 'slide-fade';

export interface TransitionProps {
  /**
   * Whether the transition is active
   */
  show: boolean;

  /**
   * Transition type
   */
  type?: TransitionType;

  /**
   * Duration of the transition in milliseconds
   */
  duration?: number;

  /**
   * Children to transition
   */
  children: React.ReactNode;

  /**
   * Custom className
   */
  className?: string;
}

