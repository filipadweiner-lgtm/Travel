import { Guide } from '../types';

export const GUIDES: Guide[] = [
  {
    id: 'guide-iceland-road-trip-essentials',
    title: 'The Essential Iceland Road Trip & Weather Field Guide',
    subtitle: 'From sub-arctic wind gear to gravel insurance and hot spring etiquette',
    destinationId: 'iceland',
    destinationName: 'Iceland',
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Everything you need to know before driving Iceland: 4x4 rental choices, weather warning apps, geothermal pool culture, and cashless travel.',
    sections: [
      {
        heading: '1. Vehicle Selection & Crucial Insurance',
        body: 'Even during summer, gravel roads and sudden wind storms can test standard sedans. Rent a 4x4 with comprehensive Gravel Protection (GP) and Sand/Ash Protection (SAD). Always inspect door hinge rubber seals upon pickup.'
      },
      {
        heading: '2. The Sacred Rules of Icelandic Geothermal Pools',
        body: 'Local municipal pools (sundlaugar) are community living rooms. The golden rule is taking a thorough shower with soap before putting on your swimwear. Respect this ritual, and you will be warmly welcomed.'
      },
      {
        heading: '3. Daily Weather & Safety Monitoring',
        body: 'Bookmark vedur.is (Icelandic Met Office) and safetravel.is. Never drive into areas flagged with yellow or red blizzard/wind warnings, regardless of your vehicle size.'
      }
    ],
    femaleTravelChecklist: [
      'Carry high-quality thermal base layers and a seam-sealed waterproof shell',
      'Download the 112 Iceland emergency app',
      'Contactless cards/Apple Pay are accepted for all purchases',
      'Tap water in Iceland is pure spring water — bring a refillable bottle'
    ],
    recommendedStays: [
      {
        name: 'ION Adventure Hotel',
        reason: 'Cantilevered over volcanic rock near Thingvellir with geothermal pool',
        link: '#/stays'
      },
      {
        name: 'Hotel Rangá',
        reason: 'Riverside log sanctuary with private stargazing observatory',
        link: '#/stays'
      }
    ]
  },
  {
    id: 'guide-norway-fjord-slow-travel',
    title: 'The Slow Fjord & Lofoten Transit Guide',
    subtitle: 'Navigating scenic rail, electric catamarans, and remote rorbu cabins',
    destinationId: 'norway',
    destinationName: 'Norway',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'How to experience Norway\'s fjords using the Bergen Line railway, silent electric ferries, and village buses without tourist rush.',
    sections: [
      {
        heading: '1. The Bergen Railway & Flåm Line',
        body: 'Book train tickets via Vy.no 90 days in advance for Minipris fares. Sit on the left side traveling west from Oslo for panoramic views across the Hardangervidda plateau.'
      },
      {
        heading: '2. Fjord Ferries vs Big Cruise Ships',
        body: 'Opt for the modern silent electric catamarans (operated by The Fjords) on the Nærøyfjord between Flåm and Gudvangen. They glide silently past waterfalls without emissions.'
      },
      {
        heading: '3. Living in a Lofoten Rorbu',
        body: 'Authentic rorbuer in Reine and Henningsvær feature full kitchens. Stock up on fresh fish, sourdough, and local dairy at local markets for leisurely waterfront breakfasts.'
      }
    ],
    femaleTravelChecklist: [
      'Norway is exceptionally safe with clean, well-lit train stations',
      'Download the Vy and En-tur transit apps for seamless train/bus schedules',
      'Tap-to-pay cards are used everywhere; cash is rarely needed',
      'Invest in breathable Gore-Tex rain jackets and sturdy walking shoes'
    ],
    recommendedStays: [
      {
        name: 'Henningsvær Bryggehotell',
        reason: 'Harbor-front timber haven in Lofoten’s most vibrant artisan village',
        link: '#/stays'
      }
    ]
  },
  {
    id: 'guide-sweden-archipelago-design',
    title: 'Stockholm & Archipelago Design Living Guide',
    subtitle: 'The art of fika, public island ferries, and curated neighborhood wandering',
    destinationId: 'sweden',
    destinationName: 'Sweden',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Experience Stockholm like a design insider: artisan bakeries in Södermalm, world-class vintage shops, and ferry trips to pine-clad islands.',
    sections: [
      {
        heading: '1. The Södermalm Neighborhood Routine',
        body: 'Spend mornings exploring the leafy streets around Mariatorget and Nytorget. Pair morning cardamom buns at Bageri Petrus with single-origin coffee at Drop Coffee.'
      },
      {
        heading: '2. Archipelago Hopping by Public Ferry',
        body: 'Board the classic Waxholmsbolaget passenger ferries from Strömkajen in central Stockholm. In under two hours, you can reach car-free islands like Grinda or Sandhamn for forest trails and sea saunas.'
      }
    ],
    femaleTravelChecklist: [
      'Completely cashless society — carry your bank card or mobile wallet',
      'Download the SL app for Stockholm metro, tram, bus, and ferry tickets',
      'Tap water is among the cleanest in Europe',
      'Safe, flat, and walkable at all hours'
    ],
    recommendedStays: [
      {
        name: 'Ett Hem',
        reason: 'The gold standard in boutique residential hospitality in Stockholm',
        link: '#/stays'
      }
    ]
  },
  {
    id: 'guide-china-first-timers-practical',
    title: 'The First-Timer’s Practical Guide to Modern China',
    subtitle: 'Apps, high-speed rail, mobile payments, and cultural navigation',
    destinationId: 'china',
    destinationName: 'China',
    readTime: '9 min read',
    heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Demystifying travel in China today: set up Alipay and WeChat Pay before you fly, master the 350 km/h bullet train system, and navigate ancient cities with ease.',
    sections: [
      {
        heading: '1. Setting Up Mobile Payments (Alipay & WeChat Pay)',
        body: 'Foreign credit cards (Visa/Mastercard) can now be linked directly to Alipay and WeChat Pay with zero transaction fees on purchases under 200 RMB (~$28). Complete this setup and identity verification before departing.'
      },
      {
        heading: '2. High-Speed Rail (CRH) Mastery',
        body: 'Book train tickets via Trip.com or the official 12306 app. Your ticket is linked directly to your passport number; simply scan your passport at the station gates.'
      },
      {
        heading: '3. Essential Connectivity & Navigation Apps',
        body: 'Purchase an international roaming eSIM before arrival. Inside Alipay, use the English-language Didi mini-app for hailing metered taxis.'
      }
    ],
    femaleTravelChecklist: [
      'Extremely high street safety day and night across all major cities',
      'Install translation apps with offline camera capability (e.g. Google/Apple Translate)',
      'Subways in Beijing, Shanghai, and Chengdu are clean with clear English signage',
      'Carry tissue packs as some historic restrooms do not provide paper'
    ],
    recommendedStays: [
      {
        name: 'Yangshuo Mountain Retreat',
        reason: 'Serene riverside eco-lodge nestled among limestone karst peaks',
        link: '#/stays'
      }
    ]
  },
  {
    id: 'guide-patagonia-trekking-first-timers',
    title: 'The Complete Patagonia Trekking & Gear Guide',
    subtitle: 'Choosing between Chile and Argentina, managing wind, and day-hiking logistics',
    destinationId: 'patagonia',
    destinationName: 'Patagonia',
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'A practical field manual for hiking Patagonia: layer systems, wind management, day-hiking from El Chaltén, and booking Torres del Paine.',
    sections: [
      {
        heading: '1. The 3-Layer Mountain Clothing System',
        body: 'Base layer: merino wool top and bottom. Mid-layer: breathable fleece or lightweight down. Outer layer: heavy-duty windproof and waterproof Gore-Tex shell.'
      },
      {
        heading: '2. Day-Hiking Paradise: El Chaltén',
        body: 'Stay in the village of El Chaltén and hike Laguna de los Tres and Laguna Torre without paying park entry fees or carrying heavy camping gear.'
      },
      {
        heading: '3. Border Crossing Biosecurity',
        body: 'Chilean and Argentine border agents enforce strict quarantine on fresh fruit, meats, and honey. Declare all food items to avoid severe fines.'
      }
    ],
    femaleTravelChecklist: [
      'Bring sturdy ankle-support trekking boots broken in before travel',
      'Trekking poles provide crucial stability in high Patagonian crosswinds',
      'El Chaltén and Puerto Natales have vibrant, supportive solo hiker communities',
      'Pack high-SPF sunscreen and polarized sunglasses for glacier glare'
    ],
    recommendedStays: [
      {
        name: 'Explora Torres del Paine',
        reason: 'All-inclusive luxury adventure lodge on Lake Pehoé inside the park',
        link: '#/stays'
      }
    ]
  },
  {
    id: 'guide-korea-seoul-neighborhoods-ktx',
    title: 'Seoul Neighborhoods & KTX High-Speed Rail Guide',
    subtitle: 'From historic hanok alleyways in Seochon to high-speed rail to Busan and Jeju',
    destinationId: 'south-korea',
    destinationName: 'South Korea',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'How to explore Seoul’s creative quarters on foot, master the spotless subway network, and ride KTX bullet trains across the Korean peninsula.',
    sections: [
      {
        heading: '1. Navigating with Naver Map & KakaoMap',
        body: 'Due to domestic mapping legislation, Google Maps does not support walking routes in South Korea. Download Naver Map or KakaoMap with English interface settings for pinpoint subway and walking directions.'
      },
      {
        heading: '2. The T-Money Transit Card',
        body: 'Pick up a reloadable T-Money card at Incheon Airport or any convenience store (CU, GS25). Tap on and off all subways, city buses, and taxis.'
      },
      {
        heading: '3. KTX Bullet Trains to Busan & Gyeongju',
        body: 'Board the KTX at Seoul Station to reach coastal Busan in 2 hours 15 minutes. Train seats are spacious, quiet, and equipped with fast Wi-Fi and power outlets.'
      }
    ],
    femaleTravelChecklist: [
      'Rated among the safest countries globally for solo female travelers',
      'Heated ondol floors in hanok guesthouses offer supreme comfort',
      'Cafés and convenience stores are open late with friendly service',
      'No tipping is required anywhere in South Korea'
    ],
    recommendedStays: [
      {
        name: 'Rakkojae Seoul Hanok',
        reason: '130-year-old traditional hanok with private pine courtyard and yellow-ochre sauna',
        link: '#/stays'
      }
    ]
  },
  {
    id: 'guide-australia-east-coast-tasmania',
    title: 'The Australian Coastal & Tasmania Road Trip Guide',
    subtitle: 'Ocean pools, scenic coastal drives, wildlife safety, and coffee culture',
    destinationId: 'australia',
    destinationName: 'Australia',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Plan an unforgettable Australian journey: ocean pool swimming in Sydney, driving the Grand Pacific Route, and exploring Tasmania’s wild east coast.',
    sections: [
      {
        heading: '1. Ocean Pool Culture & Beach Safety',
        body: 'Sydney’s coastline is dotted with heritage saltwater pools carved into sandstone headlands (Bondi, Bronte, Clovelly). On open surf beaches, always swim strictly between the red-and-yellow patrol flags.'
      },
      {
        heading: '2. Driving in Regional Australia',
        body: 'Drive on the left side of the road. In regional areas, avoid driving between dusk and dawn when kangaroos and native wildlife are active along road shoulders.'
      }
    ],
    femaleTravelChecklist: [
      'Australia is extremely safe with relaxed, welcoming locals',
      'Apply broad-spectrum 50+ SPF sunscreen every 2 hours',
      'Contactless card tap is standard everywhere',
      'Melbourne and Sydney have world-class specialty coffee roasteries'
    ],
    recommendedStays: [
      {
        name: 'Freycinet Coastal Lodge',
        reason: 'Eco-pavilions inside Freycinet National Park overlooking Great Oyster Bay',
        link: '#/stays'
      }
    ]
  },
  {
    id: 'guide-nz-south-island-slow-route',
    title: 'The New Zealand South Island Slow Route Guide',
    subtitle: 'Campervans, alpine passes, fiord cruises, and dark sky reserves',
    destinationId: 'new-zealand',
    destinationName: 'New Zealand',
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Your essential South Island travel blueprint: renting self-contained vehicles, driving scenic mountain passes, and discovering serene lake sanctuaries.',
    sections: [
      {
        heading: '1. Pacing Your South Island Drive',
        body: 'Do not rush. Mountain roads are winding and single-lane with frequent one-lane bridges. Allow 30% more time than GPS estimates to enjoy scenic viewpoints.'
      },
      {
        heading: '2. Dark Sky Stargazing at Lake Tekapo',
        body: 'The Aoraki Mackenzie International Dark Sky Reserve offers some of the clearest night skies in the world. Stay in Tekapo or Mount Cook Village for mind-blowing galactic views.'
      }
    ],
    femaleTravelChecklist: [
      'Exceptional personal safety and friendly community culture',
      'Declare all hiking boots and outdoor gear at customs biosecurity',
      'Download the CamperMate app for verified campsites and dump stations',
      'Drive on the left side of the road and give way at one-lane bridges'
    ],
    recommendedStays: [
      {
        name: 'Mahu Whenua Ridgeline Lodge',
        reason: 'Eco-sanctuary on 500 sq km of protected alpine country in Wanaka',
        link: '#/stays'
      }
    ]
  }
].map((g: any): Guide => ({
  ...g,
  authorName: g.authorName || 'Miley Rocha',
  authorRole: g.authorRole || 'Founder & Travel Editor',
  image: (g as any).image || g.heroImage,
  heroImage: g.heroImage || (g as any).image
}));
