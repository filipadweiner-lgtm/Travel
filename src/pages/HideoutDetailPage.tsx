import React from 'react';
import { HIDEOUTS } from '../data/hideouts';
import { TRAVELER_VOICES } from '../data/travelerVoices';
import { STAYS } from '../data/stays';
import { EditorialBadge } from '../components/EditorialBadge';
import { MyTake, WhyILikeIt, GoodToKnow, WorthKnowing, BestFor, WouldIGoBack } from '../components/PersonalEditorial';
import { TravelerVoiceCard } from '../components/TravelerVoiceCard';
import { AffiliateCTA } from '../components/AffiliateCTA';
import { AuthorNotice } from '../components/AuthorNotice';
import { SEOHead } from '../components/SEOHead';
import { MapPin, Bookmark, ArrowLeft, Heart, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

interface HideoutDetailPageProps {
  id: string;
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

export const HideoutDetailPage: React.FC<HideoutDetailPageProps> = ({
  id,
  savedIds,
  onToggleSave
}) => {
  const hideout = HIDEOUTS.find(h => h.id === id || h.slug === id) || HIDEOUTS[0];
  const isSaved = savedIds.includes(hideout.id);

  const travelerVoice = hideout.travelerVoiceId
    ? TRAVELER_VOICES.find(tv => tv.id === hideout.travelerVoiceId)
    : null;

  const relatedHideouts = HIDEOUTS.filter(h => h.id !== hideout.id && (h.destinationId === hideout.destinationId || h.category === hideout.category)).slice(0, 2);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 space-y-12">
      <SEOHead
        title={`${hideout.title} — TravelHideouts`}
        description={hideout.summary}
        image={hideout.image}
        type="article"
      />

      {/* Back Link */}
      <div>
        <a
          href="/hideouts/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#66503E] hover:text-[#242220] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all Hideouts</span>
        </a>
      </div>

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <EditorialBadge label={hideout.editorialLabel} size="md" />
            <span className="px-3 py-1 rounded-full bg-[#EAE3D6] text-[#423C35] text-xs font-medium uppercase tracking-wider">
              {hideout.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(hideout.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-semibold transition-all ${
                isSaved
                  ? 'bg-[#2E2A26] text-white border-[#2E2A26]'
                  : 'bg-white text-[#4A4239] border-[#DED4C3] hover:bg-[#F6F1EA]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
              <span>{isSaved ? 'Saved to Wishlist' : 'Save Hideout'}</span>
            </button>

            <AffiliateCTA
              label="Check availability"
              itemName={hideout.title}
              destination={hideout.destinationName}
              explicitUrl={hideout.bookingUrlPlaceholder}
              size="md"
            />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#242220] leading-tight">
          {hideout.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-[#73685C]">
          <MapPin className="w-4 h-4 text-[#8C6D58]" />
          <span>{hideout.location}</span>
          <span>·</span>
          <span>Price: <strong className="font-serif text-base text-[#2E2A26]">{hideout.priceTier}</strong></span>
        </div>
      </div>

          {/* Hero Visual Banner */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-[#EAE2D5] border border-[#E0D5C3] shadow-md">
            <img
              src={hideout.image || hideout.heroImage || 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1600&q=80'}
              alt={hideout.title}
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (target.src !== 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1600&q=80') {
                  target.src = 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1600&q=80';
                }
              }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Author Notice */}
          <AuthorNotice />

          {/* Editorial Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="prose prose-stone max-w-none">
                <h3 className="font-serif text-2xl font-bold text-[#242220] mb-3">
                  The Experience
                </h3>
                <p className="text-base md:text-[17px] text-[#423C36] leading-relaxed">
                  {hideout.summary || hideout.description || hideout.excerpt}
                </p>
              </div>

              {(hideout.authorTake || hideout.whySpecial) && (
                <MyTake content={hideout.authorTake || hideout.whySpecial || ''} />
              )}

              {hideout.whySpecial && (
                <WhyILikeIt content={hideout.whySpecial} />
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GoodToKnow content={hideout.goodToKnow || (hideout.highlights ? hideout.highlights.join(' · ') : 'Authentic regional retreat curated for mindful travelers.')} />
                <div className="p-4 rounded-xl bg-[#F6F2EB] border border-[#E2D6C5] flex flex-col justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#695D4F] mb-1">
                    Vibe & Atmosphere
                  </span>
                  <p className="text-sm italic font-serif text-[#3E3832]">
                    "{hideout.vibe || 'Peaceful, restorative sanctuary'}"
                  </p>
                  <div className="mt-3">
                    <WouldIGoBack verdict={hideout.wouldGoBack || 'Top of My Wishlist'} />
                  </div>
                </div>
              </div>

          {/* Traveler Voice Box if present */}
          {travelerVoice && (
            <div className="space-y-3 pt-4 border-t border-[#EDE4D5]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>What The Traveler Community Says</span>
              </div>
              <TravelerVoiceCard voice={travelerVoice} />
            </div>
          )}
        </div>

        {/* Sidebar Info Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-[#E9E1D2] shadow-sm space-y-5 sticky top-28">
            <div className="pb-4 border-b border-[#F2ECE1]">
              <span className="text-xs font-semibold text-[#8C6D58] uppercase tracking-wider block mb-1">
                Quick Summary
              </span>
              <h4 className="font-serif font-bold text-xl text-[#242220]">
                {hideout.title}
              </h4>
              <p className="text-xs text-[#7A736B] mt-0.5">{hideout.location}</p>
            </div>

            <BestFor items={hideout.bestFor} />

            <div className="pt-2">
              <span className="text-xs text-[#8C847B] block mb-2 font-medium">Ready to explore booking dates?</span>
              <AffiliateCTA
                label="Check availability"
                itemName={hideout.title}
                destination={hideout.destinationName}
                explicitUrl={hideout.bookingUrlPlaceholder}
                variant="primary"
                size="lg"
                className="w-full"
              />
              <p className="text-[11px] text-[#998F84] text-center mt-2">
                External search opens in a new tab with partner rates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Hideouts */}
      {relatedHideouts.length > 0 && (
        <div className="pt-12 border-t border-[#EAE1D1] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-serif font-bold text-[#242220]">
              More Hideouts to Discover
            </h3>
            <a href="/hideouts/" className="text-xs font-semibold text-[#66503E] hover:underline">
              View all →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedHideouts.map(rh => (
              <a
                key={rh.id}
                href={`/hideouts/${rh.id}/`}
                className="p-4 rounded-2xl bg-white border border-[#E9E1D2] flex gap-4 hover:border-[#C4B29C] transition-all group"
              >
                <img
                  src={rh.image}
                  alt={rh.title}
                  className="w-24 h-24 rounded-xl object-cover shrink-0"
                />
                <div>
                  <span className="text-[10px] font-semibold text-[#8C6D58] uppercase tracking-wider block mb-0.5">
                    {rh.category} · {rh.location}
                  </span>
                  <h4 className="font-serif font-semibold text-lg text-[#242220] group-hover:text-[#6E5744]">
                    {rh.title}
                  </h4>
                  <p className="text-xs text-[#635B52] line-clamp-2 mt-1">
                    {rh.summary}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
