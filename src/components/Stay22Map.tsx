import React from 'react';
import { MapPin, Sparkles, BedDouble, ExternalLink } from 'lucide-react';

interface Stay22MapProps {
  destination?: string;
  location?: string;
  centerCoordinates?: { lat: number; lng: number };
  zoomLevel?: number;
  className?: string;
}

/**
 * Stay22Map Component
 * 
 * Reusable container for the Stay22 interactive accommodation map.
 * Provides a clean placeholder and documented script injection container
 * so the site owner can easily drop in their production Stay22 script.
 */
export const Stay22Map: React.FC<Stay22MapProps> = ({
  destination = 'Destination',
  location,
  centerCoordinates,
  zoomLevel = 13,
  className = ''
}) => {
  return (
    <div className={`my-12 rounded-3xl bg-[#F4EFE6] border border-[#E8E2D5] p-6 sm:p-8 overflow-hidden shadow-xs ${className}`}>
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-[#E8E2D5]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-[#8FA18B] mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Map &amp; Hideouts Nearby</span>
          </div>
          <h3 className="font-serif text-2xl text-[#3A3D36] font-bold italic">
            Where to Stay Near {location || destination}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#7A7D74] bg-[#FAF8F3] px-3 py-1.5 rounded-full border border-[#E8E2D5] inline-flex items-center gap-1.5">
            <BedDouble className="w-3.5 h-3.5 text-[#8FA18B]" />
            <span>Curated Stays &amp; Independent Lodges</span>
          </span>
        </div>
      </div>

      {/* Stay22 Interactive Map Container / Integration Placeholder */}
      <div 
        id="stay22-map-container"
        className="relative w-full h-[380px] sm:h-[440px] rounded-2xl bg-[#EBE5D8] border border-[#DDD5C5] overflow-hidden flex flex-col items-center justify-center text-center p-6"
      >
        {/*
          =====================================================================
          STAY22 SCRIPT INTEGRATION POINT
          The site owner can insert the official Stay22 iframe or script here:
          
          <iframe 
            id="stay22-widget" 
            width="100%" 
            height="100%" 
            src={`https://www.stay22.com/embed/gm?aid=YOUR_AID&lat=${lat}&lng=${lng}`}
            frameBorder="0"
          />
          =====================================================================
        */}

        {/* Visual Map Backdrop Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#8FA18B_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Atmospheric Placeholder Content */}
        <div className="relative z-10 max-w-md bg-[#FAF8F3]/95 backdrop-blur-md rounded-2xl p-6 border border-[#E2DBD0] shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#8FA18B]/15 text-[#8FA18B] flex items-center justify-center mx-auto mb-3">
            <MapPin className="w-6 h-6 animate-bounce" />
          </div>
          <h4 className="font-serif text-lg text-[#3A3D36] font-bold mb-1">
            Stay22 Map Integration Ready
          </h4>
          <p className="text-xs text-[#6B6E65] leading-relaxed mb-4">
            Curated stays, family-run guesthouses, and scenic hideouts in {location || destination}.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="/stays"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#8FA18B] hover:bg-[#7C8E78] text-white text-xs font-semibold shadow-xs transition-all"
            >
              <span>Explore Curated Stays</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-3 right-4 text-[10px] text-[#8C8F85] font-sans">
          Stay22 Verified Location Map Container · {destination}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] text-[#7A7D74]">
        <span>Editorial selections prioritize independent character and quiet surroundings.</span>
        <span className="italic">Booking simply completes the story.</span>
      </div>
    </div>
  );
};
