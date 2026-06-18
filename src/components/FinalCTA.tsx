import { motion } from 'motion/react';
import { Phone, MessageCircle, Star } from 'lucide-react';
import { STORE_CONTACT } from '../data';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF8E7]/30 text-gray-800 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F4C95D]/25 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Full-width Luxury Rounded Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.65 }}
          className="bg-[#6B4423] text-white rounded-3xl p-8 sm:p-14 text-center border-4 border-white shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-radial-gradient from-white to-transparent" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            {/* Visual Icon Badge */}
            <div className="w-12 h-12 bg-[#F4C95D]/15 rounded-full flex items-center justify-center text-[#F4C95D] mx-auto border border-[#F4C95D]/30">
              <Star className="w-6 h-6 fill-current animate-spin-slow" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready To Make Your <br />
              Celebration Sweeter?
            </h2>

            <p className="text-sm sm:text-base text-[#FFF8E7]/80 font-sans leading-relaxed">
              Order our pre-made signature cakes for prompt 3-hour express delivery under Lucknow, or consult with our bakeshop team to build a bespoke customized multi-tier masterwork. We are here to bake your story!
            </p>

            {/* CTA action triggers */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              
              {/* WhatsApp checkout link */}
              <a
                href={STORE_CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-md transition-colors font-sans text-sm"
              >
                <Star className="w-4 h-4 fill-current mr-1" />
                <span>Order on WhatsApp</span>
              </a>

              {/* Call direct lines */}
              <a
                href={`tel:${STORE_CONTACT.phone}`}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#F4C95D] hover:bg-[#E2B743] hover:bg-[#F4C95D]/90 text-[#2D1B12] font-bold px-8 py-4 rounded-xl shadow-md transition-colors font-sans text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store Now</span>
              </a>

            </div>

            {/* Quick trust metrics notice */}
            <p className="text-[11px] text-[#FFF8E7]/50 mt-4 leading-none font-sans">
              ★ Active Delivery Slots Available Everyday: 9:00 AM - 11:30 PM ★
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
