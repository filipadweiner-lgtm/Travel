export type EditorialLabel = 
  | 'I stayed here'
  | "I'd choose this"
  | 'Worth knowing'
  | 'Travelers say'
  | 'On my list'
  | 'Research pick';

export type HideoutCategory = 
  | 'Beach'
  | 'City'
  | 'Mountain'
  | 'Island'
  | 'Boutique'
  | 'Romantic'
  | 'Solo-Friendly'
  | 'Weekend'
  | 'Affordable'
  | 'Luxury'
  | 'Hidden Gems'
  | 'Coastal';

export type StayCategory =
  | "Places I'd Stay"
  | 'Boutique Finds'
  | 'Beautiful on a Budget'
  | 'Romantic Hideouts'
  | 'Solo-Friendly Stays'
  | 'Worth the Splurge';

export type ExperienceCategory =
  | 'Food'
  | 'Culture'
  | 'Nature'
  | 'Beaches'
  | 'Adventure'
  | 'Wellness'
  | 'Nightlife'
  | 'Local experiences';

export interface TravelerVoice {
  id: string;
  source: 'Reddit' | 'Medium' | 'Travel Forum' | 'Traveler Substack' | 'Local Community' | string;
  sourceName: string;
  sourceUrl: string;
  author: string;
  location: string;
  quoteOrSummary: string;
  sentiment: 'positive' | 'balanced' | 'caveat';
  topic?: string;
  category?: string;
  whatTravelersLove?: string[] | string;
  thingsWorthKnowing?: string[] | string;
  isParaphrase: boolean;
  verifiedDate?: string;
}

export interface Hideout {
  id: string;
  slug?: string;
  title: string;
  category: HideoutCategory;
  destinationId: string;
  destinationName?: string;
  location: string;
  image?: string;
  heroImage?: string;
  excerpt?: string;
  description?: string;
  highlights?: string[];
  amenities?: string[];
  pricePerNight?: string;
  stay22Url?: string;
  bookingNote?: string;
  gallery?: string[];
  summary?: string;
  whySpecial?: string;
  vibe?: string;
  authorTake?: string;
  editorialLabel?: EditorialLabel;
  bestFor?: string[] | string;
  wouldGoBack?: 'Yes' | 'Maybe' | 'Not sure' | 'Top of My Wishlist';
  goodToKnow?: string;
  priceTier?: '€' | '€€' | '€€€' | '€€€€';
  bookingUrlPlaceholder?: string;
  travelerVoiceId?: string;
  isFeatured?: boolean;
}

export interface Stay {
  id: string;
  slug?: string;
  name: string;
  category?: StayCategory;
  tagline?: string;
  description?: string;
  destinationId: string;
  destinationName: string;
  neighborhood: string;
  image?: string;
  heroImage?: string;
  gallery?: string[];
  whyCaughtAttention?: string;
  whyWeChoseIt?: string;
  myTake?: string;
  noiseLevel?: string;
  soloTravelRating?: string;
  affiliateUrl?: string;
  stay22Url?: string;
  priceRange?: string;
  keyFeatures?: string[];
  bestFor?: string[] | string;
  whatTravelersSay?: string;
  thingsWorthKnowing?: string[] | string;
  editorialLabel?: EditorialLabel;
  priceIndicator?: string;
  femaleTravelNotes?: string;
  isFeatured?: boolean;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  tag: string;
  heroImage: string;
  image?: string;
  blurb: string;
  openingEditorial: string;
  whereIWouldStay: string;
  neighborhoods: {
    name: string;
    vibe: string;
    bestFor: string;
    whyChoose: string;
    avoidIf: string;
  }[];
  whatTravelersSaySummary: string;
  whatToSkip: string[];
  thingsWorthDoing: {
    title: string;
    description: string;
    whyWorthIt: string;
  }[];
  placesToEat: {
    name: string;
    type: string;
    neighborhood: string;
    whySpecial: string;
  }[];
  gettingAround: {
    recommendation: string;
    airportTransit: string;
    eveningWalkingAdvice: string;
  };
  goodToKnow: string[];
  femaleTravelNotes: {
    generalVibe: string;
    eveningAtmosphere: string;
    arrivalTips: string;
    neighborhoodAdvice: string;
  };
  relatedHideoutIds: string[];
  relatedStayIds: string[];
  relatedStoryIds: string[];
  relatedGuideIds: string[];
}

export interface Story {
  id: string;
  slug?: string;
  title: string;
  subtitle: string;
  heroImage: string;
  image?: string;
  author?: string;
  authorName?: string;
  authorRole?: string;
  date: string;
  readTime: string;
  excerpt: string;
  intro?: string;
  content?: string;
  sections?: {
    heading?: string;
    title?: string;
    subheading?: string;
    body?: string[] | string;
    content?: string[] | string;
    pullQuote?: string;
    image?: string;
    imageCaption?: string;
  }[];
  tags?: string[];
  travelerVoiceIds?: string[];
  relatedHideoutIds?: string[];
  relatedDestinationIds?: string[];
  relatedStayIds?: string[];
}

export interface Guide {
  id: string;
  slug?: string;
  title: string;
  subtitle: string;
  destinationId?: string;
  destinationName?: string;
  heroImage: string;
  image?: string;
  authorName?: string;
  date?: string;
  readTime: string;
  excerpt?: string;
  intro?: string;
  sections: {
    title?: string;
    heading?: string;
    content?: string[] | string;
    body?: string[] | string;
    tips?: string[];
    keyTakeaway?: string;
  }[];
  femaleTravelChecklist?: string[];
  recommendedStays?: {
    name: string;
    reason: string;
    link: string;
  }[];
  travelerVoiceIds?: string[];
  relatedHideoutIds?: string[];
  relatedStayIds?: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  category: ExperienceCategory;
  destinationId: string;
  destinationName: string;
  image: string;
  heroImage?: string;
  duration?: string;
  priceEstimate?: string;
  summary: string;
  description?: string;
  worthDoing: string;
  whyWorthIt?: string;
  whatToSkip: string;
  whatToExpect?: string;
  travelersSay?: string;
  goodToKnow: string;
  affiliateUrlPlaceholder: string;
  affiliateUrl?: string;
}

export type Experience = ExperienceItem;

export interface FlightRouteInfo {
  id: string;
  destinationId: string;
  destinationName: string;
  airportCode: string;
  primaryRoutes: string;
  femaleTravelTip: string;
  arrivalAtNightTip: string;
  transportFromAirport: string;
  bestTimeToBook: string;
  travelpayoutsUrl: string;
}

export interface DealItem {
  id: string;
  title: string;
  destinationName: string;
  stayOrExperienceName: string;
  category: string;
  whyWorthBooking: string;
  seasonalContext: string;
  transparentValueNote: string;
  affiliateUrl: string;
}
