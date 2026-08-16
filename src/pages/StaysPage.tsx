import React, { useState } from 'react';
import { STAYS } from '../data/stays';
import { StayCategory } from '../types';
import { StayCard } from '../components/StayCard';
import { SEOHead } from '../components/SEOHead';
import { AuthorNotice } from '../components/AuthorNotice';
import { Coffee, Filter } from 'lucide-react';

export const StaysPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: (string | StayCategory)[] = [
    'All',
    "Places I'd Stay",
    'Boutique Finds',
    'Beautiful on a Budget',
    'Romantic Hideouts',
    'Solo-Friendly Stays',
    'Worth the Splurge'
  ];

  const filteredStays = selectedCategory === 'All'
    ? STAYS
    : STAYS.filter(s => s.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      <SEOHead
        title="Curated Stays — TravelHideouts"
        description="Boutique finds, romantic retreats, solo-friendly sanctuaries, and beautiful budget stays with honest context."
      />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
          <Coffee className="w-4 h-4 text-[#7A5B46]" />
          <span>Curated Stays</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#242220] leading-tight">
          Stays Worth Knowing
        </h1>
        <p className="text-[#5F574E] text-base md:text-lg leading-relaxed font-sans">
          We use the term <em>Stays</em> rather than presenting a hotel search engine. Every property featured here caught our eye for a specific reason: exceptional natural light, acoustic quiet, architectural character, or genuine local hospitality.
        </p>
      </div>

      <AuthorNotice />

      {/* Filter Bar */}
      <div className="p-5 rounded-2xl bg-white border border-[#EBE2D3] shadow-sm flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#73685C] uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter by Stay Archetype</span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map(cat => {
            const count = cat === 'All' ? STAYS.length : STAYS.filter(s => s.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-[#2E2A26] text-white border-[#2E2A26] shadow-xs'
                    : 'bg-[#FAF7F2] text-[#544C42] border-[#E2D6C5] hover:bg-[#EFE8DC]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-[#EAE2D5] text-[#6E6457]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stays List */}
      <div className="space-y-6">
        {filteredStays.map(stay => (
          <StayCard key={stay.id} stay={stay} />
        ))}
      </div>
    </div>
  );
};
