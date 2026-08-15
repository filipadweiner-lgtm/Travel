import React from 'react';
import { EditorialLabel } from '../types';
import { Sparkles, CheckCircle2, Bookmark, Compass, MessageSquare, BookOpen } from 'lucide-react';

interface EditorialBadgeProps {
  label: EditorialLabel;
  size?: 'sm' | 'md';
  className?: string;
}

export const EditorialBadge: React.FC<EditorialBadgeProps> = ({ label, size = 'sm', className = '' }) => {
  const getBadgeStyle = () => {
    switch (label) {
      case 'I stayed here':
        return {
          bg: 'bg-[#8FA18B]/15 text-[#334630] border-[#8FA18B]/35',
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#8FA18B]" />,
          tooltip: 'Direct firsthand experience by the author'
        };
      case "I'd choose this":
        return {
          bg: 'bg-[#D48166]/15 text-[#733B27] border-[#D48166]/35',
          icon: <Sparkles className="w-3.5 h-3.5 text-[#D48166]" />,
          tooltip: 'Personal editorial recommendation'
        };
      case 'Worth knowing':
        return {
          bg: 'bg-[#F1EDE4] text-[#434338] border-[#E9E5D9]',
          icon: <BookOpen className="w-3.5 h-3.5 text-[#5A5A40]" />,
          tooltip: 'Useful travel insight or key caveat'
        };
      case 'Travelers say':
        return {
          bg: 'bg-[#F1EDE4] text-[#5A5A40] border-[#E9E5D9]',
          icon: <MessageSquare className="w-3.5 h-3.5 text-[#8FA18B]" />,
          tooltip: 'Synthesized sentiment from traveler communities'
        };
      case 'On my list':
        return {
          bg: 'bg-[#D48166]/10 text-[#7D3E2A] border-[#D48166]/25',
          icon: <Bookmark className="w-3.5 h-3.5 text-[#D48166]" />,
          tooltip: 'Curated discovery on the author’s personal wishlist'
        };
      case 'Research pick':
      default:
        return {
          bg: 'bg-[#8FA18B]/10 text-[#394F36] border-[#8FA18B]/25',
          icon: <Compass className="w-3.5 h-3.5 text-[#8FA18B]" />,
          tooltip: 'Selected through in-depth editorial research'
        };
    }
  };

  const style = getBadgeStyle();
  const sizeClasses = size === 'sm' ? 'text-xs px-2.5 py-1 gap-1.5' : 'text-sm px-3 py-1.5 gap-2';

  return (
    <span
      title={style.tooltip}
      className={`inline-flex items-center font-medium rounded-full border tracking-wide uppercase text-[11px] select-none ${style.bg} ${sizeClasses} ${className}`}
    >
      {style.icon}
      <span>{label}</span>
    </span>
  );
};
