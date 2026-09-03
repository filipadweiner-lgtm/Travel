import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeft, ShieldCheck, Cookie, ExternalLink, Settings } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const handleOpenCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-8">
      <SEOHead
        title="Privacy Policy — Travel Hideouts"
        description="Comprehensive Privacy Policy and Cookie Disclosure for Travel Hideouts, including Google AdSense advertising cookies, GDPR, and CCPA compliance."
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5D9] text-xs font-semibold text-[#574F45]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#8FA18B]" />
          <span>Compliance & Data Protection</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#242220]">
          Privacy Policy & Cookie Disclosure
        </h1>
        <p className="text-xs text-[#8C847B]">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · Effective immediately
        </p>
      </div>

      <div className="p-6 md:p-10 rounded-3xl bg-white border border-[#E9E1D2] space-y-8 text-sm md:text-base text-[#474038] leading-relaxed">
        <div className="p-4 rounded-2xl bg-[#F9F7F2] border border-[#E6E1D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white border border-[#DDD8CE] text-[#8FA18B]">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-xs uppercase tracking-wider text-[#6B655B]">Your Cookie Choices</p>
              <p className="text-xs text-[#7A746B]">You can review or adjust your cookie preferences at any time.</p>
            </div>
          </div>
          <button
            onClick={handleOpenCookieSettings}
            className="px-4 py-2 text-xs font-semibold rounded-full bg-[#434338] text-white hover:bg-[#2C2C24] transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Manage Cookie Settings</span>
          </button>
        </div>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-[#242220]">
            1. Introduction & Scope
          </h2>
          <p>
            Welcome to <strong>Travel Hideouts</strong> (accessible at <a href="https://travelhideouts.com" className="text-[#8C6D58] underline">travelhideouts.com</a>). 
            We respect your personal privacy and are committed to safeguarding transparency in how data and cookies are processed across our independent editorial publication.
          </p>
          <p>
            This Privacy Policy explains what information may be collected when you visit our website, how third-party advertising and affiliate partners use cookies, your legal rights under regulations such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA/CPRA), and how you can exercise control over your personal privacy choices.
          </p>
        </section>

        <section className="space-y-3 p-5 rounded-2xl bg-[#FAF8F5] border border-[#EBE5DA]">
          <h2 className="font-serif font-bold text-xl text-[#242220] flex items-center gap-2">
            <span>2. Google AdSense & Third-Party Advertising Cookies</span>
          </h2>
          <p className="font-medium text-[#38332C]">
            In compliance with Google AdSense Publisher Policies and Google's EU User Consent Policy, please review the following required notices:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#474038]">
            <li>
              <strong>Third-party vendors, including Google, use cookies</strong> to serve ads based on a user's prior visits to this website or other websites across the Internet.
            </li>
            <li>
              <strong>Google's use of advertising cookies</strong> (including the DoubleClick cookie) enables it and its partners to serve ads to users based on their visits to Travel Hideouts and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting Google's official <strong><a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#8C6D58] font-semibold underline inline-flex items-center gap-1">Google Ads Settings <ExternalLink className="w-3 h-3" /></a></strong>.
            </li>
            <li>
              Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <strong><a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#8C6D58] font-semibold underline inline-flex items-center gap-1">AboutAds.info Choices <ExternalLink className="w-3 h-3" /></a></strong> or the <strong><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-[#8C6D58] font-semibold underline inline-flex items-center gap-1">Network Advertising Initiative (NAI) Opt-Out <ExternalLink className="w-3 h-3" /></a></strong>.
            </li>
            <li>
              Visitors located in Europe, the United Kingdom, or Switzerland can also manage and opt out of behavioral advertising cookies through the <strong><a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-[#8C6D58] font-semibold underline inline-flex items-center gap-1">European Interactive Digital Advertising Alliance (EDAA) <ExternalLink className="w-3 h-3" /></a></strong>.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-[#242220]">
            3. What Cookies and Local Storage Technologies We Use
          </h2>
          <p>
            Cookies are small text files stored in your browser by websites you visit. They are widely used to make websites work efficiently, remember preferences, and provide analytical or advertising insights. We categorize cookies and browser storage technologies into:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-[#E9E1D2] bg-white space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8FA18B]">Category 1</span>
              <h3 className="font-semibold text-sm text-[#242220]">Strictly Necessary & Functional Storage</h3>
              <p className="text-xs text-[#6B655B] leading-relaxed">
                Essential for website navigation, user session integrity, and remembering your local preferences (such as bookmarked hideouts in your browser's <code className="text-[11px] bg-[#F1EDE4] px-1 py-0.5 rounded">localStorage</code> and your cookie consent selection). These do not track personal identifying information across other domains.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#E9E1D2] bg-white space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8FA18B]">Category 2</span>
              <h3 className="font-semibold text-sm text-[#242220]">Performance & Analytics Cookies</h3>
              <p className="text-xs text-[#6B655B] leading-relaxed">
                Allow us to analyze aggregated visitor trends, traffic sources, popular guides, and page load speeds so we can continually optimize site performance. Analytics data is aggregated and anonymized.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#E9E1D2] bg-white space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8FA18B]">Category 3</span>
              <h3 className="font-semibold text-sm text-[#242220]">Advertising & Remarketing Cookies</h3>
              <p className="text-xs text-[#6B655B] leading-relaxed">
                Set by advertising partners such as Google AdSense. These cookies track browsing behavior across websites to build a profile of your interests and display ads that are relevant and engaging, rather than generic repetition.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#E9E1D2] bg-white space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8FA18B]">Category 4</span>
              <h3 className="font-semibold text-sm text-[#242220]">Affiliate Referral Tracking Cookies</h3>
              <p className="text-xs text-[#6B655B] leading-relaxed">
                When you click outbound booking links (such as Stay22 or Travelpayouts), a secure referral cookie is dropped by the respective network to credit Travel Hideouts if a qualifying booking occurs. This incurs no extra cost to you.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-[#242220]">
            4. Log Files and Technical Information
          </h2>
          <p>
            Like almost all modern web servers, Travel Hideouts logs standard technical requests when a browser accesses our pages. This may include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), referring/exit pages, operating system, date/time stamp, and clickstream data. 
            This information is used strictly to analyze security threats, administer the site, prevent bot fraud, and maintain server reliability. IP addresses in log files are not linked to personally identifiable user accounts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-[#242220]">
            5. Voluntary Communications (Contact Form)
          </h2>
          <p>
            When you submit a message through our <a href="/contact/" className="text-[#8C6D58] underline">Contact Form</a> or email us directly, we receive the name, email address, subject, and message content you supply. We use this information solely to correspond with you regarding your inquiry, feedback, or suggestion. We never sell, rent, or share your contact email address with commercial telemarketers or third-party mailing lists.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-[#242220]">
            6. European Privacy Rights (GDPR & UK Data Protection)
          </h2>
          <p>
            If you are a resident of the European Economic Area (EEA), United Kingdom, or Switzerland, you are entitled to specific data protection rights under the General Data Protection Regulation (GDPR) and UK GDPR:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[#474038]">
            <li><strong>Right of Access:</strong> You have the right to request copies of your personal data held by us.</li>
            <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate or incomplete personal information.</li>
            <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> You have the right to request that we delete your personal data under certain conditions.</li>
            <li><strong>Right to Restrict Processing:</strong> You have the right to restrict how we process your personal data.</li>
            <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer data directly to another organization or to you.</li>
            <li><strong>Right to Object & Withdraw Consent:</strong> You have the right to withdraw cookie consent or object to the processing of personal data for direct marketing or personalized advertising at any time.</li>
          </ul>
          <p className="text-xs text-[#7A746B]">
            To exercise any of these rights, please contact us at <a href="mailto:etuzex@gmail.com" className="text-[#8C6D58] underline">etuzex@gmail.com</a>. We respond to all verified requests within thirty (30) days in accordance with statutory requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-[#242220]">
            7. California Consumer Privacy Statement (CCPA / CPRA & US State Privacy Laws)
          </h2>
          <p>
            Under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), and related privacy laws in states including Virginia, Colorado, Connecticut, and Utah, residents have specific rights regarding their personal information:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[#474038]">
            <li>
              <strong>Right to Know & Access:</strong> You can request disclosure of the categories and specific pieces of personal information collected, sources, and commercial purposes.
            </li>
            <li>
              <strong>Right to Delete & Correct:</strong> You can request deletion of your personal information subject to statutory exceptions.
            </li>
            <li>
              <strong>Do Not Sell or Share My Personal Information:</strong> We do not sell personal information in exchange for monetary payment. However, the use of third-party advertising cookies (such as Google AdSense) may be classified as "sharing" or "targeted advertising" under certain state laws. You can opt out of personalized advertising at any time by configuring our <button onClick={handleOpenCookieSettings} className="text-[#8C6D58] font-semibold underline">Cookie Settings</button> or visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#8C6D58] underline">AboutAds Choices</a>.
            </li>
            <li>
              <strong>Non-Discrimination:</strong> We will never discriminate against you, deny services, charge different prices, or provide a different quality of service for exercising your privacy rights.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-[#242220]">
            8. Children's Privacy (COPPA Compliance)
          </h2>
          <p>
            Protecting children's online privacy is especially important. Travel Hideouts does not knowingly collect any personally identifiable information from children under the age of 16 (or under 13 in the United States pursuant to the Children's Online Privacy Protection Act, COPPA). 
            If a parent or guardian believes that a minor has submitted personal contact information to our website, please contact us immediately at <a href="mailto:etuzex@gmail.com" className="text-[#8C6D58] underline">etuzex@gmail.com</a>, and we will promptly remove such information from our records.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-[#242220]">
            9. How to Disable Cookies in Your Web Browser
          </h2>
          <p>
            In addition to our on-site Cookie Settings modal, you can control or disable cookies directly through your browser settings:
          </p>
          <p className="text-xs text-[#7A746B]">
            Google Chrome: <em>Settings &gt; Privacy and security &gt; Cookies and other site data</em><br />
            Apple Safari: <em>Preferences &gt; Privacy &gt; Block all cookies</em><br />
            Mozilla Firefox: <em>Settings &gt; Privacy & Security &gt; Cookies and Site Data</em><br />
            Microsoft Edge: <em>Settings &gt; Cookies and site permissions</em>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-[#242220]">
            10. Changes to This Privacy Policy
          </h2>
          <p>
            We may periodically update our Privacy Policy to reflect changes in our editorial operations, partner integrations, legal requirements, or Google AdSense policies. Any revisions will be published directly on this page with an updated "Last updated" date. We encourage readers to review this page periodically.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-[#E6E1D8]">
          <h2 className="font-serif font-bold text-xl text-[#242220]">
            11. Contact the Publisher & Editorial Team
          </h2>
          <p>
            If you have questions, inquiries, or complaints concerning this Privacy Policy, cookie disclosures, or data protection practices, please contact us:
          </p>
          <div className="p-4 rounded-2xl bg-[#F9F7F2] border border-[#E9E1D2] space-y-1 text-sm">
            <p><strong>Publication:</strong> Travel Hideouts (<a href="https://travelhideouts.com" className="text-[#8C6D58] underline">travelhideouts.com</a>)</p>
            <p><strong>Editorial Lead & Data Contact:</strong> Miley Rocha</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:etuzex@gmail.com" className="text-[#8C6D58] font-semibold underline">
                etuzex@gmail.com
              </a>
            </p>
            <p>
              <strong>Contact Form:</strong>{' '}
              <a href="/contact/" className="text-[#8C6D58] underline">
                https://travelhideouts.com/contact/
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

