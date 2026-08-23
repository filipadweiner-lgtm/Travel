import React, { useState } from 'react';
import { DESTINATIONS } from '../data/destinations';
import { HIDEOUTS } from '../data/hideouts';
import { STORIES } from '../data/stories';
import { TRAVELER_VOICES } from '../data/travelerVoices';
import { TravelerVoiceCard } from '../components/TravelerVoiceCard';
import { SEOHead } from '../components/SEOHead';
import { AuthorNotice } from '../components/AuthorNotice';
import mileyRochaFounderImg from '../assets/images/miley_eating_berries_1786888166297.jpg';
import campfireHiddenLagoonImg from '../assets/images/cave_lagoon_campfire_1787385919547.jpg';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  MapPin, 
  BookOpen, 
  ShieldCheck, 
  Heart,
  ChevronRight,
  Coffee,
  CheckCircle2,
  Calendar,
  Lightbulb,
  Users,
  Clock
} from 'lucide-react';

interface HomePageProps {
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ savedIds, onToggleSave }) => {
  const featuredStory = STORIES[0];
  const latestStories = STORIES.slice(1, 5);
  const allHiddenStories = DESTINATIONS.flatMap(d => (d.hiddenStories || []).map(hs => ({ ...hs, destinationName: d.name, destinationId: d.id }))).slice(0, 6);
  const allDidYouKnow = DESTINATIONS.flatMap(d => (d.didYouKnow || []).map(dyk => ({ ...dyk, destinationName: d.name, destinationId: d.id }))).slice(0, 6);

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      <SEOHead
        title="TravelHideouts — Travel Stories Worth Saving"
        description="Curated travel stories, hidden places, and mindful travel guides selected for curious travelers."
      />

      {/* ========================================================================= */}
      {/* 1. Atmospheric Hero Section: Miley in firelit cave during thunderstorm */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] sm:min-h-[88vh] md:min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center bg-[#151914] text-white overflow-hidden">
        {/* Background: Traveler sitting by campfire inside cave overlooking turquoise hidden lagoon */}
        <div className="absolute inset-0 z-0">
          <img
            src={campfireHiddenLagoonImg}
            alt="Traveler sitting beside a cozy campfire inside a mossy cave overlooking an emerald lagoon, misty peaks, and ancient ruins"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-100 md:scale-105 animate-in fade-in duration-1000 brightness-105 contrast-[1.03]"
          />
          {/* Multi-stop gradient ensuring text legibility while letting the fire glow and storm mood shine through */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#151914]/90 via-black/25 to-black/35" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/45 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/40 hover:bg-black/50 backdrop-blur-md border border-white/20 text-[#E2EBDD] text-[11px] sm:text-xs uppercase tracking-widest font-semibold mb-5 sm:mb-6 animate-in slide-in-from-bottom-3 duration-500 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#8FA18B]" />
            <span>Adventure &amp; Discovery</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#F9F7F2] leading-[1.1] mb-5 sm:mb-6 italic drop-shadow-md">
            Travel Stories Worth Saving
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#EAE6DC] font-light max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-sans drop-shadow-sm px-2">
            Stories about places you didn't know you wanted to visit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
            <a
              href="/stories"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#8FA18B] hover:bg-[#7C8E78] active:scale-98 text-white text-sm md:text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Stories</span>
            </a>

            <a
              href="/destinations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-black/35 hover:bg-black/50 active:scale-98 text-[#F9F7F2] backdrop-blur-md border border-white/30 hover:border-white/50 text-sm md:text-base font-medium transition-all shadow-md"
            >
              <span>Explore Countries</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. Featured Story: Large Visual Card with Curiosity Hook */}
      {/* ========================================================================= */}
      {featuredStory && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-white border border-[#E9E5D9] overflow-hidden shadow-xs hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#F1EDE4]">
                <img
                  src={featuredStory.heroImage}
                  alt={featuredStory.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover min-h-[320px] lg:min-h-[460px]"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/20">
                  Featured Story · {featuredStory.category || 'Road Trips'}
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8FA18B] uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredStory.readTime}</span>
                    <span>·</span>
                    <span>{featuredStory.date}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#434338] leading-tight italic">
                    {featuredStory.title}
                  </h2>

                  <p className="font-serif text-base sm:text-lg text-[#8FA18B] italic">
                    "{featuredStory.subtitle}"
                  </p>

                  <p className="text-sm sm:text-base text-[#5A5A40] leading-relaxed">
                    {featuredStory.curiosityHook || featuredStory.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E9E5D9] flex items-center justify-between">
                  <div className="text-xs text-[#8D8D7E]">
                    By <span className="font-semibold text-[#434338]">{featuredStory.authorName || 'Elena Rostova'}</span>
                  </div>

                  <a
                    href={`/stories/${featuredStory.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8FA18B] hover:bg-[#7C8E78] text-white text-xs font-semibold transition-all shadow-xs"
                  >
                    <span>Read story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 3. Explore by Country (9 Countries with Emotional Taglines) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E9E5D9] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
              <Compass className="w-4 h-4" />
              <span>Country Portals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#434338] italic">
              Explore by Country
            </h2>
          </div>
          <p className="text-xs text-[#5A5A40] max-w-sm">
            Curated country guides with emotional perspectives, hidden stories, and verified travel facts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => (
            <a
              key={dest.id}
              href={`/destinations/${dest.id}`}
              className="group rounded-3xl bg-white border border-[#E9E5D9] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F1EDE4]">
                <img
                  src={dest.heroImage || dest.image}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                  {dest.country}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow space-y-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#434338] group-hover:text-[#8FA18B] transition-colors italic">
                    {dest.name}
                  </h3>
                  <p className="font-serif text-xs text-[#8FA18B] italic mt-0.5">
                    "{dest.tag}"
                  </p>
                  <p className="text-xs text-[#5A5A40] leading-relaxed mt-2 line-clamp-2">
                    {dest.blurb}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E9E5D9] flex items-center justify-between text-xs text-[#8FA18B] font-bold">
                  <span>Explore guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. Signature Hidden Stories: Strange Traditions & Forgotten History */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E9E5D9] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#D48166]" />
              <span>Signature Oddities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#434338] italic">
              Hidden Stories Across 9 Destinations
            </h2>
          </div>
          <a
            href="/hidden-stories"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8FA18B] hover:text-[#7C8E78]"
          >
            <span>View all stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allHiddenStories.map((story) => (
            <div
              key={story.id}
              className="p-6 rounded-3xl bg-white border border-[#E9E5D9] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#8FA18B] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FAF6F0] text-[#D48166] text-[10px] font-bold uppercase tracking-wider">
                    {story.category}
                  </span>
                  <span className="text-[10px] text-[#8D8D7E] uppercase font-semibold">
                    {story.destinationName}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#434338] leading-snug italic">
                  {story.title}
                </h3>
                <p className="text-xs text-[#5A5A40] leading-relaxed mt-2">
                  {story.teaser}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E9E5D9] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#8D8D7E]">{story.readTime || '5 min read'}</span>
                <a
                  href={`/destinations/${story.destinationId}`}
                  className="font-bold text-[#8FA18B] hover:text-[#7C8E78] inline-flex items-center gap-1"
                >
                  <span>Read lore</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. Things You Didn't Know: Verified Travel Facts */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-8 sm:p-10 rounded-[32px] bg-[#FAF8F3] border border-[#E9E5D9] space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
            <Lightbulb className="w-4 h-4 text-[#D48166]" />
            <span>Curious Realities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#434338] italic">
            Things You Probably Didn't Know
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allDidYouKnow.map((dyk, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-[#E9E5D9] shadow-xs space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8FA18B] block mb-1">
                    {dyk.destinationName}
                  </span>
                  <p className="font-serif text-base font-bold text-[#434338] leading-snug">
                    "{dyk.fact}"
                  </p>
                  <p className="text-xs text-[#5A5A40] leading-relaxed mt-2">
                    {dyk.context}
                  </p>
                </div>
                {dyk.source && (
                  <div className="pt-2 text-[10px] text-[#8D8D7E] italic border-t border-[#F1EDE4]">
                    Source: {dyk.source}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. Female Travel, Solo Safety & Girls' Trips Guidance */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-white border border-[#E9E5D9] p-8 sm:p-10 lg:p-12 shadow-xs space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F1EDE4] border border-[#E9E5D9]">
              <img
                src={mileyRochaFounderImg}
                alt="Miley Rocha, Founder of TravelHideouts"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-white text-[11px] text-center font-medium">
                Miley Rocha · Solo Travel &amp; Editorial Curator
              </div>
            </div>

            <div className="md:col-span-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-[#8FA18B]" />
                <span>Female Travel Guidance</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#434338] leading-tight italic">
                “Traveling solo as a woman should feel restorative, not anxious.”
              </h2>

              <p className="text-sm sm:text-base text-[#5A5A40] leading-relaxed">
                Whether you're taking a solo train journey through Switzerland's car-free villages, exploring night food markets in Kyoto, or planning a girls' trip to the coastal saunas of Norway's Lofoten Islands, our guides feature verified notes on arrival logistics, safe well-lit quarters, and respectful local customs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E9E5D9] space-y-1">
                  <div className="text-xs font-bold text-[#434338] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8FA18B]" />
                    <span>Solo Safety Verified</span>
                  </div>
                  <p className="text-xs text-[#5A5A40]">
                    Every country guide includes neighborhood-by-neighborhood safety notes and transit tips.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F3] border border-[#E9E5D9] space-y-1">
                  <div className="text-xs font-bold text-[#434338] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D48166]" />
                    <span>Girls' Trip Ideas</span>
                  </div>
                  <p className="text-xs text-[#5A5A40]">
                    Curated itineraries for thermal baths, scenic coastal drives, and farm-to-table dining.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. Latest Stories Grid */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E9E5D9] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
              <BookOpen className="w-4 h-4" />
              <span>Editorial Archive</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#434338] italic">
              Latest Stories
            </h2>
          </div>
          <a
            href="/stories"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8FA18B] hover:text-[#7C8E78]"
          >
            <span>All stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestStories.map((story) => (
            <a
              key={story.id}
              href={`/stories/${story.id}`}
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
                  {story.category || 'Travel Story'}
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow space-y-2">
                <div>
                  <div className="text-[10px] text-[#8D8D7E] uppercase font-semibold">
                    {story.readTime} · {story.date}
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#434338] group-hover:text-[#8FA18B] transition-colors leading-snug italic mt-1">
                    {story.title}
                  </h3>
                  <p className="text-xs text-[#5A5A40] leading-relaxed line-clamp-2 mt-1">
                    {story.curiosityHook || story.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E9E5D9] flex items-center justify-between text-xs text-[#8FA18B] font-bold">
                  <span>Read story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. Traveler Voices: Community Research */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E9E5D9] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-[#8FA18B]" />
              <span>Independent Research</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#434338] italic">
              What Real Travelers Are Saying
            </h2>
          </div>
          <p className="text-xs text-[#5A5A40] max-w-sm">
            Distilled from verified traveler community forums, independent discussions, and firsthand trips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAVELER_VOICES.slice(0, 3).map((voice) => (
            <TravelerVoiceCard key={voice.id} voice={voice} />
          ))}
        </div>
      </section>
    </div>
  );
};
