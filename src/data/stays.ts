import { Stay } from '../types';
import icelandBlackSandImg from '../assets/images/iceland_black_sand_raw_1786970961856.jpg';
import icelandTurfImg from '../assets/images/iceland_turf_house_field_1786971149571.jpg';
import liechtensteinImg from '../assets/images/liechtenstein_malbun_trail_1786971038343.jpg';
import alpineRefugeImg from '../assets/images/alpine_refuge_cabin_1787668017576.jpg';
import swissTrainImg from '../assets/images/swiss_train_scenic_window_1786971618391.jpg';
import swissMurrenImg from '../assets/images/switzerland_murren_chalet_1786970975469.jpg';
import swissCarfreeVillageImg from '../assets/images/swiss_carfree_village_1787742527585.jpg';
import norwayWaterfallImg from '../assets/images/norway_countryside_waterfall_1786889422602.jpg';
import norwayFjordFerryImg from '../assets/images/norway_fjord_ferry_deck_1786971648308.jpg';
import swedenArchipelagoImg from '../assets/images/sweden_archipelago_cottage_1786971064310.jpg';
import swedenFikaImg from '../assets/images/sweden_fika_cardamom_coffee_1786971159560.jpg';
import swedenKayakImg from '../assets/images/sweden_kayak_isle_1787742502301.jpg';
import chinaYangshuoImg from '../assets/images/china_yangshuo_karst_1786971008164.jpg';
import chinaYangshuoMistImg from '../assets/images/china_yangshuo_mist_1787742541701.jpg';
import chinaGreatWallImg from '../assets/images/china_great_wall_mist_1786971918716.jpg';
import australiaOceanPoolImg from '../assets/images/australia_ocean_pool_1786971907577.jpg';
import australiaFreycinetImg from '../assets/images/australia_freycinet_coast_1786971049642.jpg';
import newZealandWanakaImg from '../assets/images/new_zealand_wanaka_lake_1786971023438.jpg';
import nzPurepodCabinImg from '../assets/images/nz_purepod_cabin_1787742487984.jpg';
import japanMachiyaImg from '../assets/images/japan_kyoto_machiya_lane_1786970989907.jpg';
import japanKyotoTeaMossImg from '../assets/images/japan_kyoto_tea_moss_1786971932294.jpg';
import japanShirakawagoImg from '../assets/images/japan_shirakawago_village_1786971171228.jpg';

