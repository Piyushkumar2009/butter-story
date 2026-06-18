import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Star, Heart, Clock, Award } from 'lucide-react';
import { STORE_CONTACT } from '../data';

export default function HeroSection() {
  const stats = [
    { label: 'Fresh Varieties Daily', value: '50+', icon: Award },
    { label: 'Delighted Customers', value: '10,000+', icon: Heart },
    { label: 'Hot Express Deliveries', value: '3 Hours', icon: Clock }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 flex items-center overflow-hidden bg-[#FFF8E7] pb-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4C95D]/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#6B4423]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-[#F4C95D]/20 text-[#6B4423] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold w-fit mx-auto lg:mx-0 border border-[#F4C95D]/30"
            >
              <Star className="w-4 h-4 fill-current text-[#F4C95D]" />
              <span>Lucknow’s Finest Artisanal Dessert Shop</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2D1B12] leading-[1.15]"
            >
              Every Bite Tells a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B4423] to-[#F4C95D]">
                Delicious Story
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed"
            >
              Freshly baked custom cakes, French pastries, eggless delicacies, and luscious dessert jars. Handcrafted daily with pure premium butter and organic goodness at Indira Nagar, Lucknow.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#products"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#2D1B12] hover:bg-[#6B4423] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" />
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              <a
                href={STORE_CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.7 1.45h.007c5.58 0 10.12-4.54 10.12-10.1 0-2.69-1.05-5.22-2.95-7.13-1.9-1.9-4.43-2.95-7.12-2.95-5.59 0-10.13 4.54-10.13 10.14-.001 1.91.503 3.778 1.46 5.385l-.99 3.61 3.703-.97zm10.416-6.002c-.3-.15-1.782-.88-2.057-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.79-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.13.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.588-.492-.51-.675-.52-.172-.01-.37-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.782-.73 2.032-1.435.25-.705.25-1.31.175-1.435-.075-.125-.275-.2-.575-.35z" />
                </svg>
                <span>Order via WhatsApp</span>
              </a>
            </motion.div>

            {/* Quick Stats list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-3 pt-8 border-t border-[#6B4423]/10"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-1.5 justify-center sm:justify-start">
                      <Icon className="w-4 h-4 text-[#F4C95D] mx-auto sm:mx-0 mb-1 sm:mb-0" />
                      <span className="font-mono text-lg sm:text-xl font-bold text-[#2D1B12]">{stat.value}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Large Image Showcase Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual glow frame */}
            <div className="absolute inset-0 bg-[#F4C95D] rounded-full filter blur-3xl opacity-20 scale-95" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-2xl glowing-gold"
            >
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
                alt="Signature Belgian Chocolate Truffle Cake Butter Story"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800";
                }}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-3 rounded-xl backdrop-blur-sm flex items-center justify-between shadow-lg">
                <div>
                  <h3 className="font-serif font-bold text-xs sm:text-sm text-[#2D1B12]">Belgian Choco Truffle</h3>
                  <div className="flex items-center space-x-1 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-current text-[#F4C95D]" />
                    ))}
                    <span className="text-[10px] text-gray-500 ml-1">5.0 (250+ reviews)</span>
                  </div>
                </div>
                <span className="text-[#6B4423] font-mono font-bold text-sm">₹499 onw.</span>
              </div>
            </motion.div>

            {/* Floating indicator: Rating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-3 -right-3 z-20 bg-white text-[#2D1B12] shadow-xl rounded-2xl p-3 flex items-center space-x-3 border.5 border-[#6B4423]/15"
            >
              <div className="w-8 h-8 rounded-full bg-[#F4C95D]/25 flex items-center justify-center text-[#6B4423] shrink-0">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="leading-tight">
                <p className="font-bold text-xs">Rated 4.9 Stars</p>
                <p className="text-[10px] text-gray-400">by 900+ Lucknowites</p>
              </div>
            </motion.div>

            {/* Floating indicator: Eggless tag */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 2, ease: 'easeInOut' }}
              className="absolute -bottom-2 -left-4 z-20 bg-white text-[#2D1B12] shadow-xl rounded-2xl p-3 flex items-center space-x-2.5 border.5 border-[#6B4423]/15"
            >
              <span className="w-3 h-3 bg-green-600 rounded-full animate-ping" />
              <div className="leading-tight">
                <p className="font-bold text-xs text-green-600">100% Pure Vegetarian</p>
                <p className="text-[10px] text-gray-400">Completely segregated bakes</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
