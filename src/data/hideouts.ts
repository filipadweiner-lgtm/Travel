import { Hideout } from '../types';
import icelandBlackSandImg from '../assets/images/iceland_black_sand_raw_1786970961856.jpg';
import icelandTurfImg from '../assets/images/iceland_turf_house_field_1786971149571.jpg';
import liechtensteinImg from '../assets/images/liechtenstein_malbun_trail_1786971038343.jpg';
import alpineRefugeImg from '../assets/images/alpine_refuge_cabin_1787668017576.jpg';
import nordicCabinHideoutImg from '../assets/images/nordic_cabin_hideout_1787668169487.jpg';
import swissMurrenImg from '../assets/images/switzerland_murren_chalet_1786970975469.jpg';
import swissCarfreeVillageImg from '../assets/images/swiss_carfree_village_1787742527585.jpg';
import swissTrainImg from '../assets/images/swiss_train_scenic_window_1786971618391.jpg';
import norwayWaterfallImg from '../assets/images/norway_countryside_waterfall_1786889422602.jpg';
import norwayFjordFerryImg from '../assets/images/norway_fjord_ferry_deck_1786971648308.jpg';
import swedenArchipelagoImg from '../assets/images/sweden_archipelago_cottage_1786971064310.jpg';
import swedenFikaImg from '../assets/images/sweden_fika_cardamom_coffee_1786971159560.jpg';
import swedenKayakImg from '../assets/images/sweden_kayak_isle_1787742502301.jpg';
import chinaYangshuoImg from '../assets/images/china_yangshuo_karst_1786971008164.jpg';
import chinaYangshuoMistImg from '../assets/images/china_yangshuo_mist_1787742541701.jpg';
import chinaGreatWallImg from '../assets/images/china_great_wall_mist_1786971918716.jpg';
import australiaFreycinetImg from '../assets/images/australia_freycinet_coast_1786971049642.jpg';
import australiaOceanPoolImg from '../assets/images/australia_ocean_pool_1786971907577.jpg';
import newZealandWanakaImg from '../assets/images/new_zealand_wanaka_lake_1786971023438.jpg';
import nzPurepodCabinImg from '../assets/images/nz_purepod_cabin_1787742487984.jpg';
import japanMachiyaImg from '../assets/images/japan_kyoto_machiya_lane_1786970989907.jpg';
import japanKyotoTeaMossImg from '../assets/images/japan_kyoto_tea_moss_1786971932294.jpg';
import japanShirakawagoImg from '../assets/images/japan_shirakawago_village_1786971171228.jpg';

