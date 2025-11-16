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
export { Cube } from './Cube';
export { Desktop } from './Desktop';
export { Document } from './Document';
export { DotsHorizontal } from './DotsHorizontal';
export { DotsVertical } from './DotsVertical';
export { EmptyCircle } from './EmptyCircle';
export { ExternalLink } from './ExternalLink';
export { Globe } from './Globe';
export { Keys } from './Keys';
export { Lab } from './Lab';
export { Images } from './Images';
export { Info } from './Info';
export { Lifesaver } from './Lifesaver';
export { Lightbulb } from './Lightbulb';
export { Mail } from './Mail';
export { MapPin } from './MapPin';
export { Maps } from './Maps';
export { Mobile } from './Mobile';
export { Name } from './Name';
export { Notebook } from './Notebook';
export { NotebookPencil } from './NotebookPencil';
export { PageBlank } from './PageBlank';
export { Phone } from './Phone';
export { Play } from './Play';
export { Profile } from './Profile';
export { ProfileCard } from './ProfileCard';
export { Reload } from './Reload';
export { Star } from './Star';
export { StarFilled } from './StarFilled';
export { Sparkle } from './Sparkle';
export { SparkleDouble } from './SparkleDouble';
export { SquareCode } from './SquareCode';
export { SquareImage } from './SquareImage';
export { SquareText } from './SquareText';
export { Suitcase } from './Suitcase';
export { SettingsSlider } from './SettingsSlider';
export { User } from './User';
export { Wreath } from './Wreath';
export { Write } from './Write';
export { WriteAlt } from './WriteAlt';
export { WriteAlt2 } from './WriteAlt2';

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
import { Cube } from './Cube';
import { Desktop } from './Desktop';
import { Document } from './Document';
import { DotsHorizontal } from './DotsHorizontal';
import { DotsVertical } from './DotsVertical';
import { EmptyCircle } from './EmptyCircle';
import { ExternalLink } from './ExternalLink';
import { Globe } from './Globe';
import { Keys } from './Keys';
import { Lab } from './Lab';
import { Images } from './Images';
import { Info } from './Info';
import { Lifesaver } from './Lifesaver';
import { Lightbulb } from './Lightbulb';
import { Mail } from './Mail';
import { MapPin } from './MapPin';
import { Maps } from './Maps';
import { Mobile } from './Mobile';
import { Name } from './Name';
import { Notebook } from './Notebook';
import { NotebookPencil } from './NotebookPencil';
import { PageBlank } from './PageBlank';
import { Phone } from './Phone';
import { Play } from './Play';
import { Profile } from './Profile';
import { ProfileCard } from './ProfileCard';
import { Reload } from './Reload';
import { Star } from './Star';
import { StarFilled } from './StarFilled';
import { Sparkle } from './Sparkle';
import { SparkleDouble } from './SparkleDouble';
import { SquareCode } from './SquareCode';
import { SquareImage } from './SquareImage';
import { SquareText } from './SquareText';
import { Suitcase } from './Suitcase';
import { SettingsSlider } from './SettingsSlider';
import { User } from './User';
import { Wreath } from './Wreath';
import { Write } from './Write';
import { WriteAlt } from './WriteAlt';
import { WriteAlt2 } from './WriteAlt2';
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
  cube: Cube,
  desktop: Desktop,
  document: Document,
  dot: Check,
  'dots-horizontal': DotsHorizontal,
  'dots-vertical': DotsVertical,
  'empty-circle': EmptyCircle,
  'external-link': ExternalLink,
  globe: Globe,
  keys: Keys,
  lab: Lab,
  images: Images,
  info: Info,
  lifesaver: Lifesaver,
  lightbulb: Lightbulb,
  mail: Mail,
  'map-pin': MapPin,
  maps: Maps,
  mobile: Mobile,
  name: Name,
  notebook: Notebook,
  'notebook-pencil': NotebookPencil,
  'page-blank': PageBlank,
  phone: Phone,
  play: Play,
  profile: Profile,
  'profile-card': ProfileCard,
  reload: Reload,
  star: Star,
  'star-filled': StarFilled,
  sparkle: Sparkle,
  'sparkle-double': SparkleDouble,
  'square-code': SquareCode,
  'square-image': SquareImage,
  'square-text': SquareText,
  suitcase: Suitcase,
  'settings-slider': SettingsSlider,
  user: User,
  wreath: Wreath,
  write: Write,
  'write-alt': WriteAlt,
  'write-alt2': WriteAlt2,
} as any;

