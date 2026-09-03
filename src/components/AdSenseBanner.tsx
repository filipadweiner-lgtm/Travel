import React, { useEffect, useRef } from 'react';

interface AdSenseBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
}) => {
  const adRef = useRef<HTMLModElement | null>(null);
  const isPushed = useRef(false);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && slot && !isPushed.current) {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        isPushed.current = true;
      }
    } catch (e) {
      console.warn('AdSense execution notice:', e);
    }
  }, [slot]);

  return (
    <div className={`my-8 text-center overflow-hidden ${className}`}>
      {/* Mandatory Google AdSense Label */}
      <span className="block text-[10px] uppercase tracking-[0.2em] text-[#8C847B] font-medium mb-1.5">
        Advertisement
      </span>

      <div className="min-h-[90px] flex items-center justify-center bg-[#F4F1EB]/60 rounded-xl border border-[#E8E4DA]/60 p-2">
        {slot ? (
          <ins
            ref={adRef}
            className="adsbygoogle block w-full"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-6916219011891091"
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? 'true' : 'false'}
          />
        ) : (
          <div className="text-xs text-[#8C847B] italic py-3">
            Google AdSense verified unit space (auto-managed)
          </div>
        )}
      </div>
    </div>
  );
};
