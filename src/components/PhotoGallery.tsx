import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

type GalleryCategory = 'all' | 'cakes' | 'pastries' | 'interior' | 'desserts' | 'celebration';

export default function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter list matching active category
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const filterTabs: { name: string; value: GalleryCategory }[] = [
    { name: 'Show All Photos', value: 'all' },
    { name: 'Luxury Cakes', value: 'cakes' },
    { name: 'Artisanal Pastries', value: 'pastries' },
    { name: 'Exquisite Desserts', value: 'desserts' },
    { name: 'Celebration Cakes', value: 'celebration' },
    { name: 'Cafe Ambiance', value: 'interior' }
  ];

  const handleOpenLightbox = (itemId: string) => {
    // Locate standard global index inside filtered array
    const clickedIdx = filteredItems.findIndex((item) => item.id === itemId);
    if (clickedIdx !== -1) {
      setLightboxIndex(clickedIdx);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <section id="gallery" className="scroll-mt-24 py-20 sm:py-28 bg-[#FFF8E7]/40 text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#6B4423] font-bold bg-[#F4C95D]/15 px-3.5 py-1.5 rounded-full inline-block">
            VISUAL FLAVORS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D1B12]">
            The Honeycomb & Butter Gallery
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            A visual stroll through our oven fresh custom cakes, golden pastries, and the cozy boutique cafe seating waiting for you in Lucknow.
          </p>
        </div>

        {/* Filter Tab List - Horizontal sliding overflow */}
        <div className="flex overflow-x-auto space-x-2 pb-4 scrollbar-none no-scrollbar justify-start sm:justify-center border-b border-[#6B4423]/10 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveFilter(tab.value);
                setLightboxIndex(null); // Clear lightbox state safely
              }}
              className={`py-2 px-5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap ${
                activeFilter === tab.value
                  ? 'bg-[#F4C95D] text-[#2D1B12] shadow-md'
                  : 'bg-white text-gray-500 hover:bg-[#F4C95D]/15 hover:text-[#6B4423]'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Masonry or Grid Items */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="relative aspect-square sm:aspect-video md:aspect-square rounded-3xl overflow-hidden group shadow-md border border-[#6B4423]/10 cursor-pointer bg-white"
                onClick={() => handleOpenLightbox(item.id)}
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400";
                  }}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Cover overlay on Hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 pointer-events-none">
                  {/* Category Pill Tag */}
                  <span className="self-end bg-[#F4C95D] text-[#2D1B12] font-sans text-[9px] uppercase font-extrabold px-3 py-1 rounded-full tracking-wider">
                    {item.category}
                  </span>

                  {/* Title Detail and Eye Icon */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-white/80 mt-0.5">Click to Inspect Zoom</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#F4C95D] flex items-center justify-center text-[#2D1B12] shrink-0">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dark Immersive Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredItems[lightboxIndex] && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
              
              {/* Close out overlay target */}
              <div className="absolute inset-0" onClick={handleCloseLightbox} />

              {/* Lightbox container */}
              <div className="relative w-full max-w-4xl max-h-[85vh] flex flex-col justify-between items-center z-10">
                {/* Top header navigation details */}
                <div className="absolute top-4 left-4 z-20 bg-black/40 text-left px-4 py-2 rounded-xl text-white backdrop-blur-sm">
                  <h4 className="font-serif text-base sm:text-lg font-bold">{filteredItems[lightboxIndex].title}</h4>
                  <span className="font-sans text-[10px] text-gray-300 uppercase tracking-widest">{filteredItems[lightboxIndex].category}</span>
                </div>

                {/* Corner Close button */}
                <button
                  onClick={handleCloseLightbox}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full z-20 transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Large Responsive Central Image */}
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] max-w-full rounded-2xl object-contain border border-white/15 shadow-2xl"
                />

                {/* Left navigation clicker */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-20 backdrop-blur-sm transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right navigation clicker */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full z-20 backdrop-blur-sm transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Bottom Image Count Dot Tracker */}
                <div className="mt-4 bg-white/10 backdrop-blur-sm text-xs text-white px-4 py-1.5 rounded-full font-mono">
                  {lightboxIndex + 1} / {filteredItems.length}
                </div>

              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
