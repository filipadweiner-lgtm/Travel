import React, { useState } from 'react';
import { TRAVELER_VOICES } from '../data/travelerVoices';
import { TravelerVoiceCard } from './TravelerVoiceCard';
import { MessageSquareQuote, Filter } from 'lucide-react';

interface TravelerVoiceSectionProps {
  filterIds?: string[];
  limit?: number;
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
}

export const TravelerVoiceSection: React.FC<TravelerVoiceSectionProps> = ({
  filterIds,
  limit,
  title = 'Traveler Voices',
  subtitle = 'Real community sentiment, attributed excerpts, and candid caveats from travelers across Reddit, Medium, and verified travel forums.',
  showFilters = false
}) => {
  const [selectedSource, setSelectedSource] = useState<string>('all');

  let items = filterIds 
    ? TRAVELER_VOICES.filter(v => filterIds.includes(v.id))
    : TRAVELER_VOICES;

  if (selectedSource !== 'all') {
    items = items.filter(v => v.source.toLowerCase() === selectedSource.toLowerCase());
  }

  if (limit) {
    items = items.slice(0, limit);
  }

  return (
    <section className="py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest mb-1.5">
            <MessageSquareQuote className="w-4 h-4 text-[#8FA18B]" />
            <span>Community Intelligence</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#434338]">
            {title}
          </h2>
          <p className="text-[#5A5A40] text-sm md:text-base max-w-2xl mt-1">
            {subtitle}
          </p>
        </div>

        {showFilters && (
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-[#8D8D7E] mr-1 flex items-center gap-1 font-medium">
              <Filter className="w-3 h-3 text-[#8FA18B]" /> Filter:
            </span>
            {['all', 'Reddit', 'Medium', 'Travel Forum'].map(source => (
              <button
                key={source}
                onClick={() => setSelectedSource(source)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                  selectedSource === source
                    ? 'bg-[#434338] text-[#F9F7F2] border-[#434338] font-bold shadow-xs'
                    : 'bg-white text-[#5A5A40] border-[#E9E5D9] hover:bg-[#F1EDE4]'
                }`}
              >
                {source === 'all' ? 'All Sources' : source}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(voice => (
          <TravelerVoiceCard key={voice.id} voice={voice} />
        ))}
      </div>
    </section>
  );
};
