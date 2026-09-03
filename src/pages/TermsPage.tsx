import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeft } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8">
      <SEOHead
        title="Terms of Service — Travel Hideouts"
        description="Terms and conditions for using Travel Hideouts discovery platform."
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
          Welcome to <strong>Travel Hideouts</strong> (travelhideouts.com). By accessing or using our website, you agree to comply with and be bound by these Terms of Service.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          1. Editorial Content & Travel Information
        </h2>
        <p>
          All guides, reviews, essays, and hideout recommendations are provided for general informational and editorial purposes in good faith. While we strive to ensure opening hours, transit routes, and hotel details are accurate at the time of publication, travel conditions and property policies fluctuate. Travelers should independently verify reservations and seasonal schedules before making non-refundable arrangements.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          2. Third-Party Advertisements & Google AdSense
        </h2>
        <p>
          Travel Hideouts may display advertisements served by third-party advertising networks, including <strong>Google AdSense</strong>. 
          These ads are labeled as advertisements or sponsored items. We do not endorse, guarantee, or make representations regarding the products, services, or claims advertised within automated third-party ad units. Any interactions or transactions with advertisers are solely between you and the advertiser.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          3. Prohibited User Conduct & Invalid Traffic
        </h2>
        <p>
          You agree to use this website only for lawful, personal, non-commercial reading purposes. In accordance with Google AdSense program policies, you are strictly prohibited from:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#474038]">
          <li>Artificially generating impressions or clicks on advertisements through automated scripts, bots, spiders, or click farms.</li>
          <li>Encouraging, soliciting, or incentivizing other users to click on advertisements.</li>
          <li>Scraping, crawling, or extracting content without prior written permission from Travel Hideouts.</li>
          <li>Interfering with website security or attempting unauthorized access to server infrastructure.</li>
        </ul>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          4. External Booking & Affiliate Partnerships
        </h2>
        <p>
          Travel Hideouts is an independent editorial publisher, not a travel agency, tour operator, or booking platform. Any transactions, cancellations, or reservations completed through third-party partners (such as Stay22 or Travelpayouts) are governed exclusively by the terms and policies of those external services.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          5. Intellectual Property & Copyright (DMCA)
        </h2>
        <p>
          The original essays, typography, brand marks, and curated selections on Travel Hideouts are protected under copyright and international intellectual property treaties. If you believe any material on our site infringes upon your copyright, please notify our editorial team with details at <a href="mailto:etuzex@gmail.com" className="text-[#8C6D58] font-semibold underline">etuzex@gmail.com</a> for prompt review.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          6. Limitation of Liability
        </h2>
        <p>
          To the fullest extent permissible by applicable law, Travel Hideouts and its editorial team shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, this website or reliance upon information published herein.
        </p>
      </div>
    </div>
  );
};
