import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'lisbon',
    slug: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    tag: 'Sun-drenched hills, quiet tile façades & ceramic wine bars',
    heroImage: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1600&q=80',
    blurb: 'A city made for wandering uphill, stopping for warm pastéis de nata, and lingering in sunlit miradouros with a glass of Vinho Verde.',
    openingEditorial: 'Lisbon is one of those cities where getting slightly lost can be the most rewarding part of the afternoon. The light here has a golden, reflective quality thanks to the Tagus River, bouncing off pastel azulejos and calcada cobblestones.',
    whereIWouldStay: 'Príncipe Real or upper Estrela. You are a five-minute stroll from lush botanic gardens, small concept boutiques, and natural wine bars, yet comfortably above the dense nightlife rush of Bairro Alto.',
    neighborhoods: [
      {
        name: 'Príncipe Real',
        vibe: 'Sophisticated, leafy, design-conscious and tranquil',
        bestFor: 'Solo travelers and couples who enjoy chic café mornings and boutique browsing',
        whyChoose: 'Quiet side streets, elevated gardens with panoramic kiosks, and intimate chef-driven bistros.',
        avoidIf: 'You are on an ultra-tight budget and want the lowest hostel rates.'
      },
      {
        name: 'Alfama & Graça',
        vibe: 'Historic, labyrinthine, soulful and village-like',
        bestFor: 'Atmospheric photography and evening fado intimacy',
        whyChoose: 'Wake up to the sound of church bells and swallows circling whitewashed walls.',
        avoidIf: 'You dislike climbing steep flights of stone stairs with heavy luggage.'
      },
      {
        name: 'Santos & Lapa',
        vibe: 'Design district meets quiet aristocratic mansions',
        bestFor: 'Longer stays and relaxed specialty coffee hunting',
        whyChoose: 'Less crowded by day tours; authentic neighborhood tascas side-by-side with modern galleries.',
        avoidIf: 'You want immediate 3-minute subway access (tram and bus are primary here).'
      }
    ],
    whatTravelersSaySummary: 'Travelers consistently praise Lisbon for its warm local hospitality, remarkable safety, and affordability compared to Western European capitals. The most frequent caveat is physical fatigue from the hills and slippery limestone pavers when it rains.',
    whatToSkip: [
      'Tram 28 at peak midday hours — long queues and pickpocket risks make it far less romantic than a peaceful morning walk through Graça.',
      'Over-hyped waterfront seafood traps directly adjacent to Praça do Comércio.',
      'Driving a rental car inside the historic center.'
    ],
    thingsWorthDoing: [
      {
        title: 'Sunset at Miradouro da Senhora do Monte',
        description: 'The highest lookout in the city offering unmatched panoramas across São Jorge Castle to the 25 de Abril Bridge.',
        whyWorthIt: 'Bring a fresh pastry from nearby Pastelaria Batalha and watch the city turn rose-gold without the commercial noise.'
      },
      {
        title: 'Morning at the Gulbenkian Garden & Modern Art Pavilions',
        description: 'A serene brutalist cultural oasis with winding streams, duck ponds, and world-class private art collections.',
        whyWorthIt: 'A peaceful, meditative contrast to the bustling city center; easily accessible via the blue metro line.'
      },
      {
        title: 'Ferry across to Cacilhas for Grilled Fish',
        description: 'A 10-minute public ferry crossing to Ponto Final or Atira-te ao Rio on the southern bank.',
        whyWorthIt: 'Uninterrupted skyline views of Lisbon across the water at dusk while dining on simply grilled sea bass.'
      }
    ],
    placesToEat: [
      {
        name: 'Prado',
        type: 'Farm-to-table seasonal Portuguese',
        neighborhood: 'Sé / Alfama',
        whySpecial: 'Set in a light-filled historic cannery with hanging greenery and exceptional local biodynamic wines.'
      },
      {
        name: 'Copenhagen Coffee Lab & Bakery',
        type: 'Specialty coffee & sourdough cardamom buns',
        neighborhood: 'Príncipe Real',
        whySpecial: 'Perfect peaceful morning spot with clean Scandinavian aesthetics and excellent pour-overs.'
      },
      {
        name: 'Taberna da Rua das Flores',
        type: 'Chalkboard daily traditional Portuguese tavern',
        neighborhood: 'Chiado / Bica',
        whySpecial: 'Intimate, convivial dining where sharing small plates feels like a secret dinner party.'
      }
    ],
    gettingAround: {
      recommendation: 'Walk as much as your calves allow, and rely on the modern Metro or quick Uber/Bolt rides for uphill returns late at night.',
      airportTransit: 'The Red Metro line connects directly from Lisbon Humberto Delgado Airport to the city center in 25 minutes for under €2.',
      eveningWalkingAdvice: 'Streets in Príncipe Real, Chiado, and Baixa are well-lit and vibrant with late diners until midnight. Wear flat rubber-soled shoes for traction on polished cobblestones.'
    },
    goodToKnow: [
      'Always carry a small coin purse: some historic bakeries and kiosks prefer cash for items under €5.',
      'Dinner service starts later here; kitchens rarely open before 7:30 PM, with peak seating around 8:45 PM.',
      'Portugal uses standard European Type C and F plugs.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Extremely welcoming and ranked among the safest capital cities in Europe.',
      eveningAtmosphere: 'Lively, friendly outdoor terraces with a respectful street culture.',
      arrivalTips: 'If arriving at Oriente or Santa Apolónia train stations late, call a rideshare directly to your accommodation door.',
      neighborhoodAdvice: 'Príncipe Real and Estrela offer the most relaxed, peaceful night-time returns.'
    },
    relatedHideoutIds: ['hideout-lisbon-botanic', 'hideout-lisbon-palacete'],
    relatedStayIds: ['stay-lisbon-memmo', 'stay-lisbon-casa-do-baro'],
    relatedStoryIds: ['story-staying-outside-center', 'story-little-hotels'],
    relatedGuideIds: ['guide-where-to-stay-lisbon']
  },
  {
    id: 'paris',
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    tag: 'Tree-lined boulevards, tucked-away courtyards & quiet morning bistros',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
    blurb: 'Beyond the postcard icons lies a neighborhood city of zinc rooftops, independent bookshops, and leisurely afternoons along the Seine.',
    openingEditorial: 'Paris is best experienced in the quiet margins: early morning coffee before the boulangerie line spills onto the sidewalk, exploring courtyard passages in the 9th, or watching swans glide past Île Saint-Louis.',
    whereIWouldStay: 'The 10th Arrondissement near Canal Saint-Martin or the upper 9th near South Pigalle (SoPi). Both offer vibrant artisan food culture and genuine neighborhood charm away from tour bus corridors.',
    neighborhoods: [
      {
        name: 'Canal Saint-Martin (10th)',
        vibe: 'Creative, relaxed, water-facing and culinary-forward',
        bestFor: 'Solo strolls, contemporary natural wine bars, and design boutiques',
        whyChoose: 'Pedestrian-friendly quays on weekends with a youthful, artistic spirit.',
        avoidIf: 'You require grand Haussmannian luxury marble palaces.'
      },
      {
        name: 'South Pigalle & Nouvelle Athènes (9th)',
        vibe: 'Neo-classical elegance meets hip gourmet bistros',
        bestFor: 'Food lovers, boutique hotels, and central metro connections',
        whyChoose: 'Charming hilly streets leading up to Montmartre with fantastic pastry shops.',
        avoidIf: 'The lower boulevard near the sex shops can feel noisy on weekend nights.'
      },
      {
        name: 'The Marais & Haut Marais (3rd/4th)',
        vibe: 'Historic mansions, art galleries, and fashion-forward cafés',
        bestFor: 'Weekend shopping, museum hopping, and historic atmosphere',
        whyChoose: 'The quiet residential streets of the 3rd feel like a peaceful 17th-century village.',
        avoidIf: 'You want to avoid weekend crowds along Rue des Francs-Bourgeois.'
      }
    ],
    whatTravelersSaySummary: 'Travelers praise Paris\'s incomparable walkability, the beauty of everyday residential architecture, and the high standard of casual neighborhood dining. Key caveats include navigating complex metro transfer stations and booking popular bistros weeks ahead.',
    whatToSkip: [
      'Midday line for the Eiffel Tower elevators — the view from Parc des Buttes-Chaumont or the Institut du Monde Arabe roof is more peaceful and free.',
      'Souvenir shops and chain cafés around Saint-Michel fountain.',
      'Unsolicited street petition signers near major monuments.'
    ],
    thingsWorthDoing: [
      {
        title: 'Morning stroll through the covered Passages Couverts',
        description: 'Glass-roofed 19th-century shopping arcades like Galerie Vivienne and Passage des Panoramas.',
        whyWorthIt: 'Magnificent mosaic floors, vintage antiquarian bookstalls, and quiet tearooms sheltered from rain.'
      },
      {
        title: 'Musée de la Vie Romantique & Courtyard Tea Garden',
        description: 'Tucked away in the 9th at the foot of Montmartre in artist Ary Scheffer\'s former studio.',
        whyWorthIt: 'A hidden greenhouse café surrounded by rosebushes and lilacs where you can read peacefully.'
      },
      {
        title: 'Sunset walk along the elevated Coulée Verte René-Dumont',
        description: 'The world\'s first elevated railway park, planted with lavender, hazel trees, and climbing roses.',
        whyWorthIt: 'Walk 4.5 km above street level through the 12th arrondissement with zero traffic noise.'
      }
    ],
    placesToEat: [
      {
        name: 'Ten Belles',
        type: 'Specialty coffee & artisan sourdough',
        neighborhood: '10th (Canal Saint-Martin)',
        whySpecial: 'Tiny mezzanine, great pour-over coffee, and delicious sausage rolls or seasonal tarts.'
      },
      {
        name: 'Septime La Cave',
        type: 'Intimate natural wine & small charcuterie bar',
        neighborhood: '11th (Charonne)',
        whySpecial: 'Standing room only with bottles curated from the most thoughtful organic European vineyards.'
      },
      {
        name: 'Chez Janou',
        type: 'Provençal bistro with unlimited chocolate mousse bowl',
        neighborhood: '3rd (Haut Marais)',
        whySpecial: 'Pastis selection, friendly bustling servers, and classic duck magret.'
      }
    ],
    gettingAround: {
      recommendation: 'Use the RATP app or Apple Maps for Metro navigation. Navigo Easy passes or contactless phone taps make transit frictionless.',
      airportTransit: 'RER B from CDG Airport takes ~40 minutes into Châtelet-Les Halles, or use official airport taxi flat rates (€56-€65 to Paris).',
      eveningWalkingAdvice: 'Canal banks and residential arrondissements (3rd, 9th, 10th, 11th, 6th) have plenty of foot traffic until late.'
    },
    goodToKnow: [
      'Always start any interaction in shops or bakeries with a soft, clear "Bonjour, Madame" or "Bonjour, Monsieur" — it is the cornerstone of Parisian courtesy.',
      'Tap water in restaurants is free and of excellent quality; ask for "une carafe d\'eau, s\'il vous plaît".'
    ],
    femaleTravelNotes: {
      generalVibe: 'Cosmopolitan, cultured, and very easy to navigate independently.',
      eveningAtmosphere: 'Outdoor café tables are universally welcoming for solo diners with a book or notebook.',
      arrivalTips: 'If arriving at Gare du Nord late with bags, take the official metered taxi queue right outside rather than walking through the outer plazas.',
      neighborhoodAdvice: 'Upper 9th and 3rd/4th provide calm, well-lit street corridors for late returns.'
    },
    relatedHideoutIds: ['hideout-paris-marais-loft', 'hideout-paris-hotel-amour'],
    relatedStayIds: ['stay-paris-provence', 'stay-paris-grand-pigalle'],
    relatedStoryIds: ['story-staying-outside-center', 'story-what-i-look-for'],
    relatedGuideIds: ['guide-best-areas-paris']
  },
  {
    id: 'rome',
    slug: 'rome',
    name: 'Rome',
    country: 'Italy',
    tag: 'Warm ochre piazzas, fountain echoes & hidden courtyard trattorias',
    heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80',
    blurb: 'An open-air museum where ancient marble meets ivy-draped alleyways and leisurely three-hour lunches under terracotta arches.',
    openingEditorial: 'Rome requires slowing down. It is not a city to rush through with a checklist; it rewards sitting on a stone fountain ledge, sipping an afternoon espresso al banco, and letting centuries of history envelop you.',
    whereIWouldStay: 'Rione Monti or the quieter side of the Jewish Ghetto (Sant\'Angelo). Monti is filled with independent jewelry makers, vintage shops, and warm wine bars, all walking distance to both the Forum and Termini.',
    neighborhoods: [
      {
        name: 'Monti',
        vibe: 'Bohemian, artistic, historic and friendly',
        bestFor: 'Solo female travelers, couples, and vintage lovers',
        whyChoose: 'Piazzetta Madonna dei Monti is the ultimate local evening gathering spot.',
        avoidIf: 'You want ultra-modern glass architecture.'
      },
      {
        name: 'Trastevere (Quiet Backstreets)',
        vibe: 'Cobblestone romance, ivy walls, and bustling trattorias',
        bestFor: 'Atmosphere, photography, and evening dining',
        whyChoose: 'Wandering through alleys draped in bougainvillea at golden hour is unforgettable.',
        avoidIf: 'You stay on the main party streets near Piazza Trilussa on Saturday nights.'
      },
      {
        name: 'Prati',
        vibe: 'Refined, residential, wide avenues and gourmet markets',
        bestFor: 'Quiet nights, proximity to the Vatican, and upscale shopping',
        whyChoose: 'Mercato Trionfale for authentic pecorino and seasonal artichokes.',
        avoidIf: 'You prefer medieval narrow alleys.'
      }
    ],
    whatTravelersSaySummary: 'Travelers love Rome\'s intoxicating atmosphere, incredible food at modest prices, and sheer historical density. The primary warning is purchasing tickets to the Colosseum and Galleria Borghese well in advance to avoid scalpers.',
    whatToSkip: [
      'Restaurants with large pictorial menus and greeters stationed outside trying to pull you in.',
      'Midday visit to the Trevi Fountain — visit at 7:00 AM instead when it is completely deserted and magical.'
    ],
    thingsWorthDoing: [
      {
        title: 'Morning in the Villa Borghese Gardens & Pincio Terrace',
        description: 'Lush parkland overlooking Piazza del Popolo with ancient stone pines and rowboats on the lake.',
        whyWorthIt: 'One of the most restorative escapes in the city, especially during warm afternoons.'
      },
      {
        title: 'Keyhole View at the Priory of the Knights of Malta',
        description: 'On the peaceful Aventine Hill, peer through a brass keyhole perfectly framing St. Peter’s dome through garden arches.',
        whyWorthIt: 'Follow it with a quiet rest in the nearby Giardino degli Aranci (Orange Garden).'
      }
    ],
    placesToEat: [
      {
        name: 'Roscioli Salumeria con Cucina',
        type: 'Legendary deli & artisanal pasta',
        neighborhood: 'Regola / Campo de\' Fiori',
        whySpecial: 'Incredible Carbonara and an unmatched wine cellar with thousands of vintage labels.'
      },
      {
        name: 'Fatamorgana Gelato',
        type: 'Artisanal gluten-free natural gelato',
        neighborhood: 'Monti (Piazza degli Zingari)',
        whySpecial: 'Innovative flavors like ricotta, citrus peel, and Madagascan vanilla.'
      }
    ],
    gettingAround: {
      recommendation: 'Rome is immensely walkable. The metro (lines A & B) is useful for longer crosstown trips.',
      airportTransit: 'The Leonardo Express train runs non-stop from Fiumicino (FCO) to Roma Termini in 32 minutes (€14).',
      eveningWalkingAdvice: 'Monti, Navona, and central areas have steady pedestrian flow and active evening aperitivo culture.'
    },
    goodToKnow: [
      'Drinking fountains known as "nasoni" provide ice-cold, clean mineral water throughout the city — carry a refillable flask.',
      'Coffee culture: Cappuccinos are traditionally a morning ritual before 11 AM; espresso (caffè normale) is ordered after meals.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Warm, expressive, and deeply social.',
      eveningAtmosphere: 'Families and solo women enjoy evening passeggiatas comfortably.',
      arrivalTips: 'Keep personal belongings zipped securely when boarding the Metro at Termini.',
      neighborhoodAdvice: 'Monti and Prati are exceptionally safe and pleasant for nighttime returns.'
    },
    relatedHideoutIds: ['hideout-rome-monti-residence'],
    relatedStayIds: ['stay-rome-chapter'],
    relatedStoryIds: ['story-places-travelers-recommend'],
    relatedGuideIds: ['guide-how-i-choose-hotels']
  },
  {
    id: 'barcelona',
    slug: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    tag: 'Modernist curves, Mediterranean sea breeze & tapas bars',
    heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=80',
    blurb: 'Where Gaudí’s architectural fantasies meet golden beach promenades and lively vermouth bars in Gràcia.',
    openingEditorial: 'Barcelona has an irresistible rhythm. You start with morning coffee in a sun-drenched square, spend midday studying stained glass in the Eixample, and end the evening eating grilled octopus in a corner bodega.',
    whereIWouldStay: 'Gràcia or the upper Eixample Esquerra. Gràcia has a village atmosphere with small plazas where locals gather without the tourist intensity of Las Ramblas.',
    neighborhoods: [
      {
        name: 'Gràcia',
        vibe: 'Bohemian village feel, pedestrian squares, indie designers',
        bestFor: 'Relaxed living, café working, and safe evening walks',
        whyChoose: 'Plaça del Sol and Plaça de la Virreina are lovely for vermut and reading.',
        avoidIf: 'You want direct beach frontage out your front door.'
      },
      {
        name: 'Eixample (Dreta & Esquerra)',
        vibe: 'Modernist elegance, grand boulevards, upscale dining',
        bestFor: 'Architecture enthusiasts and boutique shoppers',
        whyChoose: 'Wide octagonal intersections, stunning façades, and safe, well-lit avenues.',
        avoidIf: 'You prefer tiny medieval alleyways.'
      },
      {
        name: 'El Born (La Ribera)',
        vibe: 'Trendy, historic, artisan boutiques and cocktail bars',
        bestFor: 'Nightlife and museum proximity (Picasso Museum, Santa Maria del Mar)',
        whyChoose: 'Character-rich stone buildings and great tapas.',
        avoidIf: 'You are sensitive to weekend late-night street noise.'
      }
    ],
    whatTravelersSaySummary: 'Travelers adore the beach-meets-city lifestyle and culinary variety. The universal advice from solo travelers is maintaining vigilant awareness of backpacks and phones in dense crowds (metro and Gothic Quarter).',
    whatToSkip: [
      'Eating on Las Ramblas — overpriced frozen paellas and aggressive street vendors.',
      'Unlicensed beach drinks sold by informal hawkers on Barceloneta.'
    ],
    thingsWorthDoing: [
      {
        title: 'Sunset at the Bunkers del Carmel',
        description: 'Former anti-aircraft fortifications with 360-degree views across the entire city grid to the Mediterranean.',
        whyWorthIt: 'A breathtaking vantage point; arrive an hour before dusk with snacks.'
      },
      {
        title: 'Morning visit to Casa Vicens in Gràcia',
        description: 'Gaudí\'s first residential masterpiece, clad in brilliant green and white ceramic tiles.',
        whyWorthIt: 'Far less crowded than Casa Batlló and surrounded by peaceful residential streets.'
      }
    ],
    placesToEat: [
      {
        name: 'Bar Mut',
        type: 'Classic Catalan tapas with fine-dining precision',
        neighborhood: 'Eixample',
        whySpecial: 'Sensational carpaccio of egg and foie gras, fresh seafood, and outstanding local cava.'
      },
      {
        name: 'Syra Coffee',
        type: 'Specialty micro-roastery & flat whites',
        neighborhood: 'Gràcia',
        whySpecial: 'Tiny hole-in-the-wall with impeccably roasted beans and oat milk cortados.'
      }
    ],
    gettingAround: {
      recommendation: 'T-Usual or T-Casual metro cards provide smooth transit across the entire metropolitan area.',
      airportTransit: 'Aerobús runs every 5-10 minutes from BCN Airport directly to Plaça Catalunya in ~30 minutes (€7.25).',
      eveningWalkingAdvice: 'Gràcia and Eixample feel very comfortable and safe to walk through until late.'
    },
    goodToKnow: [
      'Catalonia has distinct cultural traditions and language; a polite "Bon dia" or "Gràcies" is warmly appreciated.',
      'Afternoon "siesta" can mean smaller independent boutiques close between 2:00 PM and 5:00 PM.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Energetic, creative, and highly social.',
      eveningAtmosphere: 'Squares in Gràcia are filled with women, families, and dog-walkers until midnight.',
      arrivalTips: 'Take the Aerobús into Plaça Catalunya or a licensed taxi directly to your accommodation.',
      neighborhoodAdvice: 'Gràcia and Eixample are the top choices for calm, secure solo female stays.'
    },
    relatedHideoutIds: ['hideout-barcelona-gracia-terrace'],
    relatedStayIds: ['stay-barcelona-cotton-house'],
    relatedStoryIds: ['story-what-i-look-for'],
    relatedGuideIds: ['guide-how-to-find-weekend-escape']
  },
  {
    id: 'budapest',
    slug: 'budapest',
    name: 'Budapest',
    country: 'Hungary',
    tag: 'Thermal bath sanctuaries, grand café culture & Danube reflections',
    heroImage: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1600&q=80',
    blurb: 'Divided by the shimmering Danube, Budapest marries Austro-Hungarian grandeur with tranquil thermal waters and leafy palace quarters.',
    openingEditorial: 'Budapest has a quiet grandeur that catches many travelers by surprise. From the steamy natural mineral baths to the high-ceilinged historic coffee houses where writers spent whole decades, it feels romantic and deeply civilized.',
    whereIWouldStay: 'The Palace District (Inner District VIII) or District V near the Parliament. The Palace District has grand 19th-century courtyards, quiet specialty cafés, and feels delightfully free of rowdy tour groups.',
    neighborhoods: [
      {
        name: 'Palace District (District VIII)',
        vibe: 'Aristocratic architecture, quiet bookshops, university calm',
        bestFor: 'Solo travelers, writers, and boutique hotel seekers',
        whyChoose: 'Magnificent neo-Renaissance façades and peaceful evening streets.',
        avoidIf: 'You want party hostels next door.'
      },
      {
        name: 'District V (Belváros & Lipótváros)',
        vibe: 'Central, grand, riverside elegance',
        bestFor: 'First-time visitors wanting quick access to both Buda and Pest',
        whyChoose: 'Immaculate streets, safe walking, and views of St. Stephen’s Basilica.',
        avoidIf: 'You prefer more alternative, edgy neighborhood vibes.'
      },
      {
        name: 'Buda Castle Quarter (District I)',
        vibe: 'Historic, elevated, cobblestone serenity',
        bestFor: 'Romantic getaways and sweeping river views',
        whyChoose: 'Extremely peaceful in the evenings after daytime tourists leave.',
        avoidIf: 'You want late-night restaurant variety without crossing the bridge.'
      }
    ],
    whatTravelersSaySummary: 'Travelers praise Budapest for exceptional value, magnificent spa culture, and stunning nighttime illuminations along the river. The primary tip is to book thermal bath entry tickets in advance during winter months.',
    whatToSkip: [
      'Currency exchange booths on Váci utca with inflated commissions.',
      'Unlicensed street taxis; always use the Bolt app or call established taxi companies.'
    ],
    thingsWorthDoing: [
      {
        title: 'Morning soak at Rudas Thermal Baths or Gellért Baths',
        description: 'Centuries-old mineral pools beneath an Ottoman dome overlooking the Danube.',
        whyWorthIt: 'Deeply relaxing and restorative; visit during morning hours for absolute tranquility.'
      },
      {
        title: 'Afternoon coffee and Dobos Torte at Café Gerbeaud or Central Café',
        description: 'Gilded ceilings, marble tables, and velvet banquettes from the Golden Age.',
        whyWorthIt: 'A delightful step back in time with impeccable pastry craftsmanship.'
      }
    ],
    placesToEat: [
      {
        name: 'Mazel Tov',
        type: 'Open-air courtyard Middle Eastern & Hungarian fusion',
        neighborhood: 'Jewish Quarter',
        whySpecial: 'Stunning hanging garden atmosphere beneath glass canopies with live acoustic music.'
      },
      {
        name: 'Espresso Embassy',
        type: 'Pioneering specialty coffee & pastries',
        neighborhood: 'District V',
        whySpecial: 'Historic vaulted brick ceiling, superb flat whites, and quiet reading corners.'
      }
    ],
    gettingAround: {
      recommendation: 'The Budapest public transit network (BKK) is clean, reliable, and includes historic Metro Line 1.',
      airportTransit: 'The 100E Airport Express bus runs directly from BUD Airport to Deák Ferenc tér in 35 minutes.',
      eveningWalkingAdvice: 'Danube promenades and District V/VIII are safe, well-lit, and beautiful for nighttime strolls.'
    },
    goodToKnow: [
      'Hungary uses the Hungarian Forint (HUF), not the Euro. Most places accept card, but keep 2,000 HUF in cash for small market stalls.',
      'Tipping around 10% is customary in restaurants unless a service charge is already included on the bill.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Safe, polite, and welcoming.',
      eveningAtmosphere: 'Danube embankments are romantic and peaceful with couples and solo strollers.',
      arrivalTips: 'The 100E express bus drops you right in the center with immediate metro transfers.',
      neighborhoodAdvice: 'District V and the Palace District offer the calmest, most secure bases.'
    },
    relatedHideoutIds: ['hideout-budapest-palace-boutique'],
    relatedStayIds: ['stay-budapest-memories'],
    relatedStoryIds: ['story-destinations-that-surprised-me'],
    relatedGuideIds: ['guide-weekend-in-budapest']
  },
  {
    id: 'prague',
    slug: 'prague',
    name: 'Prague',
    country: 'Czech Republic',
    tag: 'Spire skylines, cobblestone quiet & hidden terraced gardens',
    heroImage: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1600&q=80',
    blurb: 'A storybook capital of Gothic towers, Renaissance gardens, and peaceful residential neighborhoods like Vinohrady.',
    openingEditorial: 'If you only see Old Town Square at noon, you will miss the real Prague. Wake up at sunrise to cross Charles Bridge in mist, then spend the afternoon in the leafy, Art Nouveau avenues of Vinohrady.',
    whereIWouldStay: 'Vinohrady or Malá Strana. Vinohrady gives you tree-lined parks, incredible specialty coffee, and local bakeries with zero tourist congestion.',
    neighborhoods: [
      {
        name: 'Vinohrady',
        vibe: 'Art Nouveau elegance, specialty cafés, wine hills',
        bestFor: 'Solo female travelers, digital nomads, and relaxed stays',
        whyChoose: 'Riegrovy Sady park for sunset picnics overlooking Prague Castle.',
        avoidIf: 'You want to be 30 seconds from the Astronomical Clock.'
      },
      {
        name: 'Malá Strana (Lesser Town)',
        vibe: 'Baroque palaces, quiet embassies, cobblestone alleys',
        bestFor: 'Romantic strolls and quiet castle hill access',
        whyChoose: 'Magical quiet streets in the evening after day-trippers return to hotels.',
        avoidIf: 'You prefer modern apartment buildings.'
      }
    ],
    whatTravelersSaySummary: 'Travelers love the fairytale architecture and ease of walking. Community voices emphasize venturing outside District 1 into Vinohrady and Karlín for authentic Czech food and modern café culture.',
    whatToSkip: [
      'Tourist-oriented souvenir shops selling Russian nesting dolls (not Czech).',
      'Overcrowded trdelník pastry stands on the main bridge corridors (an imported tourist trend).'
    ],
    thingsWorthDoing: [
      {
        title: 'Sunrise Walk across Charles Bridge',
        description: 'Cross the Vltava River before 7:30 AM when the statues emerge from dawn mist.',
        whyWorthIt: 'Unforgettable silence and golden reflections on the river.'
      },
      {
        title: 'Vrtba Garden (Vrtbovská Zahrada)',
        description: 'A secluded Baroque terraced garden tucked behind an unassuming Malá Strana door.',
        whyWorthIt: 'Magnificent tiered hedges, classical sculptures, and panoramic castle views.'
      }
    ],
    placesToEat: [
      {
        name: 'Café Savoy',
        type: 'Grand neo-Renaissance café & bakery',
        neighborhood: 'Malá Strana',
        whySpecial: 'Detailed ceiling moldings, exquisite French-Czech breakfasts, and fresh brioche.'
      },
      {
        name: 'Kavárna co hledá jméno',
        type: 'Rustic industrial courtyard café',
        neighborhood: 'Smíchov',
        whySpecial: 'Sunlit brick courtyard, rotating art exhibits, and exceptional espresso.'
      }
    ],
    gettingAround: {
      recommendation: 'Prague’s tram network is one of the best in Europe. Tram 22 scenic route climbs through Malá Strana to the Castle.',
      airportTransit: 'Bus 119 connects PRG Airport to Nádraží Veleslavín metro station in 15 minutes (€1.70).',
      eveningWalkingAdvice: 'Vinohrady and Malá Strana are peaceful, clean, and safe for solo night strolls.'
    },
    goodToKnow: [
      'Czech currency is Czech Koruna (CZK). Card acceptance is virtually universal.',
      'Check menu prices carefully around the Old Town Square perimeter.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Safe, civilized, and highly walkable.',
      eveningAtmosphere: 'Parks and residential avenues are peaceful and well-maintained.',
      arrivalTips: 'Purchase a 24-hour transit pass at the airport terminal for seamless bus-to-metro transfer.',
      neighborhoodAdvice: 'Vinohrady offers the best balance of local warmth, safety, and foodie culture.'
    },
    relatedHideoutIds: ['hideout-prague-vinohrady-haven'],
    relatedStayIds: ['stay-prague-augustine'],
    relatedStoryIds: ['story-staying-outside-center'],
    relatedGuideIds: ['guide-how-to-find-weekend-escape']
  },
  {
    id: 'athens',
    slug: 'athens',
    name: 'Athens',
    country: 'Greece',
    tag: 'Ancient Acropolis views, rooftop jasmine & vibrant indie squares',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80',
    blurb: 'A city of bold contrasts where 2,500-year-old marble temples rise above dynamic rooftop bars and fragrant orange-tree lined avenues.',
    openingEditorial: 'Athens is undergoing a cultural renaissance. Beyond its iconic ancient monuments, it is a city of spirited conversations, rooftop jasmine blossoms, and neighborhood tavernas serving olive oil pressed from local Peloponnese groves.',
    whereIWouldStay: 'Koukaki or Pangrati. Koukaki sits directly beneath the south slope of the Acropolis with pedestrian lanes, small craft galleries, and lovely wine bistros.',
    neighborhoods: [
      {
        name: 'Koukaki',
        vibe: 'Leafy, relaxed, creative, adjacent to Acropolis',
        bestFor: 'Solo travelers, walkers, and intimate dining',
        whyChoose: 'Drakou pedestrian street is ideal for morning Greek yogurt and evening wine.',
        avoidIf: 'You want massive luxury resort complexes.'
      },
      {
        name: 'Pangrati',
        vibe: 'Local residential cool, artistic, lively piazzas',
        bestFor: 'Authentic local life and contemporary cocktail bars',
        whyChoose: 'Varnava Square for relaxed open-air dinners under plane trees.',
        avoidIf: 'You require immediate metro station proximity at your doorstep.'
      }
    ],
    whatTravelersSaySummary: 'Travelers praise the genuine warmth of Greek hospitality and the magical rooftop dinner views. Community tips emphasize staying south of Syntagma for the most relaxed neighborhood atmosphere.',
    whatToSkip: [
      'Monastiraki flea market souvenir shops selling mass-produced trinkets.',
      'Visiting the Acropolis at 1:00 PM in peak summer heat; arrive at 8:00 AM opening instead.'
    ],
    thingsWorthDoing: [
      {
        title: 'Sunset at Philopappos Hill',
        description: 'A pine-scented hillside park overlooking the Parthenon bathed in evening rose light.',
        whyWorthIt: 'Peaceful hiking trails, ancient monuments, and cooler sea breezes.'
      },
      {
        title: 'Afternoon at the Goulandris Museum of Contemporary Art',
        description: 'In Pangrati, housing modern masterworks by Cézanne, Van Gogh, Monet, and Picasso.',
        whyWorthIt: 'Intimate, uncrowded galleries and a peaceful garden café.'
      }
    ],
    placesToEat: [
      {
        name: 'Mani Mani',
        type: 'Modern regional Peloponnesian cuisine',
        neighborhood: 'Koukaki',
        whySpecial: 'Sophisticated handmade pasta, smoked pork, and citrus salads in a neoclassical townhouse.'
      },
      {
        name: 'Underdog Coffee & Roastery',
        type: 'Award-winning specialty coffee & brunch',
        neighborhood: 'Thissio',
        whySpecial: 'Gorgeous courtyard with championship baristas and single-origin pour-overs.'
      }
    ],
    gettingAround: {
      recommendation: 'Athens Metro Line 3 connects airport to center; city center is mostly pedestrian-friendly.',
      airportTransit: 'Metro Line 3 runs every 36 minutes from ATH Airport directly to Syntagma/Monastiraki (€9).',
      eveningWalkingAdvice: 'Koukaki, Plaka, and Pangrati are bustling with strollers and outdoor diners until 1 AM.'
    },
    goodToKnow: [
      'Greeks dine late; lunch is around 2:30 PM and dinner starts around 9:00 PM.',
      'Tap water in Athens is safe to drink.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Warm, hospitable, and lively.',
      eveningAtmosphere: 'Outdoor terrace culture makes dining solo feel natural and welcomed.',
      arrivalTips: 'Take Metro Line 3 into Syntagma or pre-book a taxi for late-night flights.',
      neighborhoodAdvice: 'Koukaki is the safest, most charming neighborhood for female solo travelers.'
    },
    relatedHideoutIds: ['hideout-athens-koukaki-rooftop'],
    relatedStayIds: ['stay-athens-shila'],
    relatedStoryIds: ['story-destinations-that-surprised-me'],
    relatedGuideIds: ['guide-how-to-find-weekend-escape']
  },
  {
    id: 'santorini',
    slug: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    tag: 'Caldera cliffside solitude, whitewashed arches & Aegean blue',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80',
    blurb: 'Dramatic volcanic cliff edges, cave retreats with plunge pools, and secret sunset vistas away from the tour bus throngs.',
    openingEditorial: 'Santorini can feel overwhelming if you stay strictly on the crowded Oia sunset path. But if you base in Imerovigli or inland medieval villages like Pyrgos, you discover an island of volcanic vineyards, silent marble pathways, and caldera serenity.',
    whereIWouldStay: 'Imerovigli or Pyrgos. Imerovigli is the highest cliff point—often called the "Balcony to the Aegean"—with breathtaking quiet compared to Oia.',
    neighborhoods: [
      {
        name: 'Imerovigli',
        vibe: 'Quiet, luxurious, cinematic caldera views',
        bestFor: 'Couples, solo retreats, and uninterrupted sunset tranquility',
        whyChoose: 'Cliffside cave suites with plunge pools and far fewer day-tripper crowds.',
        avoidIf: 'You want rowdy beach club parties.'
      },
      {
        name: 'Pyrgos',
        vibe: 'Inland medieval village, panoramic vistas, authentic tavernas',
        bestFor: 'Culture, wine tasting, and local village life',
        whyChoose: 'Restored stone cave houses, local bakeries, and panoramic island views.',
        avoidIf: 'You must have cliff-edge infinity pool views of the caldera directly.'
      }
    ],
    whatTravelersSaySummary: 'Travelers emphasize that visiting in shoulder season (May or late September/October) provides an incomparably richer, more peaceful experience with comfortable temperatures.',
    whatToSkip: [
      'Donkey rides up the Fira cliff stairs.',
      'Fighting thousands of people for a 3-second sunset photo at Oia Castle; watch the sunset from Skaros Rock instead.'
    ],
    thingsWorthDoing: [
      {
        title: 'Hike the Caldera Trail from Fira to Oia',
        description: 'A 10 km scenic dirt path along the cliff rim with panoramic sea vistas.',
        whyWorthIt: 'Start at 7:30 AM to beat the sun and take in the dramatic geology in complete quiet.'
      },
      {
        title: 'Wine Tasting at Sigalas or Venetsanos',
        description: 'Sample crisp, mineral Assyrtiko wines grown in unique basket-shaped volcanic vines.',
        whyWorthIt: 'Exceptional dry whites paired with local sun-dried cherry tomatoes and caper leaves.'
      }
    ],
    placesToEat: [
      {
        name: 'Metaxy Mas',
        type: 'Hidden Cretan-Santorinian hill tavern',
        neighborhood: 'Exo Gonia',
        whySpecial: 'Sensational baked feta with honey, slow-roasted lamb, and warm raki by the church terrace.'
      },
      {
        name: 'The Athenian House',
        type: 'Fine dining Greek with caldera sunset vista',
        neighborhood: 'Imerovigli',
        whySpecial: 'Vintage porcelain, impeccable seafood, and unmatched sunset elegance.'
      }
    ],
    gettingAround: {
      recommendation: 'Local KTEL buses connect Fira to major villages, or rent a small car for exploring southern beaches.',
      airportTransit: 'JTR Airport is 15 minutes by taxi or public bus to Fira.',
      eveningWalkingAdvice: 'Cliff paths are well-lit in hotel zones but wear sturdy footwear for uneven stone steps.'
    },
    goodToKnow: [
      'Plumbing in older island villages cannot handle paper products; use the provided bins.',
      'Pack sunscreen and wind-resistant layers as caldera winds pick up in the evening.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Relaxed, safe, and romantic.',
      eveningAtmosphere: 'Quiet cliffside walks with peaceful starlit horizons.',
      arrivalTips: 'Coordinate luggage porter service with your hotel if staying in cliffside cave rooms.',
      neighborhoodAdvice: 'Imerovigli provides the most serene and upscale sanctuary.'
    },
    relatedHideoutIds: ['hideout-santorini-imerovigli-cave'],
    relatedStayIds: ['stay-santorini-grace'],
    relatedStoryIds: ['story-places-i-look-for'],
    relatedGuideIds: ['guide-how-to-find-weekend-escape']
  },
  {
    id: 'mallorca',
    slug: 'mallorca',
    name: 'Mallorca',
    country: 'Spain',
    tag: 'Mountain stone fincas, olive groves & secluded turquoise calas',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    blurb: 'Beyond the crowded south lies an island of UNESCO-listed mountain villages, ancient olive groves, and hidden rocky coves.',
    openingEditorial: 'Mallorca’s Serra de Tramuntana mountains are a revelation. Stone villages like Deià, Valldemossa, and Sóller are shaded by citrus orchards, where days unfold between quiet hiking trails and swims in translucent turquoise water.',
    whereIWouldStay: 'Sóller or Deià. Sóller allows you to wake up to mountain views, catch the historic wooden tram down to the port for fresh red prawns, and retreat to a restored finca.',
    neighborhoods: [
      {
        name: 'Sóller & Port de Sóller',
        vibe: 'Citrus valley elegance, historic tram, harbor seafood',
        bestFor: 'Walkers, culinary lovers, and boutique finca stays',
        whyChoose: 'Flourishing town square, mountain air, and coastal access.',
        avoidIf: 'You dislike driving on mountain switchbacks.'
      },
      {
        name: 'Deià',
        vibe: 'Artist village, cliffside elegance, stone cottages',
        bestFor: 'Romantic hideouts, privacy, and literary history',
        whyChoose: 'Sensational coastal walks down to Cala Deià for rocky swims.',
        avoidIf: 'You require budget accommodations; Deià is quite exclusive.'
      },
      {
        name: 'Palma (Santa Catalina & Old Town)',
        vibe: 'Sophisticated Mediterranean capital, tapas, designer courtyards',
        bestFor: 'Short weekend city-meets-sea breaks',
        whyChoose: 'Outstanding gourmet market at Mercat de Santa Catalina.',
        avoidIf: 'You want complete mountain solitude.'
      }
    ],
    whatTravelersSaySummary: 'Travelers emphasize renting a car to discover the island\'s northern coast and packing water shoes for stony calas. The beauty of the Tramuntana mountain range leaves a lasting impression.',
    whatToSkip: [
      'Mega-resorts in Magaluf and S\'Arenal.',
      'Peak midday visits to Torrent de Pareis without comfortable walking footwear.'
    ],
    thingsWorthDoing: [
      {
        title: 'Swim and lunch at Cala Deià',
        description: 'A rocky pebble cove with crystal-clear water and seaside rustic restaurant Ca\'s Patró March.',
        whyWorthIt: 'Freshly caught grilled sea bass eaten right at the edge of crashing waves.'
      },
      {
        title: 'Ride the 1912 Wooden Train through the Tramuntana',
        description: 'A vintage mahogany train journey connecting Palma to Sóller through pine forests and mountain tunnels.',
        whyWorthIt: 'A wonderfully nostalgic, scenic way to travel across the island.'
      }
    ],
    placesToEat: [
      {
        name: 'Ca\'s Patró March',
        type: 'Cliffside seafood shack over Cala Deià',
        neighborhood: 'Deià',
        whySpecial: 'Rustic wooden terrace perched on rocky crags; book weeks in advance.'
      },
      {
        name: 'Bar Nou Sóller',
        type: 'Traditional Mallorcan tapas & pa amb oli',
        neighborhood: 'Sóller',
        whySpecial: 'Authentic local tavern with sobrasada, local cheeses, and crisp Mahou beer.'
      }
    ],
    gettingAround: {
      recommendation: 'A rental car is the best way to explore northern calas and mountain villages.',
      airportTransit: 'Palma Airport (PMI) is 15 minutes to central Palma or 35 minutes to Sóller by highway.',
      eveningWalkingAdvice: 'Village plazas in Sóller and Valldemossa are warm, safe, and family-oriented.'
    },
    goodToKnow: [
      'Pack rubber water shoes for entering rocky calas without slipping.',
      'Mountain roads are narrow; drive cautiously around cycling pelotons.'
    ],
    femaleTravelNotes: {
      generalVibe: 'Idyllic, restorative, and safe.',
      eveningAtmosphere: 'Mountain village squares have quiet, relaxed dining atmospheres.',
      arrivalTips: 'Pick up your rental car directly from the PMI terminal.',
      neighborhoodAdvice: 'Sóller offers the most convenient blend of amenities, safety, and natural beauty.'
    },
    relatedHideoutIds: ['hideout-mallorca-soller-finca'],
    relatedStayIds: ['stay-mallorca-belmond'],
    relatedStoryIds: ['story-places-i-look-for'],
    relatedGuideIds: ['guide-how-to-find-weekend-escape']
  },
  {
    id: 'copenhagen',
    slug: 'copenhagen',
    name: 'Copenhagen',
    country: 'Denmark',
    tag: 'Nordic design sanctuaries, bakery rituals & harbor dips',
    heroImage: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1600&q=80',
    blurb: 'The global capital of design harmony, morning cold-water harbor plunges, and warm cardamom buns at neighborhood bakeries.',
    openingEditorial: 'Copenhagen operates with an enviable ease. Everything is designed with human happiness and environmental balance in mind. Rent a city bike and within twenty minutes you are gliding past clean harbor baths, quiet botanical gardens, and candlelit wine bars.',
    whereIWouldStay: 'Vesterbro or Frederiksberg. Vesterbro has transformed into a vibrant hub of indie design, specialty coffee, and contemporary dining, while Frederiksberg offers calm tree-lined boulevards.',
    neighborhoods: [
      {
        name: 'Vesterbro',
        vibe: 'Creative, culinary, design-led and welcoming',
        bestFor: 'Solo female travelers, foodies, and design lovers',
        whyChoose: 'Værnedamsvej street (the "French street of Copenhagen") for flower shops and wine bars.',
        avoidIf: 'You want historical 17th-century castle quarters.'
      },
      {
        name: 'Nørrebro',
        vibe: 'Multicultural, vibrant, youthful, independent',
        bestFor: 'Second-hand shopping, indie coffee, and park strolls',
        whyChoose: 'Jægersborggade street for artisanal ceramic studios, natural wine, and caramel bakeries.',
        avoidIf: 'You prefer formal luxury avenues.'
      },
      {
        name: 'Indre By (Old Town)',
        vibe: 'Historic canals, royal palaces, cobbled lanes',
        bestFor: 'First-time short stays',
        whyChoose: 'Walkable to Nyhavn, Torvehallerne food market, and the design museum.',
        avoidIf: 'You want to avoid standard high-street retail crowds.'
      }
    ],
    whatTravelersSaySummary: 'Travelers rate Copenhagen as one of the safest and most effortless solo destinations worldwide. The primary advice is to rent a bicycle immediately and embrace the local bakery culture.',
    whatToSkip: [
      'The Little Mermaid statue at midday — small and swarmed by tour buses; visit the Kastellet fortress nearby instead.',
      'Taking taxis when the bike lanes and automated metro run 24/7 with zero friction.'
    ],
    thingsWorthDoing: [
      {
        title: 'Morning Cardamom Bun at Juno the Bakery or Hart Bageri',
        description: 'World-renowned sourdough and laminated cardamom pastries made with organic stone-ground flour.',
        whyWorthIt: 'Arrive early, sit on the bench in the morning sun, and experience true Danish hygge.'
      },
      {
        title: 'Harbor Swim at Sandkaj or Islands Brygge',
        description: 'Crystal-clear seawater harbor baths right in the urban center.',
        whyWorthIt: 'Join locals for an invigorating swim followed by a warm sauna session.'
      }
    ],
    placesToEat: [
      {
        name: 'Apollo Bar & Kantine',
        type: 'Contemporary Nordic in the Charlottenborg Palace courtyard',
        neighborhood: 'Nyhavn / Indre By',
        whySpecial: 'Sleek design, rotating seasonal plates, and natural wines in an art academy courtyard.'
      },
      {
        name: 'TorvehallerneKBH',
        type: 'Twin glass gourmet market halls',
        neighborhood: 'Nørreport',
        whySpecial: 'Smørrebrød (Danish open-faced rye sandwiches) from Hallernes Smørrebrød and fresh oysters.'
      }
    ],
    gettingAround: {
      recommendation: 'Rent a Donkey Republic bike or rely on the spotless 24/7 Metro network.',
      airportTransit: 'The Metro runs non-stop from CPH Airport directly into Kongens Nytorv / Nørreport in 13 minutes (€4).',
      eveningWalkingAdvice: 'Copenhagen is exceptionally safe and brightly lit at night across all central districts.'
    },
    goodToKnow: [
      'Denmark is virtually cashless; all merchants, buses, and market stalls accept contactless cards and Apple Pay.',
      'Always observe bicycle traffic rules: signal turns with a raised hand or extended arm.'
    ],
    femaleTravelNotes: {
      generalVibe: 'One of the safest, most egalitarian cities in the world.',
      eveningAtmosphere: 'Effortless night biking and safe returns at any hour.',
      arrivalTips: 'Metro station is located right inside Terminal 3 of CPH Airport.',
      neighborhoodAdvice: 'Vesterbro and Frederiksberg offer the most relaxed, charming living experience.'
    },
    relatedHideoutIds: ['hideout-copenhagen-vesterbro-loft'],
    relatedStayIds: ['stay-copenhagen-sanders'],
    relatedStoryIds: ['story-what-i-look-for'],
    relatedGuideIds: ['guide-how-to-find-weekend-escape']
  }
];
