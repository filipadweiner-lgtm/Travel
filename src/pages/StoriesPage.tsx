import React from 'react';
import { STORIES } from '../data/stories';
import { SEOHead } from '../components/SEOHead';
import { AuthorNotice } from '../components/AuthorNotice';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';

export const StoriesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      <SEOHead
        title="Stories — TravelHideouts"
        description="Editorial essays combining personal observations, quiet destination discoveries, and traveler lessons."
      />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
          <BookOpen className="w-4 h-4 text-[#7A5B46]" />
          <span>Editorial Essays</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#242220] leading-tight">
          Stories & Observations
        </h1>
        <p className="text-[#5F574E] text-base md:text-lg leading-relaxed font-sans">
          This is not a chronological diary. These are thoughtful editorial essays exploring how to travel with more quiet, why staying outside city centers unlocks real culture, and how eight thoughtful hotel rooms will always beat eight hundred.
        </p>
      </div>

      <AuthorNotice />

      {/* Featured Lead Story */}
      <div className="rounded-3xl overflow-hidden bg-white border border-[#E9E1D2] shadow-sm hover:shadow-md transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[340px] bg-[#EAE2D5] overflow-hidden">
            <img
              src={STORIES[0].heroImage}
              alt={STORIES[0].title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#8C6D58] font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{STORIES[0].readTime}</span>
                <span>·</span>
                <span>{STORIES[0].date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#242220] leading-snug">
                <a href={`#/stories/${STORIES[0].id}`} className="hover:text-[#66503E] transition-colors">
                  {STORIES[0].title}
                </a>
              </h2>

              <p className="text-sm md:text-base text-[#574F47] leading-relaxed">
                {STORIES[0].excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
              <span className="text-xs text-[#8A8177]">By {STORIES[0].authorName}</span>
              <a
                href={`#/stories/${STORIES[0].id}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[#2E2A26] text-white hover:bg-[#433E38] transition-colors"
              >
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of remaining stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {STORIES.slice(1).map(story => (
          <article
            key={story.id}
            className="rounded-3xl overflow-hidden bg-white border border-[#E9E1D2] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE9DF]">
                <img
                  src={story.heroImage}
                  alt={story.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-6 space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] text-[#8C847B]">
                  <span>{story.readTime}</span>
                  <span>·</span>
                  <span>{story.date}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#242220] leading-snug">
                  <a href={`#/stories/${story.id}`} className="hover:text-[#66503E] transition-colors">
                    {story.title}
                  </a>
                </h3>

                <p className="text-xs text-[#5C544B] line-clamp-3 leading-relaxed">
                  {story.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[#F2ECE1] pt-3 text-xs">
              <span className="text-[#8C8379]">{story.authorName}</span>
              <a
                href={`#/stories/${story.id}`}
                className="font-semibold text-[#66503E] hover:text-[#242220] inline-flex items-center gap-1"
              >
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
