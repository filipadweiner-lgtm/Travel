import React, { useState } from 'react';
import { FLIGHT_ROUTES } from '../data/gettingThere';
import { DESTINATIONS } from '../data/destinations';
import { SEOHead } from '../components/SEOHead';
import { AuthorNotice } from '../components/AuthorNotice';
import { AffiliateCTA } from '../components/AffiliateCTA';
import { 
  Plane, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight, 
  Navigation,
  Train,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const GettingTherePage: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<string>('All');

  const filteredRoutes = selectedDestination === 'All'
    ? FLIGHT_ROUTES
    : FLIGHT_ROUTES.filter(r => r.destinationName.toLowerCase().includes(selectedDestination.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      <SEOHead
        title="Getting There: Routes, Flights & Arrival Intelligence — Travel Hideouts"
        description="Thoughtful route planning, flight search integration, airport transfer times, and evening arrival advice."
      />

      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-widest">
          <Plane className="w-4 h-4 text-[#7A5B46]" />
          <span>Transit & Route Planning</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#242220] leading-tight">
          Getting There Without the Friction
        </h1>
        <p className="text-[#5F574E] text-base md:text-lg leading-relaxed font-sans">
          How you arrive sets the tone for your entire trip. We analyze airport transit durations, public metro links, late-night arrival atmospheres, and train alternatives so you never land unprepared.
        </p>
      </div>

      <AuthorNotice />

      {/* Flight Search Integration Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-[#FAF6F0] border border-[#E4D8C6] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-wider">
            <Plane className="w-4 h-4" />
            <span>Flight Route Search & Fare Comparison</span>
          </div>
          <h3 className="font-serif font-bold text-2xl text-[#242220]">
            Looking for flight routes to your hideout?
          </h3>
          <p className="text-xs md:text-sm text-[#61574C] max-w-xl">
            Compare direct connections and transparent airline fares via our travel partner. We always recommend booking flights that land before sunset for effortless hotel check-ins.
          </p>
        </div>

        <AffiliateCTA
          label="Search Flight Routes"
          itemName="European Hideout Routes"
          destination="Europe"
          variant="primary"
          size="lg"
          className="shrink-0"
        />
      </div>

      {/* Destination Filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold text-[#786C5E] uppercase tracking-wider mr-2">
          Filter by City:
        </span>
        <button
          onClick={() => setSelectedDestination('All')}
          className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
            selectedDestination === 'All'
              ? 'bg-[#2E2A26] text-white border-[#2E2A26]'
              : 'bg-white text-[#524B43] border-[#E0D7C7] hover:bg-[#FAF6F0]'
          }`}
        >
          All Destinations
        </button>
        {DESTINATIONS.map(d => (
          <button
            key={d.id}
            onClick={() => setSelectedDestination(d.name)}
            className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
              selectedDestination === d.name
                ? 'bg-[#2E2A26] text-white border-[#2E2A26]'
                : 'bg-white text-[#524B43] border-[#E0D7C7] hover:bg-[#FAF6F0]'
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      {/* Route Cards */}
      <div className="space-y-8">
        {filteredRoutes.map((route) => (
          <div
            key={route.id}
            className="p-6 md:p-8 rounded-3xl bg-white border border-[#E9E1D2] shadow-sm space-y-6"
          >
            {/* Title & Hubs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-[#F2ECE1] gap-4">
              <div>
                <span className="text-xs font-semibold text-[#8C6D58] uppercase tracking-widest block mb-1">
                  Destination Airport Hub
                </span>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#242220]">
                  {route.destinationName}
                </h3>
                <span className="text-xs text-[#82776A]">{route.airportCode}</span>
              </div>

              <div className="flex items-center gap-3">
                <AffiliateCTA
                  label={`Check flights to ${route.destinationName}`}
                  itemName={`Flights to ${route.destinationName}`}
                  destination={route.destinationName}
                  explicitUrl={route.travelpayoutsUrl}
                  size="sm"
                />
              </div>
            </div>

            {/* Direct Hubs & Transit Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EBE2D4] space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#736657] block">
                  Primary Connecting Routes
                </span>
                <p className="text-xs text-[#4F473E] leading-relaxed">
                  {route.primaryRoutes}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EBE2D4] space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#736657] block">
                  Transit From Airport to Center
                </span>
                <p className="text-xs text-[#4F473E] leading-relaxed">
                  {route.transportFromAirport}
                </p>
              </div>
            </div>

            {/* Night Arrival Advice & Editorial Tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#F6F8F6] border border-[#DCE8DF] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#32593E] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#32593E]" />
                  <span>Late Night & Solo Arrival Advice</span>
                </div>
                <p className="text-xs md:text-sm text-[#385241] leading-relaxed">
                  {route.arrivalAtNightTip}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#E8DEC9] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D58] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6D58]" />
                  <span>Female Travel & Booking Window Tip</span>
                </div>
                <p className="text-xs md:text-sm text-[#4F473E] leading-relaxed italic font-serif">
                  "{route.femaleTravelTip}"
                </p>
                <div className="pt-1 text-[11px] text-[#7A7165]">
                  <strong>Best timing:</strong> {route.bestTimeToBook}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
