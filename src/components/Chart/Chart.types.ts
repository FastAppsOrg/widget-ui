export interface ChartData {
  label: string;
  value: number;
  color?: string;
}

export interface ChartProps {
  /**
   * Chart data
   */
  data: ChartData[];

  /**
   * Chart type
   */
  type?: 'bar' | 'line' | 'pie' | 'donut';

  /**
   * Chart width
   */
  width?: number | string;

  /**
   * Chart height
   */
  height?: number | string;

  /**
   * Custom className
   */
  className?: string;
}

