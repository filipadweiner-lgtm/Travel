import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const AuthorNotice: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`rounded-2xl bg-[#F1EDE4] border border-[#E9E5D9] p-4 text-xs text-[#5A5A40] flex items-start gap-3.5 ${className}`}>
      <div className="p-1.5 rounded-xl bg-[#8FA18B] text-white shrink-0 mt-0.5 shadow-xs">
        <ShieldCheck className="w-4 h-4" />
      </div>
      <div>
        <p className="font-semibold text-[#434338] mb-0.5 flex items-center gap-1.5 font-sans">
          <span>Editorial Transparency & Trust Principle</span>
          <Sparkles className="w-3 h-3 text-[#D48166]" />
        </p>
        <p className="leading-relaxed text-[#5A5A40]">
          TravelHideouts distinguishes strictly between genuine firsthand visits and curated research picks. Placeholder designations like <em>[The woman behind TravelHideouts]</em> and <em>Research pick</em> are used for demonstration entries until verified personal journeys are updated by the site owner.
        </p>
      </div>
    </div>
  );
};
