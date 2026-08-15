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
  | 'Hidden Gems';

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
  source: 'Reddit' | 'Medium' | 'Travel Forum' | 'Traveler Substack' | 'Local Community';
  sourceName: string;
  sourceUrl: string;
  author: string;
  location: string;
  quoteOrSummary: string;
  sentiment: 'positive' | 'balanced' | 'caveat';
  topic: string;
  whatTravelersLove?: string[];
  thingsWorthKnowing?: string[];
  isParaphrase: boolean;
  verifiedDate?: string;
}

export interface Hideout {
  id: string;
  slug: string;
  title: string;
  category: HideoutCategory;
  destinationId: string;
  destinationName: string;
  location: string;
  image: string;
  gallery?: string[];
  summary: string;
  whySpecial: string;
  vibe: string;
  authorTake: string;
  editorialLabel: EditorialLabel;
  bestFor: string[];
  wouldGoBack: 'Yes' | 'Maybe' | 'Not sure' | 'Top of My Wishlist';
  goodToKnow: string;
  priceTier: '€' | '€€' | '€€€' | '€€€€';
  bookingUrlPlaceholder: string;
  travelerVoiceId?: string;
  isFeatured?: boolean;
}

export interface Stay {
  id: string;
  slug: string;
  name: string;
  category: StayCategory;
  destinationId: string;
  destinationName: string;
  neighborhood: string;
  image: string;
  gallery?: string[];
  whyCaughtAttention: string;
  myTake: string;
  bestFor: string[];
  whatTravelersSay: string;
  thingsWorthKnowing: string[];
  editorialLabel: EditorialLabel;
  priceIndicator: string;
  affiliateUrl: string;
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
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  authorName: string;
  authorRole: string;
  date: string;
  readTime: string;
  excerpt: string;
  intro: string;
  sections: {
    heading?: string;
    subheading?: string;
    body: string[];
    pullQuote?: string;
    image?: string;
    imageCaption?: string;
  }[];
  travelerVoiceIds?: string[];
  relatedHideoutIds?: string[];
  relatedDestinationIds?: string[];
  relatedStayIds?: string[];
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  destinationId?: string;
  heroImage: string;
  authorName: string;
  date: string;
  readTime: string;
  intro: string;
  sections: {
    title: string;
    content: string[];
    tips?: string[];
    keyTakeaway?: string;
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
  summary: string;
  worthDoing: string;
  whatToSkip: string;
  travelersSay: string;
  goodToKnow: string;
  affiliateUrlPlaceholder: string;
}

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
