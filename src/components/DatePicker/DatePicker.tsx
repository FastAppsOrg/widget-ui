import React from 'react';
import type { DatePickerProps } from './DatePicker.types';
import { cn } from '../../utils';
import { Icon } from '../../icons';

// Size map reusing button heights and paddings for consistency
const sizeClasses: Record<string, string> = {
  '3xs': 'h-[22px] px-2 text-xs',
  '2xs': 'h-[24px] px-2.5 text-xs',
  'xs': 'h-[26px] px-3 text-sm',
  'sm': 'h-[28px] px-3.5 text-sm',
  'md': 'h-[32px] px-4 text-base',
  'lg': 'h-[36px] px-5 text-base',
  'xl': 'h-[40px] px-6 text-lg',
  '2xl': 'h-[44px] px-7 text-lg',
  '3xl': 'h-[48px] px-8 text-xl',
};

type DateLike = Date | null;

function clampToBounds(date: Date, min?: string, max?: string): DateLike {
  const t = date.getTime();
  if (min) {
    const tmin = new Date(min).getTime();
    if (t < tmin) return new Date(min);
  }
  if (max) {
    const tmax = new Date(max).getTime();
    if (t > tmax) return new Date(max);
  }
  return date;
}

function formatISO(d: DateLike): string {
  if (!d) return '';
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function addMonths(d: Date, delta: number): Date {
  return new Date(d.getFullYear(), d.getMonth() + delta, 1);
}

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      name,
      onChangeAction,
      placeholder,
      defaultValue,
      min,
      max,
      variant = 'outline',
      size = 'md',
      side,
      align = 'center',
      pill = false,
      block = false,
      clearable = false,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState<DateLike>(defaultValue ? new Date(defaultValue) : null);
    const [viewMonth, setViewMonth] = React.useState<Date>(startOfMonth(value ?? new Date()));

    const formatted = value ? formatISO(value) : '';
    const showText = value ? formatted : (placeholder ?? 'Pick a date');

    const baseField =
      'relative inline-flex items-center justify-between w-full transition-colors duration-300';
    const padding = sizeClasses[size] || sizeClasses.md;
    const radius = pill ? 'rounded-full' : 'rounded-xl';
    const widthClass = block ? 'w-full' : '';

    // Neutral palette like Button for variants
    const variantStyles = (() => {
      switch (variant) {
        case 'solid':
          return 'bg-[#181818] text-white';
        case 'soft':
          return 'bg-[#EBEBEB] text-[#181818]';
        case 'outline':
          return 'bg-transparent text-[#181818] border border-[#D8D8D8]';
        case 'ghost':
          return 'bg-transparent text-[#181818]';
        default:
          return '';
      }
    })();

    const hoverStyles = (() => {
      switch (variant) {
        case 'solid':
          return 'hover:bg-[#303030]';
        case 'soft':
          return 'hover:bg-[#E2E2E2]';
        case 'outline':
          return 'hover:bg-[#FAFAFA] hover:border-[#CBCBCB]';
        case 'ghost':
          return 'hover:bg-[#EBEBEB]';
        default:
          return '';
      }
    })();

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    const popSide =
      side === 'top'
        ? 'bottom-full mb-2'
        : side === 'left'
        ? 'right-full mr-2'
        : side === 'right'
        ? 'left-full ml-2'
        : 'top-full mt-2';

    const popAlign =
      align === 'start' ? 'left-0' : align === 'end' ? 'right-0' : 'left-1/2 -translate-x-1/2';

    const selectDate = (d: Date) => {
      const clamped = clampToBounds(d, min, max);
      if (!clamped) return;
      setValue(clamped);
      setOpen(false);
      if (onChangeAction) {
        console.log('Action dispatched:', onChangeAction);
      }
    };

    const clearDate = () => {
      setValue(null);
      if (onChangeAction) {
        console.log('Action dispatched:', onChangeAction);
      }
    };

    // Calendar grid
    const days: { date: Date; muted: boolean; disabled: boolean }[] = React.useMemo(() => {
      const start = startOfMonth(viewMonth);
      const startWeekday = start.getDay(); // 0 Sun
      const firstGridDate = new Date(start);
      firstGridDate.setDate(start.getDate() - startWeekday);
      const out: { date: Date; muted: boolean; disabled: boolean }[] = [];
      for (let i = 0; i < 42; i++) {
        const d = new Date(firstGridDate);
        d.setDate(firstGridDate.getDate() + i);
        const muted = d.getMonth() !== viewMonth.getMonth();
        let disabledFlag = false;
        if (min && d.getTime() < new Date(min).getTime()) disabledFlag = true;
        if (max && d.getTime() > new Date(max).getTime()) disabledFlag = true;
        out.push({ date: d, muted, disabled: disabledFlag });
      }
      return out;
    }, [viewMonth, min, max]);

    return (
      <div ref={ref} className={cn('relative inline-block', widthClass)} {...props}>
        {/* Hidden input for form posting */}
        <input type="hidden" name={name} value={formatted} />
        {/* Control */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setOpen((o) => !o)}
          className={cn(baseField, padding, radius, variantStyles, hoverStyles, disabledStyles, className)}
        >
          <span className="flex items-center gap-2">
            <Icon name="calendar" size="md" className="text-current" />
            <span className={cn(value ? '' : 'opacity-60')}>{showText}</span>
          </span>
          <span className="flex items-center opacity-70">
            <svg width="1em" height="1em" viewBox="0 0 10 16" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.34151 0.747423C4.71854 0.417526 5.28149 0.417526 5.65852 0.747423L9.65852 4.24742C10.0742 4.61111 10.1163 5.24287 9.75259 5.6585C9.38891 6.07414 8.75715 6.11626 8.34151 5.75258L5.00001 2.82877L1.65852 5.75258C1.24288 6.11626 0.61112 6.07414 0.247438 5.6585C-0.116244 5.24287 -0.0741267 4.61111 0.34151 4.24742L4.34151 0.747423ZM0.246065 10.3578C0.608879 9.94139 1.24055 9.89795 1.65695 10.2608L5.00001 13.1737L8.34308 10.2608C8.75948 9.89795 9.39115 9.94139 9.75396 10.3578C10.1168 10.7742 10.0733 11.4058 9.65695 11.7687L5.65695 15.2539C5.28043 15.582 4.7196 15.582 4.34308 15.2539L0.343082 11.7687C-0.0733128 11.4058 -0.116749 10.7742 0.246065 10.3578Z" />
            </svg>
          </span>
        </button>

        {/* Popover calendar */}
        {open && (
          <div
            className={cn(
              'absolute z-50 bg-white rounded-2xl shadow-lg border border-gray-200',
              'p-3 w-80',
              popSide,
              popAlign
            )}
          >
            <div className="flex items-center justify-between mb-2 px-1">
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={() => setViewMonth(addMonths(viewMonth, -1))}
              >
                <Icon name="chevron-left" />
              </button>
              <div className="font-semibold text-lg">
                {viewMonth.toLocaleString('default', { month: 'long' })} {viewMonth.getFullYear()}
              </div>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={() => setViewMonth(addMonths(viewMonth, 1))}
              >
                <Icon name="chevron-right" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-500 px-1">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                <div key={d} className="py-1">
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 mt-1 px-1">
              {days.map(({ date, muted, disabled: dis }) => {
                const isSelected = !!value && formatISO(date) === formatISO(value);
                const isToday = formatISO(date) === formatISO(new Date());
                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    disabled={dis}
                    onClick={() => selectDate(date)}
                    className={cn(
                      'relative h-9 w-9 rounded-full text-sm transition-colors',
                      dis
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'hover:bg-gray-100',
                      muted ? 'text-gray-400' : 'text-gray-800',
                      isSelected ? 'bg-black text-white hover:bg-black' : ''
                    )}
                  >
                    <span>{date.getDate()}</span>
                    {!isSelected && isToday && (
                      <span className="block w-1 h-1 bg-gray-400 rounded-full mx-auto mt-1" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center justify-between mt-3">
              {clearable && (
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-full text-sm text-gray-700 hover:bg-gray-100"
                  onClick={clearDate}
                >
                  Clear
                </button>
              )}
              <div className="flex-1" />
              <button
                type="button"
                className="px-3 py-1.5 rounded-full text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

