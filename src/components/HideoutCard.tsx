import React from 'react';
import { Hideout } from '../types';
import { EditorialBadge } from './EditorialBadge';
import { Bookmark, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

interface HideoutCardProps {
  hideout: Hideout;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
  className?: string;
}

export const HideoutCard: React.FC<HideoutCardProps> = ({
  hideout,
  isSaved = false,
  onToggleSave,
  className = ''
}) => {
  return (
    <article 
      className={`group bg-white rounded-[28px] overflow-hidden border border-[#E9E5D9] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F1EDE4]">
          <img
            src={hideout.image || hideout.heroImage || 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80'}
            alt={hideout.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (target.src !== 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80') {
                target.src = 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80';
              }
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-70 pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
            <EditorialBadge label={hideout.editorialLabel} size="sm" />
            
            {onToggleSave && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggleSave(hideout.id);
                }}
                aria-label={isSaved ? "Remove from saved" : "Save hideout"}
                className={`p-2 rounded-full backdrop-blur-md transition-all shadow-sm ${
                  isSaved 
                    ? 'bg-[#8FA18B] text-white' 
                    : 'bg-white/85 text-[#434338] hover:bg-white'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
              </button>
            )}
          </div>

          {/* Category Tag on bottom left of image */}
          <div className="absolute bottom-3 left-3.5 z-10">
            <span className="px-2.5 py-0.5 rounded-full bg-black/50 text-white backdrop-blur-sm text-[11px] font-semibold tracking-wider uppercase border border-white/20">
              {hideout.category}
            </span>
          </div>

          {/* Price Tier on bottom right of image */}
          <div className="absolute bottom-3 right-3.5 z-10">
            <span className="px-2.5 py-0.5 rounded-full bg-black/40 text-white backdrop-blur-sm text-xs font-serif font-medium border border-white/10">
              {hideout.priceTier}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 md:p-6">
          <div className="flex items-center gap-1.5 text-xs text-[#8FA18B] font-semibold uppercase tracking-wider mb-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{hideout.location}</span>
          </div>

          <h3 className="text-xl font-serif font-bold text-[#434338] group-hover:text-[#8FA18B] transition-colors leading-snug mb-2">
            <a href={`#/hideouts/${hideout.id}`} className="focus:outline-none">
              {hideout.title}
            </a>
          </h3>

          <p className="text-sm text-[#5A5A40] leading-relaxed line-clamp-2 mb-4 font-normal">
            {hideout.summary}
          </p>

          {/* Best For Tags */}
          {(() => {
            const bestForList = Array.isArray(hideout.bestFor)
              ? hideout.bestFor
              : typeof hideout.bestFor === 'string'
              ? hideout.bestFor.split(',').map(s => s.trim()).filter(Boolean)
              : [];

            if (bestForList.length === 0) return null;

            return (
              <div className="flex items-center flex-wrap gap-1.5">
                {bestForList.slice(0, 2).map((item, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#F1EDE4]/80 text-[#5A5A40] border border-[#E9E5D9]">
                    {item}
                  </span>
                ))}
              </div>
            );
          })()}
        </div>
      </div>

      {/* Card Action Link Footer */}
      <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-[#E9E5D9] pt-3.5 text-xs">
        <span className="text-[#8D8D7E] font-medium">
          Vibe: <span className="text-[#434338] italic font-serif">{hideout.vibe.split(',')[0]}</span>
        </span>

        <a
          href={`#/hideouts/${hideout.id}`}
          className="inline-flex items-center gap-1 font-semibold text-[#8FA18B] group-hover:text-[#434338] transition-colors"
        >
          <span>Discover Hideout</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </article>
  );
};
