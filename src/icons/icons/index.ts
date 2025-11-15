// Export all icon components
export { Check } from './Check';
export { Plus } from './Plus';
export { Search } from './Search';
export { ChevronLeft } from './ChevronLeft';
export { ChevronRight } from './ChevronRight';

// Icon registry - maps icon names to components
import React from 'react';
import { Check } from './Check';
import { Plus } from './Plus';
import { Search } from './Search';
import { ChevronLeft } from './ChevronLeft';
import { ChevronRight } from './ChevronRight';
import type { IconName } from '../icon.types';

export const iconRegistry: Record<IconName, React.ComponentType<any>> = {
  check: Check,
  plus: Plus,
  search: Search,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  // Placeholder components for other icons (to be implemented)
  agent: Check,
  analytics: Check,
  atom: Check,
  batch: Check,
  bolt: Check,
  'book-open': Check,
  'book-closed': Check,
  'book-clock': Check,
  bug: Check,
  calendar: Check,
  chart: Check,
  'check-circle': Check,
  'check-circle-filled': Check,
  'circle-question': Check,
  compass: Check,
  confetti: Check,
  cube: Check,
  desktop: Check,
  document: Check,
  dot: Check,
  'dots-horizontal': Check,
  'dots-vertical': Check,
  'empty-circle': Check,
  'external-link': Check,
  globe: Check,
  keys: Check,
  lab: Check,
  images: Check,
  info: Check,
  lifesaver: Check,
  lightbulb: Check,
  mail: Check,
  'map-pin': Check,
  maps: Check,
  mobile: Check,
  name: Check,
  notebook: Check,
  'notebook-pencil': Check,
  'page-blank': Check,
  phone: Check,
  play: Check,
  profile: Check,
  'profile-card': Check,
  reload: Check,
  star: Check,
  'star-filled': Check,
  sparkle: Check,
  'sparkle-double': Check,
  'square-code': Check,
  'square-image': Check,
  'square-text': Check,
  suitcase: Check,
  'settings-slider': Check,
  user: Check,
  wreath: Check,
  write: Check,
  'write-alt': Check,
  'write-alt2': Check,
} as any;

