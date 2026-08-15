import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  schemaData?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'TravelHideouts — Discover places worth going.',
  description = 'Curated hideouts, atmospheric stays, honest city guides, and verified traveler community voices. Selected by one experienced female traveler.',
  image = 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1600&q=80',
  canonicalUrl = 'https://travelhideouts.com',
  type = 'website',
  schemaData
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OG tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', title);
    updateOrCreateMeta('og:description', description);
    updateOrCreateMeta('og:image', image);
    updateOrCreateMeta('og:url', canonicalUrl);
    updateOrCreateMeta('og:type', type);

    // Inject JSON-LD Schema
    const scriptId = 'travelhideouts-json-ld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebSite',
      name: 'TravelHideouts',
      url: 'https://travelhideouts.com',
      description: description,
      publisher: {
        '@type': 'Organization',
        name: 'TravelHideouts',
        logo: {
          '@type': 'ImageObject',
          url: 'https://travelhideouts.com/og-image.jpg'
        }
      },
      ...schemaData
    };

    scriptTag.text = JSON.stringify(defaultSchema);
  }, [title, description, image, canonicalUrl, type, schemaData]);

  return null;
};
