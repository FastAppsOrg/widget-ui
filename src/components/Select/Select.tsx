import React from 'react';
import type { SelectProps } from './Select.types';
import { cn } from '../../utils';
import { Icon } from '../../icons';

const sizeSpec: Record<string, { fontPx: number; heightPx: number; paddingXClass: string; rightSvg: { w: number; h: number }; arrowRightPx: number; arrowTopPx: number }> = {
  '3xs': { fontPx: 12, heightPx: 22, paddingXClass: 'px-1.5', rightSvg: { w: 6, h: 9 }, arrowRightPx: 6, arrowTopPx: 9 },
  '2xs': { fontPx: 12, heightPx: 24, paddingXClass: 'px-2', rightSvg: { w: 6, h: 9 }, arrowRightPx: 6, arrowTopPx: 9.5 },
  'xs':  { fontPx: 14, heightPx: 26, paddingXClass: 'px-2', rightSvg: { w: 7, h: 11 }, arrowRightPx: 7, arrowTopPx: 8 },
  'sm':  { fontPx: 14, heightPx: 28, paddingXClass: 'px-2', rightSvg: { w: 7, h: 11 }, arrowRightPx: 6.5, arrowTopPx: 9 },
  'md':  { fontPx: 14, heightPx: 32, paddingXClass: 'px-3', rightSvg: { w: 8, h: 12 }, arrowRightPx: 8, arrowTopPx: 10 },
  'lg':  { fontPx: 14, heightPx: 36, paddingXClass: 'px-3', rightSvg: { w: 8, h: 12 }, arrowRightPx: 8, arrowTopPx: 12 },
  'xl':  { fontPx: 14, heightPx: 40, paddingXClass: 'px-3', rightSvg: { w: 8, h: 12 }, arrowRightPx: 8, arrowTopPx: 14 },
  '2xl': { fontPx: 16, heightPx: 44, paddingXClass: 'px-3', rightSvg: { w: 8, h: 12 }, arrowRightPx: 10, arrowTopPx: 16 },
  '3xl': { fontPx: 16, heightPx: 48, paddingXClass: 'px-3.5', rightSvg: { w: 9, h: 13 }, arrowRightPx: 12, arrowTopPx: 17 },
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      name,
      onChangeAction,
      placeholder,
      defaultValue,
      variant = 'outline',
      size = 'md',
      pill = false,
      block = false,
      clearable = false,
      disabled = false,
      options,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const spec = sizeSpec[size] || sizeSpec['md'];
    const modalSpec = sizeSpec['md'];
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const [value, setValue] = React.useState<string>(defaultValue ?? '');
    const [open, setOpen] = React.useState(false);
    const [shouldRenderDropdown, setShouldRenderDropdown] = React.useState(false);
    const [dropdownAnim, setDropdownAnim] = React.useState<'enter' | 'exit'>('exit');
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const hasValue = value !== '';
    const textColor = hasValue ? '#0E0E0E' : '#8F8F8F';

    const radiusMap: Record<string, string> = {
      '3xs': 'rounded-md',
      '2xs': 'rounded-md',
      'xs':  'rounded-md',
      'sm':  'rounded-md',
      'md':  'rounded-lg',
      'lg':  'rounded-lg',
      'xl':  'rounded-xl',
      '2xl': 'rounded-xl',
      '3xl': 'rounded-xl',
    };
    const radius = pill ? 'rounded-full' : radiusMap[size] || 'rounded-lg';
    const widthClass = block ? 'w-full' : '';

    const variantStyles = (() => {
      switch (variant) {
        case 'solid':
          return 'bg-[#181818] text-white';
        case 'soft':
          return 'bg-[#EBEBEB]';
        case 'outline':
          return 'bg-transparent border border-[#D8D8D8]';
        case 'ghost':
          return 'bg-transparent';
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

    const clearValue = (e: React.MouseEvent) => {
      e.stopPropagation();
      setValue('');
      if (onChangeAction) {
        console.log('Action dispatched:', onChangeAction);
      }
    };

    // Outside click / ESC close
    React.useEffect(() => {
      if (!open) return;
      const handlePointer = (e: MouseEvent | TouchEvent) => {
        const root = containerRef.current;
        if (!root) return;
        const target = e.target as Node | null;
        if (target && root.contains(target)) return;
        setOpen(false);
      };
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };
      document.addEventListener('mousedown', handlePointer);
      document.addEventListener('touchstart', handlePointer, { passive: true });
      document.addEventListener('keydown', handleKey);
      return () => {
        document.removeEventListener('mousedown', handlePointer);
        document.removeEventListener('touchstart', handlePointer);
        document.removeEventListener('keydown', handleKey);
      };
    }, [open]);

    // Animate dropdown mount/unmount like DatePicker
    React.useEffect(() => {
      if (open) {
        setShouldRenderDropdown(true);
        const id = requestAnimationFrame(() => setDropdownAnim('enter'));
        return () => cancelAnimationFrame(id);
      }
      setDropdownAnim('exit');
      const t = setTimeout(() => setShouldRenderDropdown(false), 110);
      return () => clearTimeout(t);
    }, [open]);

    const selectedLabel = React.useMemo(() => {
      const hit = options.find((o) => String(o.value) === String(value));
      return hit?.label ?? '';
    }, [options, value]);

    return (
      <div ref={containerRef} className={cn('relative inline-block', widthClass)}>
        {/* Native select visual preserved; intercept native menu */}
        <select
          ref={ref}
          id={selectId}
          name={name}
          disabled={disabled}
          value={value}
          onChange={(e) => {
            const next = e.target.value;
            setValue(next);
            if (onChangeAction) {
              console.log('Action dispatched:', onChangeAction);
            }
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            if (!disabled) setOpen((o) => !o);
          }}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
              e.preventDefault();
              setOpen((o) => !o);
            }
          }}
          className={cn(
            'appearance-none w-full transition-colors duration-300',
            spec.paddingXClass,
            radius,
            variantStyles,
            hoverStyles,
            disabledStyles,
            className
          )}
          style={{ height: spec.heightPx, fontSize: spec.fontPx, color: textColor, paddingRight: 28 }}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={String(option.value)} value={String(option.value)} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Clear button */}
        {clearable && hasValue && !disabled && (
          <button
            type="button"
            onClick={clearValue}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-[#5D5D5D] hover:bg-[#EBEBEB] rounded-md"
            style={{ width: 20, height: 20, fontSize: 14, lineHeight: '20px' }}
            aria-label="Clear selection"
          >
            ×
          </button>
        )}

        {/* Right arrow */}
        <span
          className="pointer-events-none absolute opacity-90"
          style={{ right: spec.arrowRightPx, top: spec.arrowTopPx }}
        >
          <svg
            width={spec.rightSvg.w}
            height={spec.rightSvg.h}
            viewBox="0 0 10 16"
            fill="#858585"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.34151 0.747423C4.71854 0.417526 5.28149 0.417526 5.65852 0.747423L9.65852 4.24742C10.0742 4.61111 10.1163 5.24287 9.75259 5.6585C9.38891 6.07414 8.75715 6.11626 8.34151 5.75258L5.00001 2.82877L1.65852 5.75258C1.24288 6.11626 0.61112 6.07414 0.247438 5.6585C-0.116244 5.24287 -0.0741267 4.61111 0.34151 4.24742L4.34151 0.747423ZM0.246065 10.3578C0.608879 9.94139 1.24055 9.89795 1.65695 10.2608L5.00001 13.1737L8.34308 10.2608C8.75948 9.89795 9.39115 9.94139 9.75396 10.3578C10.1168 10.7742 10.0733 11.4058 9.65695 11.7687L5.65695 15.2539C5.28043 15.582 4.7196 15.582 4.34308 15.2539L0.343082 11.7687C-0.0733128 11.4058 -0.116749 10.7742 0.246065 10.3578Z"
            />
          </svg>
        </span>

        {/* Dropdown modal - match DatePicker popover */}
        {shouldRenderDropdown && (
          <div className={cn('absolute z-50 top-full mt-2 left-0 min-w-full')}>
            <div
              className={cn(
                'bg-white rounded-xl shadow-lg border-[0.5px] border-[#D6D6D6]',
                dropdownAnim === 'enter' ? 'datepicker-pop-enter' : 'datepicker-pop-exit'
              )}
              style={{ willChange: 'opacity, transform', width: 300, padding: 6 }}
            >
              {/* Keyframes copied from DatePicker for consistency */}
              <style>
                {`
                  @keyframes dpEnter {
                    0% { opacity: 0; transform: translateY(-4px) scale(0.96); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                  }
                  @keyframes dpExit {
                    0% { opacity: 1; transform: translateY(0) scale(1); }
                    100% { opacity: 0; transform: translateY(-4px) scale(0.96); }
                  }
                  .datepicker-pop-enter { animation: dpEnter 120ms ease-out forwards; }
                  .datepicker-pop-exit { animation: dpExit 100ms ease-in forwards; }
                `}
              </style>
              <ul className="max-h-60 overflow-auto">
                {options.map((opt) => {
                  const selected = String(opt.value) === String(value);
                  return (
                    <li key={String(opt.value)}>
                      <button
                        type="button"
                        disabled={!!opt.disabled}
                        onClick={() => {
                          setValue(String(opt.value));
                          setOpen(false);
                          if (onChangeAction) {
                            console.log('Action dispatched:', onChangeAction);
                          }
                        }}
                        className={cn(
                          'w-full text-left px-1.5 pt-[7px] pb-[3px] rounded-md',
                          opt.disabled ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer hover:bg-[#EBEBEB] hover:text-[#282828]',
                          selected ? 'text-[#0E0E0E] hover:text-[#282828]' : 'text-[#282828]'
                        )}
                        style={{ fontSize: modalSpec.fontPx }}
                      >
                        <span className="inline-flex items-center gap-2">
                          <span style={{ width: 16, height: 16 }} className="inline-flex items-center justify-center pl-1">
                            {selected ? (
                              <Icon name="check" strokeWidth={2.5} style={{ width: 16, height: 16, color: '#0E0E0E' }} />
                            ) : null}
                          </span>
                          <span>{opt.label}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

