import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Gift, Sparkles, Smile, Star, ArrowUpRight } from 'lucide-react';

interface Occasion {
  name: string;
  headline: string;
  description: string;
  flavors: string[];
  sizes: string;
  image: string;
}

export default function SpecialOccasions() {
  const [activeTab, setActiveTab] = useState('Birthdays');

  const occasions: Record<string, Occasion> = {
    Birthdays: {
      name: 'Birthdays',
      headline: 'Make Aging Sweeter with Custom Themes',
      description: 'From 1st birthdays to centennial landmarks, order customized 2D, 3D character cakes, chocolate drips, or premium photo layout sheets built around the celebrant’s hobbies, colors, and styling drafts.',
      flavors: ['Belgian Chocolate Truffle', 'Fresh Mango Cream', 'Salty Caramel Butterscotch'],
      sizes: 'From 0.5 kg to 5.0 kg',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=800&auto=format&fit=crop'
    },
    Anniversaries: {
      name: 'Anniversaries',
      headline: 'A Golden Toast To Sweet Love',
      description: 'Mark marital milestones with sleek rose-gold drips, multi-layered sponge arrangements, fondant rose structures, or beautiful modern minimalist heart shapes layered with rich mousse cream.',
      flavors: ['Crimson Red Velvet & Cheese', 'Belgian Truffle Nut', 'Strawberry Glaze Cream'],
      sizes: 'From 1.0 kg to 5.0 kg',
      image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?q=80&w=800&auto=format&fit=crop'
    },
    Weddings: {
      name: 'Weddings',
      headline: 'Spectacular Tiered Masterpieces for Your Best Day',
      description: 'Elegant multi-tier handcrafted wedding wonders embellished with real sugar orchids, edible gold foils, cascading vanilla roses, and secure structural columns. Book structural consultation with our master pastry chefs.',
      flavors: ['Classic Premium White Vanilla Bean', 'Dark Royale Truffle', 'Rich Italian Roasted Almond Hazelnut'],
      sizes: 'From 3.0 kg to 15.0 kg',
      image: 'https://images.unsplash.com/photo-1525257023061-f5383b5d841a?q=80&w=800&auto=format&fit=crop'
    },
    'Baby Showers': {
      name: 'Baby Showers',
      headline: 'Celebrate Sweet New Beginnings',
      description: 'Joyful pastel-colored designs featuring adorable fondant storks, clouds, teddy bears, or gender-reveal color surprises baked securely inside moist, layered cake bases.',
      flavors: ['Fruit Delights Cocktail', 'Rich Butterscotch Crunch', 'White Forest Cherry'],
      sizes: 'From 1.5 kg to 4.0 kg',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop'
    },
    Corporate: {
      name: 'Corporate Events',
      headline: 'Elevate Company Milestones Custom Branded',
      description: 'Flawless edible prints featuring company brand logos, neat geometric rectangular shapes, custom cupcakes for individual worker distribution, and custom sheet bakes ready for bulk product launch milestones.',
      flavors: ['Deep Chocolate Ganache', 'Premium Cappuccino Coffee', 'Pineapple Delight'],
      sizes: 'From 2.0 kg to 10.0 kg Plus',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop'
    },
    Festivals: {
      name: 'Festivals',
      headline: 'Indian Sparkles, Modern Fusion Wonders',
      description: 'Incredible customized collection items and festive gift hampers for Diwali, Holi, Rakshabandhan, Eid, and Christmas. Fusion sweets combined with high-quality bakes.',
      flavors: ['Saffron Pista Fusion', 'Rose Petal Almond Fudge', 'Thandai White Chocolate'],
      sizes: 'Custom Hampers & Sweet Bundles',
      image: 'https://images.unsplash.com/photo-1548907040-4d42b5211514?q=80&w=800&auto=format&fit=crop'
    }
  };

  const selectedOccasion = occasions[activeTab];

  const waLink = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hi! I would like to inquire about customized cake/catering services for a "${selectedOccasion.name}" celebration. Preferred flavors: ${selectedOccasion.flavors.join(', ')}. Please send me details!`
  )}`;

  return (
    <section id="specialties" className="py-20 sm:py-28 bg-[#FFF8E7]/40 text-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#6B4423] font-bold bg-[#F4C95D]/15 px-3.5 py-1.5 rounded-full inline-block">
            SPECIAL OCCASIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D1B12]">
            Bespoke Cake Services
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-sans">
            Every celebration has a heartbeat. We design custom masterpiece cakes, dessert setups, and gift boxes tailored specifically to set the sweet rhythm of your event.
          </p>
        </div>

        {/* Tab switcher buttons - responsive horizontal slide layout */}
        <div className="flex overflow-x-auto space-x-2 pb-4 scrollbar-thin scrollbar-track-transparent no-scrollbar border-b border-[#6B4423]/10 mb-12">
          {Object.keys(occasions).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-6 rounded-full text-sm font-bold tracking-wide transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-[#6B4423] text-white shadow-md'
                  : 'bg-white text-gray-500 hover:bg-[#6B4423]/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main interactive cards container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-12 gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl border border-[#6B4423]/10 shadow-lg"
          >
            {/* Left Description Layout Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-1.5 bg-[#F4C95D]/15 text-[#6B4423] py-1 px-3.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>Custom Celebration Design</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1B12] leading-snug">
                {selectedOccasion.headline}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
                {selectedOccasion.description}
              </p>

              {/* Occasions Metadata: Sizes and Flavors */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[#6B4423]/10">
                
                {/* Sizes card component */}
                <div className="bg-[#FFF8E7]/40 p-4 rounded-2xl border border-[#6B4423]/5">
                  <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">RECOMMENDED SIZES</span>
                  <span className="block font-medium text-sm text-[#2D1B12] mt-1">
                    {selectedOccasion.sizes}
                  </span>
                </div>

                {/* Flavors cards */}
                <div className="bg-[#FFF8E7]/40 p-4 rounded-2xl border border-[#6B4423]/5">
                  <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">TOP RECOMMENDED FLAVORS</span>
                  <ul className="mt-1 space-y-0.5">
                    {selectedOccasion.flavors.map((flavor, index) => (
                      <li key={index} className="text-xs font-semibold text-[#2D1B12] flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 bg-[#F4C95D] rounded-full" />
                        <span>{flavor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Inquiry Buttons */}
              <div className="pt-4">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#2D1B12] hover:bg-[#6B4423] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all duration-300 group"
                >
                  <span>Inquire for {selectedOccasion.name}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

            {/* Right Image Layout Column */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white-accent border-white">
              <img
                src={selectedOccasion.image}
                alt={`${selectedOccasion.name} Cake Catering Butter Story`}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=600";
                }}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 animate-none pointer-events-none" />
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
