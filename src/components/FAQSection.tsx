import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first FAQ

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-white text-gray-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title details */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#6B4423] font-bold bg-[#F4C95D]/15 px-3.5 py-1.5 rounded-full inline-block">
            COMMON CONCERNS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2D1B12]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-sans">
            Got specific questions about custom layers, wedding delivery slots, or eggless segregation? Review our detailed answers below, or shoot us a quick text.
          </p>
        </div>

        {/* Custom Accordion Grid */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`bg-[#FFF8E7]/25 rounded-2xl border border-[#6B4423]/5 overflow-hidden transition-all duration-300 ${
                  isOpen ? 'ring-1 ring-[#F4C95D] border-[#F4C95D] shadow-md' : 'shadow-sm'
                }`}
              >
                {/* Accordion header clicker */}
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif text-base font-bold text-[#2D1B12] hover:bg-[#F4C95D]/5 transition-all duration-200"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-[#F4C95D] shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6B4423] transform transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Animated Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-5 pt-0 border-t border-[#6B4423]/5 text-sm text-gray-600 leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
