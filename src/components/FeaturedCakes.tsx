import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, X, Heart, Shield, Cake as CakeIcon } from 'lucide-react';
import { FEATURED_CAKES, STORE_CONTACT } from '../data';
import { CakeItem } from '../types';

export default function FeaturedCakes() {
  const [selectedCake, setSelectedCake] = useState<CakeItem | null>(null);
  const [isEggless, setIsEggless] = useState(true);
  const [cakeWeight, setCakeWeight] = useState('1.0 kg');
  const [messageOnCake, setMessageOnCake] = useState('');
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleOpenModal = (cake: CakeItem) => {
    setSelectedCake(cake);
    setIsEggless(true);
    setCakeWeight('1.0 kg');
    setMessageOnCake('');
  };

  const handleCloseModal = () => {
    setSelectedCake(null);
  };

  // Compile specific message template for Whatsapp delivery
  const compileWhatsappMessage = (cake: CakeItem) => {
    const text = `Hi! I want to order the "${cake.name}" from Butter Story Lucknow:
- Option: ${isEggless ? '100% Eggless (Vegetarian)' : 'Regular (Contains Eggs)'}
- Weight: ${cakeWeight}
- Message on Cake: "${messageOnCake || 'None'}"
Please verify availability and pricing. Thank you!`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="cakes" className="scroll-mt-24 py-20 sm:py-28 bg-white text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#6B4423] font-bold bg-[#F4C95D]/15 px-3.5 py-1.5 rounded-full inline-block">
              CELEBRATE DELICIOUSLY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D1B12]">
              Featured Luxury Cakes
            </h2>
            <p className="text-sm sm:text-base text-gray-500">
              Browse our highest-rated creations ordered daily across Lucknow. Select any cake to customize size, eggless option, and writing.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-[#6B4423]/20 text-[#2D1B12] hover:bg-[#F4C95D] hover:text-[#2D1B12] hover:border-[#F4C95D] flex items-center justify-center transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-[#6B4423]/20 text-[#2D1B12] hover:bg-[#F4C95D] hover:text-[#2D1B12] hover:border-[#F4C95D] flex items-center justify-center transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider List */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {FEATURED_CAKES.map((cake, i) => (
            <motion.div
              key={cake.id}
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[360px] max-w-[380px] snap-start bg-[#FFF8E7]/40 rounded-3xl overflow-hidden border border-[#6B4423]/10 hover:shadow-xl transition-all duration-300 group shadow-sm"
              whileHover={{ y: -6 }}
            >
              {/* Card Image */}
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.name}
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600";
                  }}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Image top overlay banner */}
                {cake.tag && (
                  <span className="absolute top-4 left-4 bg-[#2D1B12] bg-opacity-90 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    {cake.tag}
                  </span>
                )}

                <button className="absolute top-4 right-4 w-9 h-9 bg-white/70 backdrop-blur-sm hover:bg-white text-rose-500 rounded-full flex items-center justify-center shadow-md transition-colors">
                  <Heart className="w-5 h-5 fill-current" />
                </button>
              </div>

              {/* Card Information */}
              <div className="p-6">
                <div className="flex items-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current text-[#F4C95D]" />
                  ))}
                  <span className="text-xs text-gray-500 font-medium ml-1.5">{cake.rating} / 5</span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2D1B12] line-clamp-1 mb-2 group-hover:text-[#6B4423] transition-colors duration-200">
                  {cake.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4 font-sans">
                  {cake.description}
                </p>

                <button
                  onClick={() => handleOpenModal(cake)}
                  className="w-full bg-[#FFF8E7] hover:bg-[#F4C95D] text-[#6B4423] hover:text-[#2D1B12] border border-[#F4C95D]/25 py-3 rounded-xl text-sm font-bold tracking-wide transition-colors duration-200"
                >
                  Configure & Inquiry Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay customizer */}
        <AnimatePresence>
          {selectedCake && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                className="relative bg-white border border-[#6B4423]/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 w-9 h-9 bg-black/10 hover:bg-black/20 text-[#2D1B12] rounded-full flex items-center justify-center transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Main scrollable area */}
                <div className="overflow-y-auto p-6 space-y-6">
                  
                  {/* Title and image metadata */}
                  <div className="flex gap-4 items-start pb-4 border-b border-[#6B4423]/10">
                    <img
                      src={selectedCake.image}
                      alt={selectedCake.name}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=300";
                      }}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-2xl border"
                    />
                    <div className="space-y-1">
                      {selectedCake.tag && (
                        <span className="bg-[#F4C95D]/20 text-[#6B4423] text-[10px] font-bold uppercase py-0.5 px-2.5 rounded-full">
                          {selectedCake.tag}
                        </span>
                      )}
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2D1B12]">{selectedCake.name}</h3>
                      <p className="text-xs text-gray-500 leading-normal font-sans">{selectedCake.description}</p>
                    </div>
                  </div>

                  {/* Weight Selector */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-[#6B4423] block">
                      Select Sponge Weight
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['0.5 kg (Small)', '1.0 kg (Medium)', '2.0 kg+ (Grand)'].map((weightObj) => (
                        <button
                          key={weightObj}
                          onClick={() => setCakeWeight(weightObj)}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                            cakeWeight === weightObj
                              ? 'bg-[#6B4423] border-[#6B4423] text-white'
                              : 'bg-transparent border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {weightObj}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Egg/Eggless Selector */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-[#6B4423] block">
                      Dietary preference
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setIsEggless(true)}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border flex items-center justify-center space-x-2 transition-all ${
                          isEggless
                            ? 'bg-green-50 border-green-500 text-green-700'
                            : 'bg-transparent border-gray-200 text-gray-500'
                        }`}
                      >
                        <span className="w-2.5 h-2.5 bg-green-600 rounded-full shrink-0" />
                        <span>100% Eggless (Veg)</span>
                      </button>
                      <button
                        onClick={() => setIsEggless(false)}
                        className={`py-3 px-4 rounded-xl text-sm font-bold border flex items-center justify-center space-x-2 transition-all ${
                          !isEggless
                            ? 'bg-amber-50 border-amber-500 text-amber-700'
                            : 'bg-transparent border-gray-200 text-gray-500'
                        }`}
                      >
                        <span className="w-2.5 h-2.5 bg-red-600 rounded-full shrink-0" />
                        <span>With Egg</span>
                      </button>
                    </div>
                    <span className="text-[10px] text-gray-400 flex items-center gap-1 mt-1 font-sans">
                      <Shield className="w-3.5 h-3.5 text-green-600" />
                      Strictly segregated cooking zones protect eggless orders.
                    </span>
                  </div>

                  {/* Writing on Cake message box */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-[#6B4423] block">
                      Custom Text message on Cake (Max 35 Characters)
                    </label>
                    <input
                      type="text"
                      maxLength={35}
                      placeholder='e.g., "Happy 25th Birthday Amit!"'
                      value={messageOnCake}
                      onChange={(e) => setMessageOnCake(e.target.value)}
                      className="w-full bg-[#FFF8E7]/30 border border-[#6B4423]/10 focus:border-[#F4C95D] outline-none p-3.5 rounded-xl text-sm text-[#2D1B12]"
                    />
                  </div>

                </div>

                {/* Modal fixed footer with WhatsApp Inquiry Button */}
                <div className="p-6 bg-gray-50 border-t border-[#6B4423]/10 flex flex-col space-y-3.5">
                  <a
                    href={compileWhatsappMessage(selectedCake)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition-all duration-200"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.45h.007c5.58 0 10.12-4.54 10.12-10.1 0-2.69-1.05-5.22-2.95-7.13-1.9-1.9-4.43-2.95-7.12-2.95-5.59 0-10.13 4.54-10.13 10.14-.001 1.91.503 3.778 1.46 5.385l-.99 3.61 3.703-.97zm10.416-6.002c-.3-.15-1.782-.88-2.057-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.79-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.13.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.588-.492-.51-.675-.52-.172-.01-.37-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.782-.73 2.032-1.435.25-.705.25-1.31.175-1.435-.075-.125-.275-.2-.575-.35z" />
                    </svg>
                    <span>Send Order request to Chef</span>
                  </a>
                  <p className="text-[10px] text-gray-400 text-center font-sans">
                    Clicking sends your customized options directly to our store WhatsApp chat. We will reply instantly for address & timings verification.
                  </p>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
