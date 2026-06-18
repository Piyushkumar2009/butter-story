import { motion } from 'motion/react';
import { Sparkles, Smile, Cake, ShieldCheck } from 'lucide-react';

export default function TrustIndicators() {
  const metrics = [
    {
      id: 'm1',
      icon: Smile,
      label: '5-Star Reviews',
      value: '900+',
      description: 'On Google, Swiggy, and direct feedback channels'
    },
    {
      id: 'm2',
      icon: Cake,
      label: 'Orders Delivered',
      value: '10,000+',
      description: 'Satisfied celebrations across entire Lucknow'
    },
    {
      id: 'm3',
      icon: Sparkles,
      label: 'Unique Varieties',
      value: '50+',
      description: 'Custom flavors, custom shapes & sizing tarts'
    },
    {
      id: 'm4',
      icon: ShieldCheck,
      label: 'Freshly Baked Daily',
      value: '100%',
      description: 'Melt-in-mouth textures direct from high-temp ovens'
    }
  ];

  return (
    <div className="bg-[#6B4423] text-white py-12 relative overflow-hidden">
      {/* Absolute faint background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-1 bg-transparent">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                {/* Rounded Icon Wrapper */}
                <div className="mx-auto w-12 h-12 rounded-2xl bg-[#F4C95D]/15 flex items-center justify-center text-[#F4C95D] border border-[#F4C95D]/20 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Statistics Value */}
                <span className="block font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F4C95D] tracking-tight">
                  {metric.value}
                </span>

                {/* Statistics Label */}
                <span className="block font-serif text-sm sm:text-base font-bold mt-2 text-white">
                  {metric.label}
                </span>

                {/* Short Paragraph */}
                <p className="text-xs text-[#FFF8E7]/70 max-w-[180px] mx-auto mt-1 leading-normal font-sans">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
