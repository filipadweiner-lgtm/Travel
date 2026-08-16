import React from 'react';
import { GUIDES } from '../data/guides';
import { DESTINATIONS } from '../data/destinations';
import { SEOHead } from '../components/SEOHead';
import { AuthorNotice } from '../components/AuthorNotice';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';

export const GuidesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      <SEOHead
        title="Practical Travel Guides — TravelHideouts"
        description="Focused, street-level city guides that cut through generic tourist lists with actionable neighborhood intelligence."
      />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
          <BookOpen className="w-4 h-4 text-[#8FA18B]" />
          <span>Actionable Intelligence</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#434338] leading-tight">
          Practical Travel Guides
        </h1>
        <p className="text-[#5A5A40] text-base md:text-lg leading-relaxed font-sans">
          Forget 50-page guidebooks with endless museum directories. These guides give you the exact walking paths, dining spots, neighborhood bases, and caveats you need for a restorative trip.
        </p>
      </div>

      <AuthorNotice />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GUIDES.map((guide) => {
          const dest = DESTINATIONS.find(d => d.id === guide.destinationId);
          const destLabel = dest ? `${dest.name}, ${dest.country}` : 'Travel Guide';

          return (
            <article
              key={guide.id}
              className="rounded-[28px] overflow-hidden bg-white border border-[#E9E5D9] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F1EDE4]">
                  <img
                    src={guide.heroImage || guide.image || 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80'}
                    alt={guide.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src !== 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80') {
                        target.src = 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80';
                      }
                    }}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/65 text-white backdrop-blur-sm text-[11px] font-semibold tracking-wider uppercase">
                      {destLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#8D8D7E] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#8FA18B]" />
                    <span>{guide.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#434338] leading-snug">
                    <a href={`#/guides/${guide.id}`} className="hover:text-[#8FA18B] transition-colors">
                      {guide.title}
                    </a>
                  </h3>

                  <p className="text-xs text-[#5A5A40] line-clamp-3 leading-relaxed">
                    {guide.subtitle}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[#E9E5D9] pt-4 text-xs font-semibold text-[#8FA18B] hover:text-[#434338]">
                <span>Read complete guide</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
