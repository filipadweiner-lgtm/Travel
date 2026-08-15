import React from 'react';
import { STAYS } from '../data/stays';
import { EditorialBadge } from '../components/EditorialBadge';
import { MyTake, WhyILikeIt, GoodToKnow, WorthKnowing, BestFor } from '../components/PersonalEditorial';
import { AffiliateCTA } from '../components/AffiliateCTA';
import { AuthorNotice } from '../components/AuthorNotice';
import { SEOHead } from '../components/SEOHead';
import { MapPin, ArrowLeft, Heart, ThumbsUp, AlertCircle, ShieldCheck, Sparkles } from 'lucide-react';

interface StayDetailPageProps {
  id: string;
}

export const StayDetailPage: React.FC<StayDetailPageProps> = ({ id }) => {
  const stay = STAYS.find(s => s.id === id || s.slug === id) || STAYS[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 space-y-12">
      <SEOHead
        title={`${stay.name} — Stays Worth Knowing`}
        description={stay.whyCaughtAttention}
        image={stay.image}
        type="article"
      />

      <div>
        <a
          href="#/stays"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#66503E] hover:text-[#242220] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all Stays</span>
        </a>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <EditorialBadge label={stay.editorialLabel} size="md" />
            <span className="px-3 py-1 rounded-full bg-[#EAE3D6] text-[#423C35] text-xs font-medium uppercase tracking-wider">
              {stay.category}
            </span>
          </div>

          <AffiliateCTA
            label="Check availability"
            itemName={stay.name}
            destination={stay.destinationName}
            explicitUrl={stay.affiliateUrl}
            size="md"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#242220] leading-tight">
          {stay.name}
        </h1>

        <div className="flex items-center gap-2 text-sm text-[#73685C]">
          <MapPin className="w-4 h-4 text-[#8C6D58]" />
          <span>{stay.neighborhood}, {stay.destinationName}</span>
          <span>·</span>
          <span>Price Indicator: <strong className="font-serif text-base text-[#2E2A26]">{stay.priceIndicator}</strong></span>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-[#EAE2D5] border border-[#E0D5C3] shadow-md">
        <img
          src={stay.image}
          alt={stay.name}
          className="w-full h-full object-cover"
        />
      </div>

      <AuthorNotice />

      {/* Content Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          <WhyILikeIt content={stay.whyCaughtAttention} />

          <MyTake content={stay.myTake} />

          {/* Traveler Sentiment & Caveats */}
          <div className="space-y-4 pt-2">
            <h3 className="font-serif text-2xl font-bold text-[#242220]">
              Community Assessment
            </h3>

            <div className="p-5 rounded-2xl bg-[#F6F8F6] border border-[#DCE8DF] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2F523A] uppercase tracking-wider">
                <ThumbsUp className="w-4 h-4" />
                <span>What Travelers Love</span>
              </div>
              <p className="text-sm text-[#384F40] leading-relaxed">
                {stay.whatTravelersSay}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF4F2] border border-[#EBDCD6] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#783D31] uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Things Worth Knowing (Honest Caveats)</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-[#5E3B33]">
                {stay.thingsWorthKnowing.map((caveat, idx) => (
                  <li key={idx}>{caveat}</li>
                ))}
              </ul>
            </div>
          </div>

          {stay.femaleTravelNotes && (
            <div className="p-5 rounded-2xl bg-[#F4F7F8] border border-[#D3E1E4] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#30575F] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Solo & Evening Notes</span>
              </div>
              <p className="text-sm text-[#38535A] leading-relaxed">
                {stay.femaleTravelNotes}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-[#E9E1D2] shadow-sm space-y-5 sticky top-28">
            <div className="pb-4 border-b border-[#F2ECE1]">
              <span className="text-xs font-semibold text-[#8C6D58] uppercase tracking-wider block mb-1">
                Stay Overview
              </span>
              <h4 className="font-serif font-bold text-xl text-[#242220]">
                {stay.name}
              </h4>
              <p className="text-xs text-[#7A736B] mt-0.5">{stay.neighborhood}</p>
            </div>

            <BestFor items={stay.bestFor} />

            <div className="pt-2">
              <span className="text-xs text-[#8C847B] block mb-2 font-medium">Ready to explore booking dates?</span>
              <AffiliateCTA
                label="Check availability"
                itemName={stay.name}
                destination={stay.destinationName}
                explicitUrl={stay.affiliateUrl}
                variant="primary"
                size="lg"
                className="w-full"
              />
              <p className="text-[11px] text-[#998F84] text-center mt-2">
                External search opens directly via partner portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
