import { Guide } from '../types';
import icelandTurfImg from '../assets/images/iceland_turf_house_field_1786971149571.jpg';
import swissTrainImg from '../assets/images/swiss_train_scenic_window_1786971618391.jpg';
import japanTrainImg from '../assets/images/japan_train_shinkansen_window_1786971632892.jpg';
import norwayFjordFerryImg from '../assets/images/norway_fjord_ferry_deck_1786971648308.jpg';
import swedenFikaImg from '../assets/images/sweden_fika_cardamom_coffee_1786971159560.jpg';
import chinaImg from '../assets/images/china_yangshuo_karst_1786971008164.jpg';
import australiaBayOfFiresImg from '../assets/images/australia_tasmania_bay_fires_1786971180115.jpg';
import newZealandImg from '../assets/images/new_zealand_wanaka_lake_1786971023438.jpg';
import liechtensteinImg from '../assets/images/liechtenstein_malbun_trail_1786971038343.jpg';

export const GUIDES: Guide[] = [
  // 1. ICELAND
  {
    id: 'guide-iceland-road-trip-essentials',
    title: 'The Essential Iceland Road Trip & Weather Field Guide',
    subtitle: 'From sub-arctic wind gear and gravel insurance to hot pot etiquette and road.is alerts',
    destinationId: 'iceland',
    destinationName: 'Iceland',
    readTime: '8 min read',
    heroImage: icelandTurfImg,
    image: icelandTurfImg,
    excerpt: 'Everything you need to know before driving Iceland: 4x4 rental choices, weather warning apps, geothermal pool culture, and cashless travel.',
    intro: 'Iceland rewards those who respect its weather and scale. Planning an unhurried road trip along the Ring Road or the South Coast requires practical forethought—from choosing the right vehicle protection to knowing why locals shower thoroughly before soaking in natural thermal hot pots.',
    sections: [
      {
        heading: '1. Vehicle Selection & Crucial Insurance',
        body: 'Even during summer, gravel roads and sudden wind gusts can test standard 2WD hatchbacks. If you plan to explore beyond Route 1 onto gravel trails or highland F-roads, rent a high-clearance 4x4 with comprehensive Gravel Protection (GP) and Sand/Ash Protection (SAD). When parking near coastlines, always hold the car door firmly with both hands—Icelandic gale winds are notorious for snapping door hinges backwards.',
        tips: [
          'Inspect door rubber seals and windshield chips thoroughly upon pickup.',
          'Never drive onto highland F-roads without a verified 4WD vehicle (it is illegal and voids all insurance).',
          'Keep your headlights switched on 24 hours a day as required by Icelandic law.'
        ]
      },
      {
        heading: '2. The Sacred Rules of Icelandic Geothermal Pools',
        body: 'Local municipal pools (sundlaugar) and wild geothermal hot pots are community living rooms where locals unwind after work. The absolute golden rule across all Icelandic pools is taking a thorough, naked shower with soap before putting on your swimwear. Icelanders take water purity seriously, and respectful compliance ensures you are warmly welcomed.',
        tips: [
          'Bring quick-dry towels and water-resistant footwear for slippery wooden walkways.',
          'Test wild hot spring temperatures with your hand before stepping in, as geothermal outputs can fluctuate rapidly.'
        ]
      },
      {
        heading: '3. Daily Weather & Road Safety Monitoring',
        body: 'Bookmark vedur.is (Icelandic Met Office) and safetravel.is on your phone. Weather in Iceland changes from radiant sunshine to horizontal sleet within minutes. Never drive into areas flagged with yellow or red weather warnings, regardless of how capable your vehicle seems.',
        tips: [
          'Download the 112 Iceland app to transmit GPS coordinates in emergencies.',
          'Always top up your fuel tank whenever the gauge drops below half, as rural petrol pumps can be 80 km apart.'
        ]
      }
    ],
    femaleTravelChecklist: [
      'Carry high-quality thermal base layers and a seam-sealed waterproof Gore-Tex shell',
      'Download the 112 Iceland emergency app and save offline Google Maps',
      'Contactless cards/Apple Pay are accepted for 100% of purchases (cash is never needed)',
      'Tap water across Iceland is crystal-pure volcanic spring water — bring a reusable bottle'
    ]
  },

  // 2. SWITZERLAND
  {
    id: 'guide-switzerland-train-journeys',
    title: 'The Swiss Train Mastery & Alpine Transit Field Guide',
    subtitle: 'Swiss Travel Pass mastery, car-free village funiculars, SBB luggage forwarding, and high-altitude packing',
    destinationId: 'switzerland',
    destinationName: 'Switzerland',
    readTime: '8 min read',
    heroImage: swissTrainImg,
    image: swissTrainImg,
    excerpt: 'How to glide effortlessly across the Swiss Alps: unlocking the SBB network, visiting car-free mountain villages like Mürren and Zermatt, and mastering alpine dining.',
    intro: 'Switzerland has engineered the world’s most punctual and panoramic transit network. With a single Swiss Travel Pass, you can transfer seamlessly from a double-decker express train to an alpine cogwheel railway, a mountain cable car, or a lake steamer—without waiting in a single ticket line.',
    sections: [
      {
        heading: '1. Unlocking the Swiss Travel Pass & SBB App',
        body: 'Download the official SBB Mobile app before arrival. The Swiss Travel Pass covers all mainline trains, city trams, yellow PostBuses, and lake boats, plus 500+ museums and generous discounts on high-mountain gondolas. You do not need seat reservations on standard domestic trains—simply step aboard and show your digital QR code to the conductor.',
        tips: [
          'Use the "EasyRide" or live timetable feature in the SBB app to see train formation and quiet coaches.',
          'For scenic routes like the GoldenPass or Glacier Express, book panoramic carriage seat reservations 2–3 months ahead in peak summer.'
        ]
      },
      {
        heading: '2. Navigating Car-Free Alpine Villages',
        body: 'Villages like Mürren, Gimmelwald, Wengen, and Zermatt ban combustion cars entirely. Arrive by train, then transfer to cogwheel rail or aerial cable cars. These villages have an extraordinary stillness in the evening after day-trippers depart, making them the best places to base your stay.',
        tips: [
          'Use SBB Station-to-Station luggage delivery if you want to hike between mountain huts without carrying heavy luggage.',
          'Wear broken-in hiking boots with Vibram soles for cobblestone village lanes and wet mountain trails.'
        ]
      },
      {
        heading: '3. Alpine Dining & Etiquette',
        body: 'When sharing a pot of authentic Swiss Gruyère or Vacherin fondue, tradition dictates drinking hot black tea or dry white wine (like Fendant). Avoid drinking iced water or beer with melted cheese to aid smooth digestion. Service charges are legally included in all bills, though rounding up 2–5 CHF for thoughtful service is appreciated.',
        tips: [
          'Supermarkets like Coop and Migros offer fresh artisanal cheeses, crusty sourdough, and local cured meats for scenic trail picnics.',
          'Every village fountain marked "Trinkwasser" or unmarked is clean, mineral-rich drinking water.'
        ]
      }
    ],
    femaleTravelChecklist: [
      'Switzerland is ranked among the safest countries globally with spotless, well-lit train hubs',
      'Download SBB Mobile and MeteoSwiss for precision hyper-local mountain weather radar',
      'Pack lightweight breathable layers; temperature can drop 15°C between valleys and summits',
      'Almost all shops, cable cars, and alpine refuges accept contactless cards or mobile pay'
    ]
  },

  // 3. JAPAN
  {
    id: 'guide-japan-shinkansen-onsen-etiquette',
    title: 'The Mindful Japan Transit & Onsen Etiquette Guide',
    subtitle: 'Digital IC cards (Suica/Pasmo), Shinkansen luggage rules, hot spring rituals, and konbini dining',
    destinationId: 'japan',
    destinationName: 'Japan',
    readTime: '9 min read',
    heroImage: japanTrainImg,
    image: japanTrainImg,
    excerpt: 'Essential practical intelligence for Japan: mastering the bullet train system, understanding sacred onsen bathing traditions, and traveling with ease.',
    intro: 'Traveling through Japan is a revelation in mindful efficiency and aesthetic harmony. From boarding high-speed bullet trains to soaking in centuries-old cedar onsens, knowing a few quiet cultural norms turns an ordinary visit into an unforgettable journey.',
    sections: [
      {
        heading: '1. Transit IC Cards & Shinkansen Luggage Rules',
        body: 'Add a digital Suica or Pasmo transit card to your Apple Wallet or Google Wallet before departing. You can tap your phone at turnstiles on all Tokyo and Kyoto subways, city buses, and even pay at convenience stores and station vending machines. When booking Tokaido-Sanyo Shinkansen bullet trains, remember that luggage with total dimensions (L+W+H) exceeding 160 cm requires a dedicated oversized baggage seat reservation.',
        tips: [
          'Take advantage of Takkyubin (Yamato luggage forwarding) to send large suitcases between cities overnight for around $15–$20.',
          'Keep your phone on silent ("Manner Mode") and avoid phone calls while on trains and subways.'
        ]
      },
      {
        heading: '2. Sacred Onsen Bathing Etiquette',
        body: 'Natural hot springs (onsen) and public baths (sento) require thorough washing before entering the soaking pool. Sit on the small wooden stools provided, wash your body and hair completely, and rinse all soap away. The mineral bathwater is solely for meditative soaking. Keep your modesty washcloth out of the hot spring water (place it on your head or beside the pool).',
        tips: [
          'If you have visible tattoos, book a ryokan with a private rental bath (kashikiri) or research tattoo-friendly onsens in advance.',
          'Hydrate generously with cold barley tea (mugicha) or fresh water after soaking.'
        ]
      },
      {
        heading: '3. Konbini & Ekiben Culture',
        body: 'Japanese convenience stores (7-Eleven, Lawson, FamilyMart) offer restaurant-quality seasonal foods: fresh onigiri rice balls wrapped in crisp nori, tamago egg sandwiches, and steaming oden broth in winter. When boarding a long-distance Shinkansen, buy an "ekiben" (station bento box) packed with regional delicacies to enjoy at your seat as the landscape glides by.',
        tips: [
          'Public trash bins are rare in Japanese cities—carry a small pouch in your daypack to hold your trash until you return to your hotel or station.',
          'There is zero tipping in Japan; exceptional service is provided as standard hospitality (omotenashi).'
        ]
      }
    ],
    femaleTravelChecklist: [
      'Japan is renowned for unmatched solo traveler safety at all hours of the day and night',
      'Major train lines offer dedicated Women-Only train cars during morning and evening rush hours',
      'Rent a pocket Wi-Fi router or install an international eSIM for continuous navigation in winding alleys',
      'Carry some 100-yen and 500-yen coins for temple admission and station luggage lockers'
    ]
  },

  // 4. NORWAY
  {
    id: 'guide-norway-fjord-slow-travel',
    title: 'The Slow Fjord & Lofoten Transit Field Guide',
    subtitle: 'Navigating scenic rail, silent electric catamarans, and remote coastal bus routes',
    destinationId: 'norway',
    destinationName: 'Norway',
    readTime: '7 min read',
    heroImage: norwayFjordFerryImg,
    image: norwayFjordFerryImg,
    excerpt: 'How to experience Norway\'s fjords using the Bergen Line railway, silent electric ferries, and village buses without tourist rush.',
    intro: 'Norway’s coastline stretches for thousands of miles of glacier-carved granite, dramatic fiords, and tranquil fishing archipelagos. Exploring slowly via public trains and electric ferries lets you experience the sheer majesty of the landscape in quiet contemplation.',
    sections: [
      {
        heading: '1. The Bergen Railway & Flåm Line',
        body: 'Book train tickets via Vy.no up to 90 days in advance for Minipris discounted fares. Sit on the left side traveling west from Oslo toward Bergen for breathtaking views across the Hardangervidda mountain plateau before descending into the fjords.',
        tips: [
          'At Myrdal station, connect to the vintage Flåm Railway which descends 866 meters through waterfalls down to the Aurlandsfjord.',
          'Download the Vy transit app to track train connections and store digital tickets.'
        ]
      },
      {
        heading: '2. Silent Electric Fjord Catamarans',
        body: 'Instead of crowded cruise ships, book tickets on the modern silent electric passenger catamarans (like Future of The Fjords) on the UNESCO-protected Nærøyfjord between Flåm and Gudvangen. They glide along glass-like fjord waters with zero engine vibrations or exhaust fumes.',
        tips: [
          'Step onto the outdoor observation deck early in the morning when morning mist clings to the 1,000-meter fjord walls.',
          'Ferry tickets include spacious indoor lounges with floor-to-ceiling panoramic glass windows.'
        ]
      },
      {
        heading: '3. Right to Roam (Allemannsretten) Etiquette',
        body: 'Norway’s outdoor access law gives everyone the right to walk and camp in uncultivated nature. In return, visitors are expected to practice strict leave-no-trace ethics: take all rubbish with you, respect farm fences, and avoid lighting campfires near forests during dry summer spells.',
        tips: [
          'Stock up on fresh sourdough bread, Norwegian brown goat cheese (brunost), and cloudberry jam at local Kiwi or Rema 1000 markets for trail lunches.',
          'Pack a windproof and waterproof outer layer even on sunny summer mornings.'
        ]
      }
    ],
    femaleTravelChecklist: [
      'Norway is exceptionally safe with clean, comfortable public transit at all hubs',
      'Download En-tur and Vy apps for nationwide multi-modal train, bus, and ferry timetables',
      'Completely cashless society — credit cards and Apple Pay are standard everywhere',
      'Pack sturdy Gore-Tex trail shoes with good grip for damp fjord trails'
    ]
  },

  // 5. SWEDEN
  {
    id: 'guide-sweden-archipelago-design',
    title: 'Stockholm & Archipelago Design Living Guide',
    subtitle: 'The art of fika, public island commuter ferries, and curated neighborhood wandering',
    destinationId: 'sweden',
    destinationName: 'Sweden',
    readTime: '6 min read',
    heroImage: swedenFikaImg,
    image: swedenFikaImg,
    excerpt: 'Experience Stockholm like a design insider: artisan bakeries in Södermalm, world-class vintage shops, and ferry trips to pine-clad islands.',
    intro: 'Sweden embodies the understated concept of *lagom*—the art of balanced, mindful living. In Stockholm, you can spend the morning discovering historic ceramics workshops and candlelit bakeries, and by afternoon be gliding on a public ferry past pine-covered granite islands.',
    sections: [
      {
        heading: '1. The Södermalm Neighborhood Routine',
        body: 'Spend unhurried mornings wandering the cobblestone streets around Mariatorget and Nytorget in Södermalm. Pop into independent craft studios, curated vintage stores, and artisan bakeries like Bageri Petrus or St. Paul Bageri for freshly baked sourdough cardamom buns (*kardemummabullar*).',
        tips: [
          'Pair your morning cardamom bun with a pour-over filter coffee for the true Swedish fika experience.',
          'Take a stroll along Monteliusvägen cliff path for a sweeping panoramic view across Lake Mälaren and City Hall.'
        ]
      },
      {
        heading: '2. Archipelago Hopping by Public Ferry',
        body: 'Board the classic Waxholmsbolaget commuter ferries from Strömkajen in central Stockholm. In under two hours, you can reach tranquil islands like Grinda, Sandhamn, or Utö. Walk among wild blueberries and pine forests, followed by a wood-fired sauna and a refreshing dip in the Baltic Sea.',
        tips: [
          'You can tap your credit card or SL transit card directly at the ferry boarding gate.',
          'Pack a thermos of coffee and cinnamon buns for an impromptu picnic on the smooth sun-warmed granite rocks.'
        ]
      }
    ],
    femaleTravelChecklist: [
      'Sweden is virtually 100% cashless — bring a contactless debit/credit card or Apple Pay',
      'Download the SL app for all Stockholm metro, tram, commuter train, and ferry routes',
      'Tap water in Sweden is among the purest in Europe; refill freely from any tap',
      'The city is flat, peaceful, and exceptionally walkable at all hours'
    ]
  },

  // 6. CHINA
  {
    id: 'guide-china-first-timers-practical',
    title: 'The First-Timer’s Practical Guide to Modern China',
    subtitle: 'Apps, high-speed rail, mobile payments, and cultural navigation',
    destinationId: 'china',
    destinationName: 'China',
    readTime: '9 min read',
    heroImage: chinaImg,
    image: chinaImg,
    excerpt: 'Demystifying travel in China today: set up Alipay and WeChat Pay before you fly, master the 350 km/h bullet train system, and navigate ancient cities with ease.',
    intro: 'Traveling in China today is a smooth experience when you have the right digital tools in place. From effortless mobile payments to the world’s most extensive 350 km/h bullet train network, here is your essential field guide for a seamless journey.',
    sections: [
      {
        heading: '1. Setting Up Mobile Payments (Alipay & WeChat Pay)',
        body: 'Foreign credit cards (Visa, Mastercard) can now be linked directly to the international versions of Alipay and WeChat Pay. There are zero transaction fees on purchases under 200 RMB (~$28). Complete identity verification in the apps before departure so you can scan QR codes for street food, tea houses, and subway turnstiles.',
        tips: [
          'Inside Alipay, use the built-in English Didi mini-app to hail metered taxis with upfront pricing.',
          'Activate the Alipay "Transport" QR code for seamless turnstile access across subways in Beijing, Shanghai, and Chengdu.'
        ]
      },
      {
        heading: '2. High-Speed Rail (CRH) Mastery',
        body: 'Book train tickets in advance via Trip.com or the official 12306 platform. Tickets are completely paperless and linked to your passport number. At the railway station, simply scan your physical passport at the automated gate to enter the platform.',
        tips: [
          'Arrive at train stations 30–45 minutes prior to departure for routine security screenings.',
          'High-speed trains are equipped with boiling water dispensers—bring your own tea leaves and a travel mug.'
        ]
      },
      {
        heading: '3. Connectivity & Essential Navigation Apps',
        body: 'Install an international roaming eSIM (such as Airalo or Holafly) before entering mainland China. International roaming eSIMs route data through foreign servers, keeping your messaging and navigation tools working smoothly without local restrictions.',
        tips: [
          'Use Apple Maps or Amap (Gaode) for reliable English walking and transit directions.',
          'Download offline translation apps with photo translation capability for reading traditional tea menus.'
        ]
      }
    ],
    femaleTravelChecklist: [
      'Remarkable street safety day and night across major metropolitan and rural regions',
      'Modern subways have spotless stations and clear bilingual English signage',
      'Carry a small pack of pocket tissues and wet wipes for historic sightseeing stops',
      'Always accept business cards and tea cups with both hands as a sign of respect'
    ]
  },

  // 7. AUSTRALIA
  {
    id: 'guide-australia-east-coast-tasmania',
    title: 'The Australian Coastal & Tasmania Road Trip Guide',
    subtitle: 'Ocean pool tides, scenic coastal drives, wildlife safety, and coffee culture',
    destinationId: 'australia',
    destinationName: 'Australia',
    readTime: '7 min read',
    heroImage: australiaBayOfFiresImg,
    image: australiaBayOfFiresImg,
    excerpt: 'Plan an unforgettable Australian journey: ocean pool swimming in Sydney, driving the Grand Pacific Route, and exploring Tasmania’s wild east coast.',
    intro: 'Australia’s travel magic is found along its vast coastal edges. From sunrise swims in historic ocean tidal pools to road trips through Tasmanian eucalyptus forests, here is how to experience the continent safely and unhurriedly.',
    sections: [
      {
        heading: '1. Ocean Pool Culture & Beach Safety',
        body: 'Australia’s coastline is dotted with heritage saltwater pools carved directly into sandstone cliffs (such as Bondi Icebergs, Bronte Baths, and Wylie’s Baths). On open surf beaches, always swim strictly between the red-and-yellow patrol flags where surf lifesavers monitor rip currents.',
        tips: [
          'Visit ocean pools at high tide in the morning for crisp, clean sea water without large afternoon crowds.',
          'Never turn your back on breaking ocean swells when walking along coastal rock platforms.'
        ]
      },
      {
        heading: '2. Driving in Regional Australia & Tasmania',
        body: 'Vehicles drive on the left side of the road. In regional areas and across Tasmania, avoid driving on highways between dusk and dawn when native wildlife (kangaroos, wallabies, wombats) are actively foraging along road shoulders.',
        tips: [
          'Distances between regional towns are vast; plan driving days with plenty of daylight buffer.',
          'Take a scenic detour along the Great Eastern Drive in Tasmania to discover empty white quartz beaches and orange lichen granite rocks.'
        ]
      }
    ],
    femaleTravelChecklist: [
      'Australia is safe and welcoming with a warm, laid-back community atmosphere',
      'Apply broad-spectrum 50+ SPF sunscreen every two hours (the Australian UV index is intense)',
      'Contactless card tap is standard for all cafés, public ferries, and boutique shops',
      'Melbourne and Sydney set the global benchmark for specialty pour-over and flat white coffee'
    ]
  },

  // 8. NEW ZEALAND
  {
    id: 'guide-nz-south-island-slow-route',
    title: 'The New Zealand South Island Slow Route Guide',
    subtitle: 'Campervans, alpine passes, fiord cruises, and dark sky reserves',
    destinationId: 'new-zealand',
    destinationName: 'New Zealand',
    readTime: '8 min read',
    heroImage: newZealandImg,
    image: newZealandImg,
    excerpt: 'Your essential South Island travel blueprint: renting self-contained vehicles, driving scenic mountain passes, and discovering serene lake sanctuaries.',
    intro: 'New Zealand (Aotearoa) is a sanctuary of dramatic glacial valleys, ancient beech forests, and sweeping open roads. Taking your time to navigate alpine routes and dark sky reserves will make your journey deeply restorative.',
    sections: [
      {
        heading: '1. Pacing Your South Island Drive',
        body: 'Do not rush. South Island roads are winding, scenic, and frequently feature single-lane bridges with designated right-of-way arrows. Allow 30% more time than digital GPS estimates so you can stop at scenic lookouts, roadside waterfalls, and fruit orchards.',
        tips: [
          'On single-lane bridges, check the road sign: the larger white arrow indicates who has right of way.',
          'Download the CamperMate app to locate verified campsites, public restrooms, and scenic rest stops.'
        ]
      },
      {
        heading: '2. Dark Sky Stargazing at Lake Tekapo',
        body: 'The Aoraki Mackenzie International Dark Sky Reserve offers some of the clearest, unpolluted night skies on the planet. Base yourself in Tekapo, Twizel, or Mount Cook Village to view the Southern Cross, the Magellanic Clouds, and the galactic core with the naked eye.',
        tips: [
          'Book a night session at the Mount John Observatory or simply walk along the lakeshore after 10 PM.',
          'Bring a warm down jacket and wool beanie for cold alpine night temperatures even in summer.'
        ]
      },
      {
        heading: '3. Strict Biosecurity at Arrival',
        body: 'New Zealand enforces strict biosecurity to protect its native ecosystems. Thoroughly clean all soil and plant debris from your hiking boots and tent pegs before packing. Declare all outdoor equipment and food items on your passenger arrival card.',
        tips: [
          'Failure to declare hiking gear or fresh food carries an immediate $400 NZD fine.',
          'Customs officers will inspect and sanitize clean outdoor footwear for you free of charge.'
        ]
      }
    ],
    femaleTravelChecklist: [
      'Exceptional personal safety, warm Kiwi hospitality, and supportive campervan community',
      'Download the CamperMate and Gaspy apps for verified campsites and best fuel prices',
      'Drive on the left side of the road and always pull over into slow-vehicle bays if traffic accumulates behind you',
      'Pack layered merino wool tops and waterproof hiking boots for ever-changing alpine weather'
    ]
  },

  // 9. LIECHTENSTEIN
  {
    id: 'guide-liechtenstein-alpine-trails-transit',
    title: 'The Liechtenstein Alpine Ridges & Transit Field Guide',
    subtitle: 'Liechtenstein Bus transit from Swiss rail hubs, the Fürstensteig trail, and Vaduz walks',
    destinationId: 'liechtenstein',
    destinationName: 'Liechtenstein',
    readTime: '6 min read',
    heroImage: liechtensteinImg,
    image: liechtensteinImg,
    excerpt: 'How to easily explore Europe’s fairy-tale Alpine principality: taking the Swiss PostBus connection, hiking high mountain ridgeways, and enjoying vineyard culture.',
    intro: 'Liechtenstein is a gem of dramatic limestone mountains and quiet Rhine Valley vineyards. Just a quick hop from Zurich or eastern Switzerland, it offers world-class alpine hiking and timeless village charm.',
    sections: [
      {
        heading: '1. Effortless Transit via Swiss Rail & LIEmobil Bus',
        body: 'Liechtenstein has no commercial airport, which keeps its mountain valleys serene. Take the SBB train from Zurich to Sargans or Buchs (Switzerland). Step right outside the train station onto the clean lime-green LIEmobil bus (Line 11 or 12), which whisks you into downtown Vaduz and up to the mountain village of Malbun in 20–35 minutes.',
        tips: [
          'The Swiss Travel Pass and GA travelcard are valid on all LIEmobil buses across Liechtenstein without extra payment.',
          'The official currency is the Swiss Franc (CHF), and contactless credit cards are accepted in all shops and cafés.'
        ]
      },
      {
        heading: '2. Hiking the High Fürstensteig Ridge',
        body: 'The Fürstensteig is one of the most exhilarating mountain paths in the Alps: a trail carved directly into sheer limestone cliff walls overlooking the entire Rhine Valley and Swiss mountain chains. Start in Gaflei and complete the loop through the Alpspitz and Drei Schwestern ridges.',
        tips: [
          'Wear high-traction hiking boots and use walking poles for secure footing along narrow rocky sections.',
          'Start hikes early in the morning when mountain air is crisp and views stretch all the way to Lake Constance.'
        ]
      },
      {
        heading: '3. Vaduz Castle & Vineyard Walks',
        body: 'While Vaduz Castle is the private residence of the Princely Family and closed to the public, the panoramic Schlosssteig walking trail winds up through beech forests to provide close-up views of the turreted fortress. Afterwards, stroll down to the Prince of Liechtenstein Winery (Hofkellerei) for a tasting of local Pinot Noir grown on sun-drenched terraced slopes.',
        tips: [
          'Visit the Liechtenstein National Museum and Postal Museum in the pedestrian center of Vaduz.',
          'Pick up an official souvenir passport stamp at the Liechtenstein Center on Städtle street.'
        ]
      }
    ],
    femaleTravelChecklist: [
      'One of the safest sovereign nations in the world with virtually zero street crime',
      'The entire country is connected by the clean, punctual LIEmobil PostBus network',
      'Drink directly from any public village spring fountain marked with clean mountain water',
      'English is widely and warmly spoken alongside local Alemannic German'
    ]
  }
].map((g: any): Guide => ({
  ...g,
  authorName: g.authorName || 'Miley Rocha',
  authorRole: g.authorRole || 'Founder & Travel Editor',
  image: (g as any).image || g.heroImage,
  heroImage: g.heroImage || (g as any).image
}));

