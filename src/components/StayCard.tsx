import React from 'react';
import { Stay } from '../types';
import { EditorialBadge } from './EditorialBadge';
import { AffiliateCTA } from './AffiliateCTA';
import { MapPin, ThumbsUp, AlertCircle, Sparkles, Heart } from 'lucide-react';

interface StayCardProps {
  stay: Stay;
  className?: string;
}

export const StayCard: React.FC<StayCardProps> = ({ stay, className = '' }) => {
  return (
    <div className={`bg-white rounded-[28px] border border-[#E9E5D9] overflow-hidden shadow-xs hover:shadow-md transition-all ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left/Top Image Column */}
        <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[260px] bg-[#F1EDE4] overflow-hidden">
          <img
            src={stay.image}
            alt={stay.name}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-3.5 left-3.5 z-10">
            <EditorialBadge label={stay.editorialLabel} size="sm" />
          </div>
          <div className="absolute bottom-3.5 left-3.5 z-10">
            <span className="px-2.5 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-sm text-[11px] font-semibold tracking-wider uppercase">
              {stay.category}
            </span>
          </div>
        </div>

        {/* Right/Content Column */}
        <div className="lg:col-span-7 p-6 md:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-1.5 text-xs text-[#8FA18B] font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{stay.neighborhood}, {stay.destinationName}</span>
              </div>
              <span className="text-xs font-serif font-bold text-[#434338] px-2.5 py-0.5 rounded-full bg-[#F1EDE4] border border-[#E9E5D9]">
                {stay.priceIndicator}
              </span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#434338] mb-2 leading-tight">
              <a href={`#/stays/${stay.id}`} className="hover:text-[#8FA18B] transition-colors">
                {stay.name}
              </a>
            </h3>

            {/* Why caught attention */}
            <p className="text-sm text-[#5A5A40] leading-relaxed mb-4">
              {stay.whyCaughtAttention}
            </p>

            {/* Editorial Take */}
            <div className="bg-[#F1EDE4] p-3.5 rounded-2xl border border-[#E9E5D9] text-xs text-[#434338] mb-4">
              <div className="flex items-center gap-1 font-bold text-[#8FA18B] uppercase tracking-widest text-[10px] mb-1">
                <Heart className="w-3 h-3 text-[#D48166]" />
                <span>My Observation</span>
              </div>
              <p className="italic font-serif text-[14px] leading-relaxed text-[#434338]">
                "{stay.myTake}"
              </p>
            </div>

            {/* Mixed Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mb-4">
              <div className="bg-[#8FA18B]/10 p-3 rounded-2xl border border-[#8FA18B]/25">
                <span className="font-bold text-[#354832] flex items-center gap-1 mb-0.5">
                  <ThumbsUp className="w-3 h-3 text-[#8FA18B]" /> Travelers Say:
                </span>
                <p className="text-[#3A4D38] line-clamp-2 leading-relaxed">
                  {stay.whatTravelersSay}
                </p>
              </div>

              <div className="bg-[#D48166]/10 p-3 rounded-2xl border border-[#D48166]/25">
                <span className="font-bold text-[#733B27] flex items-center gap-1 mb-0.5">
                  <AlertCircle className="w-3 h-3 text-[#D48166]" /> Things Worth Knowing:
                </span>
                <p className="text-[#6D3823] line-clamp-2 leading-relaxed">
                  {stay.thingsWorthKnowing[0]}
                </p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#E9E5D9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center flex-wrap gap-1.5 text-xs text-[#8D8D7E]">
              <span className="font-bold text-[10px] uppercase tracking-widest text-[#5A5A40]">Best for:</span>
              {stay.bestFor.slice(0, 2).map((item, idx) => (
                <span key={idx} className="px-2.5 py-0.5 rounded-full bg-[#F1EDE4] text-[#5A5A40] text-[11px] border border-[#E9E5D9]">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`#/stays/${stay.id}`}
                className="text-xs font-semibold px-4 py-2 rounded-full border border-[#E9E5D9] bg-[#F1EDE4] text-[#434338] hover:bg-[#E3DDCF] transition-colors"
              >
                Editorial Details
              </a>
              <AffiliateCTA
                label="Check availability"
                itemName={stay.name}
                destination={stay.destinationName}
                explicitUrl={stay.affiliateUrl}
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
