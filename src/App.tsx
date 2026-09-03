/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { SavedHideoutsDrawer } from './components/SavedHideoutsDrawer';
import { CookieConsentBanner } from './components/CookieConsentBanner';

// Pages
import { HomePage } from './pages/HomePage';
import { HideoutsPage } from './pages/HideoutsPage';
import { HideoutDetailPage } from './pages/HideoutDetailPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { StaysPage } from './pages/StaysPage';
import { StayDetailPage } from './pages/StayDetailPage';
import { StoriesPage } from './pages/StoriesPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { GuidesPage } from './pages/GuidesPage';
import { GuideDetailPage } from './pages/GuideDetailPage';
import { GettingTherePage } from './pages/GettingTherePage';
import { ThingsToDoPage } from './pages/ThingsToDoPage';
import { DealsPage } from './pages/DealsPage';
import { AboutPage } from './pages/AboutPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ContactPage } from './pages/ContactPage';

const KNOWN_DESTINATIONS = [
  'iceland',
  'liechtenstein',
  'switzerland',
  'norway',
  'sweden',
  'china',
  'australia',
  'new-zealand',
  'japan'
];

export function normalizeAppPath(raw: string): string {
  if (!raw) return '/';
  
  // Remove hash prefix if present (e.g. #/japan, #/destinations/japan)
  let path = raw.replace(/^#\/?/, '/');
  
  // If full URL was passed
  if (path.startsWith('http://') || path.startsWith('https://')) {
    try {
      const u = new URL(path);
      path = u.pathname + (u.hash ? u.hash.replace(/^#\/?/, '/') : '');
    } catch {
      // ignore
    }
  }

  // Separate query string
  const [pathname] = path.split('?');
  const clean = pathname.replace(/^\/+/, '').replace(/\/+$/, '');

  if (!clean) return '/';

  // Specific legacy or shorthand aliases
  if (KNOWN_DESTINATIONS.includes(clean.toLowerCase())) {
    return `/destinations/${clean.toLowerCase()}/`;
  }
  if (clean.startsWith('story-')) {
    return `/stories/${clean}/`;
  }
  if (clean.startsWith('guide-')) {
    return `/guides/${clean}/`;
  }
  if (clean.startsWith('hideout-')) {
    return `/hideouts/${clean}/`;
  }
  if (clean.startsWith('stay-')) {
    return `/stays/${clean}/`;
  }
  if (clean === 'destinations' || clean === 'countries') {
    return '/destinations/';
  }
  if (clean === 'stories') {
    return '/stories/';
  }
  if (clean === 'hidden-stories') {
    return '/hidden-stories/';
  }
  if (clean === 'guides' || clean === 'field-guides' || clean === 'travel-tips') {
    return '/guides/';
  }
  if (clean === 'hideouts') {
    return '/hideouts/';
  }
  if (clean === 'stays') {
    return '/stays/';
  }
  if (clean === 'things-to-do') {
    return '/things-to-do/';
  }
  if (clean === 'getting-there') {
    return '/getting-there/';
  }
  if (clean === 'deals') {
    return '/deals/';
  }
  if (clean === 'about') {
    return '/about/';
  }
  if (clean === 'contact') {
    return '/contact/';
  }
  if (clean === 'privacy' || clean === 'privacy-policy') {
    return '/privacy-policy/';
  }
  if (clean === 'terms') {
    return '/terms/';
  }
  if (clean === 'affiliate-disclosure') {
    return '/affiliate-disclosure/';
  }

  // Preserve non-HTML file paths
  if (clean.includes('.')) {
    return `/${clean}`;
  }

  return `/${clean}/`;
}

function getInitialPath(): string {
  if (typeof window === 'undefined') return '/';
  
  // Check if loaded with legacy hash
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    const canonical = normalizeAppPath(window.location.hash);
    window.history.replaceState(null, '', canonical);
    return canonical;
  }

  const normalized = normalizeAppPath(window.location.pathname || '/');
  if (window.location.pathname !== normalized && !window.location.pathname.includes('.')) {
    window.history.replaceState(null, '', normalized);
  }
  return normalized;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSavedOpen, setIsSavedOpen] = useState<boolean>(false);

  // Persistent wishlist in localStorage
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('travelhideouts_saved');
      return saved ? JSON.parse(saved) : ['hideout-1', 'hideout-4'];
    } catch {
      return ['hideout-1', 'hideout-4'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('travelhideouts_saved', JSON.stringify(savedIds));
    } catch (err) {
      console.warn('Could not save to localStorage:', err);
    }
  }, [savedIds]);

  const toggleSave = (id: string) => {
    setSavedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const removeSave = (id: string) => {
    setSavedIds(prev => prev.filter(item => item !== id));
  };

  const clearAllSaved = () => {
    setSavedIds([]);
  };

  const navigate = useCallback((to: string) => {
    const canonical = normalizeAppPath(to);
    if (window.location.pathname !== canonical) {
      window.history.pushState({}, '', canonical);
      setCurrentPath(canonical);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Handle browser back/forward and hash redirects
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        const canonical = normalizeAppPath(window.location.hash);
        window.history.replaceState(null, '', canonical);
        setCurrentPath(canonical);
      } else {
        const canonical = normalizeAppPath(window.location.pathname || '/');
        if (window.location.pathname !== canonical && !window.location.pathname.includes('.')) {
          window.history.replaceState(null, '', canonical);
        }
        setCurrentPath(canonical);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleHashChange = () => {
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        const canonical = normalizeAppPath(window.location.hash);
        window.history.replaceState(null, '', canonical);
        setCurrentPath(canonical);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Global click handler to intercept internal links for seamless client-side SPA navigation
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a') as HTMLAnchorElement | null;
      if (!anchor) return;

      const rawHref = anchor.getAttribute('href');
      if (!rawHref) return;

      // Handle legacy #/ click if any remains
      if (rawHref.startsWith('#/')) {
        e.preventDefault();
        const canonical = normalizeAppPath(rawHref);
        navigate(canonical);
        return;
      }

      // Check for internal path-based link
      if (
        rawHref.startsWith('/') &&
        !rawHref.startsWith('//') &&
        !anchor.getAttribute('target') &&
        !anchor.getAttribute('download') &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !e.altKey &&
        e.button === 0
      ) {
        // Allow file downloads and API routes to proceed normally
        if (
          rawHref.startsWith('/api') ||
          rawHref.endsWith('.xml') ||
          rawHref.endsWith('.txt') ||
          rawHref.endsWith('.html') ||
          rawHref.endsWith('.jpg') ||
          rawHref.endsWith('.png') ||
          rawHref.endsWith('.svg')
        ) {
          return;
        }

        e.preventDefault();
        navigate(rawHref);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [navigate]);

  // Parse current route
  const renderRoute = () => {
    const clean = currentPath.split('?')[0].split('#')[0].replace(/^\/+/, '').replace(/\/+$/, '');
    const parts = clean.split('/').filter(Boolean);

    // Root
    if (parts.length === 0 || parts[0] === '') {
      return <HomePage savedIds={savedIds} onToggleSave={toggleSave} />;
    }

    const [section, id] = parts;

    // Direct country shortcut (e.g. /japan/ -> DestinationDetailPage)
    if (KNOWN_DESTINATIONS.includes(section.toLowerCase())) {
      return <DestinationDetailPage id={section.toLowerCase()} savedIds={savedIds} onToggleSave={toggleSave} />;
    }
    if (section.startsWith('story-')) {
      return <StoryDetailPage id={section} savedIds={savedIds} onToggleSave={toggleSave} />;
    }
    if (section.startsWith('guide-')) {
      return <GuideDetailPage id={section} />;
    }
    if (section.startsWith('hideout-')) {
      return <HideoutDetailPage id={section} savedIds={savedIds} onToggleSave={toggleSave} />;
    }
    if (section.startsWith('stay-')) {
      return <StayDetailPage id={section} />;
    }

    switch (section) {
      case 'hideouts':
        if (id) {
          return <HideoutDetailPage id={id} savedIds={savedIds} onToggleSave={toggleSave} />;
        }
        return <HideoutsPage savedIds={savedIds} onToggleSave={toggleSave} />;

      case 'destinations':
      case 'countries':
        if (id) {
          return <DestinationDetailPage id={id} savedIds={savedIds} onToggleSave={toggleSave} />;
        }
        return <DestinationsPage />;

      case 'stays':
        if (id) {
          return <StayDetailPage id={id} />;
        }
        return <StaysPage />;

      case 'stories':
        if (id) {
          return <StoryDetailPage id={id} savedIds={savedIds} onToggleSave={toggleSave} />;
        }
        return <StoriesPage />;

      case 'hidden-stories':
        return <StoriesPage defaultCategory="Hidden Places" />;

      case 'guides':
      case 'field-guides':
      case 'travel-tips':
        if (id) {
          return <GuideDetailPage id={id} />;
        }
        return <GuidesPage />;

      case 'getting-there':
        return <GettingTherePage />;

      case 'things-to-do':
        return <ThingsToDoPage />;

      case 'deals':
        return <DealsPage />;

      case 'about':
        return <AboutPage />;

      case 'affiliate-disclosure':
        return <AffiliateDisclosurePage />;

      case 'privacy-policy':
      case 'privacy':
        return <PrivacyPolicyPage />;

      case 'terms':
        return <TermsPage />;

      case 'contact':
        return <ContactPage />;

      default:
        return <HomePage savedIds={savedIds} onToggleSave={toggleSave} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#434338] flex flex-col font-sans selection:bg-[#8FA18B]/25 selection:text-[#434338]">
      {/* Navigation Header */}
      <Navbar
        currentPath={currentPath}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSaved={() => setIsSavedOpen(true)}
        savedCount={savedIds.length}
      />

      {/* Main Routed Page Content */}
      <main className="flex-1">
        {renderRoute()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals & Drawers */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <SavedHideoutsDrawer
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedIds={savedIds}
        onRemove={removeSave}
        onClearAll={clearAllSaved}
      />

      {/* EU & Global Privacy / Google AdSense Cookie Consent Banner */}
      <CookieConsentBanner />
    </div>
  );
}
