import { DESTINATIONS } from '../data/destinations';
import { STORIES } from '../data/stories';
import { GUIDES } from '../data/guides';
import { HIDEOUTS } from '../data/hideouts';
import { STAYS } from '../data/stays';
import { DEALS } from '../data/deals';

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export interface SEORouteMeta {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  ogType: 'website' | 'article' | 'place';
  schemaJson: object;
  ssrBodyHtml: string;
}

export function getSEOMetadataForPath(pathname: string): SEORouteMeta {
  const cleanPath = pathname.split('?')[0].replace(/\/$/, '') || '/';
  const siteUrl = 'https://travelhideouts.com';
  const defaultImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80';

  // 1. Destination Detail: /destinations/:id
  const destMatch = cleanPath.match(/^\/destinations\/([a-zA-Z0-9_-]+)$/);
  if (destMatch) {
    const slug = destMatch[1];
    const destination = DESTINATIONS.find(d => d.id === slug || d.slug === slug);
    if (destination) {
      const canonical = `${siteUrl}/destinations/${destination.id}`;
      const title = `${destination.name} Travel Hideouts & Curated Guide — Travel Hideouts`;
      const description = `${destination.blurb || destination.emotionalStatement || destination.openingEditorial} Discover quiet sanctuaries, authentic local spots, and curated stays in ${destination.name}.`;
      const image = destination.heroImage || destination.image || defaultImage;

      const destHideouts = HIDEOUTS.filter(h => h.destinationId === destination.id);
      const destStories = STORIES.filter(s => destination.relatedStoryIds?.includes(s.id));
      const destGuides = GUIDES.filter(g => g.destinationId === destination.id || destination.relatedGuideIds?.includes(g.id));

      const schema = {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: destination.name,
        description: destination.blurb,
        image: image,
        url: canonical,
        touristType: ['Solo Travelers', 'Mindful Travelers', 'Cultural Explorers'],
        containsPlace: destHideouts.map(h => ({
          '@type': 'Place',
          name: h.title,
          description: h.summary || h.description,
          address: {
            '@type': 'PostalAddress',
            addressLocality: h.location,
            addressCountry: destination.name
          }
        }))
      };

      const ssrBodyHtml = `
        <article class="ssr-page">
          <header>
            <span class="ssr-eyebrow">Curated Destination · ${escapeHtml(destination.country || destination.name)}</span>
            <h1>${escapeHtml(destination.name)}</h1>
            <p class="ssr-tagline">${escapeHtml(destination.emotionalStatement || destination.blurb)}</p>
          </header>
          <section class="ssr-content">
            <h2>About ${escapeHtml(destination.name)}</h2>
            <p>${escapeHtml(destination.openingEditorial || destination.blurb)}</p>
            ${destination.whereIWouldStay ? `<h3>Where I Would Stay</h3><p>${escapeHtml(destination.whereIWouldStay)}</p>` : ''}
            ${destination.whatTravelersSaySummary ? `<h3>Traveler Community Sentiment</h3><p>${escapeHtml(destination.whatTravelersSaySummary)}</p>` : ''}
          </section>
          ${destHideouts.length > 0 ? `
            <section class="ssr-section">
              <h2>Curated Hideouts in ${escapeHtml(destination.name)}</h2>
              <ul>
                ${destHideouts.map(h => `
                  <li>
                    <h3><a href="/hideouts/${h.id}">${escapeHtml(h.title)}</a></h3>
                    <p><strong>${escapeHtml(h.category)}</strong> · ${escapeHtml(h.location)}</p>
                    <p>${escapeHtml(h.summary || h.description || '')}</p>
                  </li>
                `).join('')}
              </ul>
            </section>
          ` : ''}
          ${destGuides.length > 0 ? `
            <section class="ssr-section">
              <h2>Field Guides for ${escapeHtml(destination.name)}</h2>
              <ul>
                ${destGuides.map(g => `
                  <li>
                    <h3><a href="/guides/${g.id}">${escapeHtml(g.title)}</a></h3>
                    <p>${escapeHtml(g.subtitle || g.excerpt || '')}</p>
                  </li>
                `).join('')}
              </ul>
            </section>
          ` : ''}
        </article>
      `;

      return {
        title,
        description,
        canonicalUrl: canonical,
        ogImage: image,
        ogType: 'place',
        schemaJson: schema,
        ssrBodyHtml
      };
    }
  }

  // 2. Guide Detail: /guides/:id
  const guideMatch = cleanPath.match(/^\/guides\/([a-zA-Z0-9_-]+)$/);
  if (guideMatch) {
    const slug = guideMatch[1];
    const guide = GUIDES.find(g => g.id === slug || g.slug === slug);
    if (guide) {
      const canonical = `${siteUrl}/guides/${guide.id}`;
      const title = `${guide.title} — Travel Hideouts Field Guide`;
      const description = `${guide.subtitle || guide.excerpt || guide.intro || ''} Honest travel advice and practical tips curated by Miley Rocha.`;
      const image = guide.heroImage || guide.image || defaultImage;

      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: guide.title,
        description: guide.subtitle || guide.excerpt,
        image: image,
        url: canonical,
        author: {
          '@type': 'Person',
          name: 'Miley Rocha',
          jobTitle: 'Solo Travel Writer & Curator',
          url: 'https://travelhideouts.com/about'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Travel Hideouts',
          url: 'https://travelhideouts.com'
        }
      };

      const ssrBodyHtml = `
        <article class="ssr-page">
          <header>
            <span class="ssr-eyebrow">Field Guide · ${escapeHtml(guide.readTime || '5 min')} read</span>
            <h1>${escapeHtml(guide.title)}</h1>
            <p class="ssr-tagline">${escapeHtml(guide.subtitle || guide.excerpt || '')}</p>
          </header>
          ${guide.intro ? `<p class="ssr-intro">${escapeHtml(guide.intro)}</p>` : ''}
          ${guide.sections ? guide.sections.map(sec => `
            <section class="ssr-section">
              ${sec.title || sec.heading ? `<h2>${escapeHtml(sec.title || sec.heading || '')}</h2>` : ''}
              ${Array.isArray(sec.content || sec.body)
                ? ((sec.content || sec.body) as string[]).map((p: string) => `<p>${escapeHtml(p)}</p>`).join('')
                : `<p>${escapeHtml(typeof sec.content === 'string' ? sec.content : (typeof sec.body === 'string' ? sec.body : ''))}</p>`}
              ${sec.tips && sec.tips.length > 0 ? `
                <div class="ssr-tips">
                  <h4>Field Tips</h4>
                  <ul>${sec.tips.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul>
                </div>
              ` : ''}
            </section>
          `).join('') : ''}
          <footer class="ssr-footer">
            <p>Author: Miley Rocha · Published on Travel Hideouts</p>
          </footer>
        </article>
      `;

      return {
        title,
        description,
        canonicalUrl: canonical,
        ogImage: image,
        ogType: 'article',
        schemaJson: schema,
        ssrBodyHtml
      };
    }
  }

  // 3. Story Detail: /stories/:id
  const storyMatch = cleanPath.match(/^\/stories\/([a-zA-Z0-9_-]+)$/);
  if (storyMatch) {
    const slug = storyMatch[1];
    const story = STORIES.find(s => s.id === slug || s.slug === slug);
    if (story) {
      const canonical = `${siteUrl}/stories/${story.id}`;
      const title = `${story.title} — Travel Hideouts`;
      const description = `${story.excerpt || story.curiosityHook || story.subtitle} Travel essay by Miley Rocha.`;
      const image = story.heroImage || story.image || defaultImage;

      const schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: story.title,
        description: story.excerpt || story.curiosityHook,
        image: image,
        url: canonical,
        author: {
          '@type': 'Person',
          name: 'Miley Rocha',
          url: 'https://travelhideouts.com/about'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Travel Hideouts',
          url: 'https://travelhideouts.com'
        }
      };

      const ssrBodyHtml = `
        <article class="ssr-page">
          <header>
            <span class="ssr-eyebrow">Curiosity Story · ${escapeHtml(story.readTime || '6 min')} read</span>
            <h1>${escapeHtml(story.title)}</h1>
            <p class="ssr-tagline">${escapeHtml(story.subtitle || story.excerpt || '')}</p>
          </header>
          ${story.curiosityHook ? `<div class="ssr-hook"><p>${escapeHtml(story.curiosityHook)}</p></div>` : ''}
          ${story.sections ? story.sections.map(sec => `
            <section class="ssr-section">
              ${sec.heading || sec.title ? `<h2>${escapeHtml(sec.heading || sec.title || '')}</h2>` : ''}
              ${Array.isArray(sec.body || sec.content)
                ? ((sec.body || sec.content) as string[]).map((p: string) => `<p>${escapeHtml(p)}</p>`).join('')
                : `<p>${escapeHtml(typeof sec.body === 'string' ? sec.body : (typeof sec.content === 'string' ? sec.content : ''))}</p>`}
              ${sec.pullQuote ? `<blockquote>"${escapeHtml(sec.pullQuote)}"</blockquote>` : ''}
            </section>
          `).join('') : ''}
          ${story.whyItMatters ? `<section class="ssr-why"><h3>Why It Matters</h3><p>${escapeHtml(story.whyItMatters)}</p></section>` : ''}
          <footer class="ssr-footer">
            <p>Author: Miley Rocha · Published on Travel Hideouts</p>
          </footer>
        </article>
      `;

      return {
        title,
        description,
        canonicalUrl: canonical,
        ogImage: image,
        ogType: 'article',
        schemaJson: schema,
        ssrBodyHtml
      };
    }
  }

  // 4. Hideout Detail: /hideouts/:id
  const hideoutMatch = cleanPath.match(/^\/hideouts\/([a-zA-Z0-9_-]+)$/);
  if (hideoutMatch) {
    const slug = hideoutMatch[1];
    const hideout = HIDEOUTS.find(h => h.id === slug || h.slug === slug);
    if (hideout) {
      const canonical = `${siteUrl}/hideouts/${hideout.id}`;
      const title = `${hideout.title} (${hideout.location}) — Travel Hideouts`;
      const description = `${hideout.summary || hideout.description} Curated quiet place in ${hideout.location}. Category: ${hideout.category}.`;
      const image = hideout.image || defaultImage;

      const schema = {
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: hideout.title,
        description: hideout.summary || hideout.description,
        image: image,
        url: canonical,
        address: {
          '@type': 'PostalAddress',
          addressLocality: hideout.location,
          addressCountry: hideout.destinationName || ''
        },
        priceRange: hideout.priceTier || '$$'
      };

      const ssrBodyHtml = `
        <article class="ssr-page">
          <header>
            <span class="ssr-eyebrow">${escapeHtml(hideout.editorialLabel || 'Hidden Sanctuary')} · ${escapeHtml(hideout.category)}</span>
            <h1>${escapeHtml(hideout.title)}</h1>
            <p class="ssr-location">${escapeHtml(hideout.location)} · Price Tier: ${escapeHtml(hideout.priceTier || '$$')}</p>
          </header>
          <section class="ssr-content">
            <h2>The Experience</h2>
            <p>${escapeHtml(hideout.summary || hideout.description || '')}</p>
            ${hideout.authorTake ? `<h3>Personal Take</h3><p>${escapeHtml(hideout.authorTake)}</p>` : ''}
            ${hideout.whySpecial ? `<h3>Why It's Special</h3><p>${escapeHtml(hideout.whySpecial)}</p>` : ''}
            ${hideout.goodToKnow ? `<h3>Good to Know</h3><p>${escapeHtml(hideout.goodToKnow)}</p>` : ''}
          </section>
        </article>
      `;

      return {
        title,
        description,
        canonicalUrl: canonical,
        ogImage: image,
        ogType: 'place',
        schemaJson: schema,
        ssrBodyHtml
      };
    }
  }

  // 5. Stay Detail: /stays/:id
  const stayMatch = cleanPath.match(/^\/stays\/([a-zA-Z0-9_-]+)$/);
  if (stayMatch) {
    const slug = stayMatch[1];
    const stay = STAYS.find(s => s.id === slug || s.slug === slug);
    if (stay) {
      const canonical = `${siteUrl}/stays/${stay.id}`;
      const title = `${stay.name} (${stay.neighborhood}, ${stay.destinationName}) — Travel Hideouts`;
      const description = `${stay.whyCaughtAttention || stay.description || stay.whyWeChoseIt} Honest review and traveler assessment for ${stay.name}.`;
      const image = stay.image || defaultImage;

      const schema = {
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: stay.name,
        description: stay.whyCaughtAttention,
        image: image,
        url: canonical,
        address: {
          '@type': 'PostalAddress',
          addressLocality: stay.neighborhood,
          addressCountry: stay.destinationName
        },
        priceRange: stay.priceIndicator || '$$'
      };

      const ssrBodyHtml = `
        <article class="ssr-page">
          <header>
            <span class="ssr-eyebrow">${escapeHtml(stay.editorialLabel || 'Stay Worth Knowing')} · ${escapeHtml(stay.category || 'Boutique')}</span>
            <h1>${escapeHtml(stay.name)}</h1>
            <p class="ssr-location">${escapeHtml(stay.neighborhood)}, ${escapeHtml(stay.destinationName)}</p>
          </header>
          <section class="ssr-content">
            <h2>Why It Caught Our Attention</h2>
            <p>${escapeHtml(stay.whyCaughtAttention || stay.description || '')}</p>
            ${stay.whatTravelersSay ? `<h3>What Travelers Love</h3><p>${escapeHtml(stay.whatTravelersSay)}</p>` : ''}
            ${stay.thingsWorthKnowing ? `<h3>Things Worth Knowing (Honest Caveats)</h3><p>${Array.isArray(stay.thingsWorthKnowing) ? stay.thingsWorthKnowing.join(' · ') : stay.thingsWorthKnowing}</p>` : ''}
          </section>
        </article>
      `;

      return {
        title,
        description,
        canonicalUrl: canonical,
        ogImage: image,
        ogType: 'place',
        schemaJson: schema,
        ssrBodyHtml
      };
    }
  }

  // 6. Hub Pages
  if (cleanPath === '/destinations') {
    return {
      title: 'Curated Destinations — Quiet Travel Across 9 Countries | Travel Hideouts',
      description: 'Explore quiet, thoughtful travel guides across Iceland, Liechtenstein, Switzerland, Norway, Sweden, China, Australia, New Zealand, and Japan.',
      canonicalUrl: `${siteUrl}/destinations`,
      ogImage: defaultImage,
      ogType: 'website',
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Curated Destinations',
        url: `${siteUrl}/destinations`,
        hasPart: DESTINATIONS.map(d => ({
          '@type': 'TouristDestination',
          name: d.name,
          url: `${siteUrl}/destinations/${d.id}`
        }))
      },
      ssrBodyHtml: `
        <main class="ssr-page">
          <h1>Curated Destinations</h1>
          <p>Nine countries curated through a lens of stillness, curiosity, and atmospheric retreats.</p>
          <ul>
            ${DESTINATIONS.map(d => `
              <li>
                <h2><a href="/destinations/${d.id}">${escapeHtml(d.name)}</a></h2>
                <p>${escapeHtml(d.emotionalStatement || d.blurb)}</p>
              </li>
            `).join('')}
          </ul>
        </main>
      `
    };
  }

  if (cleanPath === '/guides') {
    return {
      title: 'Field Guides & Practical Advice for Mindful Travelers — Travel Hideouts',
      description: 'Honest, in-depth travel guides covering Japanese train etiquette, Swiss Alpine passes, Nordic fika culture, and Tasmanian coastal routes.',
      canonicalUrl: `${siteUrl}/guides`,
      ogImage: defaultImage,
      ogType: 'website',
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Field Guides',
        url: `${siteUrl}/guides`
      },
      ssrBodyHtml: `
        <main class="ssr-page">
          <h1>Field Guides</h1>
          <p>Practical, culturally nuanced guides for navigating countries with curiosity and respect.</p>
          <ul>
            ${GUIDES.map(g => `
              <li>
                <h2><a href="/guides/${g.id}">${escapeHtml(g.title)}</a></h2>
                <p>${escapeHtml(g.subtitle || g.excerpt || '')}</p>
              </li>
            `).join('')}
          </ul>
        </main>
      `
    };
  }

  if (cleanPath === '/stories') {
    return {
      title: 'Curiosity Stories & Travel Essays — Travel Hideouts',
      description: 'Slow travel narratives and cultural deep dives into forgotten temples, mountain rituals, and secluded coastal outposts.',
      canonicalUrl: `${siteUrl}/stories`,
      ogImage: defaultImage,
      ogType: 'website',
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Curiosity Stories',
        url: `${siteUrl}/stories`
      },
      ssrBodyHtml: `
        <main class="ssr-page">
          <h1>Curiosity Stories</h1>
          <p>Essays on places that linger in memory long after you return home.</p>
          <ul>
            ${STORIES.map(s => `
              <li>
                <h2><a href="/stories/${s.id}">${escapeHtml(s.title)}</a></h2>
                <p>${escapeHtml(s.excerpt || s.curiosityHook || '')}</p>
              </li>
            `).join('')}
          </ul>
        </main>
      `
    };
  }

  if (cleanPath === '/hideouts') {
    return {
      title: 'Quiet Hideouts & Atmospheric Retreats — Travel Hideouts',
      description: 'Hand-picked architectural cabins, historic ryokans, fjord lodges, and secluded sanctuaries for deep rest.',
      canonicalUrl: `${siteUrl}/hideouts`,
      ogImage: defaultImage,
      ogType: 'website',
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Quiet Hideouts',
        url: `${siteUrl}/hideouts`
      },
      ssrBodyHtml: `
        <main class="ssr-page">
          <h1>Quiet Hideouts</h1>
          <p>Places to stay that embody slow living and architectural harmony.</p>
          <ul>
            ${HIDEOUTS.map(h => `
              <li>
                <h2><a href="/hideouts/${h.id}">${escapeHtml(h.title)}</a></h2>
                <p>${escapeHtml(h.location)} · ${escapeHtml(h.category)}</p>
                <p>${escapeHtml(h.summary || h.description || '')}</p>
              </li>
            `).join('')}
          </ul>
        </main>
      `
    };
  }

  if (cleanPath === '/stays') {
    return {
      title: 'Stays Worth Knowing — Honest Accommodation Reviews | Travel Hideouts',
      description: 'Carefully vetted boutique hotels, design cabins, and serene guesthouses evaluated with real traveler sentiment and honest caveats.',
      canonicalUrl: `${siteUrl}/stays`,
      ogImage: defaultImage,
      ogType: 'website',
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Stays Worth Knowing',
        url: `${siteUrl}/stays`
      },
      ssrBodyHtml: `
        <main class="ssr-page">
          <h1>Stays Worth Knowing</h1>
          <p>Accommodations selected for character, atmosphere, and honest value.</p>
          <ul>
            ${STAYS.map(s => `
              <li>
                <h2><a href="/stays/${s.id}">${escapeHtml(s.name)}</a></h2>
                <p>${escapeHtml(s.neighborhood)}, ${escapeHtml(s.destinationName)}</p>
                <p>${escapeHtml(stayDesc(s))}</p>
              </li>
            `).join('')}
          </ul>
        </main>
      `
    };
  }

  if (cleanPath === '/deals') {
    return {
      title: 'Curated Flight & Hotel Deals — Travel Hideouts',
      description: 'Handpicked flight routes and partner accommodation rates for mindful travel across our 9 featured countries.',
      canonicalUrl: `${siteUrl}/deals`,
      ogImage: defaultImage,
      ogType: 'website',
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Curated Travel Deals',
        url: `${siteUrl}/deals`
      },
      ssrBodyHtml: `
        <main class="ssr-page">
          <h1>Curated Travel Deals</h1>
          <p>Direct routes and special rates across our nine destinations.</p>
        </main>
      `
    };
  }

  if (cleanPath === '/about') {
    return {
      title: 'About Miley Rocha & Travel Hideouts — Editorial Philosophy',
      description: 'Learn about Miley Rocha, solo female traveler and curator behind Travel Hideouts, and our independent editorial guarantee.',
      canonicalUrl: `${siteUrl}/about`,
      ogImage: defaultImage,
      ogType: 'article',
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Travel Hideouts & Miley Rocha',
        url: `${siteUrl}/about`
      },
      ssrBodyHtml: `
        <main class="ssr-page">
          <h1>About Travel Hideouts & Miley Rocha</h1>
          <p>An independent travel publication dedicated to discovering places worth going.</p>
        </main>
      `
    };
  }

  if (cleanPath === '/contact') {
    return {
      title: 'Contact Editorial Team — Travel Hideouts',
      description: 'Send feedback, hideout recommendations, or guide corrections directly to the editor of Travel Hideouts.',
      canonicalUrl: `${siteUrl}/contact`,
      ogImage: defaultImage,
      ogType: 'website',
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Travel Hideouts',
        url: `${siteUrl}/contact`
      },
      ssrBodyHtml: `
        <main class="ssr-page">
          <h1>Contact Travel Hideouts</h1>
          <p>Direct email: etuzex@gmail.com</p>
        </main>
      `
    };
  }

  if (cleanPath === '/privacy') {
    return {
      title: 'Privacy Policy — Travel Hideouts',
      description: 'Privacy policy for Travel Hideouts. How we protect your data and respect reader privacy.',
      canonicalUrl: `${siteUrl}/privacy`,
      ogImage: defaultImage,
      ogType: 'website',
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Privacy Policy',
        url: `${siteUrl}/privacy`
      },
      ssrBodyHtml: `
        <main class="ssr-page">
          <h1>Privacy Policy</h1>
          <p>We respect reader privacy and do not collect personal data or intrusive tracking cookies.</p>
        </main>
      `
    };
  }

  if (cleanPath === '/terms') {
    return {
      title: 'Terms of Service — Travel Hideouts',
      description: 'Terms and conditions for using the Travel Hideouts discovery platform.',
      canonicalUrl: `${siteUrl}/terms`,
      ogImage: defaultImage,
      ogType: 'website',
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Terms of Service',
        url: `${siteUrl}/terms`
      },
      ssrBodyHtml: `
        <main class="ssr-page">
          <h1>Terms of Service</h1>
          <p>Terms of service for Travel Hideouts.</p>
        </main>
      `
    };
  }

  if (cleanPath === '/affiliate-disclosure') {
    return {
      title: 'Affiliate Disclosure & Transparency — Travel Hideouts',
      description: 'Our complete disclosure regarding affiliate partnerships, commissions, and editorial independence.',
      canonicalUrl: `${siteUrl}/affiliate-disclosure`,
      ogImage: defaultImage,
      ogType: 'website',
      schemaJson: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Affiliate Disclosure',
        url: `${siteUrl}/affiliate-disclosure`
      },
      ssrBodyHtml: `
        <main class="ssr-page">
          <h1>Affiliate Disclosure & Transparency</h1>
          <p>How we earn income through partner referrals while maintaining uncompromised editorial honesty.</p>
        </main>
      `
    };
  }

  // 7. Default Homepage
  return {
    title: 'Travel Hideouts — Discover places worth going.',
    description: 'Curated hideouts, atmospheric stays, honest city guides, and verified traveler community voices across Iceland, Liechtenstein, Switzerland, Norway, Sweden, China, Australia, New Zealand, and Japan. Selected by solo female traveler Miley Rocha.',
    canonicalUrl: siteUrl,
    ogImage: defaultImage,
    ogType: 'website',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Travel Hideouts',
      url: siteUrl,
      description: 'Discover places worth going across 9 curated countries.'
    },
    ssrBodyHtml: `
      <main class="ssr-page">
        <h1>Travel Hideouts — Discover places worth going.</h1>
        <p>An independent female-curated travel publication discovering curiosity-driven stories, hidden places, and honest travel guides across 9 destinations.</p>
        <h2>Featured Destinations</h2>
        <ul>
          ${DESTINATIONS.map(d => `<li><a href="/destinations/${d.id}">${escapeHtml(d.name)}</a></li>`).join('')}
        </ul>
      </main>
    `
  };
}

function stayDesc(s: { whyCaughtAttention?: string; description?: string }): string {
  return s.whyCaughtAttention || s.description || '';
}

export function injectSEOIntoHtml(htmlTemplate: string, pathname: string): string {
  const seo = getSEOMetadataForPath(pathname);

  let updated = htmlTemplate;

  // Replace <title>...</title>
  if (/<title>[^<]*<\/title>/i.test(updated)) {
    updated = updated.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  } else {
    updated = updated.replace(/<\/head>/i, `  <title>${escapeHtml(seo.title)}</title>\n</head>`);
  }

  // Replace meta description
  if (/<meta\s+name=["']description["'][^>]*>/i.test(updated)) {
    updated = updated.replace(/<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeHtml(seo.description)}" />`);
  } else {
    updated = updated.replace(/<\/head>/i, `  <meta name="description" content="${escapeHtml(seo.description)}" />\n</head>`);
  }

  // Replace canonical link
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(updated)) {
    updated = updated.replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${escapeHtml(seo.canonicalUrl)}" />`);
  } else {
    updated = updated.replace(/<\/head>/i, `  <link rel="canonical" href="${escapeHtml(seo.canonicalUrl)}" />\n</head>`);
  }

  // Replace or inject Open Graph tags
  const ogTags = `
  <meta property="og:title" content="${escapeHtml(seo.title)}" />
  <meta property="og:description" content="${escapeHtml(seo.description)}" />
  <meta property="og:url" content="${escapeHtml(seo.canonicalUrl)}" />
  <meta property="og:type" content="${seo.ogType}" />
  <meta property="og:image" content="${escapeHtml(seo.ogImage)}" />
  <meta property="og:site_name" content="Travel Hideouts" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
  <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
  <meta name="twitter:image" content="${escapeHtml(seo.ogImage)}" />
  <script type="application/ld+json">
${JSON.stringify(seo.schemaJson, null, 2)}
  </script>
`;

  // Remove existing dynamic OG tags if present to prevent duplication
  updated = updated.replace(/<meta\s+property=["']og:title["'][^>]*>/gi, '');
  updated = updated.replace(/<meta\s+property=["']og:description["'][^>]*>/gi, '');
  updated = updated.replace(/<meta\s+property=["']og:url["'][^>]*>/gi, '');
  updated = updated.replace(/<meta\s+property=["']og:type["'][^>]*>/gi, '');
  updated = updated.replace(/<meta\s+property=["']og:image["'][^>]*>/gi, '');
  updated = updated.replace(/<meta\s+name=["']twitter:card["'][^>]*>/gi, '');
  updated = updated.replace(/<meta\s+name=["']twitter:title["'][^>]*>/gi, '');
  updated = updated.replace(/<meta\s+name=["']twitter:description["'][^>]*>/gi, '');
  updated = updated.replace(/<meta\s+name=["']twitter:image["'][^>]*>/gi, '');

  updated = updated.replace(/<\/head>/i, `${ogTags}</head>`);

  // Inject semantic SSR HTML inside <div id="root"> or directly into the page
  const ssrWrapper = `<div id="ssr-content" style="display:none;" aria-hidden="true">${seo.ssrBodyHtml}</div>`;
  if (/<div id="root"><\/div>/i.test(updated)) {
    updated = updated.replace(/<div id="root"><\/div>/i, `<div id="root"></div>\n${ssrWrapper}`);
  }

  return updated;
}
