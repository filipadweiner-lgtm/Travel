import React from 'react';
import { DESTINATIONS } from '../data/destinations';
import { HIDEOUTS } from '../data/hideouts';
import { STORIES } from '../data/stories';
import { GUIDES } from '../data/guides';
import { TRAVELER_VOICES } from '../data/travelerVoices';
import { TravelerVoiceCard } from '../components/TravelerVoiceCard';
import { HideoutCard } from '../components/HideoutCard';
import { AuthorNotice } from '../components/AuthorNotice';
import { SEOHead } from '../components/SEOHead';
import { Stay22MapWidget, findStay22Map } from '../components/Stay22MapWidget';
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
  Sun,
  BookOpen,
  HelpCircle,
  Users,
  Lightbulb,
  Clock
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
  const relatedStories = STORIES.filter(st => st.relatedDestinationIds?.includes(destination.id));
  const hiddenStories = destination.hiddenStories || [];
  const didYouKnowFacts = destination.didYouKnow || [];
  const relevantTravelerVoices = TRAVELER_VOICES.filter(tv => tv.location.toLowerCase().includes(destination.name.toLowerCase()));

  return (
    <div className="space-y-12 md:space-y-16 pb-20">
      <SEOHead
        title={`${destination.name}, ${destination.country} Travel Guide — TravelHideouts`}
        description={destination.blurb}
        image={destination.heroImage}
        type="article"
      />

      {/* 1. Cinematic Hero Header */}
      <section className="relative min-h-[58vh] md:min-h-[68vh] flex items-end bg-[#1E221D] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={destination.heroImage || destination.image}
            alt={destination.name}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (!target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80';
              }
            }}
            className="w-full h-full object-cover scale-100 md:scale-105 transition-transform duration-1000 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151914] via-black/35 to-black/25" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-20 w-full space-y-4">
          <a
            href="/destinations"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white mb-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Countries</span>
          </a>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs uppercase tracking-widest font-semibold border border-white/20">
              {destination.country}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight italic">
            {destination.name}
          </h1>

          {destination.emotionalStatement && (
            <p className="text-xl md:text-2xl text-[#E8F0E4] font-serif italic max-w-2xl font-light">
              "{destination.emotionalStatement}"
            </p>
          )}

          <p className="text-sm md:text-base text-[#D7D2C4] max-w-2xl leading-relaxed">
            {destination.blurb}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <AuthorNotice />

        {/* 2. Opening Editorial */}
        <section className="p-8 md:p-10 rounded-3xl bg-white border border-[#E9E5D9] shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
            <Heart className="w-4 h-4 text-[#D48166]" />
            <span>The Personal Perspective</span>
          </div>
          <blockquote className="font-serif text-xl sm:text-2xl text-[#434338] leading-relaxed italic border-l-2 border-[#8FA18B] pl-6 py-1">
            "{destination.openingEditorial}"
          </blockquote>
        </section>

        {/* 3. Curated Editorial Stories */}
        {relatedStories.length > 0 && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E9E5D9] pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
                  <BookOpen className="w-4 h-4" />
                  <span>Curated Stories</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#434338] italic">
                  Stories Worth Reading About {destination.name}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedStories.map((story) => (
                <div
                  key={story.id}
                  className="group rounded-3xl bg-white border border-[#E9E5D9] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F1EDE4]">
                    <img
                      src={story.heroImage}
                      alt={story.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                      {story.category || 'Editorial Story'}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow space-y-3">
                    <div>
                      <div className="text-[11px] text-[#8D8D7E] uppercase tracking-wider font-semibold mb-1">
                        {story.readTime} · {story.date}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#434338] group-hover:text-[#8FA18B] transition-colors leading-snug italic">
                        {story.title}
                      </h3>
                      <p className="text-xs text-[#5A5A40] leading-relaxed mt-2 line-clamp-2">
                        {story.curiosityHook || story.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E9E5D9] flex items-center justify-between">
                      <a
                        href={`/stories/${story.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#8FA18B] hover:text-[#7C8E78] transition-colors"
                      >
                        <span>Read story</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Stay22 Interactive Map Widget for Destination */}
        {findStay22Map(destination.id, destination.name) && (
          <Stay22MapWidget
            destinationId={destination.id}
            destinationName={destination.name}
          />
        )}

        {/* 4. Things You Probably Didn't Know ("Did You Know?") */}
        {didYouKnowFacts.length > 0 && (
          <section className="p-8 md:p-10 rounded-3xl bg-[#F4EFE6] border border-[#E8E2D5] space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
              <Lightbulb className="w-4 h-4 text-[#D48166]" />
              <span>Verified Facts &amp; Cultural Lore</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#434338] italic">
              Things You Probably Didn't Know About {destination.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {didYouKnowFacts.map((fact, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white border border-[#E9E5D9] shadow-xs space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#8FA18B] mb-1">
                      Fact #{index + 1}
                    </div>
                    <p className="font-serif text-base font-bold text-[#434338] leading-snug">
                      "{fact.fact}"
                    </p>
                    <p className="text-xs text-[#5A5A40] leading-relaxed mt-2">
                      {fact.context}
                    </p>
                  </div>
                  {fact.source && (
                    <div className="pt-2 text-[10px] text-[#8D8D7E] italic border-t border-[#F1EDE4]">
                      Source: {fact.source}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Signature Hidden Stories */}
        {hiddenStories.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
              <Compass className="w-4 h-4" />
              <span>Signature Oddities &amp; Forgotten History</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#434338] italic">
              Hidden Stories in {destination.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {hiddenStories.map((hs) => (
                <div
                  key={hs.id}
                  className="p-6 rounded-3xl bg-white border border-[#E9E5D9] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#8FA18B] transition-all"
                >
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#F1EDE4] text-[#5A5A40] text-[10px] font-bold uppercase tracking-wider mb-2">
                      {hs.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#434338] leading-snug italic">
                      {hs.title}
                    </h3>
                    <p className="text-xs text-[#5A5A40] leading-relaxed mt-2">
                      {hs.teaser}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E9E5D9] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#8D8D7E]">{hs.readTime || '5 min read'}</span>
                    <a
                      href="/stories"
                      className="font-bold text-[#8FA18B] hover:text-[#7C8E78] inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. "If I Were Traveling Solo" (Solo Female Travel Section) */}
        {destination.soloTravelAdvice && (
          <section className="p-8 md:p-10 rounded-3xl bg-white border border-[#E9E5D9] shadow-xs space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-[#8FA18B]" />
              <span>Solo Travel Guidance</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#434338] italic">
              {destination.soloTravelAdvice.headline}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {destination.soloTravelAdvice.tips.map((tip, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#E9E5D9] space-y-2">
                  <h3 className="font-serif text-base font-bold text-[#434338]">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[#5A5A40] leading-relaxed">
                    {tip.advice}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#F1EDE4] text-xs text-[#5A5A40] flex items-center gap-3">
              <Info className="w-4 h-4 text-[#8FA18B] shrink-0" />
              <span>
                <strong>Evening Atmosphere Note:</strong> {destination.femaleTravelNotes.eveningAtmosphere}
              </span>
            </div>
          </section>
        )}

        {/* 7. "Perfect for a Girls' Trip" */}
        {destination.girlsTripInspiration && (
          <section className="p-8 md:p-10 rounded-3xl bg-[#FAF6F0] border border-[#E8DFC8] space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D48166] uppercase tracking-widest">
              <Users className="w-4 h-4 text-[#D48166]" />
              <span>Shared Travel Inspiration</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#434338] italic">
              {destination.girlsTripInspiration.headline}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {destination.girlsTripInspiration.ideas.map((idea, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E9E5D9] shadow-xs space-y-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#D48166] text-[10px] font-bold uppercase tracking-wider">
                    {idea.tag}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#434338] italic">
                    {idea.title}
                  </h3>
                  <p className="text-xs text-[#5A5A40] leading-relaxed">
                    {idea.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. Things Worth Doing */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
            <CheckCircle2 className="w-4 h-4 text-[#8FA18B]" />
            <span>Honest Experience Curation</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#434338] italic">
            Things Actually Worth Doing in {destination.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.thingsWorthDoing.map((item, index) => (
              <div key={index} className="p-6 rounded-3xl bg-white border border-[#E9E5D9] shadow-xs space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#F1EDE4] text-[#434338] flex items-center justify-center font-serif font-bold text-xs">
                  {index + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#434338]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5A5A40] leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 border-t border-[#F1EDE4] text-[11px] text-[#8FA18B] font-medium">
                  <strong>Why it's worth it:</strong> {item.whyWorthIt}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Neighborhoods Worth Knowing */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>Quarter-by-Quarter Breakdown</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#434338] italic">
            Neighborhoods Worth Knowing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destination.neighborhoods.map((n) => (
              <div key={n.name} className="p-6 rounded-3xl bg-white border border-[#E9E5D9] shadow-xs space-y-4">
                <div className="border-b border-[#F1EDE4] pb-3">
                  <h3 className="font-serif text-xl font-bold text-[#434338]">{n.name}</h3>
                  <p className="text-xs text-[#8FA18B] font-medium mt-1">{n.vibe}</p>
                </div>
                <div className="space-y-2 text-xs text-[#5A5A40]">
                  <div>
                    <strong className="text-[#434338]">Best for:</strong> {n.bestFor}
                  </div>
                  <div>
                    <strong className="text-[#434338]">Why choose here:</strong> {n.whyChoose}
                  </div>
                  <div className="text-[#A17C6C]">
                    <strong>Avoid if:</strong> {n.avoidIf}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Places to Eat & Coffee */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
            <Utensils className="w-4 h-4" />
            <span>Honest Gastronomy</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#434338] italic">
            Where I'd Eat in {destination.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.placesToEat.map((place) => (
              <div key={place.name} className="p-6 rounded-3xl bg-white border border-[#E9E5D9] shadow-xs space-y-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#8D8D7E]">
                  {place.neighborhood}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#434338]">{place.name}</h3>
                <p className="text-xs text-[#8FA18B] font-medium">{place.type}</p>
                <p className="text-xs text-[#5A5A40] leading-relaxed pt-2 border-t border-[#F1EDE4]">
                  {place.whySpecial}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 11. Verified Traveler Voices */}
        {relevantTravelerVoices.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-[#8FA18B]" />
              <span>Independent Community Research</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#434338] italic">
              What Travelers Keep Saying About {destination.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relevantTravelerVoices.map((voice) => (
                <TravelerVoiceCard key={voice.id} voice={voice} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
