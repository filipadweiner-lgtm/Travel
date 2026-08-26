import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { AuthorNotice } from '../components/AuthorNotice';
import mileyRochaFounderImg from '../assets/images/miley_eating_berries_1786888166297.jpg';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  Coffee, 
  MessageSquare, 
  Eye, 
  FileText 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      <SEOHead
        title="About Travel Hideouts — Editorial Manifesto & Author Story"
        description="Learn the story behind Travel Hideouts, how we curate hideouts, our community research methodology, and our affiliate ethics."
      />

      {/* Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
          <Heart className="w-4 h-4 text-[#8C6D58]" />
          <span>Editorial Manifesto</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#242220] leading-tight">
          About Travel Hideouts
        </h1>
        <p className="text-lg text-[#5C544B] font-light leading-relaxed">
          A female-curated travel discovery publication built on real observation, acoustic calm, and verified community intelligence.
        </p>
      </div>

      <AuthorNotice />

      {/* Author Story Box */}
      <section className="rounded-3xl bg-white border border-[#E9E1D2] p-8 md:p-12 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EAE2D5]">
            <img
              src={mileyRochaFounderImg}
              alt="Miley Rocha, Founder and Travel Editor of Travel Hideouts"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-white text-[11px] text-center font-medium">
              Miley Rocha · Founder &amp; Travel Editor
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-wider">
              <span>Meet Miley Rocha</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242220]">
              The Story Behind the Project
            </h2>
            <p className="text-sm md:text-base text-[#4C453E] leading-relaxed">
              I'm Miley Rocha, founder and travel editor of Travel Hideouts. I spent over a decade traveling through European cities, coastal fishing ports, and mountain valleys. Over time, I noticed a frustrating pattern in modern travel media:
            </p>
            <p className="text-sm md:text-base text-[#4C453E] leading-relaxed">
              Standard hotel booking engines give you 5,000 options with no human context, while social media feeds show 5-second aesthetic video clips that hide thin walls, tourist congestion, and disappointing locations.
            </p>
            <p className="text-sm md:text-base text-[#4C453E] leading-relaxed font-serif italic">
              "Travel Hideouts was born to be the antidote: a calm, trustworthy directory of places that feel restorative to stay in."
            </p>
          </div>
        </div>
      </section>

      {/* What I Look For When I Travel */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
            The Curation Filter
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#242220]">
            What Makes a Place a “Hideout”?
          </h2>
          <p className="text-sm text-[#5C544C] leading-relaxed">
            Not every nice hotel qualifies. For a property or quarter to be designated a hideout, it must fulfill our five core standards:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E9E1D2] space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#FAF4EC] text-[#8C6D58] flex items-center justify-center font-bold font-serif text-sm">
              1
            </div>
            <h3 className="font-serif font-bold text-lg text-[#242220]">
              Acoustic Calm & True Quiet
            </h3>
            <p className="text-xs text-[#595147] leading-relaxed">
              We check street traffic, bar noise, and wall insulation. A hideout must allow you to sleep deeply and read without disturbance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E9E1D2] space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#FAF4EC] text-[#8C6D58] flex items-center justify-center font-bold font-serif text-sm">
              2
            </div>
            <h3 className="font-serif font-bold text-lg text-[#242220]">
              Natural Light & Ventilation
            </h3>
            <p className="text-xs text-[#595147] leading-relaxed">
              No windowless basement rooms or dark corridors. We prioritize high ceilings, Juliet balconies, and generous sunlight.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E9E1D2] space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#FAF4EC] text-[#8C6D58] flex items-center justify-center font-bold font-serif text-sm">
              3
            </div>
            <h3 className="font-serif font-bold text-lg text-[#242220]">
              Residential Character
            </h3>
            <p className="text-xs text-[#595147] leading-relaxed">
              Located in living neighborhoods where residents walk dogs and buy morning bread, rather than transient tourist bottlenecks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E9E1D2] space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#FAF4EC] text-[#8C6D58] flex items-center justify-center font-bold font-serif text-sm">
              4
            </div>
            <h3 className="font-serif font-bold text-lg text-[#242220]">
              Independent Authorship
            </h3>
            <p className="text-xs text-[#595147] leading-relaxed">
              Owner-operated guesthouses, boutique farm estates, and architect-renovated apartments with unmistakable individual character.
            </p>
          </div>
        </div>
      </section>

      {/* How Traveler Voices Are Curated */}
      <section className="p-8 md:p-10 rounded-3xl bg-[#FAF6F0] border border-[#E5DAC8] space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
          <MessageSquare className="w-4 h-4 text-[#7A5B46]" />
          <span>Research Methodology</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242220]">
          How Traveler Voices Are Selected
        </h2>
        <p className="text-sm text-[#4E473F] leading-relaxed">
          No single traveler can be everywhere at once. To ensure our recommendations remain grounded and accurate over time, we continuously monitor verified traveler discussions across Reddit (r/solotravel, r/europetravel), independent travel writing on Medium, and verified guest forums.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#4F473E]">
          <div className="p-3.5 rounded-xl bg-white border border-[#E2D7C5]">
            <strong className="text-[#2C2723] block mb-1">1. Authenticity Screening</strong>
            We discard marketing posts, sponsored press trips, and bot reviews.
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-[#E2D7C5]">
            <strong className="text-[#2C2723] block mb-1">2. Balanced Caveats</strong>
            We always include practical trade-offs like steep hills, lack of elevators, or night noise.
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-[#E2D7C5]">
            <strong className="text-[#2C2723] block mb-1">3. Solitary Safety</strong>
            We specifically verify evening atmosphere for solo female travelers.
          </div>
        </div>
      </section>

      {/* Trust & Affiliate Principles */}
      <section id="trust-principles" className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#3C6E4D] uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-[#3C6E4D]" />
          <span>Transparency & Affiliate Ethics</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242220]">
          Our Commercial Model
        </h2>
        <div className="prose prose-stone max-w-none text-sm md:text-base text-[#4C453E] space-y-3 leading-relaxed">
          <p>
            Travel Hideouts is independently operated. We do not accept paid hotel inclusions or sponsored reviews.
          </p>
          <p>
            When you click a booking or flight check link on this site (such as through Stay22 or Travelpayouts), we may earn an affiliate commission at no extra cost to you. This enables us to maintain our research, write extensive guides, and keep the platform completely ad-free.
          </p>
        </div>
      </section>
    </div>
  );
};
