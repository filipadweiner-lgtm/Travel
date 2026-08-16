import React from 'react';
import { TravelerVoice } from '../types';
import { ExternalLink, ThumbsUp, AlertCircle, ShieldCheck } from 'lucide-react';

interface TravelerVoiceCardProps {
  voice: TravelerVoice;
  className?: string;
  variant?: 'standard' | 'compact';
}

export const TravelerVoiceCard: React.FC<TravelerVoiceCardProps> = ({ 
  voice, 
  className = '',
  variant = 'standard'
}) => {
  const getSourceIconColor = () => {
    switch (voice.source) {
      case 'Reddit':
        return { badge: 'bg-[#D48166]/15 text-[#733B27] border-[#D48166]/35', label: 'Reddit Community' };
      case 'Medium':
        return { badge: 'bg-[#434338]/10 text-[#434338] border-[#434338]/25', label: 'Medium Travel Essay' };
      case 'Travel Forum':
        return { badge: 'bg-[#8FA18B]/15 text-[#354832] border-[#8FA18B]/35', label: 'Traveler Forum' };
      case 'Traveler Substack':
      default:
        return { badge: 'bg-[#D48166]/15 text-[#733B27] border-[#D48166]/35', label: 'Traveler Substack' };
    }
  };

  const sourceMeta = getSourceIconColor();

  return (
    <div 
      className={`rounded-[28px] bg-white border border-[#E9E5D9] p-5 md:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group ${className}`}
    >
      <div>
        {/* Source Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E9E5D9] text-xs">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full font-bold border text-[10px] uppercase tracking-wider ${sourceMeta.badge}`}>
              {voice.source}
            </span>
            <span className="text-[#8D8D7E] font-medium hidden sm:inline">{voice.sourceName}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#8D8D7E]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8FA18B]" />
            <span>{voice.isParaphrase ? 'Attributed Sentiment' : 'Short Excerpt'}</span>
          </div>
        </div>

        {/* Location & Topic */}
        <div className="mb-2.5">
          <span className="text-[11px] font-bold text-[#8FA18B] uppercase tracking-wider block mb-0.5">
            {voice.location}
          </span>
          <h4 className="text-base md:text-lg font-serif font-bold text-[#434338] leading-snug">
            {voice.topic}
          </h4>
        </div>

        {/* Quote / Paraphrased content */}
        <div className="my-3 bg-[#F1EDE4] p-3.5 rounded-2xl border border-[#E9E5D9] text-[#434338] text-sm md:text-[14.5px] leading-relaxed italic font-serif">
          "{voice.quoteOrSummary}"
        </div>

        {/* Mixed Sentiment Breakdowns */}
        {(() => {
          const loveList = Array.isArray(voice.whatTravelersLove)
            ? voice.whatTravelersLove
            : typeof voice.whatTravelersLove === 'string'
            ? [voice.whatTravelersLove]
            : [];

          const caveatList = Array.isArray(voice.thingsWorthKnowing)
            ? voice.thingsWorthKnowing
            : typeof voice.thingsWorthKnowing === 'string'
            ? [voice.thingsWorthKnowing]
            : [];

          if (loveList.length === 0 && caveatList.length === 0) return null;

          return (
            <div className="space-y-2 mt-4 text-xs">
              {loveList.length > 0 && (
                <div className="bg-[#8FA18B]/10 p-3 rounded-2xl border border-[#8FA18B]/25">
                  <div className="flex items-center gap-1.5 font-bold text-[#354832] mb-1">
                    <ThumbsUp className="w-3 h-3 text-[#8FA18B]" />
                    <span>What travelers love:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-[#3A4D38] pl-1">
                    {loveList.map((love, idx) => (
                      <li key={idx}>{love}</li>
                    ))}
                  </ul>
                </div>
              )}

              {caveatList.length > 0 && (
                <div className="bg-[#D48166]/10 p-3 rounded-2xl border border-[#D48166]/25">
                  <div className="flex items-center gap-1.5 font-bold text-[#733B27] mb-1">
                    <AlertCircle className="w-3 h-3 text-[#D48166]" />
                    <span>Things worth knowing:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-[#6D3823] pl-1">
                    {caveatList.map((caveat, idx) => (
                      <li key={idx}>{caveat}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })()}
      </div>

      {/* Footer Attribution & Original Link */}
      <div className="pt-4 mt-4 border-t border-[#E9E5D9] flex items-center justify-between text-xs">
        <span className="text-[#8D8D7E] truncate max-w-[65%]">
          Source: <strong className="font-semibold text-[#434338]">{voice.author}</strong>
        </span>

        <a
          href={voice.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#8FA18B] hover:text-[#434338] font-semibold transition-colors hover:underline"
        >
          <span>Original discussion</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