export const STAYS: Stay[] = [
  // 1. ICELAND
  {
    id: 'stay-iceland-ion-adventure',
    name: 'ION Adventure Hotel',
    category: 'Worth the Splurge',
    destinationId: 'iceland',
    destinationName: 'Iceland',
    neighborhood: 'Nesjavellir (Golden Circle / Thingvellir)',
    tagline: 'Suspended over mossy lava fields beside Thingvellir National Park',
    heroImage: icelandBlackSandImg,
    image: icelandBlackSandImg,
    description: 'An architectural marvel cantilevered over rugged volcanic rock. Built with sustainable concrete and driftwood, featuring a 10-meter geothermal outdoor pool and an all-glass Northern Lights bar.',
    whyCaughtAttention: 'Cantilevered architecture surrounded by vast volcanic lava fields with direct geothermal hot-water heating and dark sky views.',
    whyWeChoseIt: 'Few places on earth offer this degree of immersive connection to volcanic wilderness while maintaining refined Scandinavian design.',
    myTake: 'Sitting in the warm outdoor geothermal pool with arctic steam rising into the sub-zero air and the aurora borealis dancing overhead is an absolute bucket-list experience. The acoustic quiet throughout the hotel is deeply restful.',
    whatTravelersSay: 'Travelers consistently praise the geothermal pool experience, the dramatic floor-to-ceiling glass in the Northern Lights bar, and the exceptional Nordic farm-to-table cuisine.',
    thingsWorthKnowing: [
      'Located in rural Nesjavellir; a rental 4x4 car is recommended during winter months.',
      'Northern Lights wake-up calls can be arranged at the front desk so you never miss an aurora show.'
    ],
    femaleTravelNotes: 'Extremely peaceful, secure, and respectful atmosphere. Staff are exceptionally attentive and helpful with regional driving road conditions.',
    noiseLevel: 'Silent — complete rural stillness broken only by arctic wind.',
    soloTravelRating: 'Exceptional. Safe, welcoming, and ideal for contemplation.',
    editorialLabel: 'Firsthand visit',
    priceIndicator: '€€€',
    bestFor: ['Solo thinkers', 'Aurora seekers', 'Design lovers', 'Nature retreats'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€320–€480 / night',
    keyFeatures: ['Geothermal Outdoor Pool', 'Northern Lights Lounge', 'Farm-to-Table Restaurant', 'Lava Field Views']
  },
  {
    id: 'stay-iceland-hotel-rang',
    name: 'Hotel Rangá',
    category: 'Romantic Hideouts',
    destinationId: 'iceland',
    destinationName: 'Iceland',
    neighborhood: 'Hella, South Coast',
    tagline: 'Log-cabin luxury on the salmon river with private astronomical observatory',
    heroImage: icelandTurfImg,
    image: icelandTurfImg,
    description: 'A beloved rural haven on Iceland’s South Coast. Features outdoor geothermal hot tubs facing the river, a dedicated on-site stargazing observatory with resident astronomers, and an aurora wake-up service.',
    whyCaughtAttention: 'Positioned on the banks of a roaring salmon river with its own roll-off roof astronomical observatory and heated geothermal hot tubs.',
    whyWeChoseIt: 'The on-site observatory and personal aurora call service mean you will never sleep through a dancing green sky.',
    myTake: 'The hospitality here radiates genuine warmth. Meeting the resident astronomer after dinner to gaze at Saturn\'s rings through high-powered telescopes before soaking in riverside hot tubs is unforgettable.',
    whatTravelersSay: 'Guests rave about the personal aurora alert service, the cozy log-cabin ambiance by the fireplace, and the outstanding breakfast spread featuring local smoked salmon and Icelandic skyr.',
    thingsWorthKnowing: [
      'Situated directly on Route 1, making it a perfect base for exploring Seljalandsfoss and Skógafoss waterfalls.',
      'The outdoor geothermal hot tubs are open 24/7 with zero light pollution for midnight stargazing.'
    ],
    femaleTravelNotes: 'Very warm, family-style hospitality with a safe, communal lounge area around the central hearth.',
    noiseLevel: 'Tranquil riverside quiet.',
    soloTravelRating: 'Warm and communal; travelers gather by the roaring lounge hearth.',
    editorialLabel: 'Curated stay',
    priceIndicator: '€€€',
    bestFor: ['Stargazers', 'South Coast road trippers', 'Photography enthusiasts'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€290–€420 / night',
    keyFeatures: ['Astronomical Observatory', 'Riverside Hot Tubs', 'Aurora Wake-Up Service', 'Nordic Gastronomy']
  },

  // 2. LIECHTENSTEIN
  {
    id: 'stay-liechtenstein-vaduz-boutique',
    name: 'Park Hotel Sonnenhof Vaduz',
    category: 'Worth the Splurge',
    destinationId: 'liechtenstein',
    destinationName: 'Liechtenstein',
    neighborhood: 'Vaduz Castle Terraces, Liechtenstein',
    tagline: 'Relais & Châteaux hilltop estate overlooking Rhine vineyards and Swiss Alps',
    heroImage: liechtensteinImg,
    image: liechtensteinImg,
    description: 'A peaceful luxury retreat set within private park gardens on the hillside of Vaduz. Features Michelin-starred dining by Chef Hubertus Real, an indoor heated pool, and panoramic mountain balconies.',
    whyCaughtAttention: 'Perched in the vineyards below Vaduz Castle with unmatched Rhine Valley sunset views.',
    whyWeChoseIt: 'Intimate, family-run Michelin gastronomy with world-class hospitality in one of Europe’s smallest capitals.',
    myTake: 'Sitting on the garden pavilion terrace with a glass of Prince of Liechtenstein Pinot Noir while looking across the Rhine into the Swiss mountains is sheer elegance.',
    whatTravelersSay: 'Guests consistently praise the extraordinary culinary service, peaceful park setting, and panoramic suites.',
    thingsWorthKnowing: [
      'Walk down to Vaduz center in 10 minutes or take the local PostBus.',
      'Dinner reservations at restaurant Marée should be booked in advance.'
    ],
    femaleTravelNotes: 'Liechtenstein is one of the safest countries in the world; peaceful residential surroundings and 24/7 security.',
    noiseLevel: 'Lush garden calm.',
    soloTravelRating: 'Exceptional. Refined, safe, and deeply peaceful.',
    editorialLabel: 'Curated stay',
    priceIndicator: '€€€€',
    bestFor: ['Gourmet lovers', 'Wine enthusiasts', 'Peaceful retreats'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€380–€550 / night',
    keyFeatures: ['Michelin Dining', 'Indoor Pool & Sauna', 'Rhine Valley Views', 'Private Vineyard']
  },
  {
    id: 'stay-liechtenstein-malbun-lodge',
    name: 'JUFA Alpine Mountain Resort Malbun',
    category: 'Places I\'d Stay',
    destinationId: 'liechtenstein',
    destinationName: 'Liechtenstein',
    neighborhood: 'Malbun (1600m), Liechtenstein',
    tagline: 'Timber mountain refuge at the trailhead of the Fürstensteig alpine path',
    heroImage: liechtensteinImg,
    image: liechtensteinImg,
    description: 'Modern alpine timber architecture nestled directly in the mountain bowl of Malbun. Features a pine-wood wellness spa, panoramic sun terrace, and ski-in/hike-in convenience.',
    whyCaughtAttention: 'High-alpine trailhead position with modern larch-wood aesthetics and affordable mountain hospitality.',
    whyWeChoseIt: 'Step directly onto alpine trails in the morning with crisp mountain air and zero tourist crowds.',
    myTake: 'Relaxing in the cedar sauna after hiking the Fürstensteig cliff path while looking at the snowy peaks is wonderful.',
    whatTravelersSay: 'Hikers praise the pristine clean rooms, mountain views from every balcony, and direct LIEmobil bus access right to the front door.',
    thingsWorthKnowing: [
      'Bus line 21 runs directly from Vaduz Post to the hotel entrance in 30 minutes.',
      'Hiking trail maps and packed lunches available at reception.'
    ],
    femaleTravelNotes: 'Superb community atmosphere, safe village environment, and welcoming staff.',
    noiseLevel: 'High-altitude stillness.',
    soloTravelRating: 'Very welcoming to solo hikers and nature lovers.',
    editorialLabel: 'Firsthand visit',
    priceIndicator: '€€',
    bestFor: ['Hikers', 'Solo mountain travelers', 'Nature seekers'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€160–€240 / night',
    keyFeatures: ['Pine Wellness Spa', 'Trailhead Position', 'Panoramic Terrace', 'Bus Stop at Door']
  },

  // 3. SWITZERLAND
  {
    id: 'stay-switzerland-zermatt-mountain',
    name: 'The Omnia Mountain Lodge Zermatt',
    category: 'Worth the Splurge',
    destinationId: 'switzerland',
    destinationName: 'Switzerland',
    neighborhood: 'Zermatt (Car-Free), Valais',
    tagline: 'Perched on a high rock plateau above Zermatt with private cavern elevator',
    heroImage: swissTrainImg,
    image: swissTrainImg,
    description: 'Accessed via a glass elevator through a mountain cavern, this modern American-modernist alpine lodge features indoor/outdoor infinity pools facing the Matterhorn and a Michelin-starred restaurant.',
    whyCaughtAttention: 'Carved directly into the cliff above Zermatt with Matterhorn views from the indoor-outdoor granite wellness pool.',
    whyWeChoseIt: 'A masterclass in modern architectural luxury that respects alpine tranquility with zero car noise.',
    myTake: 'Floating in the heated granite pool with snow falling on your shoulders and the Matterhorn illuminated under the stars is pure alpine bliss.',
    whatTravelersSay: 'Guests highlight the cavern elevator entrance, the custom bourbon in every room, and the flawless, intuitive Swiss service.',
    thingsWorthKnowing: [
      'Zermatt is 100% car-free; arrival is by train with electric hotel shuttle pickup.',
      'The outdoor heated pool is open in all seasons with Matterhorn reflections.'
    ],
    femaleTravelNotes: 'World-class security, quiet and deeply relaxing environment with attentive staff.',
    noiseLevel: 'Car-free mountain quiet.',
    soloTravelRating: 'Flawless. Tranquil, respectful, and safe.',
    editorialLabel: 'Firsthand visit',
    priceIndicator: '€€€€',
    bestFor: ['Matterhorn views', 'Design lovers', 'Wellness escapes'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€550–€900 / night',
    keyFeatures: ['Matterhorn Infinity Pool', 'Cavern Elevator', 'Michelin Restaurant', 'Open Fireplace Lounge']
  },
  {
    id: 'stay-switzerland-grindelwald-lodge',
    name: 'Romantik Hotel Schweizerhof Grindelwald',
    category: 'Places I\'d Stay',
    destinationId: 'switzerland',
    destinationName: 'Switzerland',
    neighborhood: 'Grindelwald, Bernese Oberland',
    tagline: 'Historic alpine sanctuary facing the sheer North Face of the Eiger',
    heroImage: swissMurrenImg,
    image: swissMurrenImg,
    description: 'A grand Swiss chalet surrounded by alpine meadows and glacier streams. Features an indoor heated pool, Swiss herbal steam baths, and a traditional fondue Stübli.',
    whyCaughtAttention: 'Unbeatable panoramic views of the Eiger North Face with direct access to Jungfrau mountain trains.',
    whyWeChoseIt: 'Warm Swiss family hospitality combined with luxurious wellness facilities after long day hikes.',
    myTake: 'Drinking hot apple cider in the garden while watching alpinists on the Eiger North Face through telescope binoculars is unforgettable.',
    whatTravelersSay: 'Travelers love the spacious chalet suites, the indoor pool with mountain views, and the incredible breakfast spread with local mountain cheeses.',
    thingsWorthKnowing: [
      'Short 5-minute walk to Grindelwald train station for the Jungfraujoch railway.',
      'Complimentary spa access including Finnish saunas and steam rooms.'
    ],
    femaleTravelNotes: 'Superb Swiss safety standards, walkable village with excellent lighting.',
    noiseLevel: 'Quiet alpine stream and cowbells.',
    soloTravelRating: 'Warm, cozy, and very safe.',
    editorialLabel: 'Curated stay',
    priceIndicator: '€€€',
    bestFor: ['Alpine lovers', 'Railway explorers', 'Hiking breaks'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€280–€460 / night',
    keyFeatures: ['Eiger Views', 'Indoor Pool & Spa', 'Fondue Stübli', 'Train Station Access']
  },

  // 4. NORWAY
  {
    id: 'stay-norway-henningsvaer-brygge',
    name: 'Henningsvær Bryggehotell',
    category: 'Boutique Finds',
    destinationId: 'norway',
    destinationName: 'Norway',
    neighborhood: 'Henningsvær, Lofoten Islands',
    tagline: 'Waterfront timber hotel in Lofoten’s most vibrant cultural fishing village',
    heroImage: norwayWaterfallImg,
    image: norwayWaterfallImg,
    description: 'Positioned right on the harbor quayside with sweeping views across the Arctic waters and granite peaks. Rooms are styled in clean Scandinavian timber with maritime details.',
    whyCaughtAttention: 'Set right on the active quayside of Henningsvær, surrounded by traditional wooden docks and artisan workshops.',
    whyWeChoseIt: 'Steps from Trevarefabrikken, artisan bakeries, and local art galleries in Lofoten\'s coolest village.',
    myTake: 'Waking up to the gentle rocking of fishing boats and the aroma of freshly baked cinnamon buns from the village bakery is pure bliss.',
    whatTravelersSay: 'Travelers love the unbeatable quayside location, the delicious local Arctic cod served at the restaurant, and being able to stroll freely through Henningsvær’s charming art galleries.',
    thingsWorthKnowing: [
      'Book a harbor-view room on the upper floor for unobstructed vistas of Mount Vågakallen.',
      'The village is compact and fully walkable, with excellent independent cafés just 2 minutes away on foot.'
    ],
    femaleTravelNotes: 'Lofoten is exceptionally safe at all hours. Henningsvær has a vibrant, creative community of artists, climbers, and friendly locals.',
    noiseLevel: 'Gentle harbor water lapping against the timber piers.',
    soloTravelRating: 'Outstanding. Easy to explore on foot and very welcoming.',
    editorialLabel: 'Firsthand visit',
    priceIndicator: '€€',
    bestFor: ['Solo female travelers', 'Culture seekers', 'Coastal wanderers'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€220–€340 / night',
    keyFeatures: ['Harbor Views', 'Fjord-side Restaurant', 'Artisan Coffee Bar', 'Sauna Access']
  },
  {
    id: 'stay-norway-flam-boutique',
    name: 'Fretheim Hotel & Historic Manor',
    category: 'Places I\'d Stay',
    destinationId: 'norway',
    destinationName: 'Norway',
    neighborhood: 'Flåm, Aurlandsfjord',
    tagline: '19th-century historic retreat at the head of the Aurlandsfjord',
    heroImage: norwayFjordFerryImg,
    image: norwayFjordFerryImg,
    description: 'Dating back to the 1870s when English lords fished the Flåm river, this character-filled hotel blends historic parlor rooms with modern glass-fronted fjord view suites.',
    whyCaughtAttention: 'Positioned where the Flåm Railway meets the majestic Aurlandsfjord, surrounded by cascading waterfalls.',
    whyWeChoseIt: 'Historic charm paired with contemporary Nordic cuisine showcasing local goat cheeses and fjord salmon.',
    myTake: 'Taking an early morning walk along the calm fjord shore before the day-tripper boats arrive, then having breakfast in the glass atrium overlooking the gardens, is wonderful.',
    whatTravelersSay: 'Guests praise the proximity to the Flåm Railway, the historic library lounge with open fireplaces, and the sensational farm-to-table dinner menu.',
    thingsWorthKnowing: [
      'Just a 2-minute walk from Flåm Railway Station and the electric fjord catamaran pier.',
      'Ask for a room in the historic wing for antique furnishings or the modern wing for panoramic glass balconies.'
    ],
    femaleTravelNotes: 'Very safe, scenic area with welcoming staff and easy public transit connections.',
    noiseLevel: 'Peaceful fjord breeze and distant waterfall murmur.',
    soloTravelRating: 'Great base for solo slow travelers using Norwegian trains and ferries.',
    editorialLabel: 'Curated stay',
    priceIndicator: '€€€',
    bestFor: ['Train travelers', 'Fjord cruisers', 'Historic hotel enthusiasts'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€240–€390 / night',
    keyFeatures: ['Fjord Frontage', 'Historic Library Lounge', 'Farm-to-Table Dining', 'Steps from Flåm Railway']
  },

  // 5. SWEDEN
  {
    id: 'stay-sweden-ett-hem-stockholm',
    name: 'Ett Hem Stockholm',
    category: 'Worth the Splurge',
    destinationId: 'sweden',
    destinationName: 'Sweden',
    neighborhood: 'Östermalm / Lärkstaden, Stockholm',
    tagline: 'An Arts and Crafts residential mansion transformed into an intimate 12-room design haven',
    heroImage: swedenFikaImg,
    image: swedenFikaImg,
    description: 'Designed by Ilse Crawford, Ett Hem is less of a hotel and more of an exquisite private home. Guests wander into the open kitchen for freshly baked cardamom buns, read in the glasshouse conservatory, or relax in the private marble hammam.',
    whyCaughtAttention: 'Consistently named one of the finest boutique hotels in the world, blending warmth and home comfort with peerless Scandinavian design.',
    whyWeChoseIt: 'The informal warmth—you can literally raid the kitchen pantry or have wine poured in the garden courtyard.',
    myTake: 'Sitting by the fireplace in the library with a book and a pot of Swedish herbal tea feels like staying at the home of a deeply stylish, generous friend.',
    whatTravelersSay: 'Travelers call it their absolute favorite hotel experience worldwide, citing the private hammam, the bespoke kitchen dining, and the impeccable staff.',
    thingsWorthKnowing: [
      'Only 12 rooms; booking 3–6 months in advance is essential.',
      'The private garden courtyard is open for breakfast, afternoon tea, and evening drinks.'
    ],
    femaleTravelNotes: 'One of the most secure, welcoming, and empowering hotel environments in Europe for solo female travelers.',
    noiseLevel: 'Profound residential quiet in leafy Lärkstaden.',
    soloTravelRating: 'Perfection. Intimate, supremely safe, and deeply comforting.',
    editorialLabel: 'Firsthand visit',
    priceIndicator: '€€€€',
    bestFor: ['Solo female travelers', 'Design lovers', 'Culinary enthusiasts'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€480–€750 / night',
    keyFeatures: ['Ilse Crawford Design', 'Private Marble Hammam', 'Open Kitchen Concept', 'Courtyard Garden']
  },
  {
    id: 'stay-sweden-treehotel-harads',
    name: 'Treehotel Harads',
    category: 'Romantic Hideouts',
    destinationId: 'sweden',
    destinationName: 'Sweden',
    neighborhood: 'Harads, Swedish Lapland',
    tagline: 'Architectural treehouses suspended in the boreal pine canopy of northern Sweden',
    heroImage: swedenKayakImg,
    image: swedenKayakImg,
    description: 'Suspended 4–6 meters above the ground in a quiet pine forest, each treehouse is designed by leading Scandinavian architects. Includes the Mirrorcube, Bird’s Nest, and 7th Room with northern lights viewing nets.',
    whyCaughtAttention: 'Architectural treehouses suspended in pristine subarctic pine forest with wood-fired saunas on the forest floor.',
    whyWeChoseIt: 'Total immersion in Swedish Lapland’s pine silence with front-row seats to dancing aurora borealis.',
    myTake: 'Lying on the suspension net of the 7th Room looking up into the boreal sky with northern lights rippling overhead is pure wonder.',
    whatTravelersSay: 'Guests praise the forest silence, the delicious Arctic gastronomy (reindeer, wild berries, arctic char), and the unforgettable forest saunas.',
    thingsWorthKnowing: [
      'Fly to Luleå Airport (LLA), where hotel transfers can be arranged (1 hour drive).',
      'The forest spa features a wood-fired sauna and outdoor hot tub among the trees.'
    ],
    femaleTravelNotes: 'Lapland is safe and serene with exceptionally warm hospitality from local hosts Britta and Kent.',
    noiseLevel: 'Silent pine forest.',
    soloTravelRating: 'Serene, magical, and ideal for digital detox.',
    editorialLabel: 'Curated stay',
    priceIndicator: '€€€€',
    bestFor: ['Aurora watchers', 'Architecture enthusiasts', 'Forest retreats'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€520–€880 / night',
    keyFeatures: ['Boreal Forest Net', 'Suspended Architecture', 'Wood-Fired Forest Spa', 'Lapland Gastronomy']
  },

  // 6. CHINA
  {
    id: 'stay-china-yangshuo-sugar-house',
    name: 'Alila Yangshuo Sugar House',
    category: 'Worth the Splurge',
    destinationId: 'china',
    destinationName: 'China',
    neighborhood: 'Yangshuo, Guangxi',
    tagline: 'A 1960s heritage sugar mill turned luxury sanctuary surrounded by karst peaks',
    heroImage: chinaYangshuoMistImg,
    image: chinaYangshuoMistImg,
    description: 'A world-acclaimed architectural triumph designed by Vector Architects. Features an iconic outdoor swimming pool framed by the original concrete truss loading dock, private subterranean spa, and karst mountain views.',
    whyCaughtAttention: 'Industrial heritage concrete architecture juxtaposed against the ancient limestone karst towers and Li River.',
    whyWeChoseIt: 'One of the most striking architectural hotel conversions in the world with serene countryside atmosphere.',
    myTake: 'Swimming in the long pool at sunset with the old industrial trusses framing the misty karst mountains is an unforgettable visual spectacle.',
    whatTravelersSay: 'Travelers praise the architectural brilliance, the subterranean spa, and the tranquil setting away from Yangshuo town noise.',
    thingsWorthKnowing: [
      'Complimentary sugar-spinning workshops and morning tai chi on the river terrace.',
      'Located 10 minutes drive from West Street in a quiet countryside bend.'
    ],
    femaleTravelNotes: 'Gated luxury estate with 24/7 security and English-speaking concierge team.',
    noiseLevel: 'Quiet river breeze and garden birds.',
    soloTravelRating: 'Superb. Safe, inspiring, and restorative.',
    editorialLabel: 'Firsthand visit',
    priceIndicator: '€€€',
    bestFor: ['Architecture lovers', 'Solo luxury breaks', 'Photographers'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€310–€520 / night',
    keyFeatures: ['Industrial Heritage Pool', 'Subterranean Spa', 'Karst Mountain Views', 'Riverfront Terrace']
  },
  {
    id: 'stay-china-the-brickyard-mutianyu',
    name: 'The Brickyard Retreat at Mutianyu',
    category: 'Places I\'d Stay',
    destinationId: 'china',
    destinationName: 'China',
    neighborhood: 'Beigou Village, Mutianyu, Beijing',
    tagline: 'Eco-lodge retreat converted from a historic tile factory beneath the Great Wall',
    heroImage: chinaGreatWallImg,
    image: chinaGreatWallImg,
    description: 'Nestled in a peaceful orchard village directly below the Great Wall. Features floor-to-ceiling glass bedrooms with Wall views, radiant floor heating, outdoor hot tub, and organic farm dining.',
    whyCaughtAttention: 'Walk directly to the Great Wall watchtowers at dawn from your bedroom door.',
    whyWeChoseIt: 'Escape the Beijing metropolis for clean mountain air, local village walks, and authentic brick craftsmanship.',
    myTake: 'Drinking a craft beer on the rooftop deck watching the sun set over the Great Wall watchtowers on the ridge above is magical.',
    whatTravelersSay: 'Visitors love the village calm, the friendly English-fluent staff, and the Western & Chinese farm-to-table cuisine.',
    thingsWorthKnowing: [
      'Direct transfers from Beijing Capital Airport or central subway stations can be arranged.',
      'Complimentary bicycles available for exploring Beigou village.'
    ],
    femaleTravelNotes: 'Warm village community, safe surroundings, and dedicated concierge support.',
    noiseLevel: 'Quiet village orchards.',
    soloTravelRating: 'Very safe, comfortable, and deeply rewarding.',
    editorialLabel: 'Firsthand visit',
    priceIndicator: '€€',
    bestFor: ['Great Wall hikers', 'Solo travelers', 'Eco-conscious explorers'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€180–€310 / night',
    keyFeatures: ['Great Wall Views', 'Radiant Heating', 'Outdoor Hot Tub', 'Organic Bakery']
  },

  // 7. AUSTRALIA
  {
    id: 'stay-australia-freycinet-lodge',
    name: 'Freycinet Coastal Lodge & Pavilions',
    category: 'Worth the Splurge',
    destinationId: 'australia',
    destinationName: 'Australia',
    neighborhood: 'Freycinet National Park, Tasmania',
    tagline: 'Eco-pavilions nestled inside the national park overlooking Great Oyster Bay',
    heroImage: australiaFreycinetImg,
    image: australiaFreycinetImg,
    description: 'The only accommodation located inside Freycinet National Park. Features curved curved-timber Coastal Pavilions with outdoor copper baths, floor-to-ceiling glass, and direct walking track access to Wineglass Bay.',
    whyCaughtAttention: 'Inside the national park boundaries, where pademelons and wallabies graze right outside your glass sliding doors.',
    whyWeChoseIt: 'Step out onto secluded Richardson’s Beach for sunrise swims with zero commute to the hiking trails.',
    myTake: 'Soaking in the outdoor copper bath on the private deck with local Tasmanian sparkling wine while listening to the waves on Great Oyster Bay is pure relaxation.',
    whatTravelersSay: 'Travelers praise the architectural pavilions, the fresh Tasmanian seafood dining at The Bay Restaurant, and the private trails down to secluded coves.',
    thingsWorthKnowing: [
      'National Parks pass is required for vehicle entry and can be purchased at the lodge.',
      'Book a Coastal Pavilion for the private outdoor bath and ocean views.'
    ],
    femaleTravelNotes: 'Extremely safe and peaceful wilderness setting with attentive lodge staff.',
    noiseLevel: 'Ocean waves and gentle eucalyptus breeze.',
    soloTravelRating: 'Exceptional for solo nature immersion and photography.',
    editorialLabel: 'Firsthand visit',
    priceIndicator: '€€€',
    bestFor: ['Hikers', 'Solo nature retreats', 'Wildlife watchers'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€290–€490 / night',
    keyFeatures: ['Inside National Park', 'Outdoor Copper Bath', 'Direct Beach Access', 'Seafood Restaurant']
  },
  {
    id: 'stay-australia-sydney-boutique',
    name: 'The Old Clare Hotel Sydney',
    category: 'Boutique Finds',
    destinationId: 'australia',
    destinationName: 'Australia',
    neighborhood: 'Chippendale, Sydney',
    tagline: 'Restored heritage brewery hotel with rooftop lap pool and bespoke design',
    heroImage: australiaOceanPoolImg,
    image: australiaOceanPoolImg,
    description: 'Occupying two heritage-listed brewery buildings in Sydney\'s creative quarter. Features an open-air rooftop swimming pool, exposed brick and timber suites, and easy access to coastal beaches.',
    whyCaughtAttention: 'A masterclass in heritage restoration with industrial timber ceilings, rooftop cocktail pool, and vibrant gallery neighbors.',
    whyWeChoseIt: 'Chippendale’s Spice Alley and independent art galleries are right outside, with quick transport to Bondi and Bronte ocean pools.',
    myTake: 'Lazing on the sun loungers beside the rooftop pool overlooking Sydney’s skyline after a morning coastal walk is fantastic.',
    whatTravelersSay: 'Guests highlight the spacious designer suites, the friendly staff, and the vibrant dining precinct right at the doorstep.',
    thingsWorthKnowing: [
      'Short 5-minute walk to Central Station for airport trains and light rail to Circular Quay.',
      'Bespoke in-room amenities and free bicycle rentals available.'
    ],
    femaleTravelNotes: 'Walkable, well-lit urban area with high security and friendly concierge team.',
    noiseLevel: 'Acoustically insulated urban sanctuary.',
    soloTravelRating: 'Vibrant, safe, and ultra-convenient for exploring Sydney.',
    editorialLabel: 'Curated stay',
    priceIndicator: '€€',
    bestFor: ['Solo female city breaks', 'Design lovers', 'Foodies'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€210–€350 / night',
    keyFeatures: ['Rooftop Swimming Pool', 'Heritage Architecture', 'Spice Alley Access', 'Free Bicycles']
  },

  // 8. NEW ZEALAND
  {
    id: 'stay-nz-wanaka-lake-resort',
    name: 'Whare Kea Lodge & Chalet Wanaka',
    category: 'Worth the Splurge',
    destinationId: 'new-zealand',
    destinationName: 'New Zealand',
    neighborhood: 'Lake Wanaka, South Island',
    tagline: 'Private architectural lakefront haven with front-row Southern Alps views',
    heroImage: newZealandWanakaImg,
    image: newZealandWanakaImg,
    description: 'Positioned discreetly on the secluded shores of Lake Wanaka. Features timber-and-glass suites, private outdoor hot tub, gourmet Central Otago wine cellar, and private alpine heli-chalet access.',
    whyCaughtAttention: 'Unobstructed vistas across Lake Wanaka with zero light pollution in certified dark sky territory.',
    whyWeChoseIt: 'Pure Southern Alps serenity away from Queenstown crowds with world-class personalized service.',
    myTake: 'Sitting on the sun deck wrapped in a wool blanket watching the Southern Cross constellations reflect in the glass-still lake is breathtaking.',
    whatTravelersSay: 'Guests praise the intimacy, the gourmet private chef dinners with Central Otago Pinot Noir, and the stunning mountain views from bed.',
    thingsWorthKnowing: [
      'Located 5 minutes drive from Wanaka town center.',
      'Heli-hiking excursions into Mount Aspiring National Park depart directly from the grounds.'
    ],
    femaleTravelNotes: 'New Zealand is one of the safest travel destinations in the world; peaceful and private.',
    noiseLevel: 'Lake ripples and mountain stillness.',
    soloTravelRating: 'Deeply restorative and peaceful.',
    editorialLabel: 'Firsthand visit',
    priceIndicator: '€€€€',
    bestFor: ['Stargazers', 'Solo luxury retreats', 'Hikers'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€490–€820 / night',
    keyFeatures: ['Lakefront Position', 'Private Hot Tub', 'Dark Sky Reserve', 'Central Otago Wine Cellar']
  },
  {
    id: 'stay-nz-fiordland-lodge',
    name: 'Fiordland Lodge Te Anau',
    category: 'Places I\'d Stay',
    destinationId: 'new-zealand',
    destinationName: 'New Zealand',
    neighborhood: 'Lake Te Anau / Fiordland',
    tagline: 'Log-and-stone architectural sanctuary overlooking Lake Te Anau and Fiordland peaks',
    heroImage: nzPurepodCabinImg,
    image: nzPurepodCabinImg,
    description: 'Set on a high ridge overlooking Lake Te Anau. Features massive native timber logs, open riverstone fireplaces, deep soaking tubs, and exceptional farm-to-table dining.',
    whyCaughtAttention: 'The grand log timber lodge design and its prime position on the threshold of Milford Sound.',
    whyWeChoseIt: 'The ultimate luxury basecamp for exploring Milford Sound and the Routeburn Track before day tours arrive.',
    myTake: 'Enjoying a 3-course dinner by the roaring stone fireplace while looking out across Lake Te Anau into the untamed fiords is pure New Zealand magic.',
    whatTravelersSay: 'Travelers praise the knowledge of the on-site guiding team, the roaring fires, and the incredible tranquility.',
    thingsWorthKnowing: [
      'Book early morning Milford Sound cruises to beat the midday bus tours from Queenstown.',
      'Complimentary trail packs and hiking advice provided daily.'
    ],
    femaleTravelNotes: 'Superb security, warm communal atmosphere by the hearth, and attentive hosts.',
    noiseLevel: 'Quiet native bird songs and lake breeze.',
    soloTravelRating: 'Safe, warm, and inspiring.',
    editorialLabel: 'Curated stay',
    priceIndicator: '€€€',
    bestFor: ['Fiordland hikers', 'Nature lovers', 'Solo adventurers'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€340–€560 / night',
    keyFeatures: ['Riverstone Fireplace', 'Lake Panoramas', 'Gourmet Lodge Dining', 'Milford Sound Guides']
  },

  // 9. JAPAN
  {
    id: 'stay-japan-kyoto-hoshinoya',
    name: 'Hoshinoya Kyoto & Riverside Ryokan',
    category: 'Worth the Splurge',
    destinationId: 'japan',
    destinationName: 'Japan',
    neighborhood: 'Arashiyama, Kyoto',
    tagline: 'A riverside ryokan retreat accessed exclusively by private wooden boat along the Oi River',
    heroImage: japanKyotoTeaMossImg,
    image: japanKyotoTeaMossImg,
    description: 'Glide up the tranquil Oi River by private wooden boat to arrive at this restored 17th-century riverside pavilion. Features hand-printed kyo-karakami paper walls, cedar soaking tubs, and seasonal kaiseki dinners.',
    whyCaughtAttention: 'The poetic arrival by wooden boat up the gorge to a hidden riverside retreat untouched by city crowds.',
    whyWeChoseIt: 'A masterpiece of Japanese aesthetics, omotenashi hospitality, and seasonal contemplation.',
    myTake: 'Waking up to the morning mist floating over the bamboo-covered gorge and drinking fresh ceremonial matcha on the wooden salon deck is unforgettable.',
    whatTravelersSay: 'Guests call it an ethereal, life-changing experience, praising the boat arrival, the seasonal cuisine, and the tranquil river terrace.',
    thingsWorthKnowing: [
      'Boat transfers depart from Togetsukyo Bridge boat dock in Arashiyama.',
      'Morning temple chanting and monk meditation sessions can be arranged.'
    ],
    femaleTravelNotes: 'Japan is renowned for outstanding safety; Hoshinoya provides an impeccably secure, serene haven.',
    noiseLevel: 'Gentle river rapids and bamboo rustle.',
    soloTravelRating: 'Deeply centering, safe, and sublime.',
    editorialLabel: 'Firsthand visit',
    priceIndicator: '€€€€',
    bestFor: ['Solo cultural retreats', 'Design lovers', 'Kaiseki dining'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€650–€1100 / night',
    keyFeatures: ['Private Boat Arrival', 'Hinoki Soaking Tubs', 'Kyo-Karakami Design', 'Kaiseki Dining']
  },
  {
    id: 'stay-japan-shirakawago-ryokan',
    name: 'Wanosato Traditional Onsen Ryokan',
    category: 'Places I\'d Stay',
    destinationId: 'japan',
    destinationName: 'Japan',
    neighborhood: 'Takayama / Hida Region, Gifu',
    tagline: 'Centuries-old thatched-roof ryokan with natural stone onsen and open irori hearth',
    heroImage: japanShirakawagoImg,
    image: japanShirakawagoImg,
    description: 'Nestled in an ancient cedar forest beside a clear mountain river. Features a 160-year-old thatched main lodge, open charcoal irori fireplace where local sake is warmed, and private cedar onsen baths.',
    whyCaughtAttention: 'Centuries-old authentic Japanese alpine craftsmanship with steaming natural hot spring baths surrounded by river stones.',
    whyWeChoseIt: 'Gathering around the sunken irori hearth for local Hida beef and sweetfish grilled over charcoal embers.',
    myTake: 'Sitting by the sunken irori hearth while snow falls outside, sipping warm sake and eating freshly grilled river fish, is the essence of traditional Japan.',
    whatTravelersSay: 'Travelers praise the restorative hot spring baths, the authentic irori hearth dinners, and the warmth of the host family.',
    thingsWorthKnowing: [
      'Complimentary pickup from Takayama JR Station (20 minutes).',
      'Natural mineral hot spring water feeds both indoor and outdoor baths.'
    ],
    femaleTravelNotes: 'Very safe, respectful family hospitality in a secluded forest setting.',
    noiseLevel: 'Rushing mountain stream and whispering cedars.',
    soloTravelRating: 'Profoundly relaxing, safe, and authentic.',
    editorialLabel: 'Firsthand visit',
    priceIndicator: '€€€',
    bestFor: ['Onsen seekers', 'Authentic ryokan culture', 'Slow travelers'],
    affiliateUrl: 'AFFILIATE_LINK_PLACEHOLDER',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    priceRange: '€360–€580 / night (half-board)',
    keyFeatures: ['Natural Cedar Onsen', 'Thatched Roof Architecture', 'Irori Hearth Dining', 'Hida Mountain River']
  }
].map((s: any): Stay => ({
  ...s,
  image: s.image || s.heroImage,
  heroImage: s.heroImage || s.image
}));
