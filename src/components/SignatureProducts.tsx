import { motion } from 'motion/react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { SIGNATURE_PRODUCTS } from '../data';

export default function SignatureProducts() {
  return (
    <div className="py-20 sm:py-28 bg-[#FFF8E7]/50 text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#6B4423] font-bold bg-[#F4C95D]/15 px-3.5 py-1.5 rounded-full inline-block">
            TASTE OF PERFECTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D1B12]">
            Our Signature Creations
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            Handcrafted with 100% pure dairy butter, rich ganache, and organic syrups. Explore premium delights built for your luxurious dessert cravings.
          </p>
        </div>

        {/* Card Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_PRODUCTS.map((prod, index) => {
            const encodedMsg = encodeURIComponent(`Hi! I am interested in inquiring about your "${prod.name}" category starting at ${prod.startingPrice}. Could you please share the design catalogs?`);
            const waLink = `https://wa.me/919876543210?text=${encodedMsg}`;

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#6B4423]/10 hover:border-[#F4C95D] transition-all duration-300 flex flex-col group relative shadow-sm"
              >
                {/* Product Image Wrapper */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={prod.image}
                    alt={`${prod.name} Category Butter Story Lucknow`}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400";
                    }}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Bestseller Badge */}
                  {prod.bestSeller && (
                    <span className="absolute top-3 left-3 bg-[#F4C95D] text-[#2D1B12] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md">
                      Bestseller
                    </span>
                  )}

                  {/* Icon hover overlay */}
                  <div className="absolute top-3 right-3 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-[#2D1B12]" />
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-[#2D1B12] group-hover:text-[#6B4423] transition-colors duration-200">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  {/* Starting Price and Button */}
                  <div className="pt-4 border-t border-[#6B4423]/10 mt-4 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                        STARTING AT
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold text-[#2D1B12]">
                        {prod.startingPrice}
                      </span>
                    </div>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 bg-[#2D1B12] hover:bg-[#6B4423] text-white px-3.5 py-2.5 rounded-xl text-xs font-bold shadow-md transition-all duration-200"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order Catalog</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
