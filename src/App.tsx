import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cake, Loader2 } from 'lucide-react';

// Import our premium components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustIndicators from './components/TrustIndicators';
import AboutSection from './components/AboutSection';
import SignatureProducts from './components/SignatureProducts';
import FeaturedCakes from './components/FeaturedCakes';
import WhyChooseUs from './components/WhyChooseUs';
import SpecialOccasions from './components/SpecialOccasions';
import Testimonials from './components/Testimonials';
import PhotoGallery from './components/PhotoGallery';
import MenuPreview from './components/MenuPreview';
import LocationStore from './components/LocationStore';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Force Light Mode on document.documentElement
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  // Premium loading animation timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s beautiful brand load
    return () => clearTimeout(timer);
  }, []);

  // Highly resilient global smooth scrolling interceptor for local anchor links
  useEffect(() => {
    if (loading) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      // Only capture internal hash links (excluding dummy '#' links)
      if (href && href.startsWith('#') && href.length > 1) {
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          e.preventDefault();
          
          element.scrollIntoView({
            behavior: 'smooth',
          });

          // Elegant state historical update without browser jumping
          window.history.pushState(null, '', href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [loading]);

  return (
    <div className="min-h-screen bg-[#FFF8E7] text-gray-800 antialiased select-none font-sans overflow-x-hidden selection:bg-[#F4C95D]/40 scroll-smooth pb-16 md:pb-0">
      
      {/* Immersive Loader Overlay */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-[#FFF8E7] flex flex-col items-center justify-center space-y-4"
          >
            {/* Spinning Brand Icon */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-full bg-[#F4C95D] flex items-center justify-center shadow-lg text-[#2D1B12] glowing-gold-lg"
            >
              <Cake className="w-10 h-10" />
            </motion.div>

            {/* Title Details */}
            <div className="text-center space-y-1.5">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-2xl font-bold tracking-tight text-[#2D1B12]"
              >
                Butter Story Bakery
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-[#6B4423]/60 uppercase tracking-widest font-bold font-sans"
              >
                Lucknow’s Sweet Secret
              </motion.p>
            </div>

            {/* Spinning loader bar */}
            <Loader2 className="w-5 h-5 animate-spin text-[#6B4423] mt-4" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Wrapper */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Sticky Luxury Header Navbar */}
          <Navbar />

          {/* Core Sections Container */}
          <main className="relative">
            
            {/* 1. HERO SECTION */}
            <HeroSection />

            {/* 2. TRUST INDICATORS */}
            <TrustIndicators />

            {/* 3. ABOUT BUTTER STORY */}
            <AboutSection />

            {/* 4. SIGNATURE PRODUCTS CATEGORIES */}
            <SignatureProducts />

            {/* 5. FEATURED CAKES SECTION */}
            <FeaturedCakes />

            {/* 6. WHY CHOOSE US COMMITMENTS */}
            <WhyChooseUs />

            {/* 7. SPECIAL OCCASIONS SERVICES */}
            <SpecialOccasions />

            {/* 8. CUSTOMER TESTIMONIALS */}
            <Testimonials />

            {/* 9. PHOTO GALLERY WITH LIGHTBOX */}
            <PhotoGallery />

            {/* 10. MENU PREVIEW ACCORDING TO TABS */}
            <MenuPreview />

            {/* 11. LOCATION & STORE MAP DETAILS */}
            <LocationStore />

            {/* 12. FAQ SECTION ACCORDIONS */}
            <FAQSection />

            {/* 13. FINAL CTA SECTION BANNER */}
            <FinalCTA />

          </main>

          {/* 14. FOOTER */}
          <Footer />

          {/* 15. PERSISTENT WIDGETS & MOB CTAS */}
          <FloatingWidgets />

        </motion.div>
      )}

    </div>
  );
}
