import { motion } from 'motion/react';
import { ShieldCheck, Truck, Sparkles, ChefHat, Leaf, Zap, HeartHandshake, Smile } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  // Mapping icons to values
  const iconsList = [
    Zap, // Freshly Baked Daily
    Sparkles, // Premium Ingredients
    Leaf, // Eggless Options Available
    ChefHat, // Custom Cake Designs
    Truck, // Same-Day Delivery
    ShieldCheck, // Hygienic Preparation
    HeartHandshake, // Experienced Bakers
    Smile // Affordable Luxury
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-[#FFF8E7]/20 text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Headers */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#6B4423] font-bold bg-[#F4C95D]/15 px-3.5 py-1.5 rounded-full inline-block">
            THE BUTTER STORY COMMITMENT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D1B12]">
            Why Lucknow Loves Us
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-sans">
            We pledge to elevate your dessert moments into luxurious, safe, and mouth-watering celebrations. Here is how we differ from ordinary local chains.
          </p>
        </div>

        {/* 4x2 Responsive Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconsList[index % iconsList.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-[#6B4423]/10 hover:border-[#F4C95D] hover:shadow-lg transition-all duration-300 group"
              >
                {/* Visual Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-[#F4C95D]/10 flex items-center justify-center text-[#6B4423] mb-5 group-hover:bg-[#6B4423] group-hover:text-white transition-all duration-350">
                  <IconComponent className="w-6 h-6 stroke-[1.75]" />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#2D1B12] mb-2 group-hover:text-[#6B4423] transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
