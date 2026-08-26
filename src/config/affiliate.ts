/**
 * Travel Hideouts Centralized Affiliate Configuration
 * 
 * IMPORTANT:
 * - Real affiliate tracking IDs, partner IDs, and campaign parameters should be configured here.
 * - During development or until actual accounts are linked, AFFILIATE_LINK_PLACEHOLDER
 *   is used.
 * - This prevents scattered IDs throughout components and guarantees transparency.
 */

export const AFFILIATE_CONFIG = {
  // Stay22 Integration Configuration
  stay22: {
    enabled: false, // Set to true once Stay22 account is active
    partnerId: 'AFFILIATE_LINK_PLACEHOLDER', // Replace with your real Stay22 Partner ID
    defaultLocation: 'lisbon',
    baseUrl: 'https://www.stay22.com/embed/gm',
  },

  // Travelpayouts / Flights Integration Configuration
  travelpayouts: {
    enabled: false, // Set to true once Travelpayouts account is active
    markerId: 'AFFILIATE_LINK_PLACEHOLDER', // Replace with your real Travelpayouts Marker ID
    flightSearchUrl: 'https://tp.media/r', // Or Aviasales / WayAway / Kiwi partner link
  },

  // Direct Stays Partner Integrations (Booking.com / Expedia / Boutique Direct)
  stays: {
    bookingAffiliateId: 'AFFILIATE_LINK_PLACEHOLDER',
    expediaPartnerId: 'AFFILIATE_LINK_PLACEHOLDER',
  },

  // Experiences Partner (e.g., GetYourGuide / Viator / Withlocals)
  experiences: {
    partnerId: 'AFFILIATE_LINK_PLACEHOLDER',
  }
};

/**
 * Resolves a stay affiliate link safely.
 * Returns either a formatted partner link or a search landing page.
 */
export function getStayAffiliateUrl(stayName: string, destination: string, explicitUrl?: string): string {
  if (explicitUrl && explicitUrl !== 'AFFILIATE_LINK_PLACEHOLDER') {
    return explicitUrl;
  }
  
  if (AFFILIATE_CONFIG.stay22.enabled && AFFILIATE_CONFIG.stay22.partnerId !== 'AFFILIATE_LINK_PLACEHOLDER') {
    return `https://www.stay22.com/allez/stay?aid=${AFFILIATE_CONFIG.stay22.partnerId}&address=${encodeURIComponent(stayName + ' ' + destination)}`;
  }
  
  // Safe search link fallback for demonstration
  return `https://www.google.com/travel/search?q=${encodeURIComponent(stayName + ' ' + destination)}`;
}

/**
 * Resolves a flight route affiliate link safely.
 */
export function getFlightAffiliateUrl(destination: string, origin: string = ''): string {
  if (AFFILIATE_CONFIG.travelpayouts.enabled && AFFILIATE_CONFIG.travelpayouts.markerId !== 'AFFILIATE_LINK_PLACEHOLDER') {
    return `${AFFILIATE_CONFIG.travelpayouts.flightSearchUrl}?marker=${AFFILIATE_CONFIG.travelpayouts.markerId}&destination=${encodeURIComponent(destination)}`;
  }
  return `https://www.google.com/travel/flights?q=flights+to+${encodeURIComponent(destination)}`;
}

/**
 * Resolves an experience link safely.
 */
export function getExperienceAffiliateUrl(title: string, destination: string, explicitUrl?: string): string {
  if (explicitUrl && explicitUrl !== 'AFFILIATE_LINK_PLACEHOLDER') {
    return explicitUrl;
  }
  return `https://www.google.com/search?q=${encodeURIComponent(title + ' ' + destination + ' booking')}`;
}
