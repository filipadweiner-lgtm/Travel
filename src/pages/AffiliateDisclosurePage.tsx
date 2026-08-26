import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, ArrowLeft, Heart, CheckCircle2 } from 'lucide-react';
import { AFFILIATE_CONFIG } from '../config/affiliate';

export const AffiliateDisclosurePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8">
      <SEOHead
        title="Affiliate Disclosure & Transparency — Travel Hideouts"
        description="Our complete disclosure regarding affiliate partnerships, commissions, and editorial independence."
      />

      <div>
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#66503E] hover:text-[#242220] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </a>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-[#3C6E4D]" />
          <span>Editorial Ethics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#242220]">
          Affiliate Disclosure & Commercial Transparency
        </h1>
        <p className="text-xs text-[#8C847B]">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      <div className="p-6 md:p-8 rounded-3xl bg-white border border-[#E9E1D2] space-y-6 text-sm md:text-base text-[#474038] leading-relaxed">
        <p>
          At <strong>Travel Hideouts</strong> (travelhideouts.com), we hold honesty, independence, and reader trust as our highest operational values.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          1. How We Earn Income
        </h2>
        <p>
          To fund our travel research, writer time, photography curation, and web hosting without placing intrusive banner ads or paywalls on the site, we participate in selective affiliate marketing programs.
        </p>
        <p>
          This means that when you click on certain links to accommodations, experiences, or flight aggregators (such as Stay22, Travelpayouts, Booking.com, or GetYourGuide) and proceed to make a reservation, we may receive a small referral commission directly from the booking partner.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          2. No Additional Cost to You
        </h2>
        <p>
          These commissions are paid entirely by the partner platform out of their standard operating margin. You pay the exact same price (or often less via aggregated comparison rates) as you would by visiting their platform directly.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          3. Absolute Editorial Independence
        </h2>
        <div className="p-4 rounded-2xl bg-[#F6F8F6] border border-[#DCE8DF] space-y-2 text-xs md:text-sm text-[#274631]">
          <div className="font-semibold flex items-center gap-1.5 text-[#1D3B27]">
            <CheckCircle2 className="w-4 h-4 text-[#3C6E4D]" /> Our Uncompromised Curation Guarantee:
          </div>
          <ul className="list-disc list-inside space-y-1">
            <li>We never accept payment to feature a hotel or stay.</li>
            <li>We do not write sponsored reviews or accept free stays in exchange for positive write-ups.</li>
            <li>If a place has thin walls or noisy streets, we say so explicitly in our "Honest Caveats".</li>
          </ul>
        </div>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          4. Contact Questions
        </h2>
        <p>
          If you have any questions regarding our affiliate partnerships, editorial selection criteria, or technical implementation, please feel free to reach out via our contact page.
        </p>
      </div>
    </div>
  );
};
