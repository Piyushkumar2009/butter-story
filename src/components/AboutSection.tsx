import { motion } from 'motion/react';
import { ChefHat, Check, Award, Compass } from 'lucide-react';

export default function AboutSection() {
  const corePillars = [
    {
      title: 'Only Pure Real Butter',
      desc: 'We never compromise with unhealthy trans-fat margarine. Only real dairy butter and cream for rich taste.',
      icon: Award
    },
    {
      title: 'Certified Master Chefs',
      desc: 'Our pastry team comprises trained bakers focusing on delicate architectural alignments of cake layers.',
      icon: ChefHat
    },
    {
      title: 'Bespoke Customization',
      desc: 'Formulate bespoke designs tailored to your particular thematic preferences, birthday themes, or wedding color boards.',
      icon: Compass
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white text-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Overlapping Images Column */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            
            {/* Visual Backplate */}
            <div className="absolute -left-4 -top-4 w-72 h-72 border-4 border-[#F4C95D]/40 rounded-3xl -z-10" />

            {/* Main Upper Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10 w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop"
                alt="Chef preparing delicious croissants in Butter Story kitchen"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800";
                }}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Overlapping Floating Smaller Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-2 lg:-right-6 z-20 w-[180px] sm:w-[220px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFF8E7]"
            >
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop"
                alt="Raw baking ingredients premium flour chocolate"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400";
                }}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Chef signature sticker */}
            <div className="absolute -top-6 -right-4 bg-[#F4C95D] text-[#2D1B12] text-[10px] font-bold tracking-widest uppercase py-1.5 px-3 rounded-full shadow-lg z-20">
              Chef Craft
            </div>

          </div>

          {/* About Stories Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-2">
              <span className="block font-sans text-xs uppercase tracking-widest text-[#6B4423] font-bold">
                OUR SACRED BRAND STORY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D1B12]">
                We Bake Stories, Not <br />Just Mere Cakes
              </h2>
            </div>

            <p className="font-sans text-base leading-relaxed text-gray-700">
              Established with an absolute passion to bring top-tier premium baking craftsmanship to Lucknow, <strong className="text-[#6B4423] font-semibold">Butter Story Bakery</strong> grew from a small creative workshop into a prominent dessert boutique. We believe a dessert shouldn’t just satisfy your sweet tooth—it should create unforgettable milestone memories.
            </p>

            <p className="font-sans text-base leading-relaxed text-gray-700">
              Every single product that walks out our doorway in Indira Nagar is processed under strict quality controls. From sourcing rich organic vanilla pods directly from local growers to high-quality Belgian dark chocolate drops, every recipe starts with simple, genuine, unprocessed ingredients.
            </p>

            {/* Custom Pillars */}
            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-[#6B4423]/10">
              {corePillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-[#F4C95D]/20 flex items-center justify-center text-[#6B4423] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#2D1B12]">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-500 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quality list of checkmarks */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                '100% Fine Cocoa butter',
                'No artificial preservatives',
                'Perfect cream distribution',
                '100% vegetarian-segregated pans'
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
