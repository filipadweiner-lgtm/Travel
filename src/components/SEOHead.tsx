import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'hotel' | 'destination';
  schemaData?: Record<string, any>;
  articlePublishedTime?: string;
  articleAuthor?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'TravelHideouts — Discover places worth going.',
  description = 'Curated hideouts, atmospheric stays, honest city guides, and verified traveler community voices. Selected by one experienced female traveler.',
  image = 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1600&q=80',
  canonicalUrl,
  type = 'website',
  schemaData,
  articlePublishedTime,
  articleAuthor = 'Miley Rocha'
}) => {
  const currentCanonical = canonicalUrl || (typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname.replace(/\/+$/, '') || ''}/` : 'https://travelhideouts.com/');

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

    // Update Canonical URL
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', currentCanonical);

    // Helper for meta tags
    const updateOrCreateMeta = (attrName: string, attrVal: string, content: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Open Graph
    updateOrCreateMeta('property', 'og:title', title);
    updateOrCreateMeta('property', 'og:description', description);
    updateOrCreateMeta('property', 'og:image', image);
    updateOrCreateMeta('property', 'og:url', currentCanonical);
    updateOrCreateMeta('property', 'og:type', type === 'article' ? 'article' : 'website');

    // Twitter Card
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:title', title);
    updateOrCreateMeta('name', 'twitter:description', description);
    updateOrCreateMeta('name', 'twitter:image', image);

    // Inject JSON-LD Schema
    const scriptId = 'travelhideouts-json-ld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    let defaultSchema: Record<string, any>;

    if (type === 'article') {
      defaultSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: [image],
        datePublished: articlePublishedTime || '2026-03-01',
        dateModified: new Date().toISOString().split('T')[0],
        author: {
          '@type': 'Person',
          name: articleAuthor,
          jobTitle: 'Senior Travel Writer & Solo Traveler'
        },
        publisher: {
          '@type': 'Organization',
          name: 'TravelHideouts',
          logo: {
            '@type': 'ImageObject',
            url: 'https://travelhideouts.com/og-image.jpg'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentCanonical
        },
        ...schemaData
      };
    } else if (type === 'hotel') {
      defaultSchema = {
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: title.replace(' — TravelHideouts', ''),
        description: description,
        image: image,
        url: currentCanonical,
        ...schemaData
      };
    } else if (type === 'destination') {
      defaultSchema = {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: title.replace(' — TravelHideouts', ''),
        description: description,
        image: image,
        url: currentCanonical,
        ...schemaData
      };
    } else {
      defaultSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'TravelHideouts',
        url: 'https://travelhideouts.com/',
        description: description,
        publisher: {
          '@type': 'Organization',
          name: 'TravelHideouts',
          founder: {
            '@type': 'Person',
            name: 'Miley Rocha'
          }
        },
        ...schemaData
      };
    }

    scriptTag.text = JSON.stringify(defaultSchema);
  }, [title, description, image, currentCanonical, type, schemaData, articlePublishedTime, articleAuthor]);

  return null;
};
