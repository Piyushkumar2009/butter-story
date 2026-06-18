import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';
import { STORE_CONTACT } from '../data';

export default function FloatingWidgets() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons Area (Desktop & Tablet) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3.5">
        
        {/* Scroll To Top Arrow Widget */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 10 }}
              title="Scroll back to top"
              onClick={scrollToTop}
              className="bg-[#6B4423] text-white hover:bg-[#2D1B12] p-3.5 rounded-full shadow-xl transition-all border border-white/10"
            >
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Pulsing Floating WhatsApp Widget */}
        <motion.a
          id="floating-whatsapp-widget"
          href={STORE_CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          title="Chat with Butter Story Bakery"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl border border-white/10 flex items-center justify-center cursor-pointer"
        >
          {/* Custom SVG logo */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.45h.007c5.58 0 10.12-4.54 10.12-10.1 0-2.69-1.05-5.22-2.95-7.13-1.9-1.9-4.43-2.95-7.12-2.95-5.59 0-10.13 4.54-10.13 10.14-.001 1.91.503 3.778 1.46 5.385l-.99 3.61 3.703-.97zm10.416-6.002c-.3-.15-1.782-.88-2.057-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.79-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.13.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.588-.492-.51-.675-.52-.172-.01-.37-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.782-.73 2.032-1.435.25-.705.25-1.31.175-1.435-.075-.125-.275-.2-.575-.35z" />
          </svg>
        </motion.a>
      </div>

      {/* Mobile-Only Sticky Call & Order Now Footer bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-[#6B4423]/10 py-2.5 px-4 flex items-center justify-between gap-3 shadow-2xl backdrop-blur-md">
        
        {/* Dynamic call direct */}
        <a
          href={`tel:${STORE_CONTACT.phone}`}
          className="flex-1 flex items-center justify-center space-x-2 bg-[#FFF8E7] border border-[#6B4423]/15 text-[#6B4423] font-bold py-3.5 rounded-xl text-xs uppercase"
        >
          <Phone className="w-4 h-4" />
          <span>Call Host</span>
        </a>

        {/* Dynamic direct Whatsapp checkout */}
        <a
          href={STORE_CONTACT.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white font-bold py-3.5 rounded-xl text-xs uppercase shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Order Now</span>
        </a>

      </div>
    </>
  );
}
