import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, Compass } from 'lucide-react';
import { HIDEOUTS } from '../data/hideouts';
import { AffiliateCTA } from './AffiliateCTA';

interface SavedHideoutsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export const SavedHideoutsDrawer: React.FC<SavedHideoutsDrawerProps> = ({
  isOpen,
  onClose,
  savedIds,
  onRemove,
  onClearAll
}) => {
  if (!isOpen) return null;

  const savedHideouts = HIDEOUTS.filter(h => savedIds.includes(h.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="absolute inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-[#F9F7F2] border-l border-[#E9E5D9] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#E9E5D9] bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-[#8FA18B]/15 text-[#8FA18B]">
                <Bookmark className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-[#434338]">Saved Hideouts</h3>
                <p className="text-xs text-[#8D8D7E]">
                  {savedHideouts.length} {savedHideouts.length === 1 ? 'place' : 'places'} in your personal travel wishlist
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#8D8D7E] hover:text-[#434338] hover:bg-[#F1EDE4] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedHideouts.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-12 h-12 rounded-full bg-[#F1EDE4] text-[#8FA18B] flex items-center justify-center mx-auto mb-3">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#434338] mb-1">
                  Your wishlist is empty
                </h4>
                <p className="text-xs text-[#5A5A40] max-w-xs mx-auto mb-6">
                  Bookmark hideouts while browsing to build your curated shortlist of places worth staying.
                </p>
                <a
                  href="#/hideouts"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-full bg-[#8FA18B] text-white hover:bg-[#7C8E78] transition-colors"
                >
                  <span>Explore Hideouts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              savedHideouts.map(hideout => (
                <div
                  key={hideout.id}
                  className="p-4 rounded-2xl bg-white border border-[#E9E5D9] shadow-xs flex flex-col justify-between gap-3 group"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={hideout.image || hideout.heroImage || 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80'}
                      alt={hideout.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.src !== 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80') {
                          target.src = 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80';
                        }
                      }}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#EAE2D5]"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-[#8FA18B] uppercase tracking-wider block mb-0.5">
                        {hideout.category} · {hideout.location}
                      </span>
                      <h5 className="font-serif font-bold text-base text-[#434338] truncate group-hover:text-[#8FA18B]">
                        <a href={`#/hideouts/${hideout.id}`} onClick={onClose}>
                          {hideout.title}
                        </a>
                      </h5>
                      <p className="text-xs text-[#5A5A40] line-clamp-1 italic font-serif">
                        "{hideout.authorTake}"
                      </p>
                    </div>

                    <button
                      onClick={() => onRemove(hideout.id)}
                      title="Remove from saved"
                      className="text-[#8D8D7E] hover:text-[#D48166] p-1 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="pt-2 border-t border-[#E9E5D9] flex items-center justify-between">
                    <a
                      href={`#/hideouts/${hideout.id}`}
                      onClick={onClose}
                      className="text-xs font-semibold text-[#8FA18B] hover:underline"
                    >
                      View Details
                    </a>
                    <AffiliateCTA
                      label="Check availability"
                      itemName={hideout.title}
                      destination={hideout.destinationName}
                      explicitUrl={hideout.bookingUrlPlaceholder}
                      size="sm"
                    />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          {savedHideouts.length > 0 && (
            <div className="p-5 border-t border-[#E9E5D9] bg-[#F1EDE4] flex items-center justify-between">
              <button
                onClick={onClearAll}
                className="text-xs text-[#8D8D7E] hover:text-[#D48166] font-medium"
              >
                Clear all saved
              </button>
              <button
                onClick={onClose}
                className="text-xs font-semibold px-5 py-2.5 rounded-full bg-[#434338] text-[#F9F7F2] hover:bg-[#5A5A40]"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
