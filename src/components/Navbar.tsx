import React, { useState } from 'react';
import { Search, Bookmark, Menu, X, Compass, ChevronRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onOpenSearch: () => void;
  onOpenSaved: () => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onOpenSearch,
  onOpenSaved,
  savedCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Hideouts', href: '#/hideouts' },
    { name: 'Destinations', href: '#/destinations' },
    { name: 'Stays', href: '#/stays' },
    { name: 'Stories', href: '#/stories' },
    { name: 'Guides', href: '#/guides' },
    { name: 'Getting There', href: '#/getting-there' },
    { name: 'Things to Do', href: '#/things-to-do' },
    { name: 'Worth Booking', href: '#/deals' },
  ];

  const isActive = (href: string) => {
    const cleanHref = href.replace('#', '');
    if (cleanHref === '/' && (currentPath === '/' || currentPath === '')) return true;
    if (cleanHref !== '/' && currentPath.startsWith(cleanHref)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F9F7F2]/95 backdrop-blur-md border-b border-[#E9E5D9] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Editorial Monogram */}
          <div className="flex items-center gap-6">
            <a href="#/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 bg-[#8FA18B] rounded-full flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl md:text-[25px] font-bold tracking-tight text-[#434338] group-hover:text-[#8FA18B] transition-colors leading-none italic">
                  TravelHideouts
                </span>
                <span className="text-[10px] tracking-widest uppercase font-sans text-[#8D8D7E] mt-1 font-semibold group-hover:text-[#5A5A40] transition-colors">
                  Discover places worth going.
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                    active
                      ? 'text-[#434338] bg-[#F1EDE4] border border-[#E9E5D9] font-bold shadow-xs'
                      : 'text-[#5A5A40] hover:text-[#434338] hover:bg-[#F1EDE4]/70 font-medium'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Primary CTA */}
          <div className="flex items-center gap-2.5">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search travel hideouts"
              className="p-2.5 rounded-full text-[#5A5A40] hover:text-[#434338] hover:bg-[#F1EDE4] transition-colors flex items-center gap-2 text-xs"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline text-xs text-[#8D8D7E] font-normal">Search...</span>
            </button>

            {/* Saved Wishlist Button */}
            <button
              onClick={onOpenSaved}
              aria-label="Open saved hideouts wishlist"
              className="p-2.5 rounded-full text-[#5A5A40] hover:text-[#434338] hover:bg-[#F1EDE4] transition-colors relative"
            >
              <Bookmark className={`w-4 h-4 ${savedCount > 0 ? 'fill-[#8FA18B] text-[#8FA18B]' : ''}`} />
              {savedCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#D48166] text-white text-[10px] flex items-center justify-center font-bold">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Primary CTA */}
            <a
              href="#/hideouts"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-full bg-[#8FA18B] text-white hover:bg-[#7C8E78] shadow-sm transition-all"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Find a Hideout</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-full text-[#434338] hover:bg-[#F1EDE4] lg:hidden transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E9E5D9] bg-[#F9F7F2] px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-200">
          <div className="mb-3 px-3 py-2 rounded-2xl bg-[#F1EDE4] flex items-center justify-between border border-[#E9E5D9]">
            <span className="text-xs text-[#5A5A40] font-medium">Curated Editorial Discovery</span>
            <Sparkles className="w-3.5 h-3.5 text-[#8FA18B]" />
          </div>

          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                  active
                    ? 'bg-[#F1EDE4] text-[#434338] font-bold border border-[#E9E5D9]'
                    : 'text-[#5A5A40] hover:bg-[#F1EDE4]/70 hover:text-[#434338]'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#8D8D7E]" />
              </a>
            );
          })}

          <div className="pt-4 border-t border-[#E9E5D9] mt-3 flex items-center justify-between px-3 text-xs text-[#8D8D7E]">
            <a href="#/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#434338] hover:underline">About TravelHideouts</a>
            <a href="#/affiliate-disclosure" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#434338] hover:underline">Affiliate Disclosure</a>
          </div>
        </div>
      )}
    </header>
  );
};
