import React from 'react';
import { GUIDES } from '../data/guides';
import { DESTINATIONS } from '../data/destinations';
import { TRAVELER_VOICES } from '../data/travelerVoices';
import { TravelerVoiceCard } from '../components/TravelerVoiceCard';
import { AuthorNotice } from '../components/AuthorNotice';
import { SEOHead } from '../components/SEOHead';
import { Clock, ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Lightbulb } from 'lucide-react';

interface GuideDetailPageProps {
  id: string;
}

export const GuideDetailPage: React.FC<GuideDetailPageProps> = ({ id }) => {
  const guide = GUIDES.find(g => g.id === id || g.slug === id) || GUIDES[0];
  const destination = DESTINATIONS.find(d => d.id === guide.destinationId);
  const destinationName = destination ? destination.name : (guide.destinationId || 'Curated Travel');
  const relevantVoices = TRAVELER_VOICES.filter(tv => tv.location.toLowerCase().includes(destinationName.toLowerCase())).slice(0, 2);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 space-y-12">
      <SEOHead
        title={`${guide.title} — TravelHideouts Guides`}
        description={guide.subtitle}
        image={guide.heroImage}
        type="article"
      />

      <div>
        <a
          href="#/guides"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8FA18B] hover:text-[#434338] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all Guides</span>
        </a>
      </div>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-[#8D8D7E] font-medium">
          <span className="px-3 py-1 rounded-full bg-[#F1EDE4] text-[#434338] font-bold uppercase tracking-wider text-[10px] border border-[#E9E5D9]">
            {destinationName}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#8FA18B]" /> {guide.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#434338] leading-tight">
          {guide.title}
        </h1>

        <p className="text-lg md:text-xl text-[#5A5A40] font-serif italic">
          "{guide.subtitle}"
        </p>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[32px] overflow-hidden bg-[#F1EDE4] border border-[#E9E5D9] shadow-xs">
        <img
          src={guide.heroImage || guide.image || 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80'}
          alt={guide.title}
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (target.src !== 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80') {
              target.src = 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80';
            }
          }}
          className="w-full h-full object-cover"
        />
      </div>

      <AuthorNotice />

      {/* Guide Intro */}
      <div className="p-6 md:p-8 rounded-[28px] bg-white border border-[#E9E5D9] text-[#434338] text-base md:text-[17px] leading-relaxed font-sans shadow-xs">
        {guide.intro || guide.excerpt}
      </div>

      {/* Guide Sections */}
      <div className="space-y-12">
        {guide.sections.map((sec, idx) => (
          <section key={idx} className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#434338] pb-2 border-b border-[#E9E5D9]">
              {sec.title || sec.heading}
            </h2>

            {Array.isArray(sec.content || sec.body) ? (
              ((sec.content || sec.body) as string[]).map((p, pIdx) => (
                <p key={pIdx} className="text-base text-[#434338] leading-relaxed">
                  {p}
                </p>
              ))
            ) : (
              <p className="text-base text-[#434338] leading-relaxed">
                {(sec.content || sec.body) as string}
              </p>
            )}

            {sec.tips && sec.tips.length > 0 && (
              <div className="p-5 rounded-[24px] bg-white border border-[#E9E5D9] space-y-2 shadow-xs">
                <span className="text-xs font-bold text-[#8FA18B] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-[#D48166]" /> Key Recommendations
                </span>
                <ul className="space-y-2 text-sm text-[#5A5A40]">
                  {sec.tips.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-[#8FA18B] font-bold">•</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Field Checklist & Practical Notes */}
      {guide.femaleTravelChecklist && guide.femaleTravelChecklist.length > 0 && (
        <div className="p-7 md:p-8 rounded-[28px] bg-[#FAF8F3] border border-[#E9E5D9] shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
            <CheckCircle2 className="w-4 h-4 text-[#8FA18B]" />
            <span>Essential Field Checklist & Safety Notes</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-[#434338]">
            Practical Essentials for {destinationName}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
            {guide.femaleTravelChecklist.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-[#E9E5D9] text-xs text-[#5A5A40] flex items-start gap-3 shadow-2xs">
                <span className="w-5 h-5 rounded-full bg-[#8FA18B]/15 text-[#8FA18B] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Traveler Voices */}
      {relevantVoices.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-[#E9E5D9]">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#D48166]" />
            <span>Community Context for this Destination</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relevantVoices.map(voice => (
              <TravelerVoiceCard key={voice.id} voice={voice} />
            ))}
          </div>
        </section>
      )}

      {/* Destination Link Footer */}
      {destination && (
        <div className="p-6 rounded-[28px] bg-white border border-[#E9E5D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div>
            <span className="text-xs text-[#8FA18B] font-bold uppercase tracking-wider block">
              Complete City Guide
            </span>
            <h4 className="font-serif font-bold text-xl text-[#434338]">
              Explore all of {destination.name}, {destination.country}
            </h4>
          </div>
          <a
            href={`#/destinations/${destination.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-full bg-[#8FA18B] text-white hover:bg-[#7C8E78] transition-colors shrink-0"
          >
            <span>City Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </article>
  );
};
