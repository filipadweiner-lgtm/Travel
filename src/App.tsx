/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { SavedHideoutsDrawer } from './components/SavedHideoutsDrawer';

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

export default function App() {
  const [currentHash, setCurrentHash] = useState<string>(() => window.location.hash || '#/');
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

  // Listen to hash changes and scroll to top
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentHash(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Parse current route
  const renderRoute = () => {
    const hash = currentHash.replace(/^#/, '') || '/';
    const parts = hash.split('/').filter(Boolean);

    // Root
    if (parts.length === 0 || parts[0] === '') {
      return <HomePage savedIds={savedIds} onToggleSave={toggleSave} />;
    }

    const [section, id] = parts;

    switch (section) {
      case 'hideouts':
        if (id) {
          return <HideoutDetailPage id={id} savedIds={savedIds} onToggleSave={toggleSave} />;
        }
        return <HideoutsPage savedIds={savedIds} onToggleSave={toggleSave} />;

      case 'destinations':
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

      case 'guides':
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
        currentPath={currentHash.replace('#', '')}
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
    </div>
  );
}

