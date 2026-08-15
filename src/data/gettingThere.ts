import { FlightRouteInfo } from '../types';

export const FLIGHT_ROUTES: FlightRouteInfo[] = [
  {
    id: 'flight-lisbon',
    destinationId: 'lisbon',
    destinationName: 'Lisbon, Portugal',
    airportCode: 'LIS (Humberto Delgado)',
    primaryRoutes: 'Direct 2.5–3h connections from London, Paris, Amsterdam, Madrid, Frankfurt; direct 7–8h transatlantic from NYC, Boston, Toronto.',
    femaleTravelTip: 'The airport is right inside the city perimeter. If arriving late, the Red Metro line runs until 1:00 AM with bright platforms, or Uber/Bolt rideshares cost under €12 to Príncipe Real.',
    arrivalAtNightTip: 'If your flight lands after 11 PM, pre-booking a rideshare or using the official taxi rank right outside Terminal 1 avoids any disorientation.',
    transportFromAirport: 'Metro Red Line (25 min, €1.80) or official airport taxis / Uber directly to your hotel door.',
    bestTimeToBook: 'Book 6–8 weeks in advance for spring/autumn shoulder season to get optimal daytime arrival slots.',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'flight-copenhagen',
    destinationId: 'copenhagen',
    destinationName: 'Copenhagen, Denmark',
    airportCode: 'CPH (Kastrup)',
    primaryRoutes: 'Direct 1.5–2h flights from across Europe; direct daily non-stops from New York, Chicago, San Francisco.',
    femaleTravelTip: 'Considered one of the most frictionless, safe airport-to-city transfers in the world. The automated Metro station is located directly inside Terminal 3.',
    arrivalAtNightTip: 'The Metro runs 24/7 every 3-5 minutes, meaning late night arrivals require zero waiting in outdoor cold.',
    transportFromAirport: 'Metro M2 (13 min to central Kongens Nytorv, ~€4.50).',
    bestTimeToBook: 'Mid-week departures on Scandinavian carriers (SAS, Norwegian) offer the most relaxed cabin loads.',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'flight-budapest',
    destinationId: 'budapest',
    destinationName: 'Budapest, Hungary',
    airportCode: 'BUD (Ferenc Liszt)',
    primaryRoutes: 'Direct 2h flights from London, Vienna, Zurich, Berlin, Rome, Milan.',
    femaleTravelTip: 'Take the official 100E Airport Express bus right at the terminal exit. Tickets are €5.50 and can be tapped with contactless credit cards.',
    arrivalAtNightTip: 'Főtaxi is the only officially licensed airport taxi operator with a dedicated staffed kiosk outside Terminal 2; avoid unlicensed drivers inside.',
    transportFromAirport: '100E Express Bus (35 min to Deák Ferenc tér) or official Főtaxi (~€28-€32).',
    bestTimeToBook: 'Autumn and early spring flights are frequent and exceptionally affordable.',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'flight-mallorca',
    destinationId: 'mallorca',
    destinationName: 'Mallorca, Spain',
    airportCode: 'PMI (Palma de Mallorca)',
    primaryRoutes: 'Direct flights from nearly every major European airport; 35-minute shuttle flights from Barcelona or Madrid.',
    femaleTravelTip: 'If basing in the Tramuntana mountains (Sóller/Deià), pick up your rental car inside the main terminal parking structure for a smooth 35-minute highway drive.',
    arrivalAtNightTip: 'Well-lit motorways connect PMI directly to Palma center in 12 minutes.',
    transportFromAirport: 'Airport Bus A1 to central Palma (€5) or rental car for mountain hideouts.',
    bestTimeToBook: 'May and September/October provide sublime weather with half the summer flight congestion.',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  },
  {
    id: 'flight-paris',
    destinationId: 'paris',
    destinationName: 'Paris, France',
    airportCode: 'CDG (Charles de Gaulle) & ORY (Orly)',
    primaryRoutes: 'Direct global connections from all continents into CDG; Orly handles many domestic and European short-hauls.',
    femaleTravelTip: 'Orly (ORY) is closer and now connected to Metro Line 14 directly into central Paris in 25 minutes.',
    arrivalAtNightTip: 'At CDG, always follow the yellow "Taxis" signs on the floor to the official queue. Fixed flat rates to Paris right bank are €56, left bank €65.',
    transportFromAirport: 'Metro 14 from Orly (25 min, €10.30) or RER B / Official Taxi from CDG.',
    bestTimeToBook: 'Tuesdays and Wednesdays typically have lower passenger volume at passport control.',
    travelpayoutsUrl: 'AFFILIATE_LINK_PLACEHOLDER'
  }
];
