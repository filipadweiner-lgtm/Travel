import React, { useState, useEffect } from 'react';
import { STORIES } from '../data/stories';
import { SEOHead } from '../components/SEOHead';
import { AuthorNotice } from '../components/AuthorNotice';
import { BookOpen, ArrowRight, Clock, Sparkles, Filter, Lightbulb } from 'lucide-react';

interface StoriesPageProps {
  defaultCategory?: string;
}

const CATEGORIES = [
  'All',
  'Hidden Places',
  'Untold Stories',
  'Did You Know?',
  'Local Traditions',
  'Nature',
  'Food',
  'Culture',
  'Road Trips',
  'Solo Travel',
  'Girls\' Trips',
  'Travel Tips',
  'Seasonal Travel'
];

export const StoriesPage: React.FC<StoriesPageProps> = ({ defaultCategory = 'All' }) => {
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);

  useEffect(() => {
    if (defaultCategory) {
      setActiveCategory(defaultCategory);
    }
  }, [defaultCategory]);

  const filteredStories = activeCategory === 'All'
    ? STORIES
    : STORIES.filter(st => st.category === activeCategory || (activeCategory === 'Hidden Places' && st.isHiddenStory));

  const featuredStory = STORIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      <SEOHead
        title="Travel Stories Worth Saving — Travel Hideouts"
        description="Curated essays, hidden places, and untold stories across 9 countries for mindful travelers."
      />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
          <BookOpen className="w-4 h-4" />
          <span>Curated Travel Stories</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#434338] leading-tight italic">
          Stories About Places You Didn't Know You Wanted to Visit
        </h1>
        <p className="text-[#5A5A40] text-base md:text-lg leading-relaxed font-sans">
          This is not an influencer diary. These are curiosity-driven travel essays examining strange architecture, unhurried rail routes, and quiet corners of the world worth saving.
        </p>
      </div>

      <AuthorNotice />

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#8FA18B] text-white shadow-xs'
                : 'bg-white text-[#5A5A40] hover:bg-[#F1EDE4] border border-[#E9E5D9]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Lead Story (shown when All is selected) */}
      {activeCategory === 'All' && featuredStory && (
        <div className="rounded-3xl overflow-hidden bg-white border border-[#E9E5D9] shadow-xs hover:shadow-md transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[340px] bg-[#F1EDE4] overflow-hidden">
              <img
                src={featuredStory.heroImage}
                alt={featuredStory.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/20">
                {featuredStory.category || 'Road Trips'}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#8FA18B] font-semibold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featuredStory.readTime}</span>
                  <span>·</span>
                  <span>{featuredStory.date}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#434338] leading-snug italic">
                  <a href={`/stories/${featuredStory.id}/`} className="hover:text-[#8FA18B] transition-colors">
                    {featuredStory.title}
                  </a>
                </h2>

                <p className="text-sm md:text-base text-[#5A5A40] leading-relaxed">
                  {featuredStory.curiosityHook || featuredStory.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9E5D9] flex items-center justify-between">
                <span className="text-xs text-[#8D8D7E]">By {featuredStory.authorName || 'Miley Rocha'}</span>
                <a
                  href={`/stories/${featuredStory.id}/`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-full bg-[#8FA18B] text-white hover:bg-[#7C8E78] transition-colors"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStories.map(story => (
          <article
            key={story.id}
            className="rounded-3xl overflow-hidden bg-white border border-[#E9E5D9] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F1EDE4]">
                <img
                  src={story.heroImage}
                  alt={story.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                  {story.category || 'Untold Stories'}
                </div>
              </div>

              <div className="p-6 space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] text-[#8D8D7E] uppercase font-semibold">
                  <span>{story.readTime}</span>
                  <span>·</span>
                  <span>{story.date}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#434338] leading-snug italic">
                  <a href={`/stories/${story.id}/`} className="hover:text-[#8FA18B] transition-colors">
                    {story.title}
                  </a>
                </h3>

                <p className="text-xs text-[#5A5A40] line-clamp-3 leading-relaxed mt-1">
                  {story.curiosityHook || story.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[#E9E5D9] pt-3 text-xs">
              <span className="text-[#8D8D7E] text-[11px]">{story.authorName || 'Elena Rostova'}</span>
              <a
                href={`/stories/${story.id}/`}
                className="font-bold text-[#8FA18B] hover:text-[#7C8E78] inline-flex items-center gap-1"
              >
                <span>Read story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
