import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Settings, ShieldCheck, ExternalLink } from 'lucide-react';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  advertising: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'travelhideouts_cookie_consent';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<{
    analytics: boolean;
    advertising: boolean;
  }>({
    analytics: true,
    advertising: true,
  });

  useEffect(() => {
    // Check if consent has already been given
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Delay slightly for smooth page load experience
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(saved) as CookiePreferences;
        setPreferences({
          analytics: parsed.analytics,
          advertising: parsed.advertising,
        });
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    // Listen for custom event to reopen preferences from anywhere (e.g., footer or privacy policy)
    const handleOpenSettings = () => {
      setIsModalOpen(true);
      setIsVisible(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const saveConsent = (analytics: boolean, advertising: boolean) => {
    const payload: CookiePreferences = {
      essential: true,
      analytics,
      advertising,
      timestamp: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.warn('Unable to persist cookie preferences:', e);
    }

    setPreferences({ analytics, advertising });
    setIsModalOpen(false);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleRejectNonEssential = () => {
    saveConsent(false, false);
  };

  const handleSaveCustom = () => {
    saveConsent(preferences.analytics, preferences.advertising);
  };

  if (!isVisible && !isModalOpen) {
    return null;
  }

  return (
    <>
      {/* Floating Bottom Banner */}
      {!isModalOpen && isVisible && (
        <aside
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent notice"
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xl z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="p-5 sm:p-6 rounded-2xl bg-[#2C2B27]/95 backdrop-blur-md text-[#F9F7F2] shadow-2xl border border-[#48463F] space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-[#43413B] text-[#8FA18B] shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="font-serif font-bold text-base text-white tracking-wide">
                  Cookie & Privacy Preferences
                </h3>
                <p className="text-xs text-[#CDCBC2] leading-relaxed">
                  We use cookies and similar technologies to ensure site functionality, understand visitor interactions, and provide personalized advertising through partners like Google AdSense in compliance with the EU User Consent Policy.
                </p>
                <div className="pt-1">
                  <a
                    href="/privacy-policy/"
                    className="text-[11px] text-[#A6C0A2] hover:text-white underline transition-colors"
                  >
                    Read our Privacy Policy & Google AdSense Disclosures
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-2 sm:justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-3.5 py-2 text-xs font-medium text-[#CDCBC2] hover:text-white rounded-lg border border-[#48463F] hover:bg-[#3D3A33] transition-colors inline-flex items-center gap-1.5"
              >
                <Settings className="w-3.5 h-3.5 text-[#A6C0A2]" />
                <span>Customize</span>
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-3.5 py-2 text-xs font-medium text-[#CDCBC2] hover:text-white rounded-lg border border-[#48463F] hover:bg-[#3D3A33] transition-colors"
              >
                Necessary Only
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 text-xs font-semibold text-[#2C2B27] bg-[#8FA18B] hover:bg-[#A3B79F] rounded-lg transition-colors shadow-sm inline-flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Accept All</span>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Detailed Cookie Settings Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-[#E9E1D2] my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-[#EFEBE3] pb-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8FA18B]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Privacy Management</span>
                </div>
                <h2 id="cookie-modal-title" className="text-xl sm:text-2xl font-serif font-bold text-[#242220]">
                  Cookie & Ad Settings
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full text-[#7A746B] hover:text-[#242220] hover:bg-[#F2EFE9] transition-colors"
                aria-label="Close settings"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#5C544B] leading-relaxed">
              Customize your privacy preferences below. Essential cookies are required for site security and remembering your saved hideouts. You may enable or disable analytical and personalized advertising cookies at any time.
            </p>

            <div className="space-y-4">
              {/* Essential Cookies */}
              <div className="p-4 rounded-2xl bg-[#F9F7F2] border border-[#E9E1D2] flex items-start justify-between gap-3">
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm text-[#242220]">Strictly Necessary Cookies</h4>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#E3DFD5] text-[#554E44]">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-[#6B655B] leading-relaxed">
                    Required for core website functionality, security, wishlist local caching, and storing your consent preferences.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E9E1D2] flex items-start justify-between gap-3">
                <div className="space-y-1 pr-2">
                  <h4 className="font-semibold text-sm text-[#242220]">Performance & Analytics</h4>
                  <p className="text-xs text-[#6B655B] leading-relaxed">
                    Helps us aggregate anonymous visitor counts, identify popular guides, and improve load speed.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#D8D2C5] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#D8D2C5] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8FA18B]"></div>
                </label>
              </div>

              {/* Advertising Cookies */}
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E9E1D2] flex items-start justify-between gap-3">
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm text-[#242220]">Personalized Advertising</h4>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#EAE5D9] text-[#554E44]">
                      Google AdSense
                    </span>
                  </div>
                  <p className="text-xs text-[#6B655B] leading-relaxed">
                    Allows Google and certified advertising partners to deliver interest-based ads tailored to your past browsing habits.
                  </p>
                  <p className="text-[11px] text-[#7A746B] pt-1">
                    You can also opt out globally via{' '}
                    <a
                      href="https://adssettings.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8C6D58] underline inline-flex items-center gap-0.5"
                    >
                      Google Ads Settings <ExternalLink className="w-2.5 h-2.5" />
                    </a>.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={preferences.advertising}
                    onChange={(e) => setPreferences(prev => ({ ...prev, advertising: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#D8D2C5] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#D8D2C5] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8FA18B]"></div>
                </label>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#EFEBE3]">
              <a
                href="/privacy-policy/"
                className="text-xs text-[#6B655B] hover:text-[#242220] underline transition-colors order-2 sm:order-1"
              >
                Full Privacy Policy
              </a>
              <div className="flex items-center gap-2 w-full sm:w-auto order-1 sm:order-2">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold text-[#5C544B] bg-[#F2EFE9] hover:bg-[#E8E4DC] rounded-xl transition-colors"
                >
                  Reject All
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="flex-1 sm:flex-initial px-5 py-2 text-xs font-semibold text-white bg-[#434338] hover:bg-[#2C2C24] rounded-xl transition-colors shadow-sm"
                >
                  Save Choices
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
