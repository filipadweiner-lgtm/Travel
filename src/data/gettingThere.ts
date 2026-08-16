import { FlightRouteInfo } from '../types';

export const FLIGHT_ROUTES: FlightRouteInfo[] = [
  {
    id: 'flight-iceland',
    destinationId: 'iceland',
    destinationName: 'Iceland (Reykjavík)',
    airportCode: 'KEF (Keflavík International)',
    primaryRoutes: 'Direct 5–6h transatlantic flights from NYC, Boston, Toronto, Chicago, Washington DC; direct 2.5–3.5h connections from London, Paris, Frankfurt, Copenhagen.',
    femaleTravelTip: 'Flybus and Airport Direct express buses depart right outside the main terminal doors every 30 minutes, dropping you at your central hotel door or nearby designated bus stop.',
    arrivalAtNightTip: 'If arriving on late-night or 5:00 AM red-eye flights, book a pre-opening pass to the nearby Blue Lagoon or confirm early hotel check-in in Reykjavík.',
    transportFromAirport: 'Flybus Express (45 min, ~€28) or rental 4x4 collection right at the terminal car depot.',
    bestTimeToBook: 'Book 8–12 weeks ahead for shoulder season (May or September) for lower flight costs and optimal daylight.',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'flight-norway',
    destinationId: 'norway',
    destinationName: 'Norway (Oslo & Bergen)',
    airportCode: 'OSL (Oslo Gardermoen) & BGO (Bergen Flesland)',
    primaryRoutes: 'Direct daily non-stops to Oslo from New York, London, Paris, Amsterdam, Frankfurt, Stockholm; seamless domestic connection flights to Bergen, Tromsø, and Lofoten (EVE).',
    femaleTravelTip: 'The Flytoget high-speed airport train from OSL reaches Oslo Central Station in just 19 minutes with departures every 10 minutes. Clean, quiet, and exceptionally secure.',
    arrivalAtNightTip: 'In Bergen, the modern Bybanen light rail runs directly from the airport terminal into central Bergen until late night for under €4.50.',
    transportFromAirport: 'Flytoget High-Speed Train from OSL (19 min) or Bybanen light rail from BGO (42 min).',
    bestTimeToBook: 'May and September offer glorious crisp fjord conditions with far less passenger congestion than July.',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'flight-sweden',
    destinationId: 'sweden',
    destinationName: 'Sweden (Stockholm)',
    airportCode: 'ARN (Stockholm Arlanda)',
    primaryRoutes: 'Direct transatlantic routes from New York and Chicago; frequent 1–2h connections from all European capital hubs.',
    femaleTravelTip: 'The Arlanda Express train platform is located directly beneath Terminals 4 and 5, arriving at Stockholm Central in 18 minutes with spotless, calm carriages.',
    arrivalAtNightTip: 'Stockholm Central Station connects straight into the T-Bana metro lines with well-illuminated pedestrian signs.',
    transportFromAirport: 'Arlanda Express Train (18 min, ~€26) or Flygbussarna Airport Coach (~€12).',
    bestTimeToBook: 'Mid-week flights in late May or early September offer the most relaxed travel and pleasant weather.',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'flight-china',
    destinationId: 'china',
    destinationName: 'China (Beijing & Shanghai)',
    airportCode: 'PVG/SHA (Shanghai) & PEK/PKX (Beijing)',
    primaryRoutes: 'Direct global flights into Shanghai Pudong (PVG) and Beijing Capital (PEK) or Daxing (PKX) from Europe, North America, Middle East, and Asia-Pacific.',
    femaleTravelTip: 'From Shanghai Pudong (PVG), the Maglev train glides to the Longyang Road metro interchange in 8 minutes at 300+ km/h. Subways in both cities feature extensive English signage and security screening at all entries.',
    arrivalAtNightTip: 'Inside the arrivals hall, follow the clear signs to the official metered taxi stand; ignore unofficial drivers offering rides inside the terminal.',
    transportFromAirport: 'Shanghai Maglev / Metro Line 2 from PVG; Daxing/Capital Airport Express subway lines in Beijing.',
    bestTimeToBook: 'Autumn (September to November) and spring (April to May) provide ideal clear skies and mild temperatures across China.',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'flight-patagonia',
    destinationId: 'patagonia',
    destinationName: 'Patagonia (Chile & Argentina)',
    airportCode: 'FTE (El Calafate), PUQ (Punta Arenas) & USH (Ushuaia)',
    primaryRoutes: 'Fly internationally into Santiago (SCL) or Buenos Aires (EZE/AEP), then take a 3–3.5h domestic flight south to El Calafate (FTE), Punta Arenas (PUQ), or Ushuaia (USH).',
    femaleTravelTip: 'Scheduled shuttle buses match all scheduled flight arrivals at El Calafate Airport and Puerto Natales, dropping you directly at village hotels.',
    arrivalAtNightTip: 'Southern Patagonia trekking towns are small, compact, and completely safe to walk through upon arrival.',
    transportFromAirport: 'Official airport shuttles (Vespatagonia / Transfer FTE) directly to your hotel in town.',
    bestTimeToBook: 'Book domestic flights in Argentina (Aerolíneas Argentinas) and Chile (LATAM/SKY) 3–4 months in advance for peak trekking season (December–February).',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'flight-south-korea',
    destinationId: 'south-korea',
    destinationName: 'South Korea (Seoul)',
    airportCode: 'ICN (Incheon International)',
    primaryRoutes: 'Major global non-stop flights from all continents into Incheon International (ICN), consistently ranked among the world’s top airports.',
    femaleTravelTip: 'The AREX Express Train runs non-stop from Incheon Airport directly to Seoul Station in 43 minutes. Clean, quiet, and equipped with fast Wi-Fi and luggage racks.',
    arrivalAtNightTip: 'Late-night airport limousine buses (Night Bus routes N6000/N6001) operate into central Seoul 24/7 with comfortable reclining seats.',
    transportFromAirport: 'AREX Non-Stop Express Train (43 min, ~€8) or All-Stop Subway Line.',
    bestTimeToBook: 'Spring (cherry blossom season in April) or Autumn (brilliant red maple foliage in October/November).',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'flight-australia',
    destinationId: 'australia',
    destinationName: 'Australia (Sydney & Melbourne)',
    airportCode: 'SYD (Sydney Kingsford Smith) & MEL (Melbourne Tullamarine)',
    primaryRoutes: 'Direct long-haul routes from North America, Europe (via Asia/Middle East hubs), and Asia-Pacific into Sydney and Melbourne.',
    femaleTravelTip: 'Sydney Airport Rail Link takes you directly from the international arrivals terminal to Circular Quay in 20 minutes with zero traffic delays.',
    arrivalAtNightTip: 'Melbourne’s SkyBus operates 24/7 express services from Tullamarine Airport directly to Southern Cross Station in 25 minutes.',
    transportFromAirport: 'Airport Train in Sydney (20 min); SkyBus Express in Melbourne (25 min).',
    bestTimeToBook: 'October–November (spring) and March–April (autumn) offer glorious coastal temperatures and fewer crowds than summer school holidays.',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'flight-new-zealand',
    destinationId: 'new-zealand',
    destinationName: 'New Zealand (Auckland & Queenstown)',
    airportCode: 'AKL (Auckland) & ZQN (Queenstown)',
    primaryRoutes: 'Direct flights into Auckland from North America and Asia; direct trans-Tasman flights into Queenstown and Christchurch from Sydney, Melbourne, and Brisbane.',
    femaleTravelTip: 'Queenstown Airport (ZQN) is located right in Frankton, just a 10-minute lakefront drive or scenic water taxi to central Queenstown.',
    arrivalAtNightTip: 'Super Shuttle vans and airport buses operate right outside the terminal doors for reliable door-to-door lodge transfers.',
    transportFromAirport: 'SkyDrive Express Bus in Auckland; Orbus public transit or rental car depots on-site in Queenstown.',
    bestTimeToBook: 'Late summer to early autumn (February to April) provides stable weather, warm lake temperatures, and stunning golden foliage in Central Otago.',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  }
];
