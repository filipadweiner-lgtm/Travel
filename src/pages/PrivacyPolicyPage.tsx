import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8">
      <SEOHead
        title="Privacy Policy — TravelHideouts"
        description="Privacy policy for TravelHideouts. How we protect your data, respect privacy, and use local browser storage."
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
          Privacy Policy
        </h1>
        <p className="text-xs text-[#8C847B]">
          Effective date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      <div className="p-6 md:p-8 rounded-3xl bg-white border border-[#E9E1D2] space-y-6 text-sm md:text-base text-[#474038] leading-relaxed">
        <p>
          At <strong>TravelHideouts</strong> (travelhideouts.com), accessible at travelhideouts.com, our visitors' privacy is of paramount importance to us.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          1. What Information We Do NOT Collect
        </h2>
        <p>
          We do not run user account registration, collect credit card numbers, or mandate email subscriptions. We intentionally do not operate an email newsletter popup to keep your reading experience calm and uninterrupted.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          2. Local Storage (Wishlist & Saved Places)
        </h2>
        <p>
          When you bookmark hideouts on our platform, that data is stored solely in your local browser cache (`localStorage`). This data never leaves your device and is not synchronized to external servers unless you choose to export it.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          3. Third-Party Analytics & Partner Cookies
        </h2>
        <p>
          When you click on outbound links to partner travel networks (such as Stay22 or Travelpayouts), these third-party platforms may place standard tracking cookies to attribute referral bookings. These cookies operate under the respective privacy policies of those providers.
        </p>

        <h2 className="font-serif font-bold text-xl text-[#242220] pt-2">
          4. Contact Us
        </h2>
        <p>
          If you have questions or require further details about our privacy practices, please contact us directly at{' '}
          <a href="mailto:etuzex@gmail.com" className="text-[#8C6D58] font-semibold underline">
            etuzex@gmail.com
          </a>{' '}
          or submit a note through our <a href="/contact" className="text-[#8C6D58] underline">contact form</a>.
        </p>
      </div>
    </div>
  );
};
