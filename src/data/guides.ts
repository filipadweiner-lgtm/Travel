import { Guide } from '../types';

export const GUIDES: Guide[] = [
  {
    id: 'guide-where-to-stay-lisbon',
    slug: 'where-to-stay-in-lisbon',
    title: 'Where to Stay in Lisbon: A Neighborhood-by-Neighborhood Guide',
    subtitle: 'From leafy Príncipe Real to historic Alfama: finding the right quarter for your travel style.',
    destinationId: 'lisbon',
    heroImage: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1600&q=80',
    authorName: 'The woman behind TravelHideouts',
    date: 'August 2025',
    readTime: '8 min read',
    intro: 'Lisbon’s topography dictates your daily rhythm. The neighborhood you choose changes whether you wake up to birdsong in a private garden terrace or the clanking gears of Tram 28 climbing a cobblestone slope outside your window.',
    sections: [
      {
        title: '1. Príncipe Real: For Design Lovers & Tranquil Evenings',
        content: [
          'Príncipe Real sits along the ridge above Bairro Alto. It is characterized by 19th-century aristocratic townhouses, botanical gardens, and independent concept stores like Embaixada.',
          'It is my top recommendation for solo female travelers and couples who appreciate quiet nights, elevated coffee roasteries, and walking distance to contemporary Portuguese bistros.'
        ],
        tips: [
          'Best for: Quiet, upscale, stylish dining, lovely parks',
          'Avoid if: You need flat terrain or the lowest budget hostels'
        ],
        keyTakeaway: 'Stay here for the best balance of safety, culinary excellence, and peaceful sleep.'
      },
      {
        title: '2. Alfama & Graça: For Romantic Cobblestone Soul',
        content: [
          'Alfama is the oldest district in Lisbon, having survived the 1755 earthquake. Its labyrinth of narrow alleys, steep staircases, and small fado taverns feels like a timeless village.',
          'Waking up here to church bells and clotheslines swaying in the breeze is pure poetry, but be prepared for steep stair climbs.'
        ],
        tips: [
          'Pack a backpack or duffel bag rather than heavy four-wheel rolling suitcases.',
          'Graça (just uphill from Alfama) has cooler breezes and fewer tour groups.'
        ]
      },
      {
        title: '3. Santos & Lapa: For Longer Stays & Artisan Living',
        content: [
          'The Santos design district and embassy quarter of Lapa offer wide residential streets and authentic Portuguese tascas where lunch menus cost under €12.',
          'It is quieter and slightly removed from the tourist center, making it wonderful for a four-to-seven-day stay.'
        ]
      }
    ],
    travelerVoiceIds: ['tv-lisbon-alfama'],
    relatedHideoutIds: ['hideout-lisbon-botanic'],
    relatedStayIds: ['stay-lisbon-memmo']
  },
  {
    id: 'guide-best-areas-paris',
    slug: 'best-areas-to-stay-in-paris',
    title: 'The Best Areas to Stay in Paris: Beyond the Postcards',
    subtitle: 'Why the 10th, Haut Marais, and South Pigalle offer a richer Parisian experience than the tourist core.',
    destinationId: 'paris',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
    authorName: 'The woman behind TravelHideouts',
    date: 'July 2025',
    readTime: '9 min read',
    intro: 'First-time visitors often default to the 7th Arrondissement near the Eiffel Tower or the busy retail streets of the 1st. But the soul of contemporary Paris thrives in its eastern and northern residential quarters, where everyday food culture, natural wine, and neighborhood camaraderie are unmatched.',
    sections: [
      {
        title: '1. Canal Saint-Martin & The 10th Arrondissement',
        content: [
          'The 10th Arrondissement along Quai de Valmy is where young Paris gathers. Iron footbridges arch over the water, bookshops host evening readings, and casual bistros serve stellar small plates.',
          'It is walkable, vibrant without feeling aggressive, and easily connected via République and Gare de l\'Est.'
        ],
        tips: [
          'Sunday pedestrianization turns the canal into a serene walking promenade.',
          'Try Holybelly for breakfast and Ten Belles for afternoon coffee.'
        ]
      },
      {
        title: '2. Haut Marais (3rd Arrondissement)',
        content: [
          'The northern part of the Marais preserves 17th-century mansions and quiet courtyards with far less foot traffic than the shopping strip along Rue de Rivoli.',
          'Home to Marché des Enfants Rouges, the oldest covered food market in Paris (dating to 1615).'
        ]
      },
      {
        title: '3. South Pigalle (9th Arrondissement / SoPi)',
        content: [
          'At the foot of Montmartre, SoPi has evolved into a stylish gourmet enclave of boutique hotels, artisan chocolatiers, and intimate bistros along Rue des Martyrs.'
        ]
      }
    ],
    travelerVoiceIds: ['tv-paris-10th-arr'],
    relatedHideoutIds: ['hideout-paris-marais-loft'],
    relatedStayIds: ['stay-paris-provence']
  },
  {
    id: 'guide-weekend-in-budapest',
    slug: 'a-weekend-in-budapest',
    title: 'A Weekend in Budapest: Thermal Baths, Grand Cafés & River Dusk',
    subtitle: 'A thoughtful 48-hour itinerary balancing imperial history, thermal mineral soaks, and contemporary dining.',
    destinationId: 'budapest',
    heroImage: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1600&q=80',
    authorName: 'The woman behind TravelHideouts',
    date: 'June 2025',
    readTime: '7 min read',
    intro: 'Budapest is one of the most rewarding 48-hour city breaks in Europe. With thermal mineral springs bubbling right under the city foundations and a majestic riverfront that lights up like golden filigree at night, two days feel deeply restorative.',
    sections: [
      {
        title: 'Day 1: Imperial Pest & Thermal Immersion',
        content: [
          'Begin with morning coffee and poppyseed pastries at a historic café, followed by a walk through the quiet Palace District.',
          'Spend the afternoon soaking in the naturally heated pools of Rudas Baths or Gellért under Art Nouveau glass skylights.'
        ]
      },
      {
        title: 'Day 2: Castle Hills & Courtyard Dinners',
        content: [
          'Cross the Chain Bridge to explore the quiet residential backstreets of Buda Castle Hill before day tours arrive.',
          'Conclude with dinner in an open-air garden courtyard in the Jewish Quarter.'
        ]
      }
    ],
    travelerVoiceIds: ['tv-budapest-district-8'],
    relatedHideoutIds: ['hideout-budapest-palace-boutique'],
    relatedStayIds: ['stay-budapest-memories']
  },
  {
    id: 'guide-how-i-choose-hotels',
    slug: 'how-i-choose-where-to-stay',
    title: 'How I Choose Where to Stay: An Editorial Framework',
    subtitle: 'The 7 criteria I use to filter through thousands of listings and find places with soul.',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
    authorName: 'The woman behind TravelHideouts',
    date: 'May 2025',
    readTime: '6 min read',
    intro: 'Finding a memorable place to stay is not about sorting by highest star rating or sorting by price. It is about understanding the DNA of the property and matching it to how you want to feel when you wake up.',
    sections: [
      {
        title: 'The 7 Non-Negotiable Filters',
        content: [
          '1. Scale: Under 30 rooms preferred so service remains personal.',
          '2. Lighting: Natural floor-to-ceiling windows or balconies.',
          '3. Acoustic Privacy: Quiet side streets away from night clubs.',
          '4. Neighborhood Integrity: Walking distance to real bakeries and markets.',
          '5. Walkability: Safe evening returns for solo travelers.',
          '6. Honest Photography: Clear daytime photos showing bathroom and street context.',
          '7. Generous Hospitality: Welcoming arrival policies and honest local recommendations.'
        ]
      }
    ],
    travelerVoiceIds: ['tv-rome-trastevere', 'tv-copenhagen-vesterbro'],
    relatedHideoutIds: ['hideout-lisbon-botanic', 'hideout-copenhagen-vesterbro-loft'],
    relatedStayIds: ['stay-lisbon-memmo', 'stay-copenhagen-sanders']
  },
  {
    id: 'guide-how-to-find-weekend-escape',
    slug: 'how-to-find-a-great-weekend-escape',
    title: 'How to Find a Great Weekend Escape',
    subtitle: 'How to plan a short 2-3 night recharge that leaves you energized rather than exhausted.',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
    authorName: 'The woman behind TravelHideouts',
    date: 'April 2025',
    readTime: '6 min read',
    intro: 'A weekend escape should never require 8 hours of complex multi-leg transit. Learn how to pick destinations with direct flight routes, seamless airport trains, and compact walkable quarters.',
    sections: [
      {
        title: 'The Golden Rule of 72-Hour Trips',
        content: [
          'Choose cities where the airport transit takes under 30 minutes (like Copenhagen, Lisbon, or Budapest). If airport transfers consume half your day, you lose the restorative benefit of the trip.'
        ]
      }
    ],
    travelerVoiceIds: ['tv-copenhagen-vesterbro', 'tv-mallorca-soller'],
    relatedHideoutIds: ['hideout-copenhagen-vesterbro-loft', 'hideout-mallorca-soller-finca'],
    relatedStayIds: ['stay-copenhagen-sanders']
  },
  {
    id: 'guide-what-makes-boutique-worth-booking',
    slug: 'what-makes-a-boutique-hotel-worth-booking',
    title: 'What Makes a Boutique Hotel Worth Booking?',
    subtitle: 'Distinguishing between authentic boutique craft and lazy marketing gimmicks.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    authorName: 'The woman behind TravelHideouts',
    date: 'March 2025',
    readTime: '5 min read',
    intro: 'Every chain hotel now slaps the word "boutique" onto their marketing materials. Here is how to verify if a hotel has authentic craftsmanship, respectful community roots, and genuine hospitality before you put down your card.',
    sections: [
      {
        title: 'The Difference Between Styling and Hospitality',
        content: [
          'A neon sign in the lobby and an Instagram wall do not make a boutique hotel. Look for owner-operated properties, artisanal breakfast ingredients sourced from local farms, and staff who can tell you where they personally eat on their day off.'
        ]
      }
    ],
    travelerVoiceIds: ['tv-budapest-district-8'],
    relatedHideoutIds: ['hideout-budapest-palace-boutique'],
    relatedStayIds: ['stay-budapest-memories']
  }
];
