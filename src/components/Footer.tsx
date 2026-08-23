import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#434338] text-[#F9F7F2] pt-16 pb-12 border-t border-[#5A5A40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#5A5A40]/70">
          {/* Brand Manifesto Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="/" className="inline-block focus:outline-none">
              <span className="font-serif text-3xl font-bold tracking-tight text-[#F9F7F2] italic">
                TravelHideouts
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-[#8D8D7E] font-sans mt-1.5 font-semibold">
                Discover places worth going.
              </span>
            </a>

            <p className="text-sm text-[#CDCBC2] leading-relaxed max-w-md font-sans">
              TravelHideouts is an independent female-curated travel publication. We share curiosity-driven travel stories, hidden places, and mindful travel guides across 9 extraordinary destinations. We do not offer or sell accommodations directly.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#8D8D7E]">
              <ShieldCheck className="w-4 h-4 text-[#8FA18B]" />
              <span>Independent editorial curation · Firsthand stories · Honest perspectives</span>
            </div>
          </div>

          {/* Quick Links Column 1: Discovery */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8D8D7E]">
              Discover
            </h4>
            <ul className="space-y-2 text-sm text-[#CDCBC2]">
              <li><a href="/stories" className="hover:text-white transition-colors">Travel Stories</a></li>
              <li><a href="/destinations" className="hover:text-white transition-colors">Countries</a></li>
              <li><a href="/hidden-stories" className="hover:text-white transition-colors">Hidden Stories</a></li>
              <li><a href="/things-to-do" className="hover:text-white transition-colors">Things to Do</a></li>
              <li><a href="/guides" className="hover:text-white transition-colors">Travel Guides</a></li>
              <li><a href="/getting-there" className="hover:text-white transition-colors">Getting There</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2: Editorial */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8D8D7E]">
              Editorial
            </h4>
            <ul className="space-y-2 text-sm text-[#CDCBC2]">
              <li><a href="/stories" className="hover:text-white transition-colors">Stories</a></li>
              <li><a href="/guides" className="hover:text-white transition-colors">Practical Guides</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About the Author</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact / Inquiries</a></li>
            </ul>
          </div>

          {/* Quick Links Column 3: Trust & Legal */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8D8D7E]">
              Transparency & Ethics
            </h4>
            <p className="text-xs text-[#ABA99E] leading-relaxed mb-3">
              We operate independently. We partner with transparent travel networks (Stay22 & Travelpayouts) and may earn commissions on qualifying bookings at no extra cost to you.
            </p>
            <ul className="space-y-2 text-xs text-[#CDCBC2]">
              <li>
                <a href="/affiliate-disclosure" className="hover:text-[#8FA18B] transition-colors inline-flex items-center gap-1">
                  <span>Affiliate Disclosure</span>
                  <ArrowUpRight className="w-3 h-3 text-[#8D8D7E]" />
                </a>
              </li>
              <li><a href="/privacy-policy" className="hover:text-[#8FA18B] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#8FA18B] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8D8D7E] gap-4">
          <p>© {new Date().getFullYear()} TravelHideouts (travelhideouts.com). All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-[#ABA99E]">
            <div className="w-2 h-2 rounded-full bg-[#8FA18B]"></div>
            <span>Crafted with calm natural aesthetics for travelers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
