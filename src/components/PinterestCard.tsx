import React, { useState } from 'react';
import { Bookmark, Sparkles, Share2, Check, ArrowUpRight } from 'lucide-react';
import { normalizeAppPath } from '../App';

interface PinterestCardProps {
  title: string;
  subtitle?: string;
  destination: string;
  image?: string;
  imageUrl?: string;
  storyUrl?: string;
  url?: string;
  category?: string;
  readTime?: string;
  className?: string;
}

export const PinterestCard: React.FC<PinterestCardProps> = ({
  title,
  subtitle,
  destination,
  image,
  imageUrl,
  storyUrl,
  url,
  category = 'Travel Inspiration',
  readTime = '5 min read',
  className = ''
}) => {
  const [copied, setCopied] = useState(false);

  const displayImage = image || imageUrl || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80';
  const cleanPath = normalizeAppPath(storyUrl || url || '/');

  const fullUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${cleanPath}`
    : `https://travelhideouts.com${cleanPath}`;

  const handlePin = (e: React.MouseEvent) => {
    e.stopPropagation();
    const pinUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(fullUrl)}&media=${encodeURIComponent(displayImage)}&description=${encodeURIComponent(`${title} — ${subtitle || destination} · Travel Hideouts`)}`;
    window.open(pinUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`group relative rounded-3xl overflow-hidden bg-[#242823] text-white shadow-md hover:shadow-xl transition-all duration-300 ${className}`}>
      {/* 2:3 Pinterest Standard Vertical Ratio Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden">
        <img
          src={displayImage}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (!target.src.includes('unsplash')) {
              target.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80';
            }
          }}
        />

        {/* Multi-layer gradient overlays for high-contrast typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

        {/* Top Header: Category & Pin Button */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] uppercase font-bold tracking-wider text-[#EAE6DC]">
            {category}
          </span>

          <button
            onClick={handlePin}
            aria-label="Save to Pinterest"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E60023] hover:bg-[#B8001B] text-white text-xs font-semibold shadow-md transition-transform hover:scale-105"
          >
            <span className="font-bold">Save</span>
          </button>
        </div>

        {/* Bottom Content: Destination, Curiosity Title & Editorial Branding */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8FA18B] mb-1.5">
            <span>{destination}</span>
            <span>·</span>
            <span className="text-white/70 font-normal">{readTime}</span>
          </div>

          <a href={cleanPath} className="focus:outline-none">
            <h4 className="font-serif text-xl sm:text-2xl text-white font-bold leading-tight mb-2 group-hover:text-[#E2EBDD] transition-colors italic">
              {title}
            </h4>
          </a>

          {subtitle && (
            <p className="text-xs text-[#D5D2C8] line-clamp-2 leading-relaxed mb-4 font-light">
              {subtitle}
            </p>
          )}

          {/* Editorial Footer Branding */}
          <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-[#A6A49B]">
            <div className="flex items-center gap-1.5">
              <span className="font-serif italic font-bold text-white">Travel Hideouts</span>
              <span className="text-white/40">·</span>
              <span>Stories worth saving</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleCopyLink}
                title="Copy share link"
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
              </button>
              <a
                href={cleanPath}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
