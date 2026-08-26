import React, { useState } from 'react';
import { EXPERIENCES } from '../data/experiences';
import { DESTINATIONS } from '../data/destinations';
import { ExperienceCategory } from '../types';
import { SEOHead } from '../components/SEOHead';
import { AuthorNotice } from '../components/AuthorNotice';
import { AffiliateCTA } from '../components/AffiliateCTA';
import { 
  Filter, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Compass,
  MessageSquareQuote,
  Info
} from 'lucide-react';

export const ThingsToDoPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDestination, setSelectedDestination] = useState<string>('All');

  const categories: string[] = [
    'All',
    'Food',
    'Culture',
    'Nature',
    'Beaches',
    'Adventure',
    'Wellness',
    'Nightlife',
    'Local experiences'
  ];

  const filteredExperiences = EXPERIENCES.filter(exp => {
    const matchesCat = selectedCategory === 'All' || exp.category === selectedCategory;
    const matchesDest = selectedDestination === 'All' || exp.destinationName === selectedDestination;
    return matchesCat && matchesDest;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      <SEOHead
        title="Curated Things to Do & Experiences — Travel Hideouts"
        description="Authentic food walks, historic ceramic workshops, and coastal boat journeys curated for character and genuine enjoyment."
      />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
          <Compass className="w-4 h-4 text-[#8FA18B]" />
          <span>Curated Experiences</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#434338] leading-tight">
          Things Worth Doing
        </h1>
        <p className="text-[#5A5A40] text-base md:text-lg leading-relaxed font-sans">
          We filter through hundreds of mass-market bus tours to surface intimate food walks, traditional artisanal workshops, and quiet tidal swims that actually enrich your days.
        </p>
      </div>

      <AuthorNotice />

      {/* Filter Toolbar */}
      <div className="p-5 rounded-[28px] bg-white border border-[#E9E5D9] shadow-xs space-y-4">
        {/* Category Pills */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-[#8FA18B]" />
            <span>Filter by Category</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#8D8D7E] font-medium">Destination:</span>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="px-3.5 py-1.5 rounded-full border border-[#E9E5D9] bg-[#F1EDE4] text-[#434338] text-xs font-semibold focus:outline-none"
            >
              <option value="All">All Destinations</option>
              {DESTINATIONS.map(d => (
                <option key={d.id} value={d.name}>{d.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                selectedCategory === cat
                  ? 'bg-[#434338] text-[#F9F7F2] border-[#434338] font-bold shadow-xs'
                  : 'bg-white text-[#5A5A40] border-[#E9E5D9] hover:bg-[#F1EDE4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExperiences.map((exp) => (
          <div
            key={exp.id}
            className="rounded-[28px] overflow-hidden bg-white border border-[#E9E5D9] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F1EDE4]">
                <img
                  src={exp.image || (exp as any).heroImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'}
                  alt={exp.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src !== 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80') {
                      target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80';
                    }
                  }}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/65 text-white backdrop-blur-sm text-[11px] font-semibold tracking-wider uppercase">
                    {exp.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8FA18B] font-bold mb-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {exp.destinationName}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#434338] leading-snug">
                    {exp.title}
                  </h3>
                </div>

                <p className="text-xs text-[#434338] leading-relaxed">
                  {exp.summary}
                </p>

                {/* Why worth it */}
                <div className="p-3.5 rounded-[20px] bg-[#8FA18B]/10 border border-[#8FA18B]/25 text-xs text-[#354832] space-y-1">
                  <div className="font-bold flex items-center gap-1 text-[#354832]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8FA18B]" /> Why it's worth it:
                  </div>
                  <p className="text-[#3A4D38] leading-relaxed">{exp.worthDoing}</p>
                </div>

                {/* Caveat */}
                <div className="p-3.5 rounded-[20px] bg-[#D48166]/10 border border-[#D48166]/25 text-xs text-[#733B27] space-y-1">
                  <div className="font-bold flex items-center gap-1 text-[#733B27]">
                    <AlertCircle className="w-3.5 h-3.5 text-[#D48166]" /> What to skip / avoid:
                  </div>
                  <p className="text-[#6D3823] leading-relaxed">{exp.whatToSkip}</p>
                </div>

                {/* Travelers Say */}
                {exp.travelersSay && (
                  <div className="p-3 rounded-2xl bg-[#F1EDE4] border border-[#E9E5D9] text-xs text-[#5A5A40] flex items-start gap-2">
                    <MessageSquareQuote className="w-3.5 h-3.5 text-[#8FA18B] shrink-0 mt-0.5" />
                    <span>"{exp.travelersSay}"</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action footer */}
            <div className="p-6 pt-0 border-t border-[#E9E5D9] pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs text-[#8D8D7E] flex items-center gap-1">
                <Info className="w-3 h-3 text-[#8FA18B]" /> {exp.goodToKnow.slice(0, 32)}...
              </span>

              <AffiliateCTA
                label="Check availability"
                itemName={exp.title}
                destination={exp.destinationName}
                explicitUrl={exp.affiliateUrlPlaceholder}
                size="sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
