import React from 'react';
import { STORIES } from '../data/stories';
import { HIDEOUTS } from '../data/hideouts';
import { DESTINATIONS } from '../data/destinations';
import { TRAVELER_VOICES } from '../data/travelerVoices';
import { TravelerVoiceCard } from '../components/TravelerVoiceCard';
import { HideoutCard } from '../components/HideoutCard';
import { AuthorNotice } from '../components/AuthorNotice';
import { SEOHead } from '../components/SEOHead';
import { Clock, Calendar, ArrowLeft, ArrowRight, Quote, Sparkles } from 'lucide-react';

interface StoryDetailPageProps {
  id: string;
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

export const StoryDetailPage: React.FC<StoryDetailPageProps> = ({
  id,
  savedIds,
  onToggleSave
}) => {
  const story = STORIES.find(st => st.id === id || st.slug === id) || STORIES[0];

  const relatedHideouts = story.relatedHideoutIds
    ? HIDEOUTS.filter(h => story.relatedHideoutIds?.includes(h.id))
    : [];

  const relatedDestinations = story.relatedDestinationIds
    ? DESTINATIONS.filter(d => story.relatedDestinationIds?.includes(d.id))
    : [];

  const relevantVoices = story.travelerVoiceIds
    ? TRAVELER_VOICES.filter(tv => story.travelerVoiceIds?.includes(tv.id))
    : [];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 space-y-12">
      <SEOHead
        title={`${story.title} — TravelHideouts Stories`}
        description={story.excerpt}
        image={story.heroImage}
        type="article"
      />

      <div>
        <a
          href="#/stories"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#66503E] hover:text-[#242220] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Stories</span>
        </a>
      </div>

      {/* Header */}
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 text-xs text-[#8C6D58] font-medium">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {story.readTime}
          </span>
          <span>·</span>
          <span>{story.date}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#242220] leading-tight">
          {story.title}
        </h1>

        <p className="text-lg md:text-xl text-[#595147] font-serif italic max-w-2xl mx-auto">
          "{story.subtitle}"
        </p>

        <div className="pt-2 text-xs text-[#82786D]">
          Written by <strong className="font-semibold text-[#3B342D]">{story.authorName}</strong> ({story.authorRole})
        </div>
      </header>

      {/* Hero Visual */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-[#EAE2D5] border border-[#E0D5C3] shadow-md">
        <img
          src={story.heroImage}
          alt={story.title}
          className="w-full h-full object-cover"
        />
      </div>

      <AuthorNotice />

      {/* Story Intro */}
      <div className="prose prose-lg prose-stone max-w-none">
        <p className="text-lg md:text-xl leading-relaxed text-[#38332E] font-serif italic border-l-2 border-[#8C6D58] pl-6 py-1">
          {story.intro}
        </p>
      </div>

      {/* Visual Sections with Pull Quotes */}
      <div className="space-y-10">
        {story.sections.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            {sec.heading && (
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242220] pt-4">
                {sec.heading}
              </h2>
            )}

            {sec.body.map((p, pIdx) => (
              <p key={pIdx} className="text-base md:text-[17px] text-[#4A423A] leading-relaxed">
                {p}
              </p>
            ))}

            {sec.pullQuote && (
              <div className="my-8 p-6 md:p-8 rounded-2xl bg-[#F6F2EB] border-y border-[#E2D5C2] text-center">
                <Quote className="w-6 h-6 text-[#8C6D58] mx-auto mb-2 opacity-60" />
                <p className="font-serif text-xl md:text-2xl text-[#2C2723] italic leading-snug">
                  "{sec.pullQuote}"
                </p>
              </div>
            )}

            {sec.image && (
              <div className="my-6 rounded-2xl overflow-hidden bg-[#EFE9DE] border border-[#E5DAC8]">
                <img src={sec.image} alt={sec.imageCaption || ''} className="w-full max-h-[420px] object-cover" />
                {sec.imageCaption && (
                  <p className="p-3 text-xs text-[#7A736B] italic text-center bg-[#FAF8F5]">
                    {sec.imageCaption}
                  </p>
                )}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Relevant Traveler Voices if present */}
      {relevantVoices.length > 0 && (
        <div className="pt-10 border-t border-[#E8DFC8] space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Community Perspectives on this Topic</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relevantVoices.map(voice => (
              <TravelerVoiceCard key={voice.id} voice={voice} />
            ))}
          </div>
        </div>
      )}

      {/* Related Hideouts in Story */}
      {relatedHideouts.length > 0 && (
        <div className="pt-10 border-t border-[#E8DFC8] space-y-6">
          <h3 className="text-2xl font-serif font-bold text-[#242220]">
            Hideouts Mentioned in this Story
          </h3>
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
        </div>
      )}

      {/* Related Destinations */}
      {relatedDestinations.length > 0 && (
        <div className="pt-8 border-t border-[#E8DFC8] flex items-center flex-wrap gap-3 text-xs">
          <span className="font-semibold text-[#8C6D58] uppercase tracking-wider">Related Destination Guides:</span>
          {relatedDestinations.map(d => (
            <a
              key={d.id}
              href={`#/destinations/${d.id}`}
              className="px-3.5 py-1.5 rounded-full bg-white border border-[#E0D7C9] text-[#4F473E] hover:bg-[#FAF6F0] font-medium"
            >
              {d.name}, {d.country} →
            </a>
          ))}
        </div>
      )}
    </article>
  );
};