export const HIDEOUTS: Hideout[] = [
  // 1. ICELAND
  {
    id: 'hideout-iceland-south-cabin',
    title: 'The Black Sand Sanctuary',
    category: 'Mountain',
    location: 'Vík í Mýrdal, Iceland',
    destinationId: 'iceland',
    heroImage: icelandBlackSandImg,
    image: icelandBlackSandImg,
    excerpt: 'A minimalist cedar-and-glass cabin positioned against volcanic basalt hills with unobstructed views of arctic waves.',
    summary: 'A private cedar architectural cabin nestled into the green basalt hillside overlooking the famous black sand coastline of Vík.',
    description: 'Tucked into the green slopes above Vík, this private architectural cabin combines dark timber interiors, floor-to-ceiling glass framing the Reynisdrangar sea stacks, and a geothermal outdoor soaking tub.',
    authorTake: 'Watching the subarctic twilight turn the North Atlantic into silver while soaking in the outdoor hot tub is sheer serenity. The thermal acoustics of the cedar cabin ensure complete silence inside even when arctic winds whistle across the headland.',
    whySpecial: 'Unobstructed panoramic vistas of the Atlantic ocean and Reynisdrangar sea stacks with zero light pollution for aurora viewing.',
    goodToKnow: 'Stock up on groceries in Selfoss or central Vík before check-in; the cabin includes a full induction kitchen and espresso bar.',
    vibe: 'Raw volcanic drama meets warm Scandinavian refuge',
    bestFor: ['Northern lights seekers', 'Photographers', 'Solo nature retreats'],
    wouldGoBack: 'Yes',
    editorialLabel: 'Firsthand visit',
    priceTier: '€€€',
    travelerVoiceId: 'tv-iceland-driving-wind',
    highlights: [
      'Private cedar wood-fired hot tub with sea views',
      'Underfloor geothermal heating and panoramic glass facade',
      'Direct walking trail to secluded coastal viewpoints',
      'Full kitchen with Icelandic specialty provisions'
    ],
    amenities: ['Geothermal Hot Tub', 'Underfloor Heating', 'Fast Wi-Fi', 'Full Kitchen', 'Espresso Machine', 'Free Parking'],
    pricePerNight: 'From €280 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER',
    bookingNote: 'Book at least 3 months ahead for peak winter aurora and summer puffin seasons.'
  },
  {
    id: 'hideout-iceland-snaefellsnes-retreat',
    title: 'Snæfellsnes Fjord Studio',
    category: 'Hidden Gems',
    location: 'Grundarfjörður, Snæfellsnes, Iceland',
    destinationId: 'iceland',
    heroImage: icelandTurfImg,
    image: icelandTurfImg,
    excerpt: 'A secluded timber loft overlooking quiet fjord waters beneath the silhouette of Kirkjufell mountain.',
    summary: 'An intimate timber loft sanctuary offering calm fjord reflections and front-row views of Mount Kirkjufell.',
    description: 'An intimate hideaway designed for travelers who want to escape the crowded tour routes. Wake up to calm fjord reflections, passing seabirds, and total acoustic tranquility.',
    authorTake: 'The reflection of the morning sun on the calm fjord water directly outside the glass bedroom doors is unforgettable. Having a hot cup of pour-over coffee wrapped in local wool blankets here is pure peace.',
    whySpecial: 'Direct waterfront frontage in Grundarfjörður with zero obstruction to iconic volcanic peaks and dancing northern skies.',
    goodToKnow: 'Rent a 4WD vehicle to easily explore the secluded coastal coves and lava fields of Snæfellsjökull National Park.',
    vibe: 'Peaceful coastal solitude and pure mountain air',
    bestFor: ['Quiet writing retreats', 'Couple escapes', 'Slow explorers'],
    wouldGoBack: 'Top of My Wishlist',
    editorialLabel: 'Curated stay',
    priceTier: '€€',
    travelerVoiceId: 'tv-iceland-driving-wind',
    highlights: [
      'Direct fjord waterfront position',
      'Custom Icelandic wool blankets and curated library',
      'Quiet village harbor just 10 minutes walk away',
      'Perfect position for aurora viewing with zero streetlights'
    ],
    amenities: ['Sea View', 'Kitchenette', 'Wood Stove', 'Wi-Fi', 'Free Parking', 'Tea & Coffee Bar'],
    pricePerNight: 'From €210 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },

  // 2. LIECHTENSTEIN
  {
    id: 'hideout-liechtenstein-malbun-chalet',
    title: 'Malbun Alpine Valley Refuge',
    category: 'Mountain',
    location: 'Malbun, Triesenberg, Liechtenstein',
    destinationId: 'liechtenstein',
    heroImage: alpineRefugeImg,
    image: alpineRefugeImg,
    excerpt: 'A handcrafted stone-and-larch chalet in the high mountain bowl of Malbun at 1,600 meters elevation.',
    summary: 'A quiet alpine chalet nestled above the cloud line with direct access to the Fürstensteig trail and mountain meadows.',
    description: 'Perched in the tranquil car-limited alpine amphitheater of Malbun, this traditional timber chalet offers wood-fired heating, panoramic balcony views of the Three Sisters peaks, and total starry silence at night.',
    authorTake: 'Stepping onto the balcony at sunrise to hear the distant chime of cowbells through the morning mist with the entire Rhine Valley sleeping far below is pure peace.',
    whySpecial: 'True high-alpine solitude in one of Europe’s smallest principalities, surrounded by pristine nature.',
    goodToKnow: 'LIEmobil buses connect Vaduz directly to Malbun center every hour; no car required.',
    vibe: 'Unspoiled alpine peace and crisp mountain air',
    bestFor: ['Alpine hikers', 'Quiet writers', 'Solo mountain walks'],
    wouldGoBack: 'Yes',
    editorialLabel: 'Firsthand visit',
    priceTier: '€€',
    travelerVoiceId: 'tv-liechtenstein-alpine-bus',
    highlights: [
      'Direct trailhead access to the Fürstensteig mountain path',
      'Traditional larch-wood interior with cast-iron stove',
      'Panoramic terrace overlooking Austrian and Swiss peaks',
      'Steps to local mountain dairy with fresh Bergkäse'
    ],
    amenities: ['Mountain View', 'Wood Stove', 'Balcony', 'Wi-Fi', 'Kitchenette', 'Bus Stop Nearby'],
    pricePerNight: 'From €185 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },

  // 3. SWITZERLAND
  {
    id: 'hideout-switzerland-lauterbrunnen-chalet',
    title: 'Mürren Cliffside Timber Chalet',
    category: 'Mountain',
    location: 'Mürren (Car-Free), Bernese Oberland, Switzerland',
    destinationId: 'switzerland',
    heroImage: swissMurrenImg,
    image: swissMurrenImg,
    excerpt: 'A car-free wooden chalet perched on the 800-meter vertical cliff edge facing the Eiger, Mönch, and Jungfrau.',
    summary: 'A car-free alpine chalet refuge perched above the Lauterbrunnen valley with front-row views of the iconic trio.',
    description: 'Accessible only by cable car and mountain rail, this traditional Bernese Oberland chalet features sun-bleached spruce wood, down duvets, and an unobstructed private balcony facing the glaciers of the Jungfrau massif.',
    authorTake: 'Sitting on the wooden porch in absolute silence with zero engine noise, watching the afternoon sun illuminate the ice walls of the Jungfrau, is something you will remember for the rest of your life.',
    whySpecial: '100% car-free alpine air with front-row mountain views and direct walking trails to alpine cheese farms.',
    goodToKnow: 'Your Swiss Travel Pass covers all transit up to Mürren; luggage carts are available at the mountain station.',
    vibe: 'Car-free serenity and staggering glacier panoramas',
    bestFor: ['Solo travelers', 'Train enthusiasts', 'Alpine walkers'],
    wouldGoBack: 'Yes',
    editorialLabel: 'Firsthand visit',
    priceTier: '€€€',
    travelerVoiceId: 'tv-switzerland-train-rhythm',
    highlights: [
      'Car-free village position with zero road traffic',
      'Unobstructed panoramic balcony facing the Jungfrau',
      'Steps from the cliff walk to Gimmelwald',
      'Traditional fondue and raclette setup in kitchen'
    ],
    amenities: ['Glacier Views', 'Balcony', 'Fondue Set', 'High-Speed Wi-Fi', 'Floor Heating'],
    pricePerNight: 'From €290 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'hideout-switzerland-zermatt-loft',
    title: 'Zermatt Pine & Matterhorn Loft',
    category: 'Boutique',
    location: 'Zermatt (Winkelmatten), Switzerland',
    destinationId: 'switzerland',
    heroImage: swissTrainImg,
    image: swissTrainImg,
    excerpt: 'An architect-designed larch-wood loft in the peaceful historic Winkelmatten hamlet with Matterhorn views.',
    summary: 'A peaceful timber penthouse in Zermatt’s quietest historic quarter with dramatic Matterhorn views from your bed.',
    description: 'Located in the historic wooden quarter of Winkelmatten, this sleek alpine loft blends Swiss stone pine interiors, a modern fireplace, and large glass windows facing the Matterhorn.',
    authorTake: 'Waking up to the Matterhorn turning rose-gold in the sunrise light while drinking Swiss mountain herbal tea is unforgettable.',
    whySpecial: 'Located in the peaceful, historic quarter away from central tourist shopping streets.',
    goodToKnow: 'Take the electric village bus or enjoy the quiet 15-minute downhill walk to the Gornergrat cog railway.',
    vibe: 'Refined Swiss design and legendary peak views',
    bestFor: ['Couples', 'Solo contemplative trips', 'Skiers & hikers'],
    wouldGoBack: 'Top of My Wishlist',
    editorialLabel: 'Curated stay',
    priceTier: '€€€',
    travelerVoiceId: 'tv-switzerland-train-rhythm',
    highlights: [
      'Direct view of the Matterhorn from bed and private terrace',
      'Stone pine (Arve) wood construction known for lowering heart rate',
      'Modern open fireplace and designer kitchen',
      'Access to private wellness sauna in building'
    ],
    amenities: ['Matterhorn View', 'Fireplace', 'Sauna', 'Wi-Fi', 'Designer Kitchen'],
    pricePerNight: 'From €320 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },

  // 4. NORWAY
  {
    id: 'hideout-norway-lofoten-rorbu',
    title: 'Reine Red Rorbu Hideout',
    category: 'Coastal',
    location: 'Reine, Lofoten Islands, Norway',
    destinationId: 'norway',
    heroImage: nordicCabinHideoutImg,
    image: nordicCabinHideoutImg,
    excerpt: 'An authentic restored 19th-century fisherman’s cabin built on wooden stilts directly over the Arctic fjord.',
    summary: 'A lovingly restored traditional Norwegian rorbu built on wooden stilts directly over the turquoise waters of Reinefjord.',
    description: 'Step into a piece of Norwegian maritime heritage. Hand-hewn timber walls, crackling wood-burning stove, and a private wooden balcony where you can watch fishing boats glide past dramatic granite spires.',
    authorTake: 'Listening to the gentle tide lapping against the wooden stilts under the floorboards while the woodstove crackles is the epitome of Nordic coziness (koselig). The balcony views of Reinebringen are second to none.',
    whySpecial: 'Authentic 19th-century maritime history combined with heated bathroom floors, modern kitchen amenities, and direct overwater fjord access.',
    goodToKnow: 'Walk 5 minutes to Reinebringen’s Sherpa stone staircase for the iconic viewpoint over the archipelago.',
    vibe: 'Historic maritime warmth over glass-clear arctic water',
    bestFor: ['Lofoten hikers', 'Photographers', 'Romantic escapes'],
    wouldGoBack: 'Yes',
    editorialLabel: 'Firsthand visit',
    priceTier: '€€€',
    travelerVoiceId: 'tv-norway-fjord-slow',
    highlights: [
      'Private overwater deck with panoramic fjord views',
      'Cast-iron wood stove and cozy sheepskin throws',
      'Steps away from the Reinebringen hiking trail trailhead',
      'Walking distance to local seafood bistro'
    ],
    amenities: ['Overwater Balcony', 'Wood Stove', 'Full Kitchen', 'High-Speed Wi-Fi', 'Heated Bathroom Floors'],
    pricePerNight: 'From €260 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'hideout-norway-fjord-cabin',
    title: 'Aurlandsfjord Glass Pavilion',
    category: 'Mountain',
    location: 'Aurland (near Flåm), Norway',
    destinationId: 'norway',
    heroImage: norwayFjordFerryImg,
    image: norwayFjordFerryImg,
    excerpt: 'Perched high on the mountain terraces above Aurlandsfjord with eagle-eye panoramic vistas.',
    summary: 'A glass-walled mountain terrace pavilion floating high above the deep blue waters of Aurlandsfjord.',
    description: 'Suspended in the quiet heights of the fjord valley, this architectural pavilion offers an immersive connection to nature with floor-to-ceiling glass walls overlooking the deep blue waterway below.',
    authorTake: 'Watching morning mist rise slowly from the fjord depths as you soak in the outdoor cedar tub is a sensory revelation. You feel completely elevated above the rest of the world.',
    whySpecial: 'Perched on high terraced orchards with 180-degree unobstructed fjord vistas away from all ferry dock crowds.',
    goodToKnow: 'The hosts provide a wonderful breakfast basket filled with local sourdough, organic goat cheese, and fresh fjord apple juice.',
    vibe: 'Floating above the clouds and mist',
    bestFor: ['Solo thinkers', 'Design lovers', 'Railway travelers'],
    wouldGoBack: 'Yes',
    editorialLabel: 'Curated stay',
    priceTier: '€€€',
    travelerVoiceId: 'tv-norway-fjord-slow',
    highlights: [
      'Floor-to-ceiling panoramic glass walls',
      'Outdoor wood-fired cedar hot tub overlooking the fjord',
      'Close to Stegastein viewpoint and Flåm railway',
      'Complimentary organic local cider and farm breakfast'
    ],
    amenities: ['Fjord View', 'Outdoor Tub', 'Breakfast Included', 'Wi-Fi', 'Free EV Charging'],
    pricePerNight: 'From €310 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },

  // 5. SWEDEN
  {
    id: 'hideout-sweden-archipelago-cabin',
    title: 'Sandhamn Pine Island Cabin',
    category: 'Romantic',
    location: 'Stockholm Archipelago, Sweden',
    destinationId: 'sweden',
    heroImage: swedenKayakImg,
    image: swedenKayakImg,
    excerpt: 'A timeless red-painted timber cottage nestled among fragrant pine needles and granite rocks on a car-free island.',
    summary: 'A classic Falu-red island cottage surrounded by wild bilberry bushes, smooth granite sun rocks, and Baltic breezes.',
    description: 'Accessible only by passenger boat from Stockholm, this serene island hideout features minimalist Scandinavian decor, a wood-fired sauna steps from the Baltic Sea, and sunlit wooden verandahs.',
    authorTake: 'Going for a brisk swim in the clear Baltic Sea followed by a private wood-fired sauna on the jetty, then relaxing with a warm cinnamon bun on the sunny terrace, represents the Swedish art of living at its finest.',
    whySpecial: 'Car-free island tranquility with private wooden jetty and traditional Finnish-style wood-fired sauna.',
    goodToKnow: 'Take the scenic 2-hour Waxholmsbolaget passenger ferry directly from Strömkajen in central Stockholm.',
    vibe: 'Pure archipelago calm and salty pine air',
    bestFor: ['Summer swimming', 'Fika rituals', 'Peaceful digital detox'],
    wouldGoBack: 'Yes',
    editorialLabel: 'Firsthand visit',
    priceTier: '€€',
    travelerVoiceId: 'tv-sweden-archipelago-ferry',
    highlights: [
      'Traditional wood-fired Swedish sauna with private jetty',
      'Surrounded by wild blueberry patches and smooth sun rocks',
      'Short walk to Sandhamn historic bakery and harbor',
      'Complimentary island bicycles and sea kayaks'
    ],
    amenities: ['Wood-Fired Sauna', 'Private Jetty', 'Bicycles Included', 'Wi-Fi', 'Full Kitchen'],
    pricePerNight: 'From €240 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'hideout-sweden-stockholm-loft',
    title: 'Södermalm Bell Tower Loft',
    category: 'City',
    location: 'Södermalm, Stockholm, Sweden',
    destinationId: 'sweden',
    heroImage: swedenFikaImg,
    image: swedenFikaImg,
    excerpt: 'A light-filled top-floor attic apartment in an 1880s building overlooking Mariatorget’s rooftops.',
    summary: 'A sun-drenched Scandinavian designer loft with whitewashed rafters and peaceful courtyard views in central Södermalm.',
    description: 'Exposed whitewashed beams, classic Swedish mid-century furniture, custom ceramic dishware, and quiet courtyards. Steps from Stockholm’s best specialty bakeries and independent design stores.',
    authorTake: 'The gentle natural light pouring through the roof skylights onto the blonde wood floors makes waking up here a joy. It is whisper-quiet yet positioned right in Stockholm\'s most vibrant creative district.',
    whySpecial: 'Historic 1880s architectural charm paired with state-of-the-art Scandinavian acoustic insulation and minimalist styling.',
    goodToKnow: 'Bageri Petrus is just a 3-minute morning stroll away for the finest cardamom buns in Sweden.',
    vibe: 'Sophisticated Scandinavian design and warm morning light',
    bestFor: ['Solo female city breaks', 'Design aficionados', 'Café lovers'],
    wouldGoBack: 'Yes',
    editorialLabel: 'Firsthand visit',
    priceTier: '€€',
    travelerVoiceId: 'tv-sweden-archipelago-ferry',
    highlights: [
      'Sunlit skylights and historic timber beam architecture',
      'Curated vinyl collection and Bang & Olufsen sound system',
      'Quiet inner courtyard with bicycle storage',
      'Moments from Mariatorget metro and Bageri Petrus'
    ],
    amenities: ['City Rooftop View', 'Designer Kitchen', 'High-Speed Fiber Wi-Fi', 'Washer/Dryer', 'Elevator Access'],
    pricePerNight: 'From €195 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },

  // 6. CHINA
  {
    id: 'hideout-china-yangshuo-retreat',
    title: 'Yulong Karst Bamboo Haven',
    category: 'Hidden Gems',
    location: 'Yangshuo, Guangxi, China',
    destinationId: 'china',
    heroImage: chinaYangshuoMistImg,
    image: chinaYangshuoMistImg,
    excerpt: 'A restored mud-brick countryside homestead nestled between emerald limestone towers and bamboo groves.',
    summary: 'A tranquil countryside homestead framed by soaring limestone karst towers and peaceful river paths.',
    description: 'Set along the peaceful Yulong River away from commercial bustle, this serene boutique sanctuary celebrates traditional Guangxi architecture with polished slate floors, handmade wooden furnishings, and a quiet courtyard tea room.',
    authorTake: 'Sitting in the central open tea pavilion sipping wild osmanthus tea while looking out at the karst peaks reflecting in the mirror pool is one of the most grounding experiences in Asia.',
    whySpecial: 'Completely removed from tourist traffic, situated directly alongside flat country cycling paths and historic stone bridges.',
    goodToKnow: 'Use the complimentary bamboo bicycles to explore the surrounding pomelo orchards and ancient dragon bridges.',
    vibe: 'Living inside an ancient landscape painting',
    bestFor: ['Nature lovers', 'Slow cycling', 'Cultural contemplation'],
    wouldGoBack: 'Top of My Wishlist',
    editorialLabel: 'Curated stay',
    priceTier: '€€',
    travelerVoiceId: 'tv-china-rail-payments',
    highlights: [
      'Courtyard tea pavilion with local organic tea tastings',
      'Open-air swimming pool reflecting karst peaks',
      'Complimentary bamboo bicycles for village exploration',
      'Farm-to-table organic Chinese breakfast included'
    ],
    amenities: ['Pool', 'Tea Pavilion', 'Bicycles', 'Free Wi-Fi', 'Airport/Train Transfer Service', 'Restaurant'],
    pricePerNight: 'From €140 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'hideout-china-great-wall-brick',
    title: 'The Mutianyu Brick Sanctuary',
    category: 'Boutique',
    location: 'Mutianyu Village, Huairou, Beijing, China',
    destinationId: 'china',
    heroImage: chinaGreatWallImg,
    image: chinaGreatWallImg,
    excerpt: 'A restored glazed-tile factory eco-retreat positioned in a quiet mountain village beneath the Great Wall.',
    summary: 'A sustainable heritage mountain retreat built from a historic brick kiln factory at the base of the Mutianyu Wall.',
    description: 'Surrounded by chestnut orchards and mountain ridges, this eco-resort features red-brick architecture, radiant floor heating, a wood-fired pizza oven, and walking access to wild sections of the Great Wall.',
    authorTake: 'Watching the morning mist clear to reveal the ancient stone watchtowers on the ridge above while eating breakfast on the sunny terrace is spectacular.',
    whySpecial: 'Direct footpath access to the Great Wall watchtowers before any tour buses arrive from Beijing.',
    goodToKnow: 'Staff speak fluent English and arrange direct private vehicle transfers to and from Beijing Capital Airport or downtown.',
    vibe: 'Eco-conscious design and timeless mountain heritage',
    bestFor: ['Solo travelers', 'Great Wall hikers', 'Architecture lovers'],
    wouldGoBack: 'Yes',
    editorialLabel: 'Firsthand visit',
    priceTier: '€€',
    travelerVoiceId: 'tv-china-rail-payments',
    highlights: [
      'Historic tile factory architecture with mountain terraces',
      'Direct walking trail to Mutianyu Great Wall watchtowers',
      'Organic farm-to-table restaurant and craft beer cellar',
      'Surrounded by peaceful fruit orchards and quiet village life'
    ],
    amenities: ['Mountain Views', 'Radiant Heating', 'Restaurant', 'Wi-Fi', 'Hiking Transfers'],
    pricePerNight: 'From €165 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },

  // 7. AUSTRALIA
  {
    id: 'hideout-australia-tasmania-bay',
    title: 'Freycinet Coastal Granite Pavilion',
    category: 'Boutique',
    location: 'Coles Bay, Tasmania, Australia',
    destinationId: 'australia',
    heroImage: australiaFreycinetImg,
    image: australiaFreycinetImg,
    excerpt: 'An architect-designed timber pavilion surrounded by coastal eucalyptus and overlooking Great Oyster Bay.',
    summary: 'An architect-designed eco-pavilion tucked into native Tasmanian bushland overlooking Great Oyster Bay.',
    description: 'Immersed in native Tasmanian bushland, this secluded pavilion features curved timber ceilings, a double-sided granite fireplace, and a sunken outdoor bath where you can watch wallabies graze at dusk.',
    authorTake: 'Soaking in the outdoor copper bath under the eucalyptus canopy with local Freycinet oysters and a glass of Tasmanian Pinot Noir while native wallabies graze nearby is pure Australian bliss.',
    whySpecial: 'Total bushland privacy just moments from Freycinet National Park and pristine secluded white beaches.',
    goodToKnow: 'Pick up fresh Pacific oysters directly from the Freycinet Marine Farm on your drive in from Hobart.',
    vibe: 'Raw coastal luxury and pure southern ocean air',
    bestFor: ['Nature lovers', 'Hikers', 'Romantic getaways'],
    wouldGoBack: 'Yes',
    editorialLabel: 'Firsthand visit',
    priceTier: '€€€',
    travelerVoiceId: 'tv-australia-tasmania-roadtrip',
    highlights: [
      'Outdoor freestanding bath under eucalyptus canopies',
      'Double-sided wood fireplace and curated Tasmanian wine cellar',
      'Private trail down to secluded white sand beach',
      'Minutes from Freycinet National Park and Wineglass Bay'
    ],
    amenities: ['Outdoor Bath', 'Fireplace', 'Wine Cellar', 'Wi-Fi', 'Breakfast Hamper Included'],
    pricePerNight: 'From €340 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'hideout-australia-byron-hinterland',
    title: 'Bronte & Coastal Ocean Atelier',
    category: 'City',
    location: 'Sydney Coastal Suburbs, Australia',
    destinationId: 'australia',
    heroImage: australiaOceanPoolImg,
    image: australiaOceanPoolImg,
    excerpt: 'A sun-drenched sandstone terrace apartment just steps from iconic tidal ocean baths and coastal walking trails.',
    summary: 'A breezy light-filled garden apartment overlooking coastal headlands and morning surf breaks.',
    description: 'Located in a quiet residential avenue moments from Bronte and Bondi beaches. High ceilings, original French doors opening onto a jasmine-scented garden, and just a short walk to sunrise ocean pools.',
    authorTake: 'Doing 20 morning laps in the saltwater pool as waves splash over the concrete barrier, followed by a flat white and fresh papaya bowl, is the ultimate Sydney morning.',
    whySpecial: 'Steps from world-class ocean swimming pools and the world-famous coastal cliff path.',
    goodToKnow: 'Buses to Bondi Junction and the CBD depart regularly from the end of the street.',
    vibe: 'Sun-drenched ocean lifestyle and coastal serenity',
    bestFor: ['Solo female travelers', 'Ocean swimmers', 'Café lovers'],
    wouldGoBack: 'Yes',
    editorialLabel: 'Firsthand visit',
    priceTier: '€€',
    travelerVoiceId: 'tv-australia-tasmania-roadtrip',
    highlights: [
      'Private walled garden with outdoor dining setting',
      'Bright open-plan living with marble kitchen finishes',
      'Short walk to Bronte Baths and Bondi coastal track',
      'Surrounded by independent cafés and organic grocers'
    ],
    amenities: ['Garden Patio', 'Full Kitchen', 'High-Speed Wi-Fi', 'Washer/Dryer', 'Nespresso Coffee'],
    pricePerNight: 'From €210 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },

  // 8. NEW ZEALAND
  {
    id: 'hideout-nz-wanaka-lake-cabin',
    title: 'Lake Wanaka Alpine Sanctuary',
    category: 'Mountain',
    location: 'Wanaka, South Island, New Zealand',
    destinationId: 'new-zealand',
    heroImage: newZealandWanakaImg,
    image: newZealandWanakaImg,
    excerpt: 'A secluded cedar alpine cabin overlooking Lake Wanaka and the snow-capped Southern Alps.',
    summary: 'A secluded high-altitude cedar cabin with wood-fired hot tub overlooking Lake Wanaka and Mount Aspiring.',
    description: 'Set on a private hillside high above the lake, this sustainable luxury cabin features an outdoor cedar hot tub, wood-burning fire, and floor-to-ceiling glass capturing sweeping views of Mount Aspiring.',
    authorTake: 'Watching the Milky Way galaxy sweep across the pitch-black alpine sky from the warm cedar hot tub with the reflection of the Southern Alps on Lake Wanaka below is a transcendent experience.',
    whySpecial: 'Gold-tier Dark Sky reserve visibility with total hillside seclusion and panoramic lakefront views.',
    goodToKnow: 'Wanaka town center is a 12-minute drive away for world-class artisan bakeries and organic cafés.',
    vibe: 'Majestic alpine grandeur and profound quiet',
    bestFor: ['Hikers', 'Stargazers', 'Slow road trippers'],
    wouldGoBack: 'Top of My Wishlist',
    editorialLabel: 'Curated stay',
    priceTier: '€€€',
    travelerVoiceId: 'tv-nz-campervan-pacing',
    highlights: [
      'Wood-fired cedar hot tub with unobstructed lake views',
      'Stargazing skylight above the king-size bed',
      'Zero light pollution inside Dark Sky territory',
      'Close to Roy\'s Peak and Rob Roy Glacier hiking trails'
    ],
    amenities: ['Cedar Hot Tub', 'Indoor Fireplace', 'Panoramic Views', 'Kitchenette', 'Free Wi-Fi'],
    pricePerNight: 'From €310 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'hideout-nz-queenstown-alpine-loft',
    title: 'Fiordland Wilderness Lodge',
    category: 'Hidden Gems',
    location: 'Te Anau / Fiordland, New Zealand',
    destinationId: 'new-zealand',
    heroImage: nzPurepodCabinImg,
    image: nzPurepodCabinImg,
    excerpt: 'A tranquil riverfront lodge surrounded by native beech forests on the doorstep of Milford Sound.',
    summary: 'A tranquil eco-lodge nestled along a crystal trout river on the scenic threshold of Fiordland National Park.',
    description: 'The ultimate base for exploring Fiordland National Park. Wake to the song of native tui and bellbirds, enjoy farm-to-table dining, and embark on early morning adventures into the dramatic fiords.',
    authorTake: 'Waking up to the melodic song of native tui birds and the rushing river while enjoying warm sourdough and local honey by the stone fireplace prepares you perfectly for a day of kayaking in Milford Sound.',
    whySpecial: 'Prime position near the start of the Milford Road, enabling you to beat the daily tour bus rush to the fiords.',
    goodToKnow: 'The lodge hosts provide customized weather briefings and sandfly-repellent packs for hikers.',
    vibe: 'Untamed prehistoric wilderness and warm fireside hospitality',
    bestFor: ['Nature lovers', 'Great Walkers', 'Fiord explorers'],
    wouldGoBack: 'Yes',
    editorialLabel: 'Firsthand visit',
    priceTier: '€€€',
    travelerVoiceId: 'tv-nz-campervan-pacing',
    highlights: [
      'Set on the banks of a crystal-clear trout river',
      'Complimentary evening fireside wine and cheese tasting',
      'Expert on-site guides for Milford and Routeburn track advice',
      'Unmatched peace and dark starry skies'
    ],
    amenities: ['Fireside Lounge', 'River Views', 'Breakfast Included', 'Free Wi-Fi', 'Tour Desk'],
    pricePerNight: 'From €250 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },

  // 9. JAPAN
  {
    id: 'hideout-japan-kyoto-machiya-courtyard',
    title: 'Gion Preserved Machiya Courtyard',
    category: 'Boutique',
    location: 'Gion & Miyagawacho, Kyoto, Japan',
    destinationId: 'japan',
    heroImage: japanKyotoTeaMossImg,
    image: japanKyotoTeaMossImg,
    excerpt: 'An exquisitely preserved 1910s traditional wooden townhouse with private tsuboniwa moss courtyard and hinoki tub.',
    summary: 'A private historic machiya residence with stone rock courtyard, hinoki cypress soaking bath, and heated tatami floors.',
    description: 'Nestled in a quiet pedestrian alley in Kyoto’s historic preservation district, this private machiya sanctuary blends paper shoji screens and cedar exposed rafters with a sunken Japanese cypress wood bath and modern floor heating.',
    authorTake: 'Soaking in the fragrant cypress wood tub while looking out through floor-to-ceiling glass into your own private moss garden makes the bustling city completely vanish.',
    whySpecial: 'Exclusive entire historic residence reserved for one party in Kyoto’s most atmospheric historic quarter.',
    goodToKnow: 'Shoes are removed at the genkan entrance; traditional tea master provisions provided on check-in.',
    vibe: 'Mindful Japanese aesthetic sanctuary and total acoustic calm',
    bestFor: ['Solo travelers', 'Design lovers', 'Mindful cultural trips'],
    wouldGoBack: 'Yes',
    editorialLabel: 'Firsthand visit',
    priceTier: '€€€',
    travelerVoiceId: 'tv-japan-bullet-train',
    highlights: [
      'Private aromatic hinoki cypress soaking bath facing moss garden',
      'Heated tatami floor sitting area and handcrafted futon bedding',
      'Curated Kyoto ceramic matcha set with Uji green tea',
      'Walking distance to morning canal walks and artisan soba shops'
    ],
    amenities: ['Hinoki Bath', 'Moss Garden', 'Tatami Lounge', 'High-Speed Wi-Fi', 'Floor Heating'],
    pricePerNight: 'From €280 / night',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'hideout-japan-hakone-onsen-ryokan',
    title: 'Shirakawa-go Valley Cedar Sanctuary',
    category: 'Mountain',
    location: 'Shirakawa-go & Takayama, Gifu, Japan',
    destinationId: 'japan',
    heroImage: japanShirakawagoImg,
    image: japanShirakawagoImg,
    excerpt: 'A traditional thatched-roof gassho-zukuri mountain lodge with natural cedar onsen baths.',
    summary: 'A timeless mountain retreat in the Japanese Alps with private hot spring mineral baths and seasonal kaiseki cuisine.',
    description: 'Surrounded by steep mountain pine forests and crystal mountain streams, this historic thatched lodge offers natural hot spring soaking baths, multi-course local Hida beef kaiseki dinners, and absolute nighttime silence.',
    authorTake: 'Sitting in the outdoor stone onsen with natural geothermal water steaming into the crisp mountain air under a sky full of stars is the ultimate restorative Japanese experience.',
    whySpecial: 'UNESCO mountain valley setting with centuries-old timber craft and private natural onsen pools.',
    goodToKnow: 'Book dinner-inclusive rates to experience the remarkable seasonal local mountain gastronomy.',
    vibe: 'Ancient alpine refuge and soothing geothermal waters',
    bestFor: ['Onsen lovers', 'Culture seekers', 'Mountain slow travelers'],
    wouldGoBack: 'Top of My Wishlist',
    editorialLabel: 'Curated stay',
    priceTier: '€€€',
    travelerVoiceId: 'tv-japan-bullet-train',
    highlights: [
      'Natural geothermal indoor and outdoor hot spring baths',
      'Traditional multi-course seasonal kaiseki dinner included',
      'Historic timber beam architecture and tatami rooms',
      'Spectacular seasonal autumn foliage and winter snow views'
    ],
    amenities: ['Natural Onsen', 'Kaiseki Dining Included', 'Mountain Views', 'Wi-Fi', 'Tatami Rooms'],
    pricePerNight: 'From €330 / night (half-board)',
    stay22Url: 'AFFILIATE_LINK_PLACEHOLDER'
  }
].map((h: any): Hideout => ({
  ...h,
  image: h.image || h.heroImage,
  heroImage: h.heroImage || h.image
}));
