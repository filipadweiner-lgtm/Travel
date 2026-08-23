import React, { useState, useEffect } from 'react';
import { Search, X, MapPin, Sparkles, BookOpen, Compass, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { HIDEOUTS } from '../data/hideouts';
import { STORIES } from '../data/stories';
import { GUIDES } from '../data/guides';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle or open
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const filteredDestinations = cleanQuery
    ? DESTINATIONS.filter(d => 
        d.name.toLowerCase().includes(cleanQuery) || 
        d.country.toLowerCase().includes(cleanQuery) ||
        d.tag.toLowerCase().includes(cleanQuery)
      )
    : DESTINATIONS.slice(0, 3);

  const filteredHideouts = cleanQuery
    ? HIDEOUTS.filter(h => 
        h.title.toLowerCase().includes(cleanQuery) || 
        h.category.toLowerCase().includes(cleanQuery) ||
        h.location.toLowerCase().includes(cleanQuery) ||
        h.vibe.toLowerCase().includes(cleanQuery)
      )
    : HIDEOUTS.slice(0, 3);

  const filteredStories = cleanQuery
    ? STORIES.filter(st => 
        st.title.toLowerCase().includes(cleanQuery) ||
        st.subtitle.toLowerCase().includes(cleanQuery) ||
        st.excerpt.toLowerCase().includes(cleanQuery)
      )
    : STORIES.slice(0, 2);

  const filteredGuides = cleanQuery
    ? GUIDES.filter(g => 
        g.title.toLowerCase().includes(cleanQuery) ||
        g.subtitle.toLowerCase().includes(cleanQuery)
      )
    : GUIDES.slice(0, 2);

  const hasResults =
    filteredDestinations.length > 0 ||
    filteredHideouts.length > 0 ||
    filteredStories.length > 0 ||
    filteredGuides.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-[#F9F7F2] rounded-[32px] border border-[#E9E5D9] shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="relative p-4 md:p-6 border-b border-[#E9E5D9] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#8FA18B] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, destinations, hidden stories, travel tips, and guides..."
            autoFocus
            className="w-full bg-transparent text-base md:text-lg text-[#434338] placeholder-[#8D8D7E] focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-[#8D8D7E] hover:text-[#434338] hover:bg-[#F1EDE4]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#5A5A40] hover:text-[#434338] hover:bg-[#F1EDE4] text-xs font-medium border border-[#E9E5D9]"
          >
            Esc
          </button>
        </div>

        {/* Search Suggestions & Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 md:p-6 space-y-6">
          {!cleanQuery && (
            <div className="flex items-center gap-2 text-xs font-bold text-[#8FA18B] uppercase tracking-wider pb-2 border-b border-[#E9E5D9]">
              <Sparkles className="w-3.5 h-3.5 text-[#D48166]" />
              <span>Curated Discovery Suggestions</span>
            </div>
          )}

          {/* Destinations */}
          {filteredDestinations.length > 0 && (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8FA18B] block mb-3">
                Destinations
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredDestinations.map(dest => (
                  <a
                    key={dest.id}
                    href={`/destinations/${dest.id}`}
                    onClick={onClose}
                    className="group p-3 rounded-2xl bg-white border border-[#E9E5D9] hover:border-[#8FA18B] transition-all flex items-center gap-3.5 shadow-xs"
                  >
                    <img
                      src={dest.heroImage || dest.image || 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80'}
                      alt={dest.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.src !== 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80') {
                          target.src = 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80';
                        }
                      }}
                      className="w-12 h-12 rounded-xl object-cover bg-[#EAE2D5]"
                    />
                    <div className="truncate">
                      <h4 className="font-serif font-bold text-base text-[#434338] group-hover:text-[#8FA18B]">
                        {dest.name}
                      </h4>
                      <span className="text-xs text-[#8D8D7E]">{dest.country}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Hideouts */}
          {filteredHideouts.length > 0 && (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8FA18B] block mb-3">
                Curated Hideouts
              </span>
              <div className="space-y-2.5">
                {filteredHideouts.map(hideout => (
                  <a
                    key={hideout.id}
                    href={`/hideouts/${hideout.id}`}
                    onClick={onClose}
                    className="group p-3.5 rounded-2xl bg-white border border-[#E9E5D9] hover:border-[#8FA18B] transition-all flex items-center justify-between gap-4 shadow-xs"
                  >
                    <div className="flex items-center gap-3.5 truncate">
                      <img
                        src={hideout.image || hideout.heroImage || 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80'}
                        alt={hideout.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          if (target.src !== 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80') {
                            target.src = 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80';
                          }
                        }}
                        className="w-12 h-12 rounded-xl object-cover shrink-0 bg-[#EAE2D5]"
                      />
                      <div className="truncate">
                        <h4 className="font-serif font-bold text-[15px] text-[#434338] group-hover:text-[#8FA18B] truncate">
                          {hideout.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-[#8D8D7E]">
                          <span className="text-[#8FA18B] font-semibold">{hideout.category}</span>
                          <span>·</span>
                          <span>{hideout.location}</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8D8D7E] group-hover:translate-x-1 group-hover:text-[#434338] transition-all shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Stories & Guides */}
          {(filteredStories.length > 0 || filteredGuides.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#E9E5D9]">
              {filteredStories.length > 0 && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8FA18B] block mb-2">
                    Stories
                  </span>
                  <div className="space-y-2">
                    {filteredStories.map(story => (
                      <a
                        key={story.id}
                        href={`/stories/${story.id}`}
                        onClick={onClose}
                        className="block p-3 rounded-2xl bg-white border border-[#E9E5D9] hover:border-[#8FA18B] transition-all shadow-xs"
                      >
                        <h5 className="font-serif font-bold text-xs text-[#434338] hover:text-[#8FA18B] line-clamp-1">
                          {story.title}
                        </h5>
                        <span className="text-[11px] text-[#8D8D7E]">{story.readTime}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {filteredGuides.length > 0 && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8FA18B] block mb-2">
                    Guides
                  </span>
                  <div className="space-y-2">
                    {filteredGuides.map(guide => (
                      <a
                        key={guide.id}
                        href={`/guides/${guide.id}`}
                        onClick={onClose}
                        className="block p-3 rounded-2xl bg-white border border-[#E9E5D9] hover:border-[#8FA18B] transition-all shadow-xs"
                      >
                        <h5 className="font-serif font-bold text-xs text-[#434338] hover:text-[#8FA18B] line-clamp-1">
                          {guide.title}
                        </h5>
                        <span className="text-[11px] text-[#8D8D7E]">{guide.readTime}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {!hasResults && cleanQuery && (
            <div className="py-12 text-center text-[#5A5A40]">
              <p className="font-serif text-lg font-bold text-[#434338] mb-1">No matching hideouts found</p>
              <p className="text-xs text-[#8D8D7E]">Try searching for cities like "Lisbon", "Paris", or categories like "Boutique", "Mountain", "Romantic".</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F1EDE4] border-t border-[#E9E5D9] flex items-center justify-between text-xs text-[#5A5A40]">
          <span>Tip: Filter by vibe, destination or stay category</span>
          <span className="font-bold text-[#8FA18B]">TravelHideouts Discovery</span>
        </div>
      </div>
    </div>
  );
};
