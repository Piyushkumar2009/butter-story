import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Autoplay function
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000); // 6s rotation speed
    return () => clearInterval(interval);
  }, []);

  const currentReview = TESTIMONIALS[activeIndex];

  return (
    <div className="py-20 sm:py-28 bg-white text-gray-800 relative overflow-hidden">
      {/* Absolute grid background accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B4423]/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple visual section badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#6B4423] font-bold bg-[#F4C95D]/15 px-3.5 py-1.5 rounded-full inline-block">
            AUTHENTIC REVIEWS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D1B12]">
            Loved By Lucknow
          </h2>
        </div>

        {/* Big Block Quote Testimonial Card */}
        <div className="max-w-4xl mx-auto relative px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FFF8E7]/40 rounded-3xl p-8 sm:p-12 border border-[#6B4423]/10 shadow-lg relative flex flex-col items-center text-center"
            >
              {/* Huge beautiful quotation symbol */}
              <Quote className="w-16 h-16 text-[#F4C95D]/20 absolute -top-8 left-8 transform -scale-x-100" />

              {/* Star rating count */}
              <div className="flex items-center space-x-1.5 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 fill-current ${
                      star <= Math.round(currentReview.rating) ? 'text-[#F4C95D]' : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial comments */}
              <p className="font-serif text-lg sm:text-xl md:text-2xl italic text-[#2D1B12] leading-relaxed max-w-2xl">
                &ldquo;{currentReview.comment}&rdquo;
              </p>

              {/* Customer information profile layout */}
              <div className="mt-8 flex flex-col items-center space-y-2">
                <img
                  src={currentReview.avatar}
                  alt={`${currentReview.name} review Butter Story`}
                  onError={(e) => {
                    // Fallback to a high quality profile illustration if avatar is broken
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150";
                  }}
                  className="w-14 h-14 rounded-full border-2 border-[#F4C95D] object-cover shadow-sm"
                />
                <div className="leading-tight">
                  <h4 className="font-bold text-sm text-[#2D1B12]">{currentReview.name}</h4>
                  <p className="text-xs text-gray-500">{currentReview.role}</p>
                </div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                  {currentReview.date}
                </span>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Testimonial Slider Nav Buttons */}
          <div className="flex items-center justify-center space-x-3 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#6B4423]/10 text-[#2D1B12] hover:bg-[#F4C95D] hover:text-[#2D1B12] flex items-center justify-center transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Micro Dot Navigation */}
            <div className="flex items-center space-x-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                   key={i}
                   onClick={() => setActiveIndex(i)}
                   className={`w-2.5 h-2.5 rounded-full transition-all ${
                     activeIndex === i ? 'bg-[#6B4423] w-6' : 'bg-[#6B4423]/25'
                   }`}
                   aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#6B4423]/10 text-[#2D1B12] hover:bg-[#F4C95D] hover:text-[#2D1B12] flex items-center justify-center transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
