import React from 'react';
import { DESTINATIONS } from '../data/destinations';
import { SEOHead } from '../components/SEOHead';
import { AuthorNotice } from '../components/AuthorNotice';
import { MapPin, ArrowRight, Compass } from 'lucide-react';

export const DestinationsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      <SEOHead
        title="Destinations Worth Exploring — TravelHideouts"
        description="Curated city and island destinations with candid neighborhood advice, where to stay, and what to skip."
      />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
          <MapPin className="w-4 h-4 text-[#7A5B46]" />
          <span>Curated European Escapes</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#242220] leading-tight">
          Destinations Worth Exploring
        </h1>
        <p className="text-[#5F574E] text-base md:text-lg leading-relaxed font-sans">
          We don't try to cover every city on earth. We focus deeply on destinations that reward wandering on foot, staying in residential quarters, and dining at independent neighborhood tables.
        </p>
      </div>

      <AuthorNotice />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESTINATIONS.map((dest) => (
          <a
            key={dest.id}
            href={`#/destinations/${dest.id}`}
            className="group rounded-3xl overflow-hidden bg-white border border-[#E9E1D2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE9DF]">
                <img
                  src={dest.heroImage || dest.image || 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80'}
                  alt={dest.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src !== 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80') {
                      target.src = 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80';
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-white/80 block font-medium">
                    {dest.country}
                  </span>
                  <h3 className="text-3xl font-serif font-bold leading-tight">
                    {dest.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-xs font-serif italic text-[#8C6D58]">
                  "{dest.tag}"
                </p>
                <p className="text-sm text-[#544C44] leading-relaxed line-clamp-3">
                  {dest.blurb}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[#F2ECE1] pt-3 text-xs font-semibold text-[#66503E] group-hover:text-[#242220]">
              <span>Explore full city guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
