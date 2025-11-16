// Export all icon components
export { Check } from './Check';
export { Plus } from './Plus';
export { Search } from './Search';
export { ChevronLeft } from './ChevronLeft';
export { ChevronRight } from './ChevronRight';
export { Agent } from './Agent';
export { Analytics } from './Analytics';
export { Atom } from './Atom';
export { Bolt } from './Bolt';
export { BookOpen } from './BookOpen';
export { BookClock } from './BookClock';
export { BookClosed } from './BookClosed';
export { Calendar } from './Calendar';
export { Chart } from './Chart';
export { CheckCircle } from './CheckCircle';
export { CheckCircleFilled } from './CheckCircleFilled';
export { CircleQuestion } from './CircleQuestion';
export { Compass } from './Compass';
export { Confetti } from './Confetti';

// Icon registry - maps icon names to components
import React from 'react';
import { Check } from './Check';
import { Plus } from './Plus';
import { Search } from './Search';
import { ChevronLeft } from './ChevronLeft';
import { ChevronRight } from './ChevronRight';
import { Agent } from './Agent';
import { Analytics } from './Analytics';
import { Atom } from './Atom';
import { Bolt } from './Bolt';
import { BookOpen } from './BookOpen';
import { BookClock } from './BookClock';
import { BookClosed } from './BookClosed';
import { Calendar } from './Calendar';
import { Chart } from './Chart';
import { CheckCircle } from './CheckCircle';
import { CheckCircleFilled } from './CheckCircleFilled';
import { CircleQuestion } from './CircleQuestion';
import { Compass } from './Compass';
import { Confetti } from './Confetti';
import type { IconName } from '../icon.types';

export const iconRegistry: Record<IconName, React.ComponentType<any>> = {
  check: Check,
  plus: Plus,
  search: Search,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  // Placeholder components for other icons (to be implemented)
  agent: Agent,
  analytics: Analytics,
  atom: Atom,
  batch: Check,
  bolt: Bolt,
  'book-open': BookOpen,
  'book-closed': BookClosed,
  'book-clock': BookClock,
  bug: Check,
  calendar: Calendar,
  chart: Chart,
  'check-circle': CheckCircle,
  'check-circle-filled': CheckCircleFilled,
  'circle-question': CircleQuestion,
  compass: Compass,
  confetti: Confetti,
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

