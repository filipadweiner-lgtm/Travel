import React from 'react';
import { ExternalLink } from 'lucide-react';
import { getStayAffiliateUrl, getFlightAffiliateUrl, getExperienceAffiliateUrl } from '../config/affiliate';

interface AffiliateCTAProps {
  label?: 'Check availability' | 'See prices' | 'Explore stays' | 'Check this stay' | 'Find a room' | 'Check route & fares' | 'Explore experiences';
  type?: 'stay' | 'flight' | 'experience';
  itemName: string;
  destination: string;
  explicitUrl?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AffiliateCTA: React.FC<AffiliateCTAProps> = ({
  label = 'Check availability',
  type = 'stay',
  itemName,
  destination,
  explicitUrl,
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const getResolvedUrl = () => {
    switch (type) {
      case 'flight':
        return getFlightAffiliateUrl(destination);
      case 'experience':
        return getExperienceAffiliateUrl(itemName, destination, explicitUrl);
      case 'stay':
      default:
        return getStayAffiliateUrl(itemName, destination, explicitUrl);
    }
  };

  const url = getResolvedUrl();

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-[#F1EDE4] text-[#434338] hover:bg-[#E6E0D5] border border-[#E9E5D9]';
      case 'outline':
        return 'bg-transparent text-[#434338] hover:bg-[#8FA18B]/10 border border-[#8FA18B] text-[#434338]';
      case 'subtle':
        return 'bg-[#F1EDE4]/60 text-[#5A5A40] hover:text-[#434338] hover:bg-[#F1EDE4] border border-[#E9E5D9]';
      case 'primary':
      default:
        return 'bg-[#8FA18B] text-white hover:bg-[#7C8E78] shadow-sm hover:shadow';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-xs px-3.5 py-1.5 gap-1.5 font-medium';
      case 'lg':
        return 'text-sm md:text-base px-6 py-3 gap-2.5 font-medium tracking-wide';
      case 'md':
      default:
        return 'text-xs md:text-sm px-4.5 py-2.5 gap-2 font-medium';
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      title={`${label} via partner portal`}
    >
      <span>{label}</span>
      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
    </a>
  );
};
