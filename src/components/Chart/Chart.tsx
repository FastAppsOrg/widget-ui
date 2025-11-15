import React from 'react';
import type { ChartProps } from './Chart.types';
import { cn } from '../../utils';

/**
 * Simple chart component
 * Note: For production use, consider using a proper charting library like recharts or chart.js
 */
export const Chart: React.FC<ChartProps> = ({
  data,
  type = 'bar',
  width = '100%',
  height = 300,
  className,
}) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  const renderBarChart = () => {
    return (
      <div className="flex items-end justify-between h-full gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-primary-500 rounded-t transition-all"
              style={{
                height: `${(item.value / maxValue) * 100}%`,
                backgroundColor: item.color || undefined,
              }}
            />
            <span className="text-xs mt-1 text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderLineChart = () => {
    const points = data.map((item, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - (item.value / maxValue) * 100;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          points={points}
          className="text-primary-500"
        />
        {data.map((item, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = 100 - (item.value / maxValue) * 100;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="2"
              fill="currentColor"
              className="text-primary-500"
            />
          );
        })}
      </svg>
    );
  };

  const renderPieChart = () => {
    let currentAngle = 0;
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const angle = (percentage / 100) * 360;
          const startAngle = currentAngle;
          const endAngle = currentAngle + angle;

          const x1 = 50 + 50 * Math.cos((startAngle * Math.PI) / 180);
          const y1 = 50 + 50 * Math.sin((startAngle * Math.PI) / 180);
          const x2 = 50 + 50 * Math.cos((endAngle * Math.PI) / 180);
          const y2 = 50 + 50 * Math.sin((endAngle * Math.PI) / 180);

          const largeArc = angle > 180 ? 1 : 0;

          const pathData = [
            `M 50 50`,
            `L ${x1} ${y1}`,
            `A 50 50 0 ${largeArc} 1 ${x2} ${y2}`,
            `Z`,
          ].join(' ');

          currentAngle += angle;

          return (
            <path
              key={index}
              d={pathData}
              fill={item.color || `hsl(${(index * 360) / data.length}, 70%, 50%)`}
            />
          );
        })}
      </svg>
    );
  };

  const renderDonutChart = () => {
    // Similar to pie but with a hole in the center
    return renderPieChart(); // Simplified - same as pie for now
  };

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return renderBarChart();
      case 'line':
        return renderLineChart();
      case 'pie':
        return renderPieChart();
      case 'donut':
        return renderDonutChart();
      default:
        return renderBarChart();
    }
  };

  return (
    <div
      className={cn('w-full', className)}
      style={{ width, height }}
    >
      {renderChart()}
    </div>
  );
};

Chart.displayName = 'Chart';

