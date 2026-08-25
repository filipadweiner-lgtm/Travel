import React from 'react';
import { DESTINATIONS } from '../data/destinations';
import { SEOHead } from '../components/SEOHead';
import { AuthorNotice } from '../components/AuthorNotice';
import { MapPin, ArrowRight, Compass, Sparkles } from 'lucide-react';

export const DestinationsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      <SEOHead
        title="Countries Worth Exploring — TravelHideouts"
        description="Curated country guides with candid neighborhood advice, hidden stories, where to stay, and what to skip."
      />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
          <Compass className="w-4 h-4" />
          <span>Curated Country Portals</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#434338] leading-tight italic">
          Countries Worth Exploring
        </h1>
        <p className="text-[#5A5A40] text-base md:text-lg leading-relaxed font-sans">
          We don't try to cover every city on earth. We focus deeply on 9 extraordinary destinations that reward slow travel, car-free alpine valleys, subarctic silence, and independent neighborhood tables.
        </p>
      </div>

      <AuthorNotice />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESTINATIONS.map((dest) => (
          <a
            key={dest.id}
            href={`/destinations/${dest.id}/`}
            className="group rounded-3xl overflow-hidden bg-white border border-[#E9E5D9] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F1EDE4]">
                <img
                  src={dest.heroImage || dest.image}
                  alt={dest.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-white/80 block font-bold">
                    {dest.country}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight italic">
                    {dest.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-xs font-serif italic text-[#8FA18B] font-semibold">
                  "{dest.tag}"
                </p>
                <p className="text-xs text-[#5A5A40] leading-relaxed line-clamp-3">
                  {dest.blurb}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[#E9E5D9] pt-3 text-xs font-bold text-[#8FA18B] group-hover:text-[#7C8E78]">
              <span>Explore full country guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
