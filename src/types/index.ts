/**
 * Common types used across the widgetui library
 */

export type Size = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Color = 'info' | 'primary' | 'secondary' | 'discovery' | 'success' | 'caution' | 'warning' | 'danger';
export type Variant = 'solid' | 'soft' | 'outline' | 'ghost';
export type Style = 'primary' | 'secondary';

export interface Action {
  type: string;
  payload?: unknown;
}

