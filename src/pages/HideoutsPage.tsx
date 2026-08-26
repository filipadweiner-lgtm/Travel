import React, { useState } from 'react';
import { HIDEOUTS } from '../data/hideouts';
import { HideoutCategory } from '../types';
import { HideoutCard } from '../components/HideoutCard';
import { SEOHead } from '../components/SEOHead';
import { AuthorNotice } from '../components/AuthorNotice';
import { Compass, Filter, Sparkles } from 'lucide-react';

interface HideoutsPageProps {
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

export const HideoutsPage: React.FC<HideoutsPageProps> = ({ savedIds, onToggleSave }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceFilter, setPriceFilter] = useState<string>('All');

  const categories: (string | HideoutCategory)[] = [
    'All',
    'Beach',
    'City',
    'Mountain',
    'Island',
    'Boutique',
    'Romantic',
    'Solo-Friendly',
    'Weekend',
    'Affordable',
    'Luxury',
    'Hidden Gems'
  ];

  const filteredHideouts = HIDEOUTS.filter(h => {
    const matchesCategory = selectedCategory === 'All' || h.category === selectedCategory;
    const matchesPrice = priceFilter === 'All' || h.priceTier === priceFilter;
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-10">
      <SEOHead
        title="Curated Hideouts — Travel Hideouts"
        description="Explore boutique hotels, restored fincas, and secret city ateliers chosen for their character, acoustic quiet, and sense of place."
      />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
          <Compass className="w-4 h-4 text-[#7A5B46]" />
          <span>Curated Sanctuary Selection</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#242220] leading-tight">
          Curated Hideouts
        </h1>
        <p className="text-[#5F574E] text-base md:text-lg leading-relaxed font-sans">
          A hideout is not just a room to sleep in. It is a space that resets your nervous system — where you can read on a quiet terrace, wake up to real natural light, and explore a destination at your own pace.
        </p>
      </div>

      <AuthorNotice />

      {/* Filter Toolbar */}
      <div className="p-5 rounded-2xl bg-white border border-[#EBE2D3] shadow-sm space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#73685C] uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by Style / Category</span>
          </div>

          {/* Price Selector */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-[#8A8074]">Price Tier:</span>
            {['All', '€', '€€', '€€€', '€€€€'].map(tier => (
              <button
                key={tier}
                onClick={() => setPriceFilter(tier)}
                className={`px-2.5 py-1 rounded-md border font-serif transition-colors ${
                  priceFilter === tier
                    ? 'bg-[#2E2A26] text-white border-[#2E2A26]'
                    : 'bg-[#FAF7F2] text-[#4F473E] border-[#E5DAC9] hover:bg-[#EFE9DE]'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        {/* 11 Category Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                selectedCategory === cat
                  ? 'bg-[#2E2A26] text-[#FBF9F5] border-[#2E2A26] font-medium'
                  : 'bg-[#F9F6F0] text-[#595045] border-[#E3D9C9] hover:bg-[#EFE8DC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredHideouts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredHideouts.map(hideout => (
            <HideoutCard
              key={hideout.id}
              hideout={hideout}
              isSaved={savedIds.includes(hideout.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#E9DFCF] p-8">
          <p className="font-serif text-xl text-[#242220] mb-2">No hideouts match your active filter</p>
          <p className="text-sm text-[#70675D] mb-4">Try clearing your price tier or selecting 'All' styles.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setPriceFilter('All');
            }}
            className="px-5 py-2.5 rounded-full bg-[#2E2A26] text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
