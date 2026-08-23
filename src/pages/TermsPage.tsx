import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeft } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8">
      <SEOHead
        title="Terms of Service — TravelHideouts"
        description="Terms and conditions for using TravelHideouts discovery platform."
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
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#242220]">
          Terms of Service
        </h1>
        <p className="text-xs text-[#8C847B]">
          Effective date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      <div className="p-6 md:p-8 rounded-3xl bg-white border border-[#E9E1D2] space-y-6 text-sm md:text-base text-[#474038] leading-relaxed">
        <p>
          Welcome to TravelHideouts (travelhideouts.com). By accessing or using our website, you agree to comply with and be bound by these terms.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          1. Editorial Content & Accuracy
        </h2>
        <p>
          All guides, reviews, and recommendations are provided for informational and editorial purposes in good faith. While we strive to ensure opening hours, transit routes, and hotel details are accurate at the time of publication, travel conditions and property policies change. Travelers should independently verify reservations and seasonal schedules.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          2. External Booking Partnerships
        </h2>
        <p>
          TravelHideouts is an independent editorial publisher, not a travel agency or booking platform. Any transactions, cancellations, or bookings made through third-party partners (such as Stay22 or airline aggregators) are strictly between you and the respective partner.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          3. Intellectual Property
        </h2>
        <p>
          The essays, layout, brand name, and proprietary editorial classifications on TravelHideouts are protected by intellectual property laws.
        </p>
      </div>
    </div>
  );
};
