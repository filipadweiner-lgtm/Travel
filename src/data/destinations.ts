import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'iceland',
    slug: 'iceland',
    name: 'Iceland',
    country: 'Iceland',
    tag: 'Black volcanic sands, quiet geothermal pools & vast arctic light',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=80',
    blurb: 'A landscape of elemental contrast where steaming hot springs cut through glacial plains, dramatic sea cliffs host nesting puffins, and silence stretches for miles.',
    openingEditorial: 'Iceland is less about visiting individual attractions and more about letting your internal clock adjust to weather, daylight, and sheer geographic scale. Outside Reykjavík, civilization drops away quickly into moss-covered lava fields, cascading waterfalls, and obsidian shorelines.',
    whereIWouldStay: 'A rural guesthouse along the South Coast near Vík or a secluded fjord cottage in the Snæfellsnes Peninsula. This allows you to witness early morning mist over black sands before tour buses arrive from the capital.',
    neighborhoods: [
      {
        name: 'Reykjavík (Vesturbær & Grandi)',
        vibe: 'Creative, coastal, walkable and intimate',
        bestFor: 'First arrivals, specialty bakeries, design boutiques, and harbor walks',
        whyChoose: 'Vesturbær gives you quiet residential streets, neighborhood geothermal pools like Vesturbæjarlaug, and easy walking access to the city center.',
        avoidIf: 'You want complete wilderness right outside your door.'
      },
      {
        name: 'South Coast & Vík',
        vibe: 'Dramatic basalt columns, roaring waterfalls and glacial lagoons',
        bestFor: 'Photographers, hikers, and travelers exploring the classic southern route',
        whyChoose: 'Base near Vík or Kirkjubæjarklaustur to be positioned for Jökulsárlón Glacier Lagoon and Diamond Beach at sunrise.',
        avoidIf: 'You prefer vibrant evening dining and nightlife.'
      },
      {
        name: 'Snæfellsnes Peninsula',
        vibe: 'Iceland in miniature: volcanic craters, fishing villages, and glacier views',
        bestFor: 'Slow road trippers looking for remote beauty without driving the entire Ring Road',
        whyChoose: 'Uncrowded coastal paths, black pebble beaches at Djúpalónssandur, and quiet family-run farms.',
        avoidIf: 'You require immediate proximity to international airport links.'
      },
      {
        name: 'Akureyri & Lake Mývatn',
        vibe: 'Geothermal craters, pseudo-craters, and northern fjord tranquility',
        bestFor: 'Summer exploration, winter aurora watchers, and geothermal bath lovers',
        whyChoose: 'Mývatn Nature Baths offer a peaceful alternative to the Blue Lagoon with fewer crowds and stark volcanic views.',
        avoidIf: 'You only have a short 3-day stopover.'
      }
    ],
    whatTravelersSaySummary: 'Travelers consistently describe Iceland as awe-inspiring and visually unmatched. The most common advice centers around respecting shifting weather: winds can be ferocious, waterproof layers are mandatory, and checking road.is before setting out in winter is non-negotiable.',
    whatToSkip: [
      'Over-scheduled single-day Golden Circle express bus marathons where you spend 7 hours in transit and only 20 minutes at each site.',
      'Relying solely on tourist restaurants on Laugavegur in Reykjavík when neighborhood bakeries and harbor fish shacks offer far fresher fare.',
      'Underestimating winter driving conditions: avoid driving in blizzard warnings even with a 4x4.'
    ],
    thingsWorthDoing: [
      {
        title: 'Dawn at Jökulsárlón & Diamond Beach',
        description: 'Watching translucent iceberg fragments wash ashore on pitch-black volcanic sand as morning light filters through the mist.',
        whyWorthIt: 'Arriving before 8:30 AM means you hear only the gentle lap of ocean waves and the cracking of ancient glacier ice.'
      },
      {
        title: 'Local Geothermal Soaking at Vesturbæjarlaug',
        description: 'Skipping the commercial crowds for Reykjavík’s beloved neighborhood public hot pool.',
        whyWorthIt: 'Experience genuine Icelandic community culture where locals of all generations gather to converse in 40°C mineral water.'
      },
      {
        title: 'Hike into the Fjaðrárgljúfur Canyon',
        description: 'An ancient, winding canyon carved through volcanic rock draped in lush emerald moss.',
        whyWorthIt: 'The viewing platforms provide breathtaking perspective over the winding glacial stream below.'
      }
    ],
    placesToEat: [
      {
        name: 'Brauð & Co',
        type: 'Artisan sourdough & warm cinnamon-cardamom rolls',
        neighborhood: 'Reykjavík Center',
        whySpecial: 'Watch bakers knead fresh rye loaves through the open window; best enjoyed warm on a crisp arctic morning.'
      },
      {
        name: 'Kaffi Kú',
        type: 'Farm-to-table café above a modern dairy farm',
        neighborhood: 'Near Akureyri',
        whySpecial: 'Enjoy fresh farm waffle treats with homemade cream overlooking the tranquil northern pastures.'
      },
      {
        name: 'Smidjan Brugghus',
        type: 'Craft brewery & local comfort burgers',
        neighborhood: 'Vík í Mýrdal',
        whySpecial: 'A cozy sanctuary after a blustery afternoon exploring the black sand beach at Reynisfjara.'
      }
    ],
    gettingAround: {
      recommendation: 'Rent a reliable 4x4 vehicle with gravel and ash insurance protection for freedom along the Ring Road and coastal fjords.',
      airportTransit: 'Flybus or Airport Direct coaches connect Keflavík Airport (KEF) to central Reykjavík in 45 minutes with drop-offs near accommodation stops.',
      eveningWalkingAdvice: 'Reykjavík is rated among the safest cities in the world. Late-night walks around Tjörnin pond or the harbor are calm and peaceful year-round.'
    },
    goodToKnow: [
      'Last verified: March 2026. Weather conditions change rapidly in all seasons; always check vedur.is and safetravel.is before long drives.',
      'Iceland is virtually 100% cashless: contactless credit and debit cards are accepted everywhere from parking meters to remote farm stalls.',
      'Never drive off marked roads: fragile arctic moss takes decades to recover from tire treads and off-roading is strictly illegal.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Consistently ranked #1 globally for gender equality and safety; an ideal destination for solo female travelers.',
      eveningAtmosphere: 'Very respectful and relaxed street culture with zero harassment in public spaces.',
      arrivalTips: 'If arriving on early morning transatlantic flights at KEF (often 5:00 AM), pre-book airport thermal bath entry or arrange early hotel check-in to rest.',
      neighborhoodAdvice: 'Vesturbær and the 101 downtown area are flat, safe, and easily walked at any hour.'
    },
    relatedHideoutIds: ['hideout-iceland-south-cabin', 'hideout-iceland-snaefellsnes-retreat'],
    relatedStayIds: ['stay-iceland-ion-adventure', 'stay-iceland-hotel-rang'],
    relatedStoryIds: ['story-iceland-road-trip', 'story-iceland-more-than-reykjavik'],
    relatedGuideIds: ['guide-iceland-road-trip-essentials']
  },
  {
    id: 'norway',
    slug: 'norway',
    name: 'Norway',
    country: 'Norway',
    tag: 'Dramatic sea fjords, arctic fishing cabins & slow mountain railways',
    heroImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1600&q=80',
    blurb: 'Deep glacial valleys carving through granite peaks, wooden rorbuer cabins perched over mirror-still waters, and quiet coastal journeys on public ferries.',
    openingEditorial: 'Norway rewards the traveler who slows down. The beauty of this country is not something you rush past; it is best absorbed from the wooden deck of a fjord ferry in early morning, or beside a crackling woodstove in a Lofoten fishing cabin while rain patters on the turf roof.',
    whereIWouldStay: 'A converted traditional red rorbu cabin in Reine or Henningsvær in the Lofoten Islands, or a quiet fjord-side guesthouse along the Aurlandsfjord near Flåm.',
    neighborhoods: [
      {
        name: 'Bergen (Nordnes & Sandviken)',
        vibe: 'Historic cobblestones, wooden wharf houses, and misty fjord gateways',
        bestFor: 'Starting fjord expeditions, seafood lovers, and scenic funicular walks',
        whyChoose: 'Nordnes offers quiet residential alleys lined with whitewashed 18th-century timber houses away from the Bryggen crowds.',
        avoidIf: 'You dislike frequent rainfall (embrace good rain gear as locals do).'
      },
      {
        name: 'Lofoten Islands (Henningsvær & Reine)',
        vibe: 'Dramatic razor-sharp peaks rising straight out of Arctic waters',
        bestFor: 'Hikers, photographers, midnight sun, and winter northern lights',
        whyChoose: 'Authentic working fishing villages with incredible contemporary art galleries and artisan coffee roasters.',
        avoidIf: 'You do not plan on renting a car or navigating rural bus schedules.'
      },
      {
        name: 'Oslo (Grünerløkka & Frogner)',
        vibe: 'World-class contemporary architecture, sauna culture, and forest trails',
        bestFor: 'Design enthusiasts, urban sauna rituals, and coffee culture',
        whyChoose: 'Grünerløkka is packed with independent vintage shops, riverside parks, and specialty bakeries.',
        avoidIf: 'You want immediate wilderness on day one.'
      },
      {
        name: 'Tromsø & Senja',
        vibe: 'Arctic wilderness, whale watching, and high-latitude aurora viewing',
        bestFor: 'Winter northern lights expeditions and wild coastal trekking',
        whyChoose: 'Tromsø provides a lively cultural base with cable car views, while nearby Senja offers pristine empty fjords.',
        avoidIf: 'You are seeking warm summer weather.'
      }
    ],
    whatTravelersSaySummary: 'Travelers praise Norway’s immaculate public transport, unparalleled natural beauty, and clean mountain air. The primary recurring advice is to budget realistically for dining and to book fjord ferries and trains well in advance during peak summer.',
    whatToSkip: [
      'Rushing the Bergen-to-Oslo journey by plane when the Bergen Line and Flåm Railway offer one of the world\'s most magnificent train rides.',
      'Eating every meal at tourist hotels when local supermarkets (Rema 1000, Meny) offer exceptional smoked salmon, sourdough, and brown goat cheese (Brunost) for scenic picnics.',
      'Attempting Trolltunga hike without proper mountain boots and alpine layers.'
    ],
    thingsWorthDoing: [
      {
        title: 'Morning Fjord Sauna in Oslo or Flåm',
        description: 'Wood-fired floating sauna session followed by a refreshing plunge into the crisp, clean fjord water.',
        whyWorthIt: 'The ultimate Norwegian wellness ritual that energizes body and mind before a day of exploring.'
      },
      {
        title: 'The Bergen Railway & Nærøyfjord Electric Ferry',
        description: 'Journeying across the Hardangervidda plateau down to the UNESCO-protected narrow Nærøyfjord on a silent electric catamaran.',
        whyWorthIt: 'Gliding silently past 1,000-meter waterfalls with zero engine noise is unforgettable.'
      },
      {
        title: 'Midnight Sun Hike up Reinebringen',
        description: 'Ascending the stone Sherpa staircase for a panoramic 360-degree overlook across the Reinefjord at midnight in June.',
        whyWorthIt: 'The golden arctic light casts a surreal pink glow over jagged mountain peaks and turquoise coves.'
      }
    ],
    placesToEat: [
      {
        name: 'Trevarefabrikken',
        type: 'Oceanfront cultural venue, natural wine & wood-fired pizza',
        neighborhood: 'Henningsvær, Lofoten',
        whySpecial: 'A revitalized 1930s cod liver oil factory with ocean-view saunas, local craft beer, and community warmth.'
      },
      {
        name: 'Tim Wendelboe',
        type: 'World-renowned micro-roastery & espresso bar',
        neighborhood: 'Grünerløkka, Oslo',
        whySpecial: 'Uncompromising dedication to single-origin specialty coffees served in tasting flights.'
      },
      {
        name: '1881 Bryggekanten',
        type: 'Traditional fresh Arctic cod & fish soup',
        neighborhood: 'Kabelvåg, Lofoten',
        whySpecial: 'Set in a historic waterfront warehouse with century-old timber beams and honest local recipes.'
      }
    ],
    gettingAround: {
      recommendation: 'Use the superb Vy rail network for city connections, and rent a car for exploring the remote fjord arms and Lofoten peninsulas.',
      airportTransit: 'The Flytoget high-speed train connects Oslo Gardermoen (OSL) to Oslo Central Station in just 19 minutes.',
      eveningWalkingAdvice: 'Norwegian cities and towns are exceptionally safe at all hours. Street lighting is excellent and pedestrian zones are well-maintained.'
    },
    goodToKnow: [
      'Last verified: February 2026. Allemannsretten (Right to Roam) grants the public freedom to walk and camp respectfully in open countryside.',
      'Norway is almost entirely cashless: credit cards and mobile tap payments are standard even in remote cabins.',
      'Alcohol above 4.7% ABV is sold exclusively through state-run Vinmonopolet stores with limited weekend opening hours.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Extremely safe, progressive, and welcoming for solo female travelers.',
      eveningAtmosphere: 'Relaxed, civilized, and comfortable for solo dining and late-night walking.',
      arrivalTips: 'Train stations in Oslo, Bergen, and Trondheim are central and clean; step off the platform directly into central hotels.',
      neighborhoodAdvice: 'Nordnes in Bergen and Frogner/Majorstuen in Oslo offer quiet, leafy evening walks.'
    },
    relatedHideoutIds: ['hideout-norway-lofoten-rorbu', 'hideout-norway-fjord-cabin'],
    relatedStayIds: ['stay-norway-henningsvaer-brygge', 'stay-norway-flam-boutique'],
    relatedStoryIds: ['story-norway-stay-longer', 'story-norway-fjords-or-lofoten'],
    relatedGuideIds: ['guide-norway-fjord-slow-travel']
  },
  {
    id: 'sweden',
    slug: 'sweden',
    name: 'Sweden',
    country: 'Sweden',
    tag: 'Minimalist design, serene archipelago islands & arctic forest retreats',
    heroImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1600&q=80',
    blurb: 'A masterclass in understated elegance: pine forests meeting peaceful archipelagos, candlelit fika rituals in old wooden bakeries, and clean Nordic craftsmanship.',
    openingEditorial: 'Sweden embodies the philosophy of *lagom* — just the right amount. There is an effortless balance between refined city culture and immediate access to pristine nature. In Stockholm, you can enjoy world-class contemporary galleries in the morning and be kayaking through quiet granite islands by the afternoon.',
    whereIWouldStay: 'A quiet design hotel in Stockholm’s Södermalm or Skeppsholmen, or a secluded timber cabin in Swedish Lapland near Abisko or Kiruna.',
    neighborhoods: [
      {
        name: 'Stockholm (Södermalm & Gamla Stan)',
        vibe: 'Creative boutiques, wooden 18th-century cottages, and water views',
        bestFor: 'Vintage design lovers, café culture, and solo neighborhood wandering',
        whyChoose: 'Mariatorget and Nytorget in Södermalm offer tree-lined parks, independent ceramics studios, and relaxed natural wine spots.',
        avoidIf: 'You prefer large commercial chain department stores.'
      },
      {
        name: 'Stockholm Archipelago (Sandhamn & Grinda)',
        vibe: 'Smooth granite rocks, pine air, and timeless wooden sailing docks',
        bestFor: 'Summer swimming, island-hopping by public Waxholmsbolaget ferry, and sauna retreats',
        whyChoose: 'Step off the ferry into car-free island calm where nature trails weave through blueberry patches.',
        avoidIf: 'You need fast-paced urban nightlife.'
      },
      {
        name: 'Swedish Lapland (Kiruna & Abisko)',
        vibe: 'Pristine sub-arctic tundra, aurora skies, and Sami heritage',
        bestFor: 'Winter northern lights, snowshoeing, and dog sledding adventures',
        whyChoose: 'Abisko National Park has one of the world’s most reliable microclimates for viewing the Aurora Borealis.',
        avoidIf: 'You are unprepared for sub-zero winter temperatures.'
      },
      {
        name: 'Gotland & Visby',
        vibe: 'Medieval limestone walls, wild beaches, and summer artisan culture',
        bestFor: 'Romantic summer escapes, cycling through wildflower meadows, and coastal gastronomy',
        whyChoose: 'Visby’s UNESCO-listed rose-draped cobblestones combined with the raw limestone sea stacks (raukar) of Fårö.',
        avoidIf: 'Visiting off-season in late November when many island venues close.'
      }
    ],
    whatTravelersSaySummary: 'Travelers love Sweden’s relaxed safety, thoughtful design aesthetics, and the universal warmth of the *fika* (coffee & pastry) tradition. The most helpful note is to make use of the inexpensive public ferries to explore the archipelagos.',
    whatToSkip: [
      'Taxis from Arlanda Airport when the Arlanda Express or commuter train reaches Stockholm Central in 18 minutes.',
      'Staying only on the main commercial pedestrian street (Drottninggatan) in Stockholm.',
      'Skipping the fika ritual: taking time for coffee and a cardamom bun is a fundamental part of the culture.'
    ],
    thingsWorthDoing: [
      {
        title: 'Morning Cardamom Bun & Coffee at Fabrique or Bageri Petrus',
        description: 'Savoring a freshly baked sourdough cardamom twist with a pour-over coffee in a cozy candlelit café.',
        whyWorthIt: 'The aroma of freshly ground green cardamom and caramelized sugar sets the tone for a restorative morning.'
      },
      {
        title: 'Public Ferry Hop to Sandhamn Island',
        description: 'Taking the vintage Waxholm ferry through thousands of pine-forested granite islands to the outer archipelago.',
        whyWorthIt: 'A quintessential Swedish summer journey where you can walk through quiet pine woods to secluded rocky swimming spots.'
      },
      {
        title: 'Aurora Night Sky Observation at Abisko Sky Station',
        description: 'Riding the open-air chairlift up Mount Nuolja into the dark arctic sky with zero light pollution.',
        whyWorthIt: 'The clear, dry air creates unmatched visibility for dancing emerald aurora ribbons.'
      }
    ],
    placesToEat: [
      {
        name: 'Rosendals Trädgård',
        type: 'Organic greenhouse café & biodynamic garden',
        neighborhood: 'Djurgården, Stockholm',
        whySpecial: 'Dine inside light-filled glasshouses surrounded by orchards, rose gardens, and artisan wood-fired bread.'
      },
      {
        name: 'Woodstockholm',
        type: 'Creative bistro & custom furniture studio',
        neighborhood: 'Mosebacke, Södermalm',
        whySpecial: 'Ever-evolving thematic menu using hyper-seasonal Swedish ingredients in a warm, communal space.'
      },
      {
        name: 'Stora Bageriet',
        type: 'Historic bakery & artisan breakfast',
        neighborhood: 'Östermalm, Stockholm',
        whySpecial: 'Set in a 17th-century former royal bakery with vaulted brick ceilings and stellar pastries.'
      }
    ],
    gettingAround: {
      recommendation: 'Stockholm’s SL public transit card covers metro (famous for its underground art), buses, trams, and urban commuter ferries.',
      airportTransit: 'Arlanda Express train links Arlanda Airport (ARN) to Stockholm Central in 18 minutes; Flygbussarna airport coaches are an economical alternative.',
      eveningWalkingAdvice: 'Stockholm is clean, exceptionally safe, and pedestrian-friendly. Södermalm and Gamla Stan remain calm well past midnight.'
    },
    goodToKnow: [
      'Last verified: January 2026. Cash is almost non-existent; cards and mobile payments are required at virtually all establishments.',
      'Tap water in Sweden is among the purest in the world; carry a refillable water bottle everywhere.',
      'Sunday hours: many neighborhood boutiques and bakeries close earlier on Sundays (around 4:00 PM).'
    ],
    femaleTravelNotes: {
      generalVibe: 'Extremely high standard of safety, personal respect, and gender equality.',
      eveningAtmosphere: 'Relaxed, well-illuminated streets with casual, welcoming wine bars and cafés.',
      arrivalTips: 'Stockholm Central Station is easy to navigate with direct underground connections to the T-Bana metro lines.',
      neighborhoodAdvice: 'Mariatorget and Skeppsholmen are delightful, quiet areas for solo female travelers.'
    },
    relatedHideoutIds: ['hideout-sweden-archipelago-cabin', 'hideout-sweden-stockholm-loft'],
    relatedStayIds: ['stay-sweden-ett-hem', 'stay-sweden-treehotel'],
    relatedStoryIds: ['story-sweden-different-stockholm', 'story-sweden-lapland-list'],
    relatedGuideIds: ['guide-sweden-archipelago-design']
  },
  {
    id: 'china',
    slug: 'china',
    name: 'China',
    country: 'China',
    tag: 'Ancient river towns, dramatic karst peaks & high-speed rail journeys',
    heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=80',
    blurb: 'A destination of staggering historical depth and natural wonder: from mist-shrouded limestone towers in Yangshuo to tranquil classical gardens in Suzhou and futuristic high-speed rail networks.',
    openingEditorial: 'Traveling through China today is a mesmerizing contrast of ancient traditions and hyper-modern infrastructure. The high-speed rail network makes gliding past mountain landscapes effortless, while morning walks through traditional courtyard hutongs and riverside tea houses offer glimpses of everyday life that have endured for centuries.',
    whereIWouldStay: 'A restored Qing-dynasty courtyard hotel in Beijing’s Dongcheng district, or a quiet boutique retreat nestled among bamboo groves and karst mountains along the Yulong River in Yangshuo.',
    neighborhoods: [
      {
        name: 'Yangshuo & Guilin (Yulong River Valley)',
        vibe: 'Dramatic limestone karst peaks, bamboo rafts, and emerald river bends',
        bestFor: 'Nature lovers, cycling through rural villages, and peaceful mountain retreats',
        whyChoose: 'Staying in the countryside outside Yangshuo town provides profound morning quiet with water buffalo grazing along the riverbanks.',
        avoidIf: 'You want fast-paced shopping and mega-mall entertainment.'
      },
      {
        name: 'Beijing (Dongcheng Hutongs)',
        vibe: 'Traditional grey-brick alleyways, courtyard homes, and neighborhood street life',
        bestFor: 'History, tea culture, street food discovery, and Forbidden City proximity',
        whyChoose: 'Hutongs around Guozijian (Imperial Academy) and Wudaoying are filled with independent coffee bars, vegetarian eateries, and tranquil courtyards.',
        avoidIf: 'You require American-style suburban hotel layouts.'
      },
      {
        name: 'Shanghai (Former French Concession)',
        vibe: 'Tree-lined plane tree avenues, Art Deco villas, and stylish bakeries',
        bestFor: 'Walking tours, boutique shopping, contemporary art galleries, and jazz clubs',
        whyChoose: 'Shaded sidewalks, restored lane houses (shikumen), and a thriving specialty coffee culture.',
        avoidIf: 'You are looking for ancient imperial monuments.'
      },
      {
        name: 'Yunnan (Dali & Lijiang Ancient Towns)',
        vibe: 'Cobblestone canals, mountain breezes, and vibrant ethnic minority heritage',
        bestFor: 'Slow travel, mountain tea plantations, and artisan craft markets',
        whyChoose: 'Gentle climate near Erhai Lake with morning farmer markets and slow-paced courtyard living.',
        avoidIf: 'You only have a 4-day trip.'
      }
    ],
    whatTravelersSaySummary: 'Travelers are consistently impressed by the speed and comfort of the high-speed rail system, the remarkable safety of Chinese cities day and night, and the incredible diversity of regional cuisines. The most crucial preparation tip is setting up mobile payment apps (Alipay and WeChat Pay linked to foreign credit cards) before departure.',
    whatToSkip: [
      'Badaling section of the Great Wall at midday; choose the more scenic, less commercial Mutianyu or Jinshanling sections instead.',
      'Relying on cash or foreign plastic cards at local food stalls — almost all transactions require mobile payment QR codes.',
      'Booking domestic flights for journeys under 4-5 hours when high-speed trains (CRH) are faster, more punctual, and significantly more scenic.'
    ],
    thingsWorthDoing: [
      {
        title: 'Sunrise Walk Along the Mutianyu Great Wall',
        description: 'Walking the stone battlements as morning mist lifts over the forested ridges with few other visitors in sight.',
        whyWorthIt: 'Experiencing the grandeur of the wall in silence gives you a profound appreciation of its historic scale.'
      },
      {
        title: 'Bamboo Raft Drift on the Yulong River at Dawn',
        description: 'Gliding silently on a traditional non-motorized bamboo raft past reflection ponds and limestone peaks in Yangshuo.',
        whyWorthIt: 'The soft morning light on the river feels like stepping directly into a classical Chinese watercolor painting.'
      },
      {
        title: 'Tea Tasting in a Historic Hangzhou Pavilion',
        description: 'Sipping fresh Longjing (Dragon Well) green tea beside the tea terraces of Meijiawu village near West Lake.',
        whyWorthIt: 'Learn the delicate ritual of water temperature and leaf infusion from local tea masters.'
      }
    ],
    placesToEat: [
      {
        name: 'King\'s Joy (Jing Zhao Yin)',
        type: 'Refined plant-based gastronomy & courtyard tea',
        neighborhood: 'Dongcheng, Beijing',
        whySpecial: 'Set in a stunning glass-covered courtyard beside the Lama Temple with harp music and seasonal organic ingredients.'
      },
      {
        name: 'Lost Heaven',
        type: 'Folk Yunnan cuisine & wild mountain mushroom dishes',
        neighborhood: 'Former French Concession, Shanghai',
        whySpecial: 'Atmospheric lantern-lit interiors serving fragrant banana leaf grilled fish and Dali goat cheese.'
      },
      {
        name: 'Sichuan Folk Teahouse & Noodle Bar',
        type: 'Hand-pulled Dan Dan noodles & jasmine tea',
        neighborhood: 'People’s Park, Chengdu',
        whySpecial: 'Experience the relaxed Chengdu teahouse culture with bamboo armchairs and boiling copper kettles.'
      }
    ],
    gettingAround: {
      recommendation: 'China\'s high-speed train network (12306 official app or Trip.com) is world-class, clean, and punctual. Within cities, extensive subways have clear bilingual signage.',
      airportTransit: 'Shanghai Maglev train connects Pudong Airport (PVG) to the subway network in 8 minutes at 300+ km/h; Beijing Capital and Daxing airports have dedicated express subways.',
      eveningWalkingAdvice: 'Chinese cities have some of the lowest violent crime rates globally. Solo evening walks through well-lit streets and bustling night markets are very safe.'
    },
    goodToKnow: [
      'Last verified: March 2026. Visa-free transit and 15/30-day visa-free entry policies apply to citizens of numerous European and Asian nations; always verify current requirements with your local Chinese consulate or official embassy portal.',
      'Connectivity: download and set up an eSIM with international data roaming (which bypasses local firewall restrictions) before arrival, alongside Alipay and WeChat Pay with your foreign bank card linked.',
      'Language: install translation apps with offline camera capability (such as Google Translate or Apple Translate) for effortless menu and sign reading.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Extremely safe street environment with virtually zero street harassment.',
      eveningAtmosphere: 'Public squares remain lively until late with evening dance groups and families dining outdoors.',
      arrivalTips: 'Download the Didi rideshare app (available in English inside Alipay) for reliable point-to-point transfers from train stations.',
      neighborhoodAdvice: 'The Former French Concession in Shanghai and Guozijian in Beijing are peaceful, leafy, and exceptionally safe.'
    },
    relatedHideoutIds: ['hideout-china-yangshuo-retreat', 'hideout-china-beijing-courtyard'],
    relatedStayIds: ['stay-china-yangshuo-mountain', 'stay-china-shanghai-lane-house'],
    relatedStoryIds: ['story-china-two-weeks-plan', 'story-china-beyond-beijing-shanghai'],
    relatedGuideIds: ['guide-china-first-timers-practical']
  },
  {
    id: 'patagonia',
    slug: 'patagonia',
    name: 'Patagonia',
    country: 'Chile & Argentina',
    tag: 'Towering granite massifs, sweeping glacial icefields & wild pampa winds',
    heroImage: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1600&q=80',
    blurb: 'A wild, untamed frontier spanning the southernmost reaches of South America: turquoise glacial lakes, roaring katabatic winds, soaring condors, and the iconic granite spires of Fitz Roy and Torres del Paine.',
    openingEditorial: 'Patagonia is not a place you simply visit — it is a wilderness that tests you, humbles you, and stays in your memory forever. Spanning both Chile and Argentina, this vast southern tip of the continent offers an exhilarating sense of space. Here, the weather is the master artist, shifting from sunshine to mountain snowfall in a matter of hours.',
    whereIWouldStay: 'An eco-lodge or rustic yurt with panoramic glacier views in Torres del Paine (Chile), or a cozy wooden mountain lodge in El Chaltén (Argentina) where hiking trails start right at your front door.',
    neighborhoods: [
      {
        name: 'Torres del Paine & Puerto Natales (Chile)',
        vibe: 'Iconic granite horns, azure glacial lakes, and sustainable eco-lodges',
        bestFor: 'Multi-day W-Trek trekkers, wildlife photography (guanacos & pumas), and luxury remote lodges',
        whyChoose: 'Staying inside or on the border of the national park puts you at the foot of the iconic Cuernos del Paine.',
        avoidIf: 'You dislike hiking in unpredictable mountain winds.'
      },
      {
        name: 'El Chaltén & Fitz Roy (Argentina)',
        vibe: 'Laid-back trekking village, artisan microbreweries, and world-class trailheads',
        bestFor: 'Independent day hikers, solo travelers, and relaxed mountain atmosphere',
        whyChoose: 'The National Trekking Capital of Argentina: all major trails to Laguna de los Tres (Fitz Roy) and Laguna Torre start directly from the village edge with zero park fees.',
        avoidIf: 'You require high-end luxury shopping or airport proximity.'
      },
      {
        name: 'El Calafate & Perito Moreno (Argentina)',
        vibe: 'Lakeside town, calving glaciers, and gateway to southern icefields',
        bestFor: 'Witnessing the colossal Perito Moreno Glacier up close and lake navigation',
        whyChoose: 'Marvel at thunderous glacier calving events from well-designed wooden boardwalk systems.',
        avoidIf: 'You only want rugged backcountry camping.'
      },
      {
        name: 'Ushuaia & Tierra del Fuego (Argentina)',
        vibe: 'End of the World maritime charm, Beagle Channel, and sub-antarctic forests',
        bestFor: 'Beagle Channel boat trips, king crab dining, and southernmost landscapes',
        whyChoose: 'Fascinating maritime history and boat excursions to see sea lions and Magellanic penguins.',
        avoidIf: 'You only have time for the northern mountain spires.'
      }
    ],
    whatTravelersSaySummary: 'Hikers and nature lovers describe Patagonia as one of the most magnificent landscapes on earth. The most universal advice: invest in top-tier windproof and waterproof layers, book national park refugios/campsites months ahead, and embrace the legendary Patagonian wind.',
    whatToSkip: [
      'Trying to cover both deep Chilean and Argentine Patagonia in less than 7 days — border crossings and vast distances require deliberate pacing.',
      'Wearing lightweight cotton sneakers on mountain scree trails; sturdy ankle-support hiking boots are essential.',
      'Waiting until arrival to book park permits or catamaran tickets in Torres del Paine during peak season (December–February).'
    ],
    thingsWorthDoing: [
      {
        title: 'Sunrise at Laguna de los Tres (Mount Fitz Roy)',
        description: 'Hiking up to the alpine lagoon as the morning sun turns the granite peak of Fitz Roy brilliant fiery orange.',
        whyWorthIt: 'One of the most awe-inspiring mountain vistas on earth, made even better by the quiet camaraderie of fellow dawn hikers.'
      },
      {
        title: 'Ice Trekking on Perito Moreno Glacier',
        description: 'Strapping on steel crampons to hike across the blue crevasses, ice caves, and meltwater streams of the living glacier.',
        whyWorthIt: 'Feeling the ancient, dense ice beneath your boots while hearing the glacier groan and calve into Lake Argentino.'
      },
      {
        title: 'Boat Navigation of the Beagle Channel',
        description: 'Sailing past Les Eclaireurs lighthouse, sea lion colonies, and remote fjord inlets at the southern tip of the Americas.',
        whyWorthIt: 'The stark, windswept beauty of Tierra del Fuego feels truly like standing at the edge of the known world.'
      }
    ],
    placesToEat: [
      {
        name: 'La Cervecería Chaltén',
        type: 'Artisan mountain craft beer & hearty locro stew',
        neighborhood: 'El Chaltén, Argentina',
        whySpecial: 'The perfect warm haven after a 20km hike to warm up with homemade goulash, craft IPAs, and friendly trail stories.'
      },
      {
        name: 'El Asador Patagónico',
        type: 'Traditional slow-roasted Patagonian cordero (lamb)',
        neighborhood: 'Puerto Natales, Chile',
        whySpecial: 'Whole lamb slow-roasted over native lenga wood fires, served with fresh Chilean salads and Carmenère wine.'
      },
      {
        name: 'Volver',
        type: 'Fresh Beagle Channel king crab (Centolla)',
        neighborhood: 'Ushuaia, Argentina',
        whySpecial: 'A quirky historic house filled with maritime relics serving the freshest wild crab in South America.'
      }
    ],
    gettingAround: {
      recommendation: 'Fly into Punta Arenas (Chile) or El Calafate / Ushuaia (Argentina). Comfortable long-distance buses connect towns and cross international borders smoothly.',
      airportTransit: 'El Calafate Airport (FTE) and Puerto Natales Airport (PNT) have scheduled shuttle buses matching all incoming flights.',
      eveningWalkingAdvice: 'El Chaltén, Puerto Natales, and El Calafate are very peaceful mountain communities where hikers walk freely with zero safety concerns.'
    },
    goodToKnow: [
      'Last verified: January 2026. Chile and Argentina maintain strict agricultural border inspection rules: do not bring fresh fruit, dairy, or meats between borders.',
      'Cash & Currency: Argentina uses the Argentine Peso (credit cards now receive the favorable MEP exchange rate); Chile uses Chilean Pesos and is largely card-friendly.',
      'Weather: November through March provides warmer temperatures (10–18°C) and long daylight, but winds regularly reach 60–80 km/h.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Trekking towns like El Chaltén and Puerto Natales are exceptionally safe and have large solo female traveler communities.',
      eveningAtmosphere: 'Relaxed, friendly pub culture where hikers share trail notes and transport tips.',
      arrivalTips: 'Pre-book your airport transfer in advance so you can relax upon landing in remote southern airports.',
      neighborhoodAdvice: 'El Chaltén is entirely walkable from end to end in 15 minutes.'
    },
    relatedHideoutIds: ['hideout-patagonia-torres-eco-lodge', 'hideout-patagonia-chalten-cabin'],
    relatedStayIds: ['stay-patagonia-explora-torres', 'stay-patagonia-el-chalten-lodge'],
    relatedStoryIds: ['story-patagonia-first-time-approach', 'story-patagonia-chile-or-argentina'],
    relatedGuideIds: ['guide-patagonia-trekking-first-timers']
  },
  {
    id: 'south-korea',
    slug: 'south-korea',
    name: 'South Korea',
    country: 'South Korea',
    tag: 'Quiet hanok courtyards, vibrant café alleys & coastal tea mountains',
    heroImage: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1600&q=80',
    blurb: 'An alluring blend of heritage and cutting-edge design: restored wooden hanok stays in historic Seoul neighborhoods, scenic volcanic coasts on Jeju Island, and an unmatched café and culinary culture.',
    openingEditorial: 'South Korea is a country of exquisite detail. Beyond the neon high-rises and buzzing markets lies a world of quiet reflection: centuries-old pine courtyards where tea is poured with mindful grace, misty mountain temples where monks welcome guests, and sunlit neighborhood lanes where independent bakeries craft delicate pastries.',
    whereIWouldStay: 'A restored traditional Hanok guesthouse in Seoul’s Bukchon or Seochon quarter, or a minimalist oceanfront stone villa on the volcanic southern coast of Jeju Island.',
    neighborhoods: [
      {
        name: 'Seoul (Seochon & Samcheong-dong)',
        vibe: 'Historic hanoks, leafy palace walls, artisan boutiques, and tea houses',
        bestFor: 'Solo travelers, walkers, design lovers, and peaceful morning strolls',
        whyChoose: 'Seochon (west of Gyeongbokgung Palace) has escaped mass tour groups and retains an authentic residential artist atmosphere with charming quiet alleys.',
        avoidIf: 'You want rowdy all-night nightclub districts.'
      },
      {
        name: 'Seoul (Seongsu-dong & Yeonnam-dong)',
        vibe: 'Industrial red-brick architecture, concept cafés, and green linear parks',
        bestFor: 'Specialty coffee hunters, contemporary fashion, and relaxed evening dining',
        whyChoose: 'Known as the Brooklyn of Seoul, Seongsu-dong is packed with innovative pop-ups, natural wine bars, and tranquil Seoul Forest park walks.',
        avoidIf: 'You are only seeking ancient dynastic palaces.'
      },
      {
        name: 'Jeju Island (Aewol & Gujwa)',
        vibe: 'Black volcanic rock beaches, emerald waters, and tangerine orchards',
        bestFor: 'Nature lovers, coastal road trips, fresh seafood, and hiking Mount Hallasan',
        whyChoose: 'Secluded ocean-facing boutique stays with floor-to-ceiling windows and outdoor stone soaking tubs.',
        avoidIf: 'You do not plan on renting a car to explore the island.'
      },
      {
        name: 'Gyeongju (Historic Capital)',
        vibe: 'Ancient grassy burial tumuli, lotus ponds, and stargazing observatories',
        bestFor: 'History enthusiasts, cycling between monuments, and peaceful evenings',
        whyChoose: 'Biking through the tumuli park at twilight when the ancient mounds are softly illuminated.',
        avoidIf: 'You crave big-city energy and mega-skyscrapers.'
      }
    ],
    whatTravelersSaySummary: 'Visitors frequently name South Korea one of the easiest, cleanest, and safest countries they have ever traveled in. The subway and KTX rail systems are immaculate, hospitality is warm, and traveling solo as a woman is wonderfully comfortable.',
    whatToSkip: [
      'Spending all your time shopping in crowded cosmetic malls in Myeongdong when neighborhood alleys in Seochon and Seongsu offer far richer character.',
      'Using Google Maps for walking directions (due to local mapping laws, Naver Map and KakaoMap are far more accurate and essential for transit).',
      'Skipping the regional high-speed train (KTX) trips to historic Gyeongju or coastal Busan.'
    ],
    thingsWorthDoing: [
      {
        title: 'Traditional Tea Ceremony in a Seochon Hanok',
        description: 'Sitting on heated ondol wooden floors while savoring wild Jirisan green tea and traditional rice cakes (tteok).',
        whyWorthIt: 'A serene sensory experience that offers deep relaxation and insight into Korean tea philosophy.'
      },
      {
        title: 'Walk the Seoul City Wall Trail at Sunset',
        description: 'Following the 600-year-old stone fortress wall along Mount Naksan as the city skyline lights up below.',
        whyWorthIt: 'Spectacular panoramic views of old and new Seoul without the commercial crowds of N Seoul Tower.'
      },
      {
        title: 'Sunrise Walk up Seongsan Ilchulbong (Jeju Island)',
        description: 'Ascending the dramatic green volcanic tuff cone rising out of the ocean at dawn.',
        whyWorthIt: 'Watch the sun rise over the East Sea and see the legendary Haenyeo (female free-divers) begin their morning harvest.'
      }
    ],
    placesToEat: [
      {
        name: 'Tosokchon Samgyetang',
        type: 'Traditional ginseng chicken soup in a grand hanok courtyard',
        neighborhood: 'Seochon, Seoul',
        whySpecial: 'Nourishing, slow-simmered whole young chicken stuffed with glutinous rice, ginseng, and chestnuts.'
      },
      {
        name: 'Onion Seongsu',
        type: 'Industrial chic bakery & specialty coffee',
        neighborhood: 'Seongsu-dong, Seoul',
        whySpecial: 'Set in a converted 1970s metal factory with a rooftop terrace and famous Pandoro sugar-dusted bread.'
      },
      {
        name: 'Myeongjin Jeonbok',
        type: 'Fresh abalone stone pot rice & grilled mackerel',
        neighborhood: 'Gujwa, Jeju Island',
        whySpecial: 'Sizzling hot stone pot rice layered with freshly sliced local abalone and rich abalone butter.'
      }
    ],
    gettingAround: {
      recommendation: 'Purchase a T-Money transit card at any convenience store for seamless subway and bus rides. High-speed KTX trains connect Seoul to Busan in under 2.5 hours.',
      airportTransit: 'AREX Express Train connects Incheon International Airport (ICN) non-stop to Seoul Station in 43 minutes.',
      eveningWalkingAdvice: 'South Korea is extraordinarily safe at all hours. Solo walking at midnight in residential or nightlife districts is completely standard.'
    },
    goodToKnow: [
      'Last verified: February 2026. Download Naver Map or KakaoMap and Papago (translation app) before arrival for effortless navigation.',
      'Tipping is not customary and generally not accepted in South Korea.',
      'Wi-Fi is ubiquitous, but getting an unlimited data eSIM or airport pocket Wi-Fi router ensures continuous translation and map support.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Rated among the safest nations on earth with exceptionally low street crime.',
      eveningAtmosphere: 'Vibrant, safe, and comfortable; solo women dine in cafés and ride public transit late at night with complete peace of mind.',
      arrivalTips: 'The AREX train from Incheon Airport is spotless, quiet, and connects seamlessly to central metro lines.',
      neighborhoodAdvice: 'Seochon, Insadong, and Yeonnam-dong are fantastic, welcoming bases for solo travelers.'
    },
    relatedHideoutIds: ['hideout-korea-seochon-hanok', 'hideout-korea-jeju-stone-villa'],
    relatedStayIds: ['stay-korea-hanok-boutique', 'stay-korea-jeju-cliff-retreat'],
    relatedStoryIds: ['story-korea-seoul-beyond-tourist', 'story-korea-jeju-island-add'],
    relatedGuideIds: ['guide-korea-seoul-neighborhoods-ktx']
  },
  {
    id: 'australia',
    slug: 'australia',
    name: 'Australia',
    country: 'Australia',
    tag: 'Coastal ocean pools, pristine wilderness & laid-back design sanctuaries',
    heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1600&q=80',
    blurb: 'Epic coastlines, golden surf beaches, ancient eucalyptus forests, world-class café culture, and remote island sanctuaries like Tasmania.',
    openingEditorial: 'Australia’s travel magic lies in its connection to the outdoors. Life is lived facing the ocean and the sun: early morning swims in ocean tidal pools carved into sandstone cliffs, perfectly poured flat whites in breezy neighborhood cafés, and coastal road trips where wild beaches stretch on for unbroken miles.',
    whereIWouldStay: 'A sandstone boutique guesthouse in Sydney’s Paddington or Bronte, or a timber architectural pavilion surrounded by coastal forest on Freycinet Peninsula in Tasmania.',
    neighborhoods: [
      {
        name: 'Sydney (Paddington & Bronte)',
        vibe: 'Victorian iron-laced terraces, leafy parks, and coastal pool walks',
        bestFor: 'Solo female travelers, ocean swimmers, and boutique café lovers',
        whyChoose: 'Paddington offers leafy residential streets, artisan bakeries, and quiet wine bars, just minutes from the Bondi-to-Coogee coastal path.',
        avoidIf: 'You want high-rise casino nightlife.'
      },
      {
        name: 'Melbourne (Fitzroy & Carlton)',
        vibe: 'Bohemian laneways, Victorian architecture, specialty coffee, and live music',
        bestFor: 'Foodies, coffee aficionados, vintage shoppers, and art lovers',
        whyChoose: 'Fitzroy’s Gertrude and Brunswick streets offer the southern hemisphere\'s best concentration of creative bistros and coffee roasteries.',
        avoidIf: 'You are looking for tropical swimming beaches.'
      },
      {
        name: 'Tasmania (Hobart & Freycinet)',
        vibe: 'Pristine cool-climate wilderness, MONA art museum, and coastal oyster farms',
        bestFor: 'Nature lovers, hikers, cool-climate wines, and slow culinary travel',
        whyChoose: 'Hobart’s historic Battery Point cottages combined with the granite hazards and azure waters of Wineglass Bay.',
        avoidIf: 'You are seeking warm tropical humidity.'
      },
      {
        name: 'Great Ocean Road & Otways',
        vibe: 'Dramatic limestone sea stacks, wild southern ocean surf, and rainforests',
        bestFor: 'Classic road trips, koala spotting in wild eucalyptus trees, and coastal views',
        whyChoose: 'Spectacular winding coastal drives with peaceful seaside town stays in Lorne and Apollo Bay.',
        avoidIf: 'You dislike driving on winding coastal roads.'
      }
    ],
    whatTravelersSaySummary: 'Travelers praise Australia’s high standard of living, remarkable coffee quality, friendly locals, and clean natural spaces. The main tip is not to underestimate domestic travel distances: focus deeply on two or three regions rather than trying to see the entire continent in two weeks.',
    whatToSkip: [
      'Spending too much time in commercial shopping strips when neighborhood suburbs and coastal walks showcase the real Australian lifestyle.',
      'Driving at dusk or night in rural regional areas where native wildlife (kangaroos, wallabies) frequently cross roads.',
      'Ignoring beach safety: always swim between the red-and-yellow flags on patrolled surf beaches.'
    ],
    thingsWorthDoing: [
      {
        title: 'Sunrise Swim at Bronte or Bondi Icebergs Pool',
        description: 'Doing morning laps in the saltwater pool as ocean waves crash against the outer concrete wall.',
        whyWorthIt: 'An invigorating Australian ritual followed by a fresh flat white from a nearby beach kiosk.'
      },
      {
        title: 'Freycinet Peninsula Coastal Hike (Tasmania)',
        description: 'Hiking up to the lookout over the white sand crescent of Wineglass Bay and descending to Hazards Beach.',
        whyWorthIt: 'Crystal-clear waters, pink granite boulders draped in orange lichen, and pristine quiet.'
      },
      {
        title: 'Lane-Way Coffee & Pastry Crawl in Melbourne',
        description: 'Exploring the hidden laneways of Melbourne from Degraves Street to Centre Place with a guide or solo.',
        whyWorthIt: 'Discover why Melbourne is considered the specialty coffee capital of the world.'
      }
    ],
    placesToEat: [
      {
        name: 'Cumulus Inc.',
        type: 'All-day dining, artisan sourdough & whole roasted lamb shoulder',
        neighborhood: 'Flinders Lane, Melbourne',
        whySpecial: 'Clean architectural interior, open kitchen, and exceptional seasonal Victorian produce.'
      },
      {
        name: 'Saint Peter',
        type: 'Sustainable whole-fish cookery by Josh Niland',
        neighborhood: 'Paddington, Sydney',
        whySpecial: 'Revolutionary nose-to-tail seafood approach in an intimate, elegant dining room.'
      },
      {
        name: 'Agrarian Kitchen Eatery',
        type: 'Farm-to-table destination dining',
        neighborhood: 'New Norfolk (near Hobart), Tasmania',
        whySpecial: 'Set in a converted heritage asylum with expansive vegetable gardens and wood-fired ovens.'
      }
    ],
    gettingAround: {
      recommendation: 'Domestic flights link major state capitals efficiently (Qantas, Virgin Australia). Renting a car is best for coastal drives, wine regions, and exploring Tasmania.',
      airportTransit: 'Sydney Airport Train connects directly to Circular Quay in 20 minutes; Melbourne SkyBus connects Tullamarine (MEL) to Southern Cross Station in 25 minutes.',
      eveningWalkingAdvice: 'Australian cities and coastal suburbs are safe, well-lit, and relaxed at night. Solo walking in areas like Paddington, Carlton, and South Yarra is very comfortable.'
    },
    goodToKnow: [
      'Last verified: February 2026. Sun protection: the UV index is exceptionally high; high-SPF sunscreen, sunglasses, and wide-brimmed hats are essential year-round.',
      'Australia uses Type I electrical plugs and drives on the left-hand side of the road.',
      'Payment: contactless card tap (Apple Pay / Google Pay / credit cards) is universal.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Extremely safe, relaxed, and welcoming for solo female travelers.',
      eveningAtmosphere: 'Laid-back dining and pub culture with an open, friendly atmosphere.',
      arrivalTips: 'Airport rail and bus links in Sydney, Melbourne, and Brisbane are reliable and drop you right into central hubs.',
      neighborhoodAdvice: 'Paddington, Bronte, and Manly in Sydney, and Fitzroy in Melbourne make ideal solo bases.'
    },
    relatedHideoutIds: ['hideout-australia-tasmania-pavilion', 'hideout-australia-paddington-sanctuary'],
    relatedStayIds: ['stay-australia-freycinet-lodge', 'stay-australia-sydney-boutique'],
    relatedStoryIds: ['story-australia-road-trip', 'story-australia-why-tasmania'],
    relatedGuideIds: ['guide-australia-east-coast-tasmania']
  },
  {
    id: 'new-zealand',
    slug: 'new-zealand',
    name: 'New Zealand',
    country: 'New Zealand',
    tag: 'Alpine fiords, turquoise glacier lakes & quiet campervan routes',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
    blurb: 'Majestic Southern Alps, emerald rainforests cascading down to coastal fiords, ancient Maori heritage, and wide-open roads made for unhurried journeys.',
    openingEditorial: 'New Zealand (Aotearoa) is a sanctuary for the soul. The landscape here has a cinematic grandeur that feels untouched by modern haste. Whether you are driving past turquoise glacial lakes under the shadow of Aoraki / Mount Cook, or listening to native bellbirds in the beech forests of Wanaka, the feeling of freedom is palpable.',
    whereIWouldStay: 'A secluded eco-cabin overlooking Lake Wanaka with wood-fired cedar hot tubs, or a boutique historic lodge in the Marlborough Sounds accessible only by water taxi.',
    neighborhoods: [
      {
        name: 'Wanaka & Central Otago (South Island)',
        vibe: 'Alpine lake serenity, boutique vineyards, and mountain trailheads',
        bestFor: 'Relaxed alpine living, day hikes, and avoiding Queenstown\'s busyness',
        whyChoose: 'Wanaka offers all the mountain beauty of Queenstown with a much calmer, community-minded pace.',
        avoidIf: 'You want high-energy adventure sports and loud nightlife.'
      },
      {
        name: 'Fiordland & Milford Sound (South Island)',
        vibe: 'Towering waterfalls, primordial rainforests, and sheer granite peaks',
        bestFor: 'Cruising, kayaking, scenic flights, and world-class Great Walks (Milford/Routeburn)',
        whyChoose: 'Base in Te Anau to drive the stunning Milford Road at your own pace before daytime tour buses arrive.',
        avoidIf: 'You dislike rain (rain brings the thousands of temporary waterfalls to life).'
      },
      {
        name: 'Aoraki / Mount Cook & Lake Tekapo',
        vibe: 'Glacial turquoise waters, dark sky reserves, and snow-capped peaks',
        bestFor: 'Stargazing in the Aoraki Mackenzie International Dark Sky Reserve and Hooker Valley hike',
        whyChoose: 'Unobstructed views of New Zealand’s highest peak and the world’s clearest night skies.',
        avoidIf: 'You require extensive urban restaurant choices.'
      },
      {
        name: 'Auckland & Waiheke Island (North Island)',
        vibe: 'Volcanic harbor city meets bohemian island olive groves and wineries',
        bestFor: 'First arrivals, coastal vineyard lunches, and ferry excursions',
        whyChoose: 'Take a 35-minute ferry to Waiheke Island for quiet beach walks, sculpture parks, and world-class Syrah wines.',
        avoidIf: 'You only want alpine snowscapes.'
      }
    ],
    whatTravelersSaySummary: 'Travelers describe New Zealand as life-affirming in its sheer beauty and friendliness. The top recommendations are to allow more driving time than GPS estimates (roads are scenic and winding), and to book campervans or boutique lodges well in advance for summer.',
    whatToSkip: [
      'Rushing through the South Island in 5 days — give yourself time to pull over at scenic lookouts and take spontaneous short walks.',
      'Assuming Queenstown is the only place to stay in the Southern Lakes; neighboring Wanaka offers a much more peaceful experience.',
      'Underestimating alpine sun and rapidly changing mountain weather conditions.'
    ],
    thingsWorthDoing: [
      {
        title: 'Hooker Valley Track at Dawn (Mount Cook)',
        description: 'Walking the gentle swing bridges across glacial rivers to Hooker Lake with icebergs floating beneath Mount Cook.',
        whyWorthIt: 'An accessible, deeply scenic alpine walk where early morning light turns the glaciers golden pink.'
      },
      {
        title: 'Kayaking in Milford Sound / Piopiotahi',
        description: 'Paddling through the mirror-calm fjord waters past 1,000-meter vertical cliffs and playful fur seals.',
        whyWorthIt: 'Being at water level allows you to feel the mist of towering waterfalls and the profound quiet of Fiordland.'
      },
      {
        title: 'Stargazing at Lake Tekapo Dark Sky Reserve',
        description: 'Lying under a blanket near the stone Church of the Good Shepherd admiring the Milky Way in high definition.',
        whyWorthIt: 'Zero light pollution offers one of the most vivid views of the southern galactic core on earth.'
      }
    ],
    placesToEat: [
      {
        name: 'Bistro Gentil',
        type: 'French-inspired dining & Central Otago Pinot Noir',
        neighborhood: 'Lake Wanaka',
        whySpecial: 'Panoramic views across Lake Wanaka with dishes crafted from their private kitchen gardens.'
      },
      {
        name: 'The Oyster Inn',
        type: 'Freshly shucked Te Matuku oysters & crisp white wine',
        neighborhood: 'Oneroa, Waiheke Island',
        whySpecial: 'Breezy coastal verandah overlooking Oneroa Bay serving the freshest oysters in the Hauraki Gulf.'
      },
      {
        name: 'Cardrona Hotel Pub',
        type: 'Historic 1863 tavern, craft beer & roaring fireplace',
        neighborhood: 'Crown Range Road (between Queenstown and Wanaka)',
        whySpecial: 'One of the oldest and most iconic historic pubs in New Zealand with a lovely garden courtyard.'
      }
    ],
    gettingAround: {
      recommendation: 'A rental car or self-contained campervan is the ultimate way to travel New Zealand at your own pace. Drive on the left side of the road.',
      airportTransit: 'Queenstown Airport (ZQN) and Christchurch Airport (CHC) have rental car depots on-site for immediate road trip departure.',
      eveningWalkingAdvice: 'New Zealand is one of the safest countries in the world. Solo walking around lakes and towns at night is peaceful and common.'
    },
    goodToKnow: [
      'Last verified: January 2026. Biosecurity: New Zealand has very strict border biosecurity rules; clean hiking boots and declare all food and outdoor gear on arrival.',
      'Freedom camping is allowed only in certified self-contained vehicles at designated council sites (check the CamperMate app).',
      'Currency is New Zealand Dollars (NZD) and card payments are accepted almost everywhere.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Extremely high level of personal safety and helpful, welcoming local culture.',
      eveningAtmosphere: 'Quiet and relaxed town centers with friendly pubs and wholesome dining.',
      arrivalTips: 'Arriving in Queenstown by plane offers one of the most spectacular mountain landing views in the world.',
      neighborhoodAdvice: 'Wanaka and Nelson/Abel Tasman are peaceful, safe, and empowering bases for solo travelers.'
    },
    relatedHideoutIds: ['hideout-nz-wanaka-cabin', 'hideout-nz-fiordland-retreat'],
    relatedStayIds: ['stay-nz-wanaka-luxury', 'stay-nz-queenstown-boutique'],
    relatedStoryIds: ['story-nz-south-island-road-trip', 'story-nz-where-to-slow-down'],
    relatedGuideIds: ['guide-nz-south-island-slow-route']
  }
].map(d => ({
  ...d,
  image: (d as any).image || d.heroImage,
  heroImage: d.heroImage || (d as any).image
}));
