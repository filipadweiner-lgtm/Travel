import React from 'react';
import { MapPin, Compass } from 'lucide-react';

export interface Stay22MapConfig {
  destinationId: string;
  destinationName: string;
  embedUrl: string;
  defaultTitle: string;
  defaultSubtitle: string;
}

export const STAY22_MAP_REGISTRY: Record<string, Stay22MapConfig> = {
  iceland: {
    destinationId: 'iceland',
    destinationName: 'Iceland',
    embedUrl: 'https://www.stay22.com/embed/6a896a5e02a013eb979166ce',
    defaultTitle: 'Explore Stays & Hidden Stops on the Iceland Map',
    defaultSubtitle: 'Interactive Stay22 map: browse accommodations, boutique cabins, and route stops along the South Coast, Snæfellsnes, and the Ring Road.',
  },
  switzerland: {
    destinationId: 'switzerland',
    destinationName: 'Switzerland',
    embedUrl: 'https://www.stay22.com/embed/6a896c5002a013eb97917243',
    defaultTitle: 'Explore Alpine Chalets, Stays & Trails on the Switzerland Map',
    defaultSubtitle: 'Interactive Stay22 map: explore boutique hotels, alpine hideouts, and scenic railway stops across the Swiss Alps.',
  },
  japan: {
    destinationId: 'japan',
    destinationName: 'Japan',
    embedUrl: 'https://www.stay22.com/embed/6a896c9d02a013eb9791744c',
    defaultTitle: 'Explore Ryokans, Stays & Historic Quarters on the Japan Map',
    defaultSubtitle: 'Interactive Stay22 map: discover traditional machiya stays, onsen retreats, and tranquil neighborhoods across Japan.',
  },
  liechtenstein: {
    destinationId: 'liechtenstein',
    destinationName: 'Liechtenstein',
    embedUrl: 'https://www.stay22.com/embed/6a896cf002a013eb979176b0',
    defaultTitle: 'Explore Alpine Lodges & Historic Valleys on the Liechtenstein Map',
    defaultSubtitle: 'Interactive Stay22 map: view mountain hotels, valley inns, and walking routes across Liechtenstein.',
  },
  norway: {
    destinationId: 'norway',
    destinationName: 'Norway',
    embedUrl: 'https://www.stay22.com/embed/6a896d3002a013eb97917872',
    defaultTitle: 'Explore Fjord Cabins, Stays & Coastal Routes on the Norway Map',
    defaultSubtitle: 'Interactive Stay22 map: browse waterfront hytter, fjord retreats, and scenic pathways across Norway.',
  },
  sweden: {
    destinationId: 'sweden',
    destinationName: 'Sweden',
    embedUrl: 'https://www.stay22.com/embed/6a896d7102a013eb97917a20',
    defaultTitle: 'Explore Archipelago Stays & Coastal Cabins on the Sweden Map',
    defaultSubtitle: 'Interactive Stay22 map: find red timber cottages, island hideouts, and woodland retreats across Sweden.',
  },
  australia: {
    destinationId: 'australia',
    destinationName: 'Australia',
    embedUrl: 'https://www.stay22.com/embed/6a896db102a013eb97917c12',
    defaultTitle: 'Explore Coastal Stays & Wilderness Lodges on the Australia Map',
    defaultSubtitle: 'Interactive Stay22 map: discover coastal hideouts, remote bays, and secluded wilderness retreats across Australia.',
  },
  'new-zealand': {
    destinationId: 'new-zealand',
    destinationName: 'New Zealand',
    embedUrl: 'https://www.stay22.com/embed/6a896e0402a013eb97917e76',
    defaultTitle: 'Explore Lake Lodges, Stays & Scenic Drives on the New Zealand Map',
    defaultSubtitle: 'Interactive Stay22 map: browse alpine cabins, lakefront lodges, and road trip stops across New Zealand.',
  },
};

export function findStay22Map(
  destinationId?: string,
  destinationName?: string,
  tags?: string[],
  textContext?: string
): Stay22MapConfig | null {
  const normId = (destinationId || '').toLowerCase().replace(/_/g, '-');
  if (STAY22_MAP_REGISTRY[normId]) {
    return STAY22_MAP_REGISTRY[normId];
  }
  if (normId === 'newzealand' && STAY22_MAP_REGISTRY['new-zealand']) {
    return STAY22_MAP_REGISTRY['new-zealand'];
  }

  // Check destination name
  if (destinationName) {
    const nameLower = destinationName.toLowerCase();
    for (const key of Object.keys(STAY22_MAP_REGISTRY)) {
      if (nameLower.includes(key) || (key === 'new-zealand' && nameLower.includes('zealand'))) {
        return STAY22_MAP_REGISTRY[key];
      }
    }
  }

  // Check tags
  if (tags && tags.length > 0) {
    for (const tag of tags) {
      const tagLower = tag.toLowerCase();
      for (const key of Object.keys(STAY22_MAP_REGISTRY)) {
        if (tagLower.includes(key) || (key === 'new-zealand' && tagLower.includes('zealand'))) {
          return STAY22_MAP_REGISTRY[key];
        }
      }
    }
  }

  // Check text context (title, slug, etc.)
  if (textContext) {
    const ctxLower = textContext.toLowerCase();
    for (const key of Object.keys(STAY22_MAP_REGISTRY)) {
      if (ctxLower.includes(key) || (key === 'new-zealand' && ctxLower.includes('zealand'))) {
        return STAY22_MAP_REGISTRY[key];
      }
    }
  }

  return null;
}

interface Stay22MapWidgetProps {
  destinationId?: string;
  destinationName?: string;
  embedUrl?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Stay22MapWidget: React.FC<Stay22MapWidgetProps> = ({
  destinationId,
  destinationName,
  embedUrl,
  title,
  subtitle,
  className = ''
}) => {
  const config = destinationId ? findStay22Map(destinationId, destinationName) : null;
  
  const finalEmbedUrl = embedUrl || config?.embedUrl || 'https://www.stay22.com/embed/6a896a5e02a013eb979166ce';
  const finalDestinationName = destinationName || config?.destinationName || 'Destination';
  const finalTitle = title || config?.defaultTitle || `Explore Stays & Landmarks on the ${finalDestinationName} Map`;
  const finalSubtitle = subtitle || config?.defaultSubtitle || `Interactive Stay22 map of accommodations, boutique hideouts, and routes across ${finalDestinationName}`;

  return (
    <section className={`rounded-3xl bg-white border border-[#E9E5D9] shadow-xs overflow-hidden ${className}`}>
      <div className="p-5 md:p-6 border-b border-[#E9E5D9] bg-[#FAF8F3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8FA18B] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#D48166]" />
            <span>Interactive {finalDestinationName} Map</span>
          </div>
          <h3 className="font-serif text-lg md:text-xl font-bold text-[#434338] italic">
            {finalTitle}
          </h3>
          <p className="text-xs text-[#5A5A40]">
            {finalSubtitle}
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-[#8D8D7E] font-medium shrink-0">
          <MapPin className="w-3.5 h-3.5 text-[#8FA18B]" />
          <span>Live Stays &amp; Routes</span>
        </div>
      </div>

      <div className="w-full relative min-h-[428px] bg-[#F1EDE4]">
        <iframe
          id="stay22-widget"
          width="100%"
          height="428"
          src={finalEmbedUrl}
          frameBorder="0"
          title={`Stay22 ${finalDestinationName} Map`}
          loading="lazy"
          className="w-full h-[428px] border-0 block"
        />
      </div>
    </section>
  );
};
