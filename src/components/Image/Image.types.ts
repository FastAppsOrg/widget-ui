export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Fallback image source if the main image fails to load
   */
  fallback?: string;

  /**
   * Whether to show a loading placeholder
   */
  showPlaceholder?: boolean;

  /**
   * Aspect ratio (e.g., "16/9", "4/3", "1/1")
   */
  aspectRatio?: string;
}

