import React from 'react';
import { STORIES } from '../data/stories';
import { HIDEOUTS } from '../data/hideouts';
import { DESTINATIONS } from '../data/destinations';
import { TRAVELER_VOICES } from '../data/travelerVoices';
import { TravelerVoiceCard } from '../components/TravelerVoiceCard';
import { AuthorNotice } from '../components/AuthorNotice';
import { SEOHead } from '../components/SEOHead';
import { PinterestCard } from '../components/PinterestCard';
import { Stay22MapWidget, findStay22Map } from '../components/Stay22MapWidget';
import { 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Quote, 
  Sparkles, 
  Compass, 
  MapPin, 
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  Share2
} from 'lucide-react';

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

  const relatedDestinations = story.relatedDestinationIds
    ? DESTINATIONS.filter(d => story.relatedDestinationIds?.includes(d.id))
    : [];

  const primaryDestination = relatedDestinations[0];

  const primaryDestId = story.relatedDestinationIds?.[0] || primaryDestination?.id;
  const stay22MapConfig = findStay22Map(
    primaryDestId,
    primaryDestination?.name,
    story.tags,
    `${story.title} ${story.slug}`
  );

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 space-y-12">
      <SEOHead
        title={`${story.title} — Travel Hideouts Stories`}
        description={story.excerpt}
        image={story.heroImage}
        type="article"
      />

      <div>
        <a
          href="/stories/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A5A40] hover:text-[#434338] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Stories</span>
        </a>
      </div>

      {/* 1. Header with Curiosity Title & Subtitle */}
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 text-xs text-[#8FA18B] font-semibold uppercase tracking-wider">
          <span className="px-3 py-1 rounded-full bg-[#F1EDE4] text-[#5A5A40] text-[11px]">
            {story.category || 'Untold Stories'}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {story.readTime}
          </span>
          <span>·</span>
          <span>{story.date}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#434338] leading-tight italic">
          {story.title}
        </h1>

        <p className="text-lg md:text-xl text-[#5A5A40] font-serif italic max-w-2xl mx-auto">
          "{story.subtitle}"
        </p>

        <div className="pt-2 text-xs text-[#8D8D7E]">
          Written by <strong className="font-semibold text-[#434338]">{story.authorName || story.author || 'Miley Rocha'}</strong> ({story.authorRole || 'Editorial Lead'})
        </div>
      </header>

      {/* 2. Hero Visual */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-[#F1EDE4] border border-[#E9E5D9] shadow-xs">
        <img
          src={story.heroImage || story.image}
          alt={story.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      <AuthorNotice />

      {/* 3. Curiosity Hook / Observation */}
      {story.curiosityHook && (
        <div className="p-6 md:p-8 rounded-3xl bg-[#FAF8F3] border border-[#E9E5D9] shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
            <Lightbulb className="w-4 h-4 text-[#D48166]" />
            <span>The Curiosity Hook</span>
          </div>
          <p className="text-base md:text-lg font-serif italic text-[#434338] leading-relaxed">
            "{story.curiosityHook}"
          </p>
        </div>
      )}

      {/* 4. Story Body */}
      <div className="prose prose-lg max-w-none text-[#434338] leading-relaxed space-y-6 font-sans">
        {story.content ? (
          story.content.split('\n\n').map((block, idx) => {
            if (block.startsWith('### ')) {
              return (
                <h2 key={idx} className="text-2xl md:text-3xl font-serif font-bold text-[#434338] pt-6 italic">
                  {block.replace('### ', '')}
                </h2>
              );
            }
            if (block.startsWith('- ')) {
              const items = block.split('\n').map(i => i.replace('- ', ''));
              return (
                <ul key={idx} className="space-y-2 pl-4 list-disc text-base text-[#5A5A40]">
                  {items.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="text-base md:text-[17px] text-[#434338] leading-relaxed">
                {block}
              </p>
            );
          })
        ) : (
          <p className="text-base md:text-[17px] text-[#434338] leading-relaxed">
            {story.excerpt}
          </p>
        )}
      </div>

      {/* Interactive Map Widget for Destination Stories */}
      {stay22MapConfig && (
        <Stay22MapWidget
          destinationId={stay22MapConfig.destinationId}
          destinationName={stay22MapConfig.destinationName}
          embedUrl={stay22MapConfig.embedUrl}
          title={stay22MapConfig.defaultTitle}
          subtitle={stay22MapConfig.defaultSubtitle}
        />
      )}

      {/* 5. Editorial Breakdown: Why it Matters, How to Experience, What is Nearby */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#E9E5D9]">
        {story.whyItMatters && (
          <div className="p-6 rounded-3xl bg-white border border-[#E9E5D9] shadow-xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#8FA18B] uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Why It Matters</span>
            </div>
            <p className="text-xs text-[#5A5A40] leading-relaxed">
              {story.whyItMatters}
            </p>
          </div>
        )}

        {story.howToExperience && (
          <div className="p-6 rounded-3xl bg-white border border-[#E9E5D9] shadow-xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#8FA18B] uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>How to Experience It</span>
            </div>
            <p className="text-xs text-[#5A5A40] leading-relaxed">
              {story.howToExperience}
            </p>
          </div>
        )}

        {story.whatIsNearby && (
          <div className="p-6 rounded-3xl bg-white border border-[#E9E5D9] shadow-xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#8FA18B] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>What Is Nearby</span>
            </div>
            <p className="text-xs text-[#5A5A40] leading-relaxed">
              {story.whatIsNearby}
            </p>
          </div>
        )}
      </div>

      {/* 6. Pinterest Save Inspiration Block */}
      <section className="pt-8 border-t border-[#E9E5D9] space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6F0] text-[#D48166] text-xs font-bold uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5" />
            <span>Pin It to Your Travel Board</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#434338] italic">
            Save this Story for Your Next Adventure
          </h3>
          <p className="text-xs text-[#5A5A40] max-w-md mx-auto">
            Click Save below to add this curiosity-driven travel story and vertical visual card directly to your Pinterest boards.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <PinterestCard
              title={story.title}
              subtitle={story.curiosityHook || story.subtitle}
              image={story.pinterestImage || story.heroImage}
              destination={primaryDestination?.name || 'World'}
              category={story.category || 'Untold Stories'}
              storyUrl={`/stories/${story.id}/`}
            />
          </div>
        </div>
      </section>

      {/* 7. Related Destination Guides */}
      {relatedDestinations.length > 0 && (
        <div className="pt-8 border-t border-[#E9E5D9] flex items-center flex-wrap gap-3 text-xs">
          <span className="font-bold text-[#8FA18B] uppercase tracking-wider">Related Country Guides:</span>
          {relatedDestinations.map(d => (
            <a
              key={d.id}
              href={`/destinations/${d.id}/`}
              className="px-4 py-2 rounded-full bg-white border border-[#E9E5D9] text-[#434338] hover:border-[#8FA18B] font-semibold transition-colors inline-flex items-center gap-1.5 shadow-2xs"
            >
              <span>{d.name}, {d.country}</span>
              <ArrowRight className="w-3 h-3 text-[#8FA18B]" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
};
