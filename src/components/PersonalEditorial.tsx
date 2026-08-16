import React from 'react';
import { Heart, Info, AlertTriangle, Users, RotateCcw, Quote } from 'lucide-react';

interface EditorialSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const MyTake: React.FC<{ content: string; className?: string }> = ({ content, className = '' }) => (
  <div className={`p-4 md:p-5 rounded-[24px] bg-[#F1EDE4] border border-[#E9E5D9] text-[#434338] ${className}`}>
    <div className="flex items-center gap-2 mb-2 text-[#8FA18B]">
      <Quote className="w-4 h-4" />
      <span className="text-xs font-bold uppercase tracking-wider">My Take</span>
    </div>
    <p className="text-sm md:text-[15px] leading-relaxed italic text-[#434338] font-serif text-lg md:text-[17px]">
      "{content}"
    </p>
  </div>
);

export const WhyILikeIt: React.FC<{ content: string; className?: string }> = ({ content, className = '' }) => (
  <div className={`p-4 rounded-2xl bg-[#F1EDE4] border border-[#E9E5D9] ${className}`}>
    <div className="flex items-center gap-2 mb-1.5 text-[#5A5A40]">
      <Heart className="w-4 h-4 text-[#D48166]" />
      <span className="text-xs font-bold uppercase tracking-wider">Why It Caught My Attention</span>
    </div>
    <p className="text-sm text-[#434338] leading-relaxed">
      {content}
    </p>
  </div>
);

export const GoodToKnow: React.FC<{ content: string; className?: string }> = ({ content, className = '' }) => (
  <div className={`p-4 rounded-2xl bg-[#8FA18B]/10 border border-[#8FA18B]/25 text-[#354832] ${className}`}>
    <div className="flex items-center gap-2 mb-1.5 text-[#354832]">
      <Info className="w-4 h-4 text-[#8FA18B]" />
      <span className="text-xs font-bold uppercase tracking-wider">Good to Know</span>
    </div>
    <p className="text-sm leading-relaxed text-[#3A4D38]">
      {content}
    </p>
  </div>
);

export const WorthKnowing: React.FC<{ content: string; className?: string }> = ({ content, className = '' }) => (
  <div className={`p-4 rounded-2xl bg-[#D48166]/10 border border-[#D48166]/25 text-[#733B27] ${className}`}>
    <div className="flex items-center gap-2 mb-1.5 text-[#733B27]">
      <AlertTriangle className="w-4 h-4 text-[#D48166]" />
      <span className="text-xs font-bold uppercase tracking-wider">Worth Knowing (Caveat)</span>
    </div>
    <p className="text-sm leading-relaxed text-[#6D3823]">
      {content}
    </p>
  </div>
);

export const BestFor: React.FC<{ items?: string[] | string; className?: string }> = ({ items, className = '' }) => {
  const list = Array.isArray(items)
    ? items
    : typeof items === 'string'
    ? items.split(',').map(s => s.trim()).filter(Boolean)
    : [];

  if (list.length === 0) return null;

  return (
    <div className={`flex items-center flex-wrap gap-2 text-xs text-[#5A5A40] ${className}`}>
      <span className="flex items-center gap-1.5 font-bold text-[#8D8D7E] uppercase tracking-wider text-[11px]">
        <Users className="w-3.5 h-3.5 text-[#8FA18B]" /> Best For:
      </span>
      {list.map((item, idx) => (
        <span key={idx} className="px-2.5 py-0.5 rounded-full bg-[#F1EDE4] text-[#434338] border border-[#E9E5D9]">
          {item}
        </span>
      ))}
    </div>
  );
};

export const WouldIGoBack: React.FC<{ verdict: string; className?: string }> = ({ verdict, className = '' }) => (
  <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1EDE4] text-[#434338] text-xs font-bold border border-[#E9E5D9] ${className}`}>
    <RotateCcw className="w-3.5 h-3.5 text-[#8FA18B]" />
    <span>Would I return? <strong className="text-[#8FA18B] font-bold">{verdict}</strong></span>
  </div>
);
