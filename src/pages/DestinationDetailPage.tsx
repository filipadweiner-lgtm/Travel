import React from 'react';
import { DESTINATIONS } from '../data/destinations';
import { HIDEOUTS } from '../data/hideouts';
import { STAYS } from '../data/stays';
import { STORIES } from '../data/stories';
import { GUIDES } from '../data/guides';
import { TRAVELER_VOICES } from '../data/travelerVoices';
import { TravelerVoiceCard } from '../components/TravelerVoiceCard';
import { HideoutCard } from '../components/HideoutCard';
import { StayCard } from '../components/StayCard';
import { AuthorNotice } from '../components/AuthorNotice';
import { SEOHead } from '../components/SEOHead';
import { 
  MapPin, 
  ArrowLeft, 
  Heart, 
  AlertOctagon, 
  CheckCircle2, 
  Utensils, 
  Navigation, 
  Info, 
  ShieldCheck, 
  Compass,
  Sparkles,
  ArrowRight,
  Sun
} from 'lucide-react';

interface DestinationDetailPageProps {
  id: string;
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  id,
  savedIds,
  onToggleSave
}) => {
  const destination = DESTINATIONS.find(d => d.id === id || d.slug === id) || DESTINATIONS[0];

  const relatedHideouts = HIDEOUTS.filter(h => h.destinationId === destination.id);
  const relatedStays = STAYS.filter(s => s.destinationId === destination.id);
  const relatedStories = STORIES.filter(st => st.relatedDestinationIds?.includes(destination.id));
  const relatedGuides = GUIDES.filter(g => g.destinationId === destination.id);
  const relevantTravelerVoices = TRAVELER_VOICES.filter(tv => tv.location.toLowerCase().includes(destination.name.toLowerCase()));

  return (
    <div className="space-y-12 md:space-y-16 pb-20">
      <SEOHead
        title={`${destination.name}, ${destination.country} Guide — TravelHideouts`}
        description={destination.blurb}
        image={destination.heroImage}
        type="article"
      />

      {/* Hero Header */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-end bg-[#211E1C] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={destination.heroImage || destination.image || 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80'}
            alt={destination.name}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (target.src !== 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80') {
                target.src = 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80';
              }
            }}
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D1B] via-black/30 to-black/20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-20 w-full space-y-3">
          <a
            href="#/destinations"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white mb-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Destinations</span>
          </a>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs uppercase tracking-widest font-semibold border border-white/20">
              {destination.country}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            {destination.name}
          </h1>

          <p className="text-lg md:text-xl text-[#E5DDD0] font-serif italic max-w-2xl">
            "{destination.tag}"
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <AuthorNotice />

        {/* 1. Opening Editorial */}
        <section className="p-8 md:p-10 rounded-3xl bg-white border border-[#E9E1D2] shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
            <Heart className="w-4 h-4 text-[#8C6D58]" />
            <span>The Personal Editorial</span>
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl text-[#242220] leading-relaxed italic border-l-2 border-[#8C6D58] pl-6 py-1">
            "{destination.openingEditorial}"
          </blockquote>
          <p className="text-base text-[#574F46] leading-relaxed pt-2">
            {destination.blurb}
          </p>
        </section>

        {/* 2. Where I'd Stay */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Base Selection</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242220]">
            Where I'd Stay
          </h2>
          <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E5DAC8] text-[#3F3933] text-base md:text-[17px] leading-relaxed font-sans">
            {destination.whereIWouldStay}
          </div>
        </section>

        {/* 3. Neighborhoods Worth Knowing */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>Quarter-by-Quarter Breakdown</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242220]">
            Neighborhoods Worth Knowing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.neighborhoods.map((n, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E9E1D2] flex flex-col justify-between space-y-4 shadow-sm">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#242220] mb-1">
                    {n.name}
                  </h3>
                  <p className="text-xs font-medium text-[#8C6D58] italic mb-3">
                    {n.vibe}
                  </p>
                  <div className="space-y-2 text-xs text-[#524B43] leading-relaxed">
                    <p>
                      <strong className="text-[#2C2723]">Best for:</strong> {n.bestFor}
                    </p>
                    <p>
                      <strong className="text-[#2C2723]">Why choose:</strong> {n.whyChoose}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F2ECE1] text-[11px] text-[#7A4B3A] bg-[#FAF2EF] p-2.5 rounded-lg">
                  <strong>Avoid if:</strong> {n.avoidIf}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. What Travelers Say (Traveler Voices) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Community Sentiment</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242220]">
            What Travelers Say
          </h2>

          <p className="text-sm md:text-base text-[#595147] leading-relaxed max-w-3xl">
            {destination.whatTravelersSaySummary}
          </p>

          {relevantTravelerVoices.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {relevantTravelerVoices.map(voice => (
                <TravelerVoiceCard key={voice.id} voice={voice} />
              ))}
            </div>
          )}
        </section>

        {/* 5. What I'd Skip */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#994736] uppercase tracking-widest">
            <AlertOctagon className="w-4 h-4 text-[#994736]" />
            <span>Honest Caveats</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242220]">
            What I'd Skip
          </h2>

          <div className="rounded-2xl bg-[#FAF2F0] border border-[#ECD1C9] p-6 space-y-3">
            {destination.whatToSkip.map((skip, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-[#57352D] leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#EBD2CB] text-[#7A3628] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✕
                </span>
                <span>{skip}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Things Worth Doing */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
            <CheckCircle2 className="w-4 h-4" />
            <span>Curated Experiences</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242220]">
            Things Worth Doing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.thingsWorthDoing.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E9E1D2] shadow-sm space-y-2.5">
                <span className="text-xs font-semibold text-[#8C6D58] uppercase tracking-wider block">
                  0{idx + 1}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#242220]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#574F47] leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 text-xs text-[#3D5C45] font-medium">
                  <strong>Why it's worth it:</strong> {item.whyWorthIt}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Places to Eat */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
            <Utensils className="w-4 h-4" />
            <span>Table Recommendations</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242220]">
            Places to Eat
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.placesToEat.map((place, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E9E1D2] shadow-sm space-y-2">
                <span className="text-xs font-medium text-[#8C6D58] uppercase tracking-wider block">
                  {place.neighborhood}
                </span>
                <h3 className="font-serif font-bold text-xl text-[#242220]">
                  {place.name}
                </h3>
                <p className="text-xs font-medium text-[#70675D]">
                  {place.type}
                </p>
                <p className="text-xs text-[#4F473E] leading-relaxed pt-1">
                  {place.whySpecial}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Hideouts & Stays in this Destination */}
        {(relatedHideouts.length > 0 || relatedStays.length > 0) && (
          <section className="space-y-6 pt-6 border-t border-[#E8DFC8]">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-[#8C6D58] uppercase tracking-widest block mb-1">
                  Curated Accommodation
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242220]">
                  Hideouts & Stays in {destination.name}
                </h2>
              </div>
            </div>

            {relatedHideouts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedHideouts.map(h => (
                  <HideoutCard
                    key={h.id}
                    hideout={h}
                    isSaved={savedIds.includes(h.id)}
                    onToggleSave={onToggleSave}
                  />
                ))}
              </div>
            )}

            {relatedStays.length > 0 && (
              <div className="space-y-6 pt-4">
                {relatedStays.map(s => (
                  <StayCard key={s.id} stay={s} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* 9. Getting Around & Good to Know */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-[#E9E1D2] space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
              <Navigation className="w-4 h-4" />
              <span>Getting Around</span>
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#242220]">
              Transit & Walking
            </h3>
            <p className="text-xs text-[#524B43] leading-relaxed">
              <strong className="text-[#2C2723]">Primary Transit:</strong> {destination.gettingAround.recommendation}
            </p>
            <p className="text-xs text-[#524B43] leading-relaxed">
              <strong className="text-[#2C2723]">Airport Link:</strong> {destination.gettingAround.airportTransit}
            </p>
            <p className="text-xs text-[#524B43] leading-relaxed">
              <strong className="text-[#2C2723]">Night Walking:</strong> {destination.gettingAround.eveningWalkingAdvice}
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-white border border-[#E9E1D2] space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
              <Info className="w-4 h-4" />
              <span>Good to Know</span>
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#242220]">
              Practical Habits
            </h3>
            <ul className="space-y-2.5 text-xs text-[#524B43]">
              {destination.goodToKnow.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#8C6D58] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 10. Female-Friendly Travel Notes */}
        <section className="p-8 md:p-10 rounded-3xl bg-[#F6F8F6] border border-[#DCE8DF] space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#3C6E4D] uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-[#3C6E4D]" />
            <span>Female Travel Perspective</span>
          </div>
          <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#1E3B27]">
            Solo & Evening Atmosphere Notes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs text-[#2F4A37] leading-relaxed">
            <div>
              <p className="font-semibold text-[#1B3624] mb-1">General Vibe:</p>
              <p>{destination.femaleTravelNotes.generalVibe}</p>
            </div>
            <div>
              <p className="font-semibold text-[#1B3624] mb-1">Evening Atmosphere:</p>
              <p>{destination.femaleTravelNotes.eveningAtmosphere}</p>
            </div>
            <div>
              <p className="font-semibold text-[#1B3624] mb-1">Arrival Advice:</p>
              <p>{destination.femaleTravelNotes.arrivalTips}</p>
            </div>
            <div>
              <p className="font-semibold text-[#1B3624] mb-1">Recommended Bases:</p>
              <p>{destination.femaleTravelNotes.neighborhoodAdvice}</p>
            </div>
          </div>
        </section>

        {/* 11. Related Stories & Guides */}
        {(relatedStories.length > 0 || relatedGuides.length > 0) && (
          <section className="space-y-6 pt-4 border-t border-[#E8DFC8]">
            <h3 className="text-2xl font-serif font-bold text-[#242220]">
              Related Reading
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedStories.map(st => (
                <a
                  key={st.id}
                  href={`#/stories/${st.id}`}
                  className="p-4 rounded-2xl bg-white border border-[#E9E1D2] flex gap-4 hover:border-[#C4B29C] transition-all"
                >
                  <img
                    src={st.heroImage || st.image || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'}
                    alt={st.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src !== 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80') {
                        target.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';
                      }
                    }}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 bg-[#EAE2D5]"
                  />
                  <div>
                    <span className="text-[11px] text-[#8C847B]">{st.readTime}</span>
                    <h4 className="font-serif font-semibold text-base text-[#242220] hover:text-[#6E5744]">
                      {st.title}
                    </h4>
                    <p className="text-xs text-[#635B52] line-clamp-1 mt-0.5">
                      {st.excerpt}
                    </p>
                  </div>
                </a>
              ))}

              {relatedGuides.map(g => (
                <a
                  key={g.id}
                  href={`#/guides/${g.id}`}
                  className="p-4 rounded-2xl bg-white border border-[#E9E1D2] flex gap-4 hover:border-[#C4B29C] transition-all"
                >
                  <img
                    src={g.heroImage || g.image || 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80'}
                    alt={g.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src !== 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80') {
                        target.src = 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80';
                      }
                    }}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 bg-[#EAE2D5]"
                  />
                  <div>
                    <span className="text-[11px] text-[#8C847B]">{g.readTime}</span>
                    <h4 className="font-serif font-semibold text-base text-[#242220] hover:text-[#6E5744]">
                      {g.title}
                    </h4>
                    <p className="text-xs text-[#635B52] line-clamp-1 mt-0.5">
                      {g.subtitle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
