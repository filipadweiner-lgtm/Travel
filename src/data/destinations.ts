import { Destination } from '../types';
import icelandImg from '../assets/images/iceland_black_sand_raw_1786970961856.jpg';
import liechtensteinImg from '../assets/images/liechtenstein_malbun_trail_1786971038343.jpg';
import switzerlandImg from '../assets/images/switzerland_murren_chalet_1786970975469.jpg';
import norwayWaterfallImg from '../assets/images/norway_countryside_waterfall_1786889422602.jpg';
import swedenImg from '../assets/images/sweden_archipelago_cottage_1786971064310.jpg';
import chinaImg from '../assets/images/china_yangshuo_karst_1786971008164.jpg';
import australiaImg from '../assets/images/australia_freycinet_coast_1786971049642.jpg';
import newZealandImg from '../assets/images/new_zealand_wanaka_lake_1786971023438.jpg';
import japanImg from '../assets/images/japan_kyoto_machiya_lane_1786970989907.jpg';

export const DESTINATIONS: Destination[] = [
  // 1. ICELAND
  {
    id: 'iceland',
    slug: 'iceland',
    name: 'Iceland',
    country: 'Iceland',
    tag: 'Black volcanic sands, quiet geothermal pools & vast arctic light',
    emotionalStatement: "The country that makes you feel like you've landed on another planet.",
    heroImage: icelandImg,
    image: icelandImg,
    blurb: 'A landscape of elemental contrast where steaming hot springs cut through glacial plains, dramatic sea cliffs host nesting puffins, and silence stretches for unbroken miles.',
    openingEditorial: "Iceland is less about visiting individual attractions and more about letting your internal clock adjust to weather, daylight, and sheer geographic scale. Outside Reykjavík, civilization drops away quickly into moss-covered lava fields, cascading waterfalls, and obsidian shorelines. If I were planning this trip, I'd rent a reliable 4x4, focus deeply on the South Coast and Snæfellsnes, and build afternoons around hot spring soaks as weather rolls across the plains.",
    whereIWouldStay: 'A secluded timber cabin along the South Coast near Vík or an unhurried fjord guesthouse in the Snæfellsnes Peninsula.',
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
        bestFor: 'Photographers, hikers, and travelers exploring the southern coastline',
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
    didYouKnow: [
      {
        fact: "Iceland has almost no natural forests because 9th-century Viking settlers cleared 95% of native birch trees for timber and sheep grazing.",
        context: "Today, extensive reforestation programs like 'Hekluskógar' are slowly restoring native woodlands across volcanic plains.",
        source: "Icelandic Forestry Service (Skógræktin)"
      },
      {
        fact: "The black sand on Reynisfjara isn't ordinary sand: it is basalt lava that shattered instantly when molten magma collided with the freezing North Atlantic.",
        context: "Because there is no quartz or coral to dilute it, the sand remains an obsidian shade of black.",
        source: "University of Iceland Institute of Earth Sciences"
      },
      {
        fact: "Over 85% of all Icelandic homes are heated directly by geothermal hot water pumped straight from volcanic aquifers.",
        context: "Even the pavements in central Reykjavík have geothermal pipes underneath to melt snow in winter.",
        source: "Orkustofnun (National Energy Authority)"
      },
      {
        fact: "The belief in 'Huldufólk' (hidden people / elves) is rooted in an ecological respect for untouched geological formations.",
        context: "Road constructions have occasionally been rerouted around sacred boulders to preserve natural history and folklore.",
        source: "National Museum of Iceland"
      },
      {
        fact: "Iceland does not have a standing army, navy, or air force, and has held the #1 spot on the Global Peace Index for over 15 consecutive years.",
        context: "Police officers do not carry firearms during routine patrols.",
        source: "Institute for Economics and Peace"
      }
    ],
    hiddenStories: [
      {
        id: 'hs-iceland-turf-houses',
        title: 'The Strange Story Behind Iceland\'s Turf Houses',
        teaser: 'Why ancient Icelanders built homes with living grass roofs that insulated against arctic storms for a thousand years.',
        category: 'Architecture',
        destinationId: 'iceland',
        readTime: '5 min read'
      },
      {
        id: 'hs-iceland-ground-breathes',
        title: 'Why Iceland Has a Place Where the Ground Seems to Breathe',
        teaser: 'In the geothermal fissures of Reykjanes, steam vents and subterranean magma pulses create the feeling of a living earth.',
        category: 'Geology & Wonder',
        destinationId: 'iceland',
        readTime: '6 min read'
      },
      {
        id: 'hs-iceland-hidden-hot-pots',
        title: 'The Hidden Rock Pools Locals Used Long Before Spas',
        teaser: 'Tucked into mossy canyons and remote sheep valleys are thermal rock baths built by hand over centuries.',
        category: 'Local Traditions',
        destinationId: 'iceland',
        readTime: '4 min read'
      }
    ],
    femaleTravelNotes: {
      generalVibe: 'Consistently ranked #1 globally for gender equality and safety; an ideal destination for solo female travelers.',
      eveningAtmosphere: 'Very respectful and relaxed street culture with zero harassment in public spaces.',
      arrivalTips: 'If arriving on early morning transatlantic flights at KEF (often 5:00 AM), pre-book airport thermal bath entry or arrange early hotel check-in to rest.',
      neighborhoodAdvice: 'Vesturbær and the 101 downtown area are flat, safe, and easily walked at any hour.'
    },
    soloTravelAdvice: {
      headline: 'If I Were Traveling to Iceland Alone',
      tips: [
        {
          title: 'Choose Guesthouses with Communal Kitchens',
          advice: 'Rural guesthouses along the South Coast often have shared dining areas where solo travelers exchange road condition tips over tea.'
        },
        {
          title: 'Embrace the Neighborhood Pools (Sundlaugar)',
          advice: 'Going to the pool in the late afternoon is the easiest, most authentic way to experience local life without feeling like an outsider.'
        },
        {
          title: 'Keep Your Driving Days Under 3.5 Hours',
          advice: 'Solo driving in high-latitude weather requires focus. Give yourself time for spontaneous short canyon hikes and warm bakery stops.'
        }
      ]
    },
    girlsTripInspiration: {
      headline: "Perfect for a Girls' Trip: Hot Springs, Ocean Saunas & Coastal Scenery",
      ideas: [
        {
          title: 'Geothermal Spa Hopping & Snæfellsnes Ocean Cabins',
          desc: 'Spend mornings hiking black pebble coves, afternoons soaking in mineral pools, and evenings watching auroras from your deck.',
          tag: 'Wellness & Nature'
        },
        {
          title: 'Reykjavík Design & Food Weekend',
          desc: 'Explore vintage Nordic wool boutiques, artisan ceramic workshops, natural wine bars, and harbor bakeries.',
          tag: 'Culture & Dining'
        }
      ]
    },
    relatedHideoutIds: ['hideout-iceland-south-cabin', 'hideout-iceland-snaefellsnes-retreat'],
    relatedStayIds: ['stay-iceland-ion-adventure', 'stay-iceland-hotel-rang'],
    relatedStoryIds: ['story-iceland-road-trip', 'story-iceland-more-than-reykjavik', 'story-iceland-black-sand', 'story-iceland-turf-houses'],
    relatedGuideIds: ['guide-iceland-road-trip-essentials']
  },

  // 2. LIECHTENSTEIN
  {
    id: 'liechtenstein',
    slug: 'liechtenstein',
    name: 'Liechtenstein',
    country: 'Liechtenstein',
    tag: 'Alpine valleys, storybook castles & border-crossing mountain trails',
    emotionalStatement: 'The tiny Alpine principality with its own quiet majesty and fairy-tale peaks.',
    heroImage: liechtensteinImg,
    image: liechtensteinImg,
    blurb: 'Nestled between Switzerland and Austria, Liechtenstein is a micro-state of extraordinary charm: timber-chalet mountain villages, terraced Rhine vineyards, and dramatic hiking ridges.',
    openingEditorial: "Liechtenstein is often dismissed as a mere transit stamp on a passport, but staying here reveals an intimate Alpine wonderland. High above the Rhine Valley in the mountain village of Malbun, cows graze in wildflower meadows framed by limestone peaks. What I love about Liechtenstein is its unhurried scale: you can cross from quiet vineyards to high mountain trails in under twenty minutes.",
    whereIWouldStay: 'A traditional family-run Alpine chalet in Malbun or a boutique vineyard guesthouse near Vaduz.',
    neighborhoods: [
      {
        name: 'Vaduz (Capital & Vineyards)',
        vibe: 'Refined, scenic, overlooked by the Princely Castle',
        bestFor: 'Art museums (Kunstmuseum), princely wine cellars, and Rhine riverside cycling',
        whyChoose: 'Walk up the forested hillside trail to Vaduz Castle overlook for sunset across the Swiss Alps.',
        avoidIf: 'You are looking for bustling big-city nightlife.'
      },
      {
        name: 'Malbun (Alpine Valley)',
        vibe: 'Crisp mountain air, ski trails, and summer wildflower meadows',
        bestFor: 'Hikers, solo wellness travelers, and peaceful mountain retreats',
        whyChoose: 'Car-free village center nestled in an amphitheater of 2,000-meter peaks with direct trailheads.',
        avoidIf: 'You need quick access to high-speed railway stations.'
      },
      {
        name: 'Balzers & Gutenberg Castle',
        vibe: 'Historic church spires, medieval fortress hills, and vineyard paths',
        bestFor: 'Photography, quiet afternoon strolls, and historic exploration',
        whyChoose: 'Gutenberg Castle rises dramatically on a freestanding rock outcrop with panoramic valley views.',
        avoidIf: 'You want extensive restaurant variety.'
      },
      {
        name: 'Triesenberg',
        vibe: 'Walser mountain heritage, panoramic terraces, and wood-paneled inns',
        bestFor: 'Traditional Alpine gastronomy and dramatic views overlooking the entire Rhine basin',
        whyChoose: 'Rich cultural roots with Walser dialect traditions dating back to 13th-century settlers.',
        avoidIf: 'You dislike winding mountain roads.'
      }
    ],
    whatTravelersSaySummary: 'Travelers are frequently surprised by how peaceful and scenic Liechtenstein is once you leave the main street of Vaduz and head into the mountains. The Liechtenstein Trail (Liechtenstein-Weg) is praised as one of Europe’s most delightful multi-day hiking routes.',
    whatToSkip: [
      'Treating Liechtenstein as a 30-minute souvenir stamp stop without ascending to the mountain trails of Malbun or Triesenberg.',
      'Assuming you need a car: the green LIEmobil bus network is punctual, clean, and connects every village seamlessly.',
      'Expecting shops and bakeries to stay open late on Sundays.'
    ],
    thingsWorthDoing: [
      {
        title: 'Hike the Fürstensteig Panoramic Trail',
        description: 'A classic, thrilling mountain path carved into exposed limestone cliffs above the Rhine Valley.',
        whyWorthIt: 'Sweeping vistas stretching from the Swiss Säntis massif all the way to the Austrian Vorarlberg.'
      },
      {
        title: 'Sample Princely Wines at the Hofkellerei',
        description: 'Tasting Pinot Noir and Chardonnay grown on the sunny south-facing slopes below Vaduz Castle.',
        whyWorthIt: 'Liechtenstein’s unique Föhn wind creates a microclimate that yields exceptionally delicate Alpine wines.'
      },
      {
        title: 'Walk the Walser Heritage Path in Triesenberg',
        description: 'Discovering 700-year-old timber homes and listening to the unique Walser dialect stories.',
        whyWorthIt: 'A glimpse into centuries of Alpine resilience and folk traditions.'
      }
    ],
    placesToEat: [
      {
        name: 'Restaurant Torkel',
        type: 'Michelin-starred Alpine gastronomy overlooking royal vineyards',
        neighborhood: 'Vaduz',
        whySpecial: 'Dine on the terrace directly beside historic Pinot Noir vines with views of the snow-capped Swiss mountains.'
      },
      {
        name: 'Berggasthaus Sareis',
        type: 'Mountain cheese fondue & hearty Alpine platters',
        neighborhood: 'Malbun (top of Sareis chairlift)',
        whySpecial: 'Perched at 2,000 meters; savor homemade cheese dumplings with 360-degree mountain views.'
      },
      {
        name: 'Gasthof Löwen',
        type: 'Historic 14th-century inn & traditional Walser dishes',
        neighborhood: 'Vaduz',
        whySpecial: 'One of the oldest guesthouses in the principality with frescoed timber dining rooms.'
      }
    ],
    gettingAround: {
      recommendation: 'Use the LIEmobil public bus network (or the Swiss Travel Pass which is valid across all buses). Renting an e-bike is a delightful way to explore the Rhine trails.',
      airportTransit: 'Nearest major airports are Zurich (ZRH, 1h15m by train/bus via Sargans) and Friedrichshafen (FDH, Germany).',
      eveningWalkingAdvice: 'Liechtenstein has virtually zero crime. Walking through villages at night under starry mountain skies is exceptionally safe and tranquil.'
    },
    goodToKnow: [
      'Last verified: March 2026. Liechtenstein uses the Swiss Franc (CHF), though Euros are widely accepted.',
      'There are no border controls between Switzerland and Liechtenstein: you simply cross over a wooden bridge over the Rhine.',
      'Liechtenstein has no commercial airport and no domestic passenger railway line of its own; access is via Swiss (Sargans/Buchs) or Austrian (Feldkirch) stations.'
    ],
    didYouKnow: [
      {
        fact: "Liechtenstein is one of only two 'doubly landlocked' countries in the world (surrounded exclusively by countries that are also landlocked).",
        context: "The other doubly landlocked country is Uzbekistan.",
        source: "Liechtenstein National Administration"
      },
      {
        fact: "Liechtenstein has no standing military force: it dissolved its 80-man army in 1868 after the Austro-Prussian War to save public funds.",
        context: "Legend holds that the 80 soldiers returned from their final deployment with 81 men, having befriended an Italian liaison officer on the march home.",
        source: "Liechtenstein National Museum"
      },
      {
        fact: "You can walk across the entire country in a single weekend: the Liechtenstein Trail spans 75 kilometers from north to south through all 11 municipalities.",
        context: "The trail has an interactive augmented-reality app (LIstory) sharing local folklore at 147 historic points.",
        source: "Liechtenstein Marketing"
      },
      {
        fact: "The reigning Prince of Liechtenstein still lives in Vaduz Castle overlooking the capital, and hosts an annual community reception in the castle gardens on National Day (August 15).",
        context: "Citizens and visitors are invited to share drinks and conversation in the royal rose gardens.",
        source: "Princely House of Liechtenstein"
      },
      {
        fact: "Liechtenstein is the world's leading producer of precision dental ceramics and false teeth, exporting over 60 million artificial teeth annually.",
        context: "Headquartered in Schaan, Ivoclar Vivadent is a global leader in dental technology.",
        source: "Liechtenstein Chamber of Commerce"
      }
    ],
    hiddenStories: [
      {
        id: 'hs-liechtenstein-no-airport',
        title: 'Why Liechtenstein Has No Airport — And How It Stays Connected',
        teaser: 'How a micro-state without runways or domestic trains created Europe’s most serene borderless transport model.',
        category: 'Untold Stories',
        destinationId: 'liechtenstein',
        readTime: '4 min read'
      },
      {
        id: 'hs-liechtenstein-castle-vaduz',
        title: 'The Castle Above Vaduz That Isn\'t Quite What You Think',
        teaser: 'A 12th-century fortress that remains a private working family home rather than a tourist showroom.',
        category: 'History & Legends',
        destinationId: 'liechtenstein',
        readTime: '5 min read'
      },
      {
        id: 'hs-liechtenstein-walk-across',
        title: 'The Country So Small You Can Walk Across It in a Weekend',
        teaser: 'Following the secret ridge paths of the Walser people through wildflower meadows and hidden Alpine huts.',
        category: 'Road Trips & Trails',
        destinationId: 'liechtenstein',
        readTime: '5 min read'
      }
    ],
    femaleTravelNotes: {
      generalVibe: 'Extremely safe, tranquil, and welcoming. Ideal for solo women looking for quiet Alpine rejuvenation.',
      eveningAtmosphere: 'Quiet mountain evenings centered around intimate wine bars and hotel firesides.',
      arrivalTips: 'Take the train from Zurich to Sargans, then hop on the #11 or #12E bus directly into Vaduz (15 mins).',
      neighborhoodAdvice: 'Malbun and Triesenberg are peaceful mountain havens with zero street commotion.'
    },
    soloTravelAdvice: {
      headline: 'If I Were Traveling to Liechtenstein Alone',
      tips: [
        {
          title: 'Base in Malbun for Morning Alpine Walks',
          advice: 'Staying in Malbun lets you step right out of your guesthouse onto high-altitude ridge paths before day hikers arrive.'
        },
        {
          title: 'Rent an E-Bike for the Rhine River Path',
          advice: 'The flat, paved cycle path along the Rhine is safe, scenic, and lets you glide between Switzerland and Liechtenstein at will.'
        }
      ]
    },
    girlsTripInspiration: {
      headline: "Perfect for a Girls' Trip: Alpine Spas, Princely Vineyards & Quiet Trails",
      ideas: [
        {
          title: 'Wine Tasting & Rhine Valley Wellness',
          desc: 'Afternoons tasting Pinot Noir at the Princely cellars, followed by heated infinity pool sessions overlooking the Alps.',
          tag: 'Wine & Wellness'
        }
      ]
    },
    relatedHideoutIds: ['hideout-liechtenstein-malbun-chalet', 'hideout-switzerland-lauterbrunnen-chalet'],
    relatedStayIds: ['stay-liechtenstein-vaduz-boutique', 'stay-switzerland-zermatt-mountain'],
    relatedStoryIds: ['story-liechtenstein-walk-across', 'story-liechtenstein-mountain-village', 'story-switzerland-car-free-villages'],
    relatedGuideIds: ['guide-liechtenstein-alpine-trails-transit']
  },

  // 3. SWITZERLAND
  {
    id: 'switzerland',
    slug: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    tag: 'Car-free alpine villages, crystal lakes & panoramic mountain railways',
    emotionalStatement: 'Where engineering meets alpine poetry and quiet mountain chalets.',
    heroImage: switzerlandImg,
    image: switzerlandImg,
    blurb: 'Towering granite peaks, pristine turquoise lakes, car-free timber villages like Mürren and Zermatt, and the world’s most scenic public railway system.',
    openingEditorial: "Switzerland is so much more than luxury watches and postcard clichés. Its true magic is found in the quiet moments: the sound of cowbells drifting through misty pine forests in Gimmelwald, the silence of stepping off a mountain train onto crunchy snow at 2,000 meters, and sharing a pot of bubbly Gruyère fondue in a centuries-old timber stube. If I were planning this trip, I'd skip the tour buses, buy a Swiss Travel Pass, and base in car-free mountain villages where the only sound is melting glacier water.",
    whereIWouldStay: 'A historic wooden chalet in car-free Mürren or a boutique lakefront retreat on Lake Lucerne.',
    neighborhoods: [
      {
        name: 'Bernese Oberland (Mürren & Lauterbrunnen)',
        vibe: 'Dramatic sheer cliff walls, 72 roaring waterfalls, and car-free tranquility',
        bestFor: 'Hikers, solo travelers, and lovers of classic wooden chalet architecture',
        whyChoose: 'Mürren sits perched 800 meters above the valley floor with unobstructed views of the Eiger, Mönch, and Jungfrau.',
        avoidIf: 'You want car access directly to your front door.'
      },
      {
        name: 'Zermatt & The Matterhorn',
        vibe: 'Iconic pyramid peak, car-free electric taxis, and alpine mountaineering',
        bestFor: 'Matterhorn sunrise views, glacier skiing, and historic mountaineer lore',
        whyChoose: 'The historic Hinterdorf quarter preserved 16th-century larch-wood barns and sheep sheds.',
        avoidIf: 'You are on a very strict budget.'
      },
      {
        name: 'Lake Lucerne (Vitznau & Weggis)',
        vibe: 'Mirror-still waters, steamboats, and grand historic lakeside terraces',
        bestFor: 'Romantic getaways, lake swimming, and riding the world\'s oldest cogwheel train up Mount Rigi',
        whyChoose: 'Breathtaking contrast of palm trees along the lakeshore against snow-dusted alpine summits.',
        avoidIf: 'You only want high-altitude backcountry trekking.'
      },
      {
        name: 'Engadin Valley (Sils-Maria & Guarda)',
        vibe: 'Larch forests turning gold in autumn, sgraffito-decorated stone houses, and deep silence',
        bestFor: 'Artists, writers, slow travel enthusiasts, and romantic winter cross-country skiing',
        whyChoose: 'Guarda is considered the best-preserved Romansh village in the Swiss Alps.',
        avoidIf: 'You want quick 30-minute links to major international airports.'
      }
    ],
    whatTravelersSaySummary: 'Travelers praise Switzerland’s legendary transit punctuality, clean alpine water, and safe, civilized atmosphere. The primary advice is to purchase a Swiss Travel Pass or Half Fare Card, as individual train and cable car tickets add up quickly.',
    whatToSkip: [
      'Taking tourist tour buses when the Swiss Federal Railways (SBB) network is cleaner, faster, and allows you to hop off at spontaneous village stops.',
      'Dining exclusively on commercial tourist promenades when local alpine farm huts (Alpwirtschaft) offer fresh mountain cheeses and fruit tarts.',
      'Rushing through five cities in four days: pick one mountain valley and let yourself unpack.'
    ],
    thingsWorthDoing: [
      {
        title: 'Ride the Glacier Express through the Rhine Gorge',
        description: 'Gliding through the "Swiss Grand Canyon" in a panoramic glass-roof train with unhurried dining.',
        whyWorthIt: 'An eight-hour cinematic journey across 291 bridges and through 91 tunnels across the spine of the Alps.'
      },
      {
        title: 'Walk the Northface Trail in Mürren at Dawn',
        description: 'A gentle alpine loop past working dairy farms with uninterrupted views of the Eiger north wall.',
        whyWorthIt: 'Crisp morning air and the rhythmic chime of copper cowbells with zero tourist crowds.'
      },
      {
        title: 'Lake Lucerne Vintage Paddle Steamer Cruise',
        description: 'Cruising past historic founding sites of the Swiss Confederation on an authentic 1901 paddle steamer.',
        whyWorthIt: 'Gently slicing through fjord-like waters with wooden brass interiors and mountain reflections.'
      }
    ],
    placesToEat: [
      {
        name: 'Alpstübli Mürren',
        type: 'Artisan cheese fondue & rosti potatoes',
        neighborhood: 'Mürren, Bernese Oberland',
        whySpecial: 'Cozy wood-fired hearth serving fondue made with milk from cows grazing on the slope outside.'
      },
      {
        name: 'Chez Vrony',
        type: 'Gourmet mountain dining overlooking the Matterhorn',
        neighborhood: 'Findeln, Zermatt',
        whySpecial: 'Centuries-old family farmhouse serving organic cured meats and mountain cheese with iconic peak views.'
      },
      {
        name: 'Café de Ville / Einstein-Kaffee',
        type: 'Historic specialty café & Swiss pastries',
        neighborhood: 'Old Town, Bern',
        whySpecial: 'Set along the UNESCO-listed sandstone arcades where Albert Einstein once took his afternoon coffee.'
      }
    ],
    gettingAround: {
      recommendation: 'The Swiss Travel Pass is the gold standard: unlimited travel on trains, buses, boats, and free entry to 500+ museums.',
      airportTransit: 'Zurich (ZRH) and Geneva (GVA) airports have direct underground train stations with trains departing every 10–15 minutes.',
      eveningWalkingAdvice: 'Swiss towns, cities, and alpine villages are among the safest in the world. Evening walks are serene and peaceful.'
    },
    goodToKnow: [
      'Last verified: February 2026. Tap water from public fountains (brunnen) throughout cities and mountain villages is crystal-clear and safe to drink.',
      'Currency is Swiss Franc (CHF); credit cards and Apple Pay are accepted virtually everywhere.',
      'Language: Switzerland has four national languages (German, French, Italian, Romansh); English is spoken fluently in tourism and transit hubs.'
    ],
    didYouKnow: [
      {
        fact: "Switzerland has over 7,000 lakes, and you are never more than 16 kilometers (10 miles) away from a lake anywhere in the country.",
        context: "The water in Swiss lakes is so clean that locals routinely swim in the river flowing through central Zurich and Bern on their lunch breaks.",
        source: "Federal Office for the Environment (FOEN)"
      },
      {
        fact: "Swiss cowbells are tuned individually to distinct musical pitches so farmers can identify their specific cows in dense mountain fog.",
        context: "The bells are crafted from brass alloys with traditional leather straps decorated with regional Edelweiss embroidery.",
        source: "Swiss National Heritage Archives"
      },
      {
        fact: "Car-free villages like Zermatt, Mürren, and Wengen ban combustion engine vehicles by municipal law to protect air quality and quiet.",
        context: "Transport is conducted exclusively on foot, by cable car, cogwheel train, or small electric luggage carts.",
        source: "Valais Tourism Board"
      },
      {
        fact: "The Gotthard Base Tunnel is the world's longest and deepest railway tunnel (57 kilometers long and up to 2.3 kilometers below granite mountain peaks).",
        context: "It cut transit time through the Alps between Zurich and Milan down to under 3.5 hours.",
        source: "Swiss Federal Railways (SBB)"
      },
      {
        fact: "Switzerland has enough underground fallout and mountain shelter capacity to house 100% of its population in an emergency.",
        context: "Building regulations since the Cold War era required nuclear shelters in residential buildings or access to municipal bunker networks.",
        source: "Federal Office for Civil Protection (FOCP)"
      }
    ],
    hiddenStories: [
      {
        id: 'hs-switzerland-car-free-villages',
        title: 'The Swiss Village Where Cars Aren\'t Welcome',
        teaser: 'How Mürren and Zermatt preserved the tranquil rhythm of 19th-century Alpine life in a hyper-connected modern world.',
        category: 'Untold Stories',
        destinationId: 'switzerland',
        readTime: '6 min read'
      },
      {
        id: 'hs-switzerland-cowbells',
        title: 'The Strange Story Behind Swiss Cowbells',
        teaser: 'Why every bell has an acoustic signature tuned to fog, folklore, and centuries of mountain herding.',
        category: 'Local Traditions',
        destinationId: 'switzerland',
        readTime: '5 min read'
      },
      {
        id: 'hs-switzerland-train-magic',
        title: 'The Mountain Train Journey I\'d Put on My List',
        teaser: 'Gliding across ancient stone viaducts and through spiral mountain tunnels on the Bernina Express.',
        category: 'Road Trips & Rails',
        destinationId: 'switzerland',
        readTime: '6 min read'
      }
    ],
    femaleTravelNotes: {
      generalVibe: 'Exemplary safety, respectful culture, and immaculate public infrastructure.',
      eveningAtmosphere: 'Calm, civilized, and comfortable for solo dining in hotel bistros and mountain stüblis.',
      arrivalTips: 'Luggage transfer services (SBB Fly-Rail) let you send your bags straight from Zurich Airport to your mountain hotel.',
      neighborhoodAdvice: 'Mürren, Lauterbrunnen, and Old Town Lucerne are delightful and empowering for solo female travelers.'
    },
    soloTravelAdvice: {
      headline: 'If I Were Traveling to Switzerland Alone',
      tips: [
        {
          title: 'Buy the Swiss Travel Pass & Use the SBB App',
          advice: 'The SBB app shows platform numbers, delay minutes (rare), and coach occupancy in real time, making solo transfers stress-free.'
        },
        {
          title: 'Stay in Family-Run Alpine Chalets',
          advice: 'Small Swiss inns offer warm hospitality, homemade breakfasts with local mountain butter and jams, and insider hiking tips.'
        }
      ]
    },
    girlsTripInspiration: {
      headline: "Perfect for a Girls' Trip: Alpine Spas, Lake Ferries & Fondue Evenings",
      ideas: [
        {
          title: 'Lake Lucerne Thermal Baths & Cogwheel Mountain Day',
          desc: 'Rigi Kaltbad mineral baths with panoramic lake views, followed by a vintage steamboat cruise and sunset wine.',
          tag: 'Wellness & Views'
        },
        {
          title: 'Zermatt Chalet & Alpine Fondue Retreat',
          desc: 'Morning walks with Matterhorn reflections, afternoon spa sessions, and cozy evenings beside a crackling wood fire.',
          tag: 'Mountain Hideout'
        }
      ]
    },
    relatedHideoutIds: ['hideout-switzerland-lauterbrunnen-chalet', 'hideout-liechtenstein-malbun-chalet'],
    relatedStayIds: ['stay-switzerland-zermatt-mountain', 'stay-switzerland-lucerne-lakefront'],
    relatedStoryIds: ['story-switzerland-car-free-villages', 'story-switzerland-cowbells', 'story-switzerland-train-magic'],
    relatedGuideIds: ['guide-switzerland-train-journeys']
  },

  // 4. NORWAY
  {
    id: 'norway',
    slug: 'norway',
    name: 'Norway',
    country: 'Norway',
    tag: 'Dramatic sea fjords, arctic fishing cabins & slow mountain railways',
    emotionalStatement: 'Where the mountains drop straight into emerald waters and silence heals.',
    heroImage: norwayWaterfallImg,
    image: norwayWaterfallImg,
    blurb: 'Deep glacial valleys carving through granite peaks, wooden rorbuer cabins perched over mirror-still waters, and quiet coastal journeys on public ferries.',
    openingEditorial: "Norway rewards the traveler who slows down. The beauty of this country is not something you rush past; it is best absorbed from the wooden deck of a fjord ferry in early morning, or beside a crackling woodstove in a Lofoten fishing cabin while rain patters on the turf roof. If I were planning this trip, I'd pick one dramatic fjord region, unpack my bag for four nights, and let the rhythm of the tides and mountains guide the days.",
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
    didYouKnow: [
      {
        fact: "Norway's 'Allemannsretten' (Right to Public Access) is codified in law, granting anyone the constitutional right to hike, forage berries, and camp on uncultivated land.",
        context: "As long as you stay at least 150 meters away from the nearest inhabited house or cabin and leave no trace.",
        source: "Norwegian Outdoor Recreation Act"
      },
      {
        fact: "The traditional red paint on Norwegian 'rorbuer' fishing cabins was historically made from cod liver oil mixed with red ochre and animal blood because it was the cheapest weatherproof mixture.",
        context: "Wealthier merchants painted their homes with expensive white paint, creating the historic visual hierarchy still seen in seaside villages.",
        source: "Lofoten Museum (Museum Nord)"
      },
      {
        fact: "In the Arctic archipelago of Svalbard (Norway), the sun does not set at all from April 19 to August 23 — over four full months of continuous daylight.",
        context: "In contrast, winter brings the Polar Night with two and a half months of twilight darkness lit by northern lights.",
        source: "Norwegian Meteorological Institute"
      },
      {
        fact: "Norway has over 1,190 distinct fjords along its deeply fractured 100,000-kilometer coastline.",
        context: "If unraveled, Norway's coastline would wrap around the Earth's equator two and a half times.",
        source: "Kartverket (Norwegian Mapping Authority)"
      },
      {
        fact: "Norwegians consume more coffee per capita than almost any other country on earth (approx. 9.9 kg per person annually), surpassed only by Finland.",
        context: "The culture emphasizes light-roast, single-origin filtered coffees drunk black without milk or sugar.",
        source: "International Coffee Organization"
      }
    ],
    hiddenStories: [
      {
        id: 'hs-norway-islands-sea',
        title: 'The Norwegian Islands Where Mountains Drop Straight Into the Sea',
        teaser: 'Why the Lofoten archipelago feels like an Arctic kingdom carved from ancient granite and cod fishing lore.',
        category: 'Hidden Places',
        destinationId: 'norway',
        readTime: '6 min read'
      },
      {
        id: 'hs-norway-hyttekos',
        title: 'Why Norwegians Love Their Cabins So Much',
        teaser: 'The cultural philosophy of hyttekos: why stepping away from electricity and Wi-Fi is considered true luxury.',
        category: 'Local Traditions',
        destinationId: 'norway',
        readTime: '5 min read'
      },
      {
        id: 'hs-norway-silent-ferry',
        title: 'The Train Journey That Might Be the Best Way to See Norway',
        teaser: 'Riding the Bergen Line across high mountain plateaus down to silent electric fjord catamarans.',
        category: 'Road Trips & Rails',
        destinationId: 'norway',
        readTime: '6 min read'
      }
    ],
    femaleTravelNotes: {
      generalVibe: 'Extremely safe, progressive, and welcoming for solo female travelers.',
      eveningAtmosphere: 'Relaxed, civilized, and comfortable for solo dining and late-night walking.',
      arrivalTips: 'Train stations in Oslo, Bergen, and Trondheim are central and clean; step off the platform directly into central hotels.',
      neighborhoodAdvice: 'Nordnes in Bergen and Frogner/Majorstuen in Oslo offer quiet, leafy evening walks.'
    },
    soloTravelAdvice: {
      headline: 'If I Were Traveling to Norway Alone',
      tips: [
        {
          title: 'Stay in Restored Rorbuer with Water Views',
          advice: 'Lofoten rorbuer in Henningsvær offer communal saunas where you can meet creative locals and fellow travelers naturally.'
        },
        {
          title: 'Use Public Electric Ferries Over Mega Cruises',
          advice: 'The public electric catamarans in the Nærøyfjord are quiet, clean, and allow you to absorb the majestic waterfalls in peace.'
        }
      ]
    },
    girlsTripInspiration: {
      headline: "Perfect for a Girls' Trip: Fjord Saunas, Midnight Sun & Coastal Art Hubs",
      ideas: [
        {
          title: 'Lofoten Islands Creative & Wellness Retreat',
          desc: 'Wood-fired saunas at Trevarefabrikken, midnight sun beach walks in Haukland, and local art galleries in Henningsvær.',
          tag: 'Wellness & Art'
        },
        {
          title: 'Western Fjords Scenic Rail & Floating Sauna Escape',
          desc: 'The Flåm Railway journey, electric fjord cruising, and cozy evenings in timber cabins with brown cheese waffles.',
          tag: 'Fjord Escape'
        }
      ]
    },
    relatedHideoutIds: ['hideout-norway-lofoten-rorbu', 'hideout-norway-fjord-cabin'],
    relatedStayIds: ['stay-norway-henningsvaer-brygge', 'stay-norway-flam-boutique'],
    relatedStoryIds: ['story-norway-stay-longer', 'story-norway-fjords-or-lofoten', 'story-norway-cabin-appeal', 'story-norway-waterfall-countryside'],
    relatedGuideIds: ['guide-norway-fjord-slow-travel']
  },

  // 5. SWEDEN
  {
    id: 'sweden',
    slug: 'sweden',
    name: 'Sweden',
    country: 'Sweden',
    tag: 'Minimalist design, serene archipelago islands & arctic forest retreats',
    emotionalStatement: 'Understated Nordic elegance, island calm, and the sacred ritual of fika.',
    heroImage: swedenImg,
    image: swedenImg,
    blurb: 'A masterclass in understated elegance: pine forests meeting peaceful archipelagos, candlelit fika rituals in old wooden bakeries, and clean Nordic craftsmanship.',
    openingEditorial: "Sweden embodies the philosophy of *lagom* — just the right amount. There is an effortless balance between refined city culture and immediate access to pristine nature. In Stockholm, you can enjoy world-class contemporary galleries in the morning and be kayaking through quiet granite islands by the afternoon. If I were planning this trip, I'd balance three days exploring Stockholm's bakeries and ceramics studios with an escape to an archipelago cabin or a subarctic forest lodge in Abisko.",
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
    didYouKnow: [
      {
        fact: "The Stockholm Archipelago contains over 30,000 islands, islets, and rocks, but only around 200 are permanently inhabited.",
        context: "You can hop between them on vintage wooden commuter ferries with a standard transit pass in summer.",
        source: "Stockholm Archipelago Foundation"
      },
      {
        fact: "'Fika' is not just a coffee break: it is a protected institutional ritual in Swedish workplaces and daily life.",
        context: "Sociologists credit daily fika with fostering flat management hierarchies and relaxed workplace communication.",
        source: "Swedish Institute"
      },
      {
        fact: "The entire Arctic mining town of Kiruna is currently being moved three kilometers east building by building to prevent collapse from underground iron ore mines.",
        context: "Historic wooden landmarks, including the iconic red 1912 Kiruna Church, are transported whole on giant flatbed haulers.",
        source: "Kiruna Municipality Urban Transformation"
      },
      {
        fact: "Sweden was the first country in the world to create a national park in Europe (1909), establishing nine parks simultaneously.",
        context: "Today, Swedish national parks protect over 7,000 square kilometers of pristine wilderness.",
        source: "Swedish Environmental Protection Agency"
      },
      {
        fact: "The world's original ICEHOTEL in Jukkasjärvi is hand-carved every winter from 2,500 tons of natural ice harvested from the Torne River, only to melt back into the river each spring.",
        context: "Artists from around the globe apply annually to design unique thematic ice suites.",
        source: "ICEHOTEL Sweden"
      }
    ],
    hiddenStories: [
      {
        id: 'hs-sweden-islands-ferry',
        title: 'The Swedish Islands You Can Reach Without a Ferry Tour',
        teaser: 'How to use local commuter ferries to reach secluded granite swimming bays and pine forest trails.',
        category: 'Hidden Places',
        destinationId: 'sweden',
        readTime: '5 min read'
      },
      {
        id: 'hs-sweden-fika-culture',
        title: 'Why Fika Is More Than Just Coffee',
        teaser: 'The quiet sociology of slowing down, cardamom spices, and conversation in Swedish daily life.',
        category: 'Food & Culture',
        destinationId: 'sweden',
        readTime: '4 min read'
      },
      {
        id: 'hs-sweden-moving-town',
        title: 'The Arctic Town That Has to Move',
        teaser: 'The extraordinary story of Kiruna: moving an entire subarctic city building by building.',
        category: 'Untold Stories',
        destinationId: 'sweden',
        readTime: '6 min read'
      }
    ],
    femaleTravelNotes: {
      generalVibe: 'Extremely high standard of safety, personal respect, and gender equality.',
      eveningAtmosphere: 'Relaxed, well-illuminated streets with casual, welcoming wine bars and cafés.',
      arrivalTips: 'Stockholm Central Station is easy to navigate with direct underground connections to the T-Bana metro lines.',
      neighborhoodAdvice: 'Mariatorget and Skeppsholmen are delightful, quiet areas for solo female travelers.'
    },
    soloTravelAdvice: {
      headline: 'If I Were Traveling to Sweden Alone',
      tips: [
        {
          title: 'Base in Södermalm near Mariatorget',
          advice: 'Walkable tree-lined streets, independent ceramics boutiques, and cozy candlelit bakeries make solo neighborhood wandering a joy.'
        },
        {
          title: 'Take the Public Ferry to Skeppsholmen',
          advice: 'The 10-minute public ferry hop to the quiet island of Skeppsholmen gives you water views and peaceful sculpture gardens.'
        }
      ]
    },
    girlsTripInspiration: {
      headline: "Perfect for a Girls' Trip: Archipelago Hopping, Design Cafés & Midsummer Light",
      ideas: [
        {
          title: 'Stockholm Design, Bakery & Vintage Boutique Weekend',
          desc: 'Morning cardamom bun tastings in Östermalm, vintage shopping in Södermalm, and evening sauna sessions overlooking the harbor.',
          tag: 'Design & Gastronomy'
        },
        {
          title: 'Archipelago Summer Cabin & Sauna Escape',
          desc: 'Renting a wooden cottage on Sandhamn, swimming off warm granite rocks, and enjoying long candlelit Midsummer dinners.',
          tag: 'Island Nature'
        }
      ]
    },
    relatedHideoutIds: ['hideout-sweden-archipelago-cabin', 'hideout-sweden-stockholm-loft'],
    relatedStayIds: ['stay-sweden-ett-hem', 'stay-sweden-treehotel'],
    relatedStoryIds: ['story-sweden-different-stockholm', 'story-sweden-lapland-list', 'story-sweden-fika-culture'],
    relatedGuideIds: ['guide-sweden-archipelago-design']
  },

  // 6. CHINA
  {
    id: 'china',
    slug: 'china',
    name: 'China',
    country: 'China',
    tag: 'Ancient river towns, dramatic karst peaks & high-speed rail journeys',
    emotionalStatement: 'Where ancient tea traditions meet breathtaking karst mountains and swift high-speed rails.',
    heroImage: chinaImg,
    image: chinaImg,
    blurb: 'A destination of staggering historical depth and natural wonder: from mist-shrouded limestone towers in Yangshuo to tranquil classical gardens in Suzhou and futuristic high-speed rail networks.',
    openingEditorial: "Traveling through China today is a mesmerizing contrast of ancient traditions and hyper-modern infrastructure. The high-speed rail network makes gliding past mountain landscapes effortless, while morning walks through traditional courtyard hutongs and riverside tea houses offer glimpses of everyday life that have endured for centuries. If I were planning this trip, I'd balance the classical hutong lanes of Beijing with a slow bamboo raft drift through the limestone karst peaks of Yangshuo and a visit to the ancient water towns.",
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
      'Last verified: March 2026. Visa-free entry policies (15/30 days) currently apply to passport holders of numerous European and Asian nations; always verify current requirements with official government portals.',
      'Connectivity: download and set up an eSIM with international data roaming (which bypasses local firewall restrictions) before arrival, alongside Alipay and WeChat Pay linked to your credit card.',
      'Language: install translation apps with offline camera capability for effortless menu and street reading.'
    ],
    didYouKnow: [
      {
        fact: "China's high-speed railway network spans over 45,000 kilometers — longer than all other high-speed rail networks in the world combined.",
        context: "Trains reach speeds of 350 km/h with silent, smooth magnetic levitation and electric traction.",
        source: "China State Railway Group"
      },
      {
        fact: "Tea culture originated in China over 4,000 years ago, and different teas require strictly distinct water temperatures: green tea at 80°C to protect delicate amino acids, and aged Pu'erh at boiling 100°C.",
        context: "In Chengdu and Hangzhou, traditional teahouses remain the primary community gathering spaces for afternoon conversation.",
        source: "China National Tea Museum (Hangzhou)"
      },
      {
        fact: "The dramatic karst pillars of Zhangjiajie inspired the floating Hallelujah Mountains in James Cameron's Avatar.",
        context: "Over 3,000 quartz-sandstone pinnacles rise up to 1,000 meters above dense subtropical rainforest mist.",
        source: "Zhangjiajie National Forest Park"
      },
      {
        fact: "Over 95% of daily retail transactions in China are completely cashless, processed via QR codes on smartphones even at remote village fruit stands.",
        context: "Foreign travelers can now link Visa, Mastercard, or Amex directly to Alipay and WeChat Pay without needing a Chinese bank account.",
        source: "People's Bank of China"
      },
      {
        fact: "The Forbidden City in Beijing contains 980 surviving wooden buildings with over 8,700 bays, constructed without a single metal nail using interlocking mortise-and-tenon joints (Dougong).",
        context: "This ancient architectural engineering allows the wooden palaces to withstand major earthquakes by flexing without collapsing.",
        source: "Palace Museum Beijing"
      }
    ],
    hiddenStories: [
      {
        id: 'hs-china-karst-mountains',
        title: 'The Chinese Mountain Landscape That Looks Impossible',
        teaser: 'How ancient oceans and limestone weathering carved the dreamlike karst pinnacles of Yangshuo and Guilin.',
        category: 'Nature & Geology',
        destinationId: 'china',
        readTime: '6 min read'
      },
      {
        id: 'hs-china-tea-tradition',
        title: 'The Strange Story Behind China\'s Tea Traditions',
        teaser: 'From emperor legends to mountain monks: why tea was once traded ounce-for-ounce with Tibetan war horses.',
        category: 'Food & Culture',
        destinationId: 'china',
        readTime: '5 min read'
      },
      {
        id: 'hs-china-ancient-water-towns',
        title: 'The Ancient Towns Hidden Between China\'s Modern Cities',
        teaser: 'Stone bridges, red lanterns, and morning rowboats in the classical water villages of Tongli and Wuzhen.',
        category: 'Hidden Places',
        destinationId: 'china',
        readTime: '6 min read'
      }
    ],
    femaleTravelNotes: {
      generalVibe: 'Extremely safe street environment with virtually zero street harassment.',
      eveningAtmosphere: 'Public squares remain lively until late with evening dance groups and families dining outdoors.',
      arrivalTips: 'Download the Didi rideshare app (available in English inside Alipay) for reliable point-to-point transfers from train stations.',
      neighborhoodAdvice: 'The Former French Concession in Shanghai and Guozijian in Beijing are peaceful, leafy, and exceptionally safe.'
    },
    soloTravelAdvice: {
      headline: 'If I Were Traveling to China Alone',
      tips: [
        {
          title: 'Set up Alipay & WeChat Pay Before You Fly',
          advice: 'Having your payment QR code active makes buying metro tickets, street snacks, and boutique coffees effortless from minute one.'
        },
        {
          title: 'Stay in Courtyard Hotels in the Beijing Hutongs',
          advice: 'Courtyard boutique hotels in Dongcheng offer English-speaking concierge staff, tranquil courtyards, and immediate access to cozy tea houses.'
        }
      ]
    },
    girlsTripInspiration: {
      headline: "Perfect for a Girls' Trip: River Bamboo Rafts, Silk Towns & Ancient Tea Houses",
      ideas: [
        {
          title: 'Yangshuo Karst Valley & Countryside Cycling Escape',
          desc: 'Boutique riverfront stays, dawn bamboo rafting, and organic farm-to-table cooking classes among limestone peaks.',
          tag: 'Nature & Adventure'
        },
        {
          title: 'Shanghai & Hangzhou Boutique Heritage Weekend',
          desc: 'Art Deco walks in the French Concession, high-speed rail to West Lake, and private tea tastings on historic terraces.',
          tag: 'Culture & Gastronomy'
        }
      ]
    },
    relatedHideoutIds: ['hideout-china-yangshuo-retreat', 'hideout-china-beijing-courtyard'],
    relatedStayIds: ['stay-china-yangshuo-mountain', 'stay-china-shanghai-lane-house'],
    relatedStoryIds: ['story-china-two-weeks-plan', 'story-china-beyond-beijing-shanghai', 'story-china-karst-mountains'],
    relatedGuideIds: ['guide-china-first-timers-practical']
  },

  // 7. AUSTRALIA
  {
    id: 'australia',
    slug: 'australia',
    name: 'Australia',
    country: 'Australia',
    tag: 'Coastal ocean pools, pristine wilderness & laid-back design sanctuaries',
    emotionalStatement: 'Where endless sunlit coastlines meet eucalyptus forests and ocean pools.',
    heroImage: australiaImg,
    image: australiaImg,
    blurb: 'Epic coastlines, golden surf beaches, ancient eucalyptus forests, world-class café culture, and remote island sanctuaries like Tasmania.',
    openingEditorial: "Australia’s travel magic lies in its connection to the outdoors. Life is lived facing the ocean and the sun: early morning swims in ocean tidal pools carved into sandstone cliffs, perfectly poured flat whites in breezy neighborhood cafés, and coastal road trips where wild beaches stretch on for unbroken miles. If I were planning this trip, I'd combine the coastal walks and bakery culture of Sydney and Melbourne with an unhurried road trip across Tasmania's wild East Coast.",
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
    didYouKnow: [
      {
        fact: "Over 85% of Australia's population lives within 50 kilometers of the coastline, making ocean pool and beach culture central to daily life.",
        context: "New South Wales alone has over 100 historic saltwater ocean pools carved directly into coastal sandstone headlands.",
        source: "Australian Bureau of Statistics"
      },
      {
        fact: "Tasmania has some of the cleanest air on earth, officially measured at the Cape Grim Baseline Air Pollution Station.",
        context: "Winds blowing across thousands of miles of unbroken Southern Ocean arrive with zero terrestrial pollution.",
        source: "CSIRO (Commonwealth Scientific and Industrial Research Organisation)"
      },
      {
        fact: "Uluru is estimated to be over 550 million years old and extends over 2.5 kilometers underground, functioning like a giant geological iceberg.",
        context: "The Anangu traditional owners hold Uluru sacred and ask visitors to walk its base with cultural reverence.",
        source: "Parks Australia"
      },
      {
        fact: "Australia has over 10,000 distinct beaches: if you visited one new beach every day, it would take you more than 27 years to see them all.",
        context: "Many remote beaches in Western Australia and Tasmania are completely empty even in peak summer.",
        source: "Geoscience Australia"
      },
      {
        fact: "Melbourne has the highest concentration of independent specialty coffee cafés per capita in the world, rooted in post-war Italian immigration.",
        context: "The 'flat white' and Melbourne-style avocado toast revolutionized brunch culture across London, New York, and Tokyo.",
        source: "Specialty Coffee Association"
      }
    ],
    hiddenStories: [
      {
        id: 'hs-australia-alone-beach',
        title: 'The Australian Beach Where You Can Feel Completely Alone',
        teaser: 'Beyond Bondi: finding quiet white-sand crescents and orange-lichen boulders on Tasmania’s Bay of Fires.',
        category: 'Hidden Places',
        destinationId: 'australia',
        readTime: '5 min read'
      },
      {
        id: 'hs-australia-why-tasmania',
        title: 'Why Tasmania Feels Like Another Country',
        teaser: 'Cool-climate rainforests, eccentric art at MONA, and roadside farm stands on the edge of the Southern Ocean.',
        category: 'Untold Stories',
        destinationId: 'australia',
        readTime: '6 min read'
      },
      {
        id: 'hs-australia-wildlife-different',
        title: 'Why Australian Wildlife Is So Different From Everywhere Else',
        teaser: 'How 50 million years of continental isolation created an ecosystem of marsupials, wombats, and ancient flora.',
        category: 'Nature & Wildlife',
        destinationId: 'australia',
        readTime: '5 min read'
      }
    ],
    femaleTravelNotes: {
      generalVibe: 'Extremely safe, relaxed, and welcoming for solo female travelers.',
      eveningAtmosphere: 'Laid-back dining and pub culture with an open, friendly atmosphere.',
      arrivalTips: 'Airport rail and bus links in Sydney, Melbourne, and Brisbane are reliable and drop you right into central hubs.',
      neighborhoodAdvice: 'Paddington, Bronte, and Manly in Sydney, and Fitzroy in Melbourne make ideal solo bases.'
    },
    soloTravelAdvice: {
      headline: 'If I Were Traveling to Australia Alone',
      tips: [
        {
          title: 'Do the Morning Bronte to Bondi Coastal Walk',
          advice: 'Walk at 6:30 AM alongside local swimmers and runners, stop for a swim at Bronte Baths, and grab a flat white at a beach kiosk.'
        },
        {
          title: 'Rent a Campervan or Small Car in Tasmania',
          advice: 'Tasmania has empty country roads, friendly farm gate honesty boxes for cherries and oysters, and safe national park cabins.'
        }
      ]
    },
    girlsTripInspiration: {
      headline: "Perfect for a Girls' Trip: Ocean Baths, Vineyard Lunches & Coastal Trails",
      ideas: [
        {
          title: 'Sydney Coastal Pool & Paddington Boutique Weekend',
          desc: 'Morning ocean swims at Bondi Icebergs, boutique shopping on William Street, and seafood dinners in Paddington.',
          tag: 'Coastal & Chic'
        },
        {
          title: 'Tasmania Wine, Oyster & MONA Art Road Trip',
          desc: 'Bruny Island cheese and oysters, ferry to MONA museum, and cozy fireside stays in Freycinet National Park.',
          tag: 'Culinary & Art'
        }
      ]
    },
    relatedHideoutIds: ['hideout-australia-tasmania-pavilion', 'hideout-australia-paddington-sanctuary'],
    relatedStayIds: ['stay-australia-freycinet-lodge', 'stay-australia-sydney-boutique'],
    relatedStoryIds: ['story-australia-road-trip', 'story-australia-why-tasmania', 'story-australia-alone-beach'],
    relatedGuideIds: ['guide-australia-east-coast-tasmania']
  },

  // 8. NEW ZEALAND
  {
    id: 'new-zealand',
    slug: 'new-zealand',
    name: 'New Zealand',
    country: 'New Zealand',
    tag: 'Alpine fiords, turquoise glacier lakes & quiet campervan routes',
    emotionalStatement: 'A pristine sanctuary of glacial lakes, ancient forests, and boundless freedom.',
    heroImage: newZealandImg,
    image: newZealandImg,
    blurb: 'Majestic Southern Alps, emerald rainforests cascading down to coastal fiords, ancient Maori heritage, and wide-open roads made for unhurried journeys.',
    openingEditorial: "New Zealand (Aotearoa) is a sanctuary for the soul. The landscape here has a cinematic grandeur that feels untouched by modern haste. Whether you are driving past turquoise glacial lakes under the shadow of Aoraki / Mount Cook, or listening to native bellbirds in the beech forests of Wanaka, the feeling of freedom is palpable. If I were planning this trip, I'd rent a campervan or small SUV, focus on the South Island's alpine valleys, and give myself time to sit by silent lakes at sunrise.",
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
        bestFor: 'Stargazing in the Dark Sky Reserve and Hooker Valley hike',
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
    didYouKnow: [
      {
        fact: "New Zealand was the first self-governing nation in the world where women won the right to vote (1893), led by suffragist Kate Sheppard.",
        context: "Her portrait is commemorated on the New Zealand 10-dollar banknote.",
        source: "New Zealand Ministry for Culture and Heritage"
      },
      {
        fact: "Lake Pukaki gets its glowing turquoise-blue color from 'glacial flour' — extremely fine rock particles ground down by glaciers that remain suspended in the water and scatter sunlight.",
        context: "The color is so vivid that photos often look digitally edited, but the water is pure, unedited glacial melt.",
        source: "GNS Science New Zealand"
      },
      {
        fact: "The Aoraki Mackenzie International Dark Sky Reserve covers 4,300 square kilometers and is one of the largest protected dark sky reserves in the world.",
        context: "Strict lighting ordinances allow stargazers to see the Magellanic Clouds and Southern Cross with the naked eye.",
        source: "International Dark-Sky Association"
      },
      {
        fact: "New Zealand has no native land mammals (with the exception of two species of small bats); birds evolved to fill ecological niches on the forest floor.",
        context: "This explains why unique native birds like the Kiwi, Takahē, and Kakapo are flightless.",
        source: "Department of Conservation (DOC)"
      },
      {
        fact: "Māori place names carry rich geographical and ancestral narratives: for example, 'Aotearoa' translates to 'The Land of the Long White Cloud.'",
        context: "Understanding Māori place names reveals the exact natural landmarks ancient navigators used to navigate island coastlines.",
        source: "Te Ara Encyclopedia of New Zealand"
      }
    ],
    hiddenStories: [
      {
        id: 'hs-nz-end-of-world-road',
        title: 'The New Zealand Road That Feels Like the End of the World',
        teaser: 'Driving the Milford Road through ancient beech forests and mist-covered glacier canyons.',
        category: 'Road Trips & Trails',
        destinationId: 'new-zealand',
        readTime: '6 min read'
      },
      {
        id: 'hs-nz-color-changing-lake',
        title: 'The Lake That Changes Color',
        teaser: 'Why Lake Pukaki and Lake Tekapo radiate an otherworldly turquoise glow under alpine sunlight.',
        category: 'Nature & Geology',
        destinationId: 'new-zealand',
        readTime: '5 min read'
      },
      {
        id: 'hs-nz-disappear-week',
        title: 'The Road Trip I\'d Take If I Wanted to Disappear for a Week',
        teaser: 'A quiet loop through Central Otago vineyards, Lake Hawea, and the rugged West Coast rainforests.',
        category: 'Slow Travel',
        destinationId: 'new-zealand',
        readTime: '7 min read'
      }
    ],
    femaleTravelNotes: {
      generalVibe: 'Extremely high level of personal safety and helpful, welcoming local culture.',
      eveningAtmosphere: 'Quiet and relaxed town centers with friendly pubs and wholesome dining.',
      arrivalTips: 'Arriving in Queenstown by plane offers one of the most spectacular mountain landing views in the world.',
      neighborhoodAdvice: 'Wanaka and Nelson/Abel Tasman are peaceful, safe, and empowering bases for solo travelers.'
    },
    soloTravelAdvice: {
      headline: 'If I Were Traveling to New Zealand Alone',
      tips: [
        {
          title: 'Choose Wanaka over Queenstown as Your Base',
          advice: 'Wanaka has all the alpine glory with a quiet, safe community vibe where you can walk along the lake at dusk in total serenity.'
        },
        {
          title: 'Download CamperMate & Plan Short Driving Days',
          advice: 'Roads in New Zealand are winding and narrow. Keeping daily drives under 3 hours allows you to hike, swim, and picnic without fatigue.'
        }
      ]
    },
    girlsTripInspiration: {
      headline: "Perfect for a Girls' Trip: Cedar Hot Tubs, Pinot Noir & Alpine Trails",
      ideas: [
        {
          title: 'Wanaka Hot Tubs & Central Otago Vineyard Tour',
          desc: 'Private outdoor cedar soaking tubs overlooking Lake Wanaka, followed by winery lunches in Gibbston Valley.',
          tag: 'Wine & Wellness'
        },
        {
          title: 'Waiheke Island Beach & Boutique Wine Escape',
          desc: 'Ferry from Auckland to Waiheke for coastal cliff walks, olive oil tastings, and beachfront dinners.',
          tag: 'Island & Gastronomy'
        }
      ]
    },
    relatedHideoutIds: ['hideout-nz-wanaka-cabin', 'hideout-nz-fiordland-retreat'],
    relatedStayIds: ['stay-nz-wanaka-luxury', 'stay-nz-queenstown-boutique'],
    relatedStoryIds: ['story-nz-south-island-road-trip', 'story-nz-where-to-slow-down', 'story-nz-end-of-world-road'],
    relatedGuideIds: ['guide-nz-south-island-slow-route']
  },

  // 9. JAPAN
  {
    id: 'japan',
    slug: 'japan',
    name: 'Japan',
    country: 'Japan',
    tag: 'Mountain onsens, quiet thatched villages & meditative temple gardens',
    emotionalStatement: 'Where quiet craftsmanship, moss-covered shrines, and hot spring ryokans soothe the spirit.',
    heroImage: japanImg,
    image: japanImg,
    blurb: 'A realm of profound aesthetic nuance: steaming forest onsens, preserved Edo-period post towns, serene bamboo groves, and the quiet precision of everyday craftsmanship.',
    openingEditorial: "Japan is a masterclass in mindfulness and aesthetic respect. Beyond the neon spectacle of Tokyo lies a deeply tranquil country: wooden ryokans where mineral hot springs steam beneath cedar canopies, moss gardens tended with tiny bamboo brooms, and family-run kissaten cafés serving pour-over coffee with surgical precision. If I were planning this trip, I'd spend three days in Kyoto's quieter temple lanes before heading into the Japanese Alps to stay in a traditional mountain onsen ryokan.",
    whereIWouldStay: 'A traditional family-run ryokan with private cedar onsen baths in Kurokawa Onsen (Kyushu) or a restored machiya townhouse in Kyoto’s quiet Gion-Minami quarter.',
    neighborhoods: [
      {
        name: 'Kyoto (Higashiyama & Arashiyama)',
        vibe: 'Wooden machiya townhouses, mossy temple courtyards, and stone lanes',
        bestFor: 'Culture, morning shrine walks, matcha tea ceremonies, and textile arts',
        whyChoose: 'Waking up at 6:30 AM to walk the stone paths of Ninenzaka and Sannenzaka before visitors arrive is unforgettable.',
        avoidIf: 'You want 24-hour mega-city skyscraper energy.'
      },
      {
        name: 'Japanese Alps (Takayama & Shirakawa-go)',
        vibe: 'Thatch-roofed gassho-zukuri farmhouses, morning river markets, and mountain air',
        bestFor: 'Traditional crafts, timber architecture, Hida beef, and winter snowscapes',
        whyChoose: 'Preserved Edo-period merchant streets with dark wood facades and clear mountain streams flowing beside cobblestones.',
        avoidIf: 'You do not enjoy train travel into the mountains.'
      },
      {
        name: 'Tokyo (Yanaka & Nakameguro)',
        vibe: 'Shitamachi historic charm, canal-side boutiques, and artisan coffee roasters',
        bestFor: 'Solo female travelers, neighborhood exploration, vintage shopping, and peaceful evening walks',
        whyChoose: 'Yanaka escaped wartime damage and retains a nostalgic 1950s neighborhood feel with temple alleys and cat culture.',
        avoidIf: 'You only want to see electronic mega-stores in Akihabara.'
      },
      {
        name: 'Kurokawa Onsen & Mount Aso (Kyushu)',
        vibe: 'Steaming river gorge, cedar forest footpaths, and lantern-lit ryokans',
        bestFor: 'Hot spring lovers, restorative wellness, kaiseki dining, and slow travel',
        whyChoose: 'Uniform wooden village aesthetic with zero neon signs and dozens of outdoor open-air hot spring baths (rotenburo).',
        avoidIf: 'You have large visible tattoos that cannot be covered in communal baths (opt for private onsen ryokan rooms).'
      }
    ],
    whatTravelersSaySummary: 'Travelers consistently rank Japan as the safest, most considerate, and most sensory-rich travel destination in the world. Key advice includes getting a digital Suica/Pasmo card on your phone, carrying a small trash bag (public trash cans are rare), and shipping luggage ahead between cities via Takkyubin.',
    whatToSkip: [
      'Over-packing a massive rolling suitcase on high-speed Shinkansen trains; use the brilliant, inexpensive luggage forwarding service (Yamato/Takkyubin) instead.',
      'Only eating at tourist-focused English-menu restaurants when basement department store food halls (Depachika) and neighborhood ramen bars offer incredible quality.',
      'Rushing through four temples in two hours; sit in one quiet Zen garden for 45 minutes to actually feel the space.'
    ],
    thingsWorthDoing: [
      {
        title: 'Stay in a Traditional Onsen Ryokan',
        description: 'Slipping into a yukata robe, soaking in mineral hot springs under forest stars, and savoring an 8-course seasonal Kaiseki dinner.',
        whyWorthIt: 'The ultimate Japanese ritual of physical relaxation and sensory harmony.'
      },
      {
        title: 'Morning Walk Along Kyoto’s Philosopher’s Path',
        description: 'Following the stone canal path lined with cherry and maple trees from Ginkaku-ji to Nanzen-ji at dawn.',
        whyWorthIt: 'Quiet reflection with birdsong and stone bridges before daytime visitors arrive.'
      },
      {
        title: 'Ride the Shinkansen Past Mount Fuji',
        description: 'Buying an ekiben (bento box) at Tokyo Station and watching the snow-capped cone of Mount Fuji glide past the window.',
        whyWorthIt: 'A seamless, peaceful Japanese travel ritual at 300 km/h.'
      }
    ],
    placesToEat: [
      {
        name: 'Ippudo & Local Machiya Soba',
        type: 'Hand-cut buckwheat noodles & dashi broth',
        neighborhood: 'Gion, Kyoto',
        whySpecial: 'Savoring hot duck soba in a 120-year-old wooden townhouse with a tranquil interior moss garden.'
      },
      {
        name: 'Café de L’Ambre',
        type: 'Historic 1948 Kissaten specialty coffee',
        neighborhood: 'Ginza, Tokyo',
        whySpecial: 'Legendary old-school coffee house brewing aged single-origin beans through hand-held flannel drip filters.'
      },
      {
        name: 'Hida Kotte Ushi',
        type: 'Seared Hida beef nigiri on rice crackers',
        neighborhood: 'Sanmachi Suji, Takayama',
        whySpecial: 'Melt-in-your-mouth A5 grade beef brushed with sweet soy and served on an edible crispy senbei wafer.'
      }
    ],
    gettingAround: {
      recommendation: 'The Shinkansen (bullet train) and JR regional train network are world benchmarks for punctuality and speed. Use digital Suica or Pasmo on Apple/Google Wallet for subways and local buses.',
      airportTransit: 'Tokyo Narita (NRT) connects via the Narita Express (N\'EX) or Keisei Skyliner; Tokyo Haneda (HND) is just 20 minutes from central Tokyo via Tokyo Monorail.',
      eveningWalkingAdvice: 'Japan is among the safest nations on earth with extraordinarily low crime rates. Solo women walk freely at all hours with complete peace of mind.'
    },
    goodToKnow: [
      'Last verified: March 2026. Tipping is not customary in Japan and can cause confusion or polite refusal.',
      'Convenience stores (7-Eleven, Lawson, FamilyMart) offer exceptionally fresh, high-quality onigiri, egg salad sandwiches, and drip coffee.',
      'Carry cash (Japanese Yen): while card payments have grown rapidly, small neighborhood ramen shops, temple entrance gates, and coin lockers often require cash.'
    ],
    didYouKnow: [
      {
        fact: "Japan has over 27,000 natural thermal hot spring sources (onsen), discharging more than 2.6 million liters of mineral-rich water every single minute.",
        context: "The geothermal mineral composition in regions like Kurokawa and Hakone is renowned for easing fatigue and softening skin.",
        source: "Japan Onsen Association"
      },
      {
        fact: "The thatched roofs of Shirakawa-go's 'Gassho-zukuri' farmhouses are angled at 60 degrees like hands in prayer to shed heavy winter mountain snow without collapsing.",
        context: "Entire villages work together in a communal ritual called 'Yui' to re-thatch a single roof in a single day every 30 years.",
        source: "UNESCO World Heritage Centre"
      },
      {
        fact: "Japanese train delays are measured in seconds: the average annual delay for the Tokaido Shinkansen bullet train is under 50 seconds per trip, including weather disruptions.",
        context: "If a train is delayed by more than five minutes, station staff issue official 'delay certificates' (chien-shōmeisho) for passengers to show their employers.",
        source: "Central Japan Railway Company (JR Central)"
      },
      {
        fact: "Japanese Japanese convenience stores (Konbini) restock fresh bento boxes, onigiri, and baked goods three to four times per day using precision logistics.",
        context: "Celebrity chefs globally praise Japanese konbini egg salad sandwiches (Tamago Sando) for their milk-bread softness and Kewpie mayonnaise richness.",
        source: "Japan Convenience Foods Association"
      },
      {
        fact: "Japan is home to the world's oldest continuously operating business: Kongō Gumi, a temple construction company in Osaka founded in 578 AD.",
        context: "It has built and restored historic wooden shrines across Japan for over 1,440 consecutive years.",
        source: "Tokyo Shoko Research"
      }
    ],
    hiddenStories: [
      {
        id: 'hs-japan-grass-roof-village',
        title: 'The Japanese Village Where Houses Have Grass Roofs',
        teaser: 'In Shirakawa-go and Gokayama, steep thatched farmhouses survive brutal mountain blizzards through centuries-old communal bonds.',
        category: 'Architecture & Heritage',
        destinationId: 'japan',
        readTime: '6 min read'
      },
      {
        id: 'hs-japan-konbini-magic',
        title: 'Why Japanese Convenience Stores Are Surprisingly Good',
        teaser: 'The culinary perfection of tamago sandos, onigiri craftsmanship, and why konbini are cultural sanctuaries.',
        category: 'Food & Culture',
        destinationId: 'japan',
        readTime: '5 min read'
      },
      {
        id: 'hs-japan-train-over-flight',
        title: 'The Train Journey I\'d Take Instead of Flying',
        teaser: 'Riding the Hokuriku Shinkansen through snow-covered peaks to the craft city of Kanazawa.',
        category: 'Road Trips & Rails',
        destinationId: 'japan',
        readTime: '6 min read'
      },
      {
        id: 'hs-japan-art-islands',
        title: 'The Japanese Island Where Art Changed Everything',
        teaser: 'How Naoshima transformed a quiet fishing island into a world-renowned open-air contemporary art pilgrimage.',
        category: 'Culture & Design',
        destinationId: 'japan',
        readTime: '7 min read'
      }
    ],
    femaleTravelNotes: {
      generalVibe: 'Universally recognized as one of the safest and most respectful destinations for solo female travelers.',
      eveningAtmosphere: 'Safe, well-lit, and comfortable. Solo women dine, take evening trains, and walk through neighborhoods with ease.',
      arrivalTips: 'Pick up an IC card (Suica/Pasmo) at Tokyo Haneda or Narita, or activate the digital card in Apple Wallet before arrival.',
      neighborhoodAdvice: 'Yanaka in Tokyo and Higashiyama/Gion in Kyoto provide serene, safe, and atmospheric bases.'
    },
    soloTravelAdvice: {
      headline: 'If I Were Traveling to Japan Alone',
      tips: [
        {
          title: 'Embrace Counter Dining in Neighborhood Eateries',
          advice: 'Japan is built for solo diners: ramen bars, soba shops, and kissaten cafés have single-counter seats where dining alone is completely natural and peaceful.'
        },
        {
          title: 'Use Luggage Forwarding (Takkyubin)',
          advice: 'Send your main suitcase between hotels via your front desk for around $15, allowing you to travel light on mountain trains with just a daypack.'
        },
        {
          title: 'Book a Machiya or Ryokan with Private Onsen Hours',
          advice: 'If you want privacy for soaking, choose ryokans with "kashikiri" (reservable private family onsens).'
        }
      ]
    },
    girlsTripInspiration: {
      headline: "Perfect for a Girls' Trip: Onsen Ryokans, Matcha Ceremonies & Pottery Alleys",
      ideas: [
        {
          title: 'Kyoto Machiya Townhouse & Matcha Temple Escape',
          desc: 'Morning walks through bamboo groves, private tea ceremony in a historic garden, and evening kaiseki dining in Gion.',
          tag: 'Culture & Zen'
        },
        {
          title: 'Kurokawa Onsen Mountain Hot Spring Retreat',
          desc: 'Yukata-clad village strolls, lantern-lit river baths, and forest ryokan dinners beside open hearths.',
          tag: 'Hot Springs & Spa'
        }
      ]
    },
    relatedHideoutIds: ['hideout-japan-kyoto-machiya', 'hideout-japan-kurokawa-onsen'],
    relatedStayIds: ['stay-japan-kyoto-ryokan', 'stay-japan-hakone-onsen'],
    relatedStoryIds: ['story-japan-grass-roof-village', 'story-japan-konbini-magic', 'story-japan-train-over-flight', 'story-japan-art-islands'],
    relatedGuideIds: ['guide-japan-shinkansen-onsen-etiquette']
  }
].map(d => ({
  ...d,
  image: (d as any).image || d.heroImage,
  heroImage: d.heroImage || (d as any).image
}));
