import React, { useState } from 'react';
import { DESTINATIONS } from '../data/destinations';
import { HIDEOUTS } from '../data/hideouts';
import { STAYS } from '../data/stays';
import { STORIES } from '../data/stories';
import { GUIDES } from '../data/guides';
import { DEALS } from '../data/deals';
import { HideoutCard } from '../components/HideoutCard';
import { StayCard } from '../components/StayCard';
import { TravelerVoiceSection } from '../components/TravelerVoiceSection';
import { AuthorNotice } from '../components/AuthorNotice';
import { SEOHead } from '../components/SEOHead';
import { AffiliateCTA } from '../components/AffiliateCTA';
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
  Calendar
} from 'lucide-react';

interface HomePageProps {
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ savedIds, onToggleSave }) => {
  const [activeHideoutCategory, setActiveHideoutCategory] = useState<string>('All');

  const categories = ['All', 'Boutique', 'Mountain', 'Romantic', 'Solo-Friendly', 'City', 'Hidden Gems'];

  const filteredHideouts = activeHideoutCategory === 'All'
    ? HIDEOUTS.slice(0, 6)
    : HIDEOUTS.filter(h => h.category === activeHideoutCategory).slice(0, 6);

  const featuredStays = STAYS.slice(0, 3);
  const featuredStories = STORIES.slice(0, 3);
  const featuredGuides = GUIDES.slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      <SEOHead
        title="TravelHideouts — Discover places worth going."
        description="Curated hideouts, atmospheric boutique stays, honest city guides, and verified traveler community voices. Selected by one experienced female traveler."
      />

      {/* 1. Atmospheric Hero Section */}
      <section className="relative min-h-[75vh] md:min-h-[82vh] flex items-center justify-center bg-[#2B2F2A] text-white overflow-hidden">
        {/* Background Image with warm natural grading */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=2000&q=85"
            alt="Warm sunlit terracotta rooftops and quiet balconies"
            className="w-full h-full object-cover opacity-50 scale-105 animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#262A25] via-black/35 to-black/45" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-widest font-semibold mb-6 animate-in slide-in-from-bottom-3 duration-500">
            <Sparkles className="w-3.5 h-3.5 text-[#8FA18B]" />
            <span>Curated Travel Discovery</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#F9F7F2] leading-[1.1] mb-6 italic">
            Find Your Next Hideout
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#EAE6DC] font-light max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
            The places I discover, love, and think are worth knowing about.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#/hideouts"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#8FA18B] text-white hover:bg-[#7C8E78] text-sm md:text-base font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Hideouts</span>
            </a>

            <a
              href="#/destinations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F9F7F2] backdrop-blur-md border border-white/25 text-sm md:text-base font-medium transition-all"
            >
              <span>Browse Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Personal Introduction Section (The Woman Behind TravelHideouts) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-white border border-[#E9E5D9] p-8 md:p-12 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F1EDE4] border border-[#E9E5D9]">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
                alt="Founder and travel editor of TravelHideouts"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-white text-[11px] text-center font-medium">
                Founder & Travel Editor
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
                <Heart className="w-4 h-4 text-[#D48166]" />
                <span>The Editorial Ethos</span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#434338] leading-tight italic">
                “Hi, I'm the woman behind TravelHideouts.”
              </h2>

              <p className="text-base md:text-[17px] text-[#434338] leading-relaxed font-sans">
                I built TravelHideouts because the internet is flooded with two extremes: influencer diaries that offer little practical help, and giant corporate booking aggregators listing 10,000 interchangeable hotels.
              </p>

              <p className="text-sm md:text-base text-[#5A5A40] leading-relaxed">
                Here, I share the quiet fincas, light-filled attic lofts, and residential quarters that make traveling feel peaceful, authentic, and restorative. I combine my own observations with candid, verified research from traveler communities so you can plan trips with total confidence.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#5A5A40]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8FA18B]" /> Zero sponsored fluff
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8FA18B]" /> Real community sentiments
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8FA18B]" /> Transparent affiliate model
                </span>
              </div>

              <div className="pt-2">
                <a
                  href="#/about"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#8FA18B] hover:text-[#434338] hover:underline"
                >
                  <span>Read our full story & trust manifesto</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <AuthorNotice />
        </div>
      </section>

      {/* 3. Latest Hideouts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest mb-1.5">
              <Compass className="w-4 h-4 text-[#8FA18B]" />
              <span>Curated Discoveries</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#434338]">
              Latest Hideouts
            </h2>
            <p className="text-[#5A5A40] text-sm md:text-base max-w-2xl mt-1">
              Atmospheric retreats, restored fincas, and secret city ateliers chosen for their character, acoustic quiet, and sense of place.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveHideoutCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                  activeHideoutCategory === cat
                    ? 'bg-[#434338] text-[#F9F7F2] border-[#434338] font-bold shadow-xs'
                    : 'bg-white text-[#5A5A40] border-[#E9E5D9] hover:bg-[#F1EDE4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredHideouts.map((hideout) => (
            <HideoutCard
              key={hideout.id}
              hideout={hideout}
              isSaved={savedIds.includes(hideout.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#/hideouts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F1EDE4] text-[#434338] hover:bg-[#E3DDCF] text-sm font-semibold transition-colors border border-[#E9E5D9]"
          >
            <span>View all hideouts across 11 categories</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 4. Traveler Voices Section (Real Community Intelligence) */}
      <section className="bg-[#F1EDE4] border-y border-[#E9E5D9] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TravelerVoiceSection
            title="Traveler Voices"
            subtitle="Verified community perspectives from Reddit, Medium, and independent travel forums. We balance glowing praise with honest caveats."
            limit={3}
            showFilters={true}
          />
        </div>
      </section>

      {/* 5. Destinations Worth Exploring */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest mb-1.5">
              <MapPin className="w-4 h-4 text-[#8FA18B]" />
              <span>City & Coastal Guides</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#434338]">
              Destinations Worth Exploring
            </h2>
            <p className="text-[#5A5A40] text-sm md:text-base max-w-xl mt-1">
              Curated neighborhood guides with our candid "Where I'd Stay" and "What I'd Skip" breakdowns.
            </p>
          </div>

          <a
            href="#/destinations"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8FA18B] hover:text-[#434338] hover:underline"
          >
            <span>All 10 destinations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.slice(0, 4).map((dest) => (
            <a
              key={dest.id}
              href={`#/destinations/${dest.id}`}
              className="group rounded-[28px] overflow-hidden bg-white border border-[#E9E5D9] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F1EDE4]">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3.5 left-3.5 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-white/80 block font-semibold">
                    {dest.country}
                  </span>
                  <h3 className="text-2xl font-serif font-bold leading-none">
                    {dest.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#5A5A40] line-clamp-2 leading-relaxed mb-3">
                  {dest.blurb}
                </p>
                <div className="pt-2 border-t border-[#E9E5D9] flex items-center justify-between text-xs text-[#8FA18B] font-semibold">
                  <span>Where to stay & eat</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 6. Stays Worth Knowing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest mb-1.5">
              <Coffee className="w-4 h-4 text-[#8FA18B]" />
              <span>Curated Accommodation</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#434338]">
              Stays Worth Knowing
            </h2>
            <p className="text-[#5A5A40] text-sm md:text-base max-w-xl mt-1">
              Boutique hotels and guesthouses evaluated on acoustic quiet, neighborhood warmth, and design integrity.
            </p>
          </div>

          <a
            href="#/stays"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8FA18B] hover:text-[#434338] hover:underline"
          >
            <span>Explore all stays</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="space-y-6">
          {featuredStays.map((stay) => (
            <StayCard key={stay.id} stay={stay} />
          ))}
        </div>
      </section>

      {/* 7. Stories & Guides Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Stories Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E9E5D9]">
              <div>
                <span className="text-xs font-bold text-[#8FA18B] uppercase tracking-widest block mb-0.5">
                  Editorial Essays
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#434338]">
                  Stories
                </h3>
              </div>
              <a href="#/stories" className="text-xs font-semibold text-[#8FA18B] hover:text-[#434338] hover:underline">
                View all stories →
              </a>
            </div>

            <div className="space-y-4">
              {featuredStories.map((story) => (
                <a
                  key={story.id}
                  href={`#/stories/${story.id}`}
                  className="group block p-4 rounded-[24px] bg-white border border-[#E9E5D9] hover:border-[#8FA18B] transition-all shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={story.heroImage}
                      alt={story.title}
                      className="w-20 h-20 rounded-2xl object-cover shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-[#8D8D7E] mb-1">
                        <span>{story.readTime}</span>
                        <span>·</span>
                        <span>{story.date}</span>
                      </div>
                      <h4 className="font-serif font-bold text-lg text-[#434338] group-hover:text-[#8FA18B] transition-colors leading-snug mb-1">
                        {story.title}
                      </h4>
                      <p className="text-xs text-[#5A5A40] line-clamp-2 leading-relaxed">
                        {story.excerpt}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Guides Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E9E5D9]">
              <div>
                <span className="text-xs font-bold text-[#8FA18B] uppercase tracking-widest block mb-0.5">
                  Practical Intelligence
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#434338]">
                  Guides
                </h3>
              </div>
              <a href="#/guides" className="text-xs font-semibold text-[#8FA18B] hover:text-[#434338] hover:underline">
                View all guides →
              </a>
            </div>

            <div className="space-y-4">
              {featuredGuides.map((guide) => (
                <a
                  key={guide.id}
                  href={`#/guides/${guide.id}`}
                  className="group block p-4 rounded-[24px] bg-white border border-[#E9E5D9] hover:border-[#8FA18B] transition-all shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={guide.heroImage}
                      alt={guide.title}
                      className="w-20 h-20 rounded-2xl object-cover shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-[#8D8D7E] mb-1">
                        <BookOpen className="w-3 h-3 text-[#8FA18B]" />
                        <span>{guide.readTime}</span>
                      </div>
                      <h4 className="font-serif font-bold text-lg text-[#434338] group-hover:text-[#8FA18B] transition-colors leading-snug mb-1">
                        {guide.title}
                      </h4>
                      <p className="text-xs text-[#5A5A40] line-clamp-2 leading-relaxed">
                        {guide.subtitle}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Worth Booking (Deals Worth Knowing About) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-[#F1EDE4] border border-[#E9E5D9] p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest mb-1">
                <Calendar className="w-4 h-4 text-[#D48166]" />
                <span>Seasonal Opportunities</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#434338]">
                Worth Booking
              </h2>
              <p className="text-xs md:text-sm text-[#5A5A40] mt-1 max-w-xl">
                We don't publish coupon codes. We highlight genuine seasonal sweet spots where shoulder-season pricing aligns with ideal travel weather.
              </p>
            </div>

            <a
              href="#/deals"
              className="text-xs font-semibold px-4 py-2 rounded-full border border-[#E9E5D9] bg-white text-[#434338] hover:bg-[#F9F7F2] transition-colors self-start md:self-auto shadow-xs"
            >
              See all value windows
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEALS.slice(0, 2).map((deal) => (
              <div
                key={deal.id}
                className="p-5 rounded-[24px] bg-white border border-[#E9E5D9] flex flex-col justify-between gap-4 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8FA18B] mb-1">
                    <span className="font-bold">{deal.destinationName}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F1EDE4] text-[#434338] font-medium border border-[#E9E5D9]">{deal.category}</span>
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#434338] mb-2">
                    {deal.title}
                  </h4>
                  <p className="text-xs text-[#5A5A40] leading-relaxed mb-3">
                    {deal.whyWorthBooking}
                  </p>
                  <div className="text-xs text-[#5A5A40] bg-[#F1EDE4] p-3 rounded-2xl border border-[#E9E5D9]">
                    <strong className="text-[#434338]">Transparent Note:</strong> {deal.transparentValueNote}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#8D8D7E] font-medium">Window: {deal.seasonalContext}</span>
                  <AffiliateCTA
                    label="Check availability"
                    itemName={deal.stayOrExperienceName}
                    destination={deal.destinationName}
                    explicitUrl={deal.affiliateUrl}
                    size="sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
