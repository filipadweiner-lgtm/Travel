import React from 'react';
import { DEALS } from '../data/deals';
import { SEOHead } from '../components/SEOHead';
import { AuthorNotice } from '../components/AuthorNotice';
import { AffiliateCTA } from '../components/AffiliateCTA';
import { Calendar, ShieldCheck, MapPin, Sparkles, Heart } from 'lucide-react';

export const DealsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      <SEOHead
        title="Worth Booking: Seasonal Value Windows — TravelHideouts"
        description="Authentic travel value sweet spots, shoulder-season pricing, and boutique stays worth booking ahead."
      />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
          <Calendar className="w-4 h-4 text-[#7A5B46]" />
          <span>Curated Value Opportunities</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#242220] leading-tight">
          Deals Worth Knowing About
        </h1>
        <p className="text-[#5F574E] text-base md:text-lg leading-relaxed font-sans">
          You will never find countdown timers, fake promo codes, or 80%-off flash sale banners here. Instead, we highlight genuine seasonal arbitrage — sweet-spot travel windows where hotel rates drop significantly while local weather and charm remain peak.
        </p>
      </div>

      <AuthorNotice />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DEALS.map((deal) => (
          <div
            key={deal.id}
            className="p-6 md:p-8 rounded-3xl bg-white border border-[#E9E1D2] shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#8C6D58] font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{deal.destinationName}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F4EFE6] text-[#4A4239] text-xs font-medium uppercase tracking-wider">
                  {deal.category}
                </span>
              </div>

              <h2 className="font-serif font-bold text-2xl text-[#242220] leading-tight">
                {deal.title}
              </h2>

              <p className="text-sm text-[#544D44] leading-relaxed">
                {deal.whyWorthBooking}
              </p>

              {/* Value Box */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8C6D58] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#7A5B46]" />
                  <span>Transparent Value Context</span>
                </div>
                <p className="text-xs text-[#4F473E] leading-relaxed">
                  {deal.transparentValueNote}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2ECE1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-[#7A7165]">
                Seasonal Window: <strong className="text-[#2C2723]">{deal.seasonalContext}</strong>
              </span>

              <AffiliateCTA
                label="Check availability"
                itemName={deal.stayOrExperienceName}
                destination={deal.destinationName}
                explicitUrl={deal.affiliateUrl}
                size="md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
