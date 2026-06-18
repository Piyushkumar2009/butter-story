import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag, Info, Leaf, Sparkles } from 'lucide-react';
import { MENU_PREVIEW } from '../data';

type MenuCategory = 'Cakes' | 'Pastries' | 'Desserts' | 'Snacks' | 'Beverages';

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState<MenuCategory>('Cakes');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs: MenuCategory[] = ['Cakes', 'Pastries', 'Desserts', 'Snacks', 'Beverages'];

  const handleItemOrder = (itemName: string, itemPrice: string) => {
    const text = `Hi! I want to order/inquire about "${itemName}" (${itemPrice}) from the Butter Story Lucknow online menu. Please verify availability and delivery options!`;
    const waLink = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');
  };

  // Filter items matching active tab AND search query
  const displayedItems = MENU_PREVIEW[activeTab].filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="menu" className="py-20 sm:py-28 bg-white text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#6B4423] font-bold bg-[#F4C95D]/15 px-3.5 py-1.5 rounded-full inline-block">
            AUTHENTIC TASTE CARD
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D1B12]">
            Our Taste Menu Preview
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-sans">
            Fresh ingredients are the core of our recipes. Click any menu item below to inquire or place your customized order request directly via WhatsApp.
          </p>
        </div>

        {/* Search input and tabs layout */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#6B4423]/10 pb-6 mb-12">
          
          {/* Active tabs */}
          <div className="flex space-x-1.5 overflow-x-auto scrollbar-none no-scrollbar flex-nowrap pb-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSearchQuery(''); // Clear query on tab swap
                }}
                className={`py-2.5 px-6 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-[#6B4423] text-white shadow-md'
                    : 'bg-[#FFF8E7]/60 text-gray-500 hover:bg-[#F4C95D]/10 hover:text-[#6B4423]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search bar input tool */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder={`Search in our ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FFF8E7]/20 outline-none border border-[#6B4423]/10 focus:border-[#F4C95D] p-3 pl-10 rounded-xl text-sm"
            />
          </div>

        </div>

        {/* Menu Listings */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {displayedItems.length > 0 ? (
              displayedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FFF8E7]/20 p-5 rounded-2xl border border-[#6B4423]/5 hover:border-[#F4C95D] hover:shadow-md transition-all duration-300 flex justify-between items-start gap-4 group"
                >
                  <div className="space-y-1.5 flex-1 pr-4">
                    {/* Item labels title & tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#2D1B12] group-hover:text-[#6B4423] transition-colors">
                        {item.name}
                      </h4>
                      {item.tag && (
                        <span
                          className={`text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                            item.tag === 'Eggless'
                              ? 'bg-green-105 text-green-705 bg-green-100 text-green-700'
                              : 'bg-[#F4C95D]/20 text-[#6B4423]'
                          }`}
                        >
                          {item.tag === 'Eggless' && <Leaf className="w-2.5 h-2.5 fill-current" />}
                          {item.tag !== 'Eggless' && <Sparkles className="w-2.5 h-2.5 fill-current" />}
                          <span>{item.tag}</span>
                        </span>
                      )}
                    </div>
                    {/* Description Paragraph */}
                    <p className="text-xs text-gray-500 leading-normal line-clamp-1 group-hover:line-clamp-none transition-all duration-300 font-sans">
                      {item.description}
                    </p>
                  </div>

                  {/* Ordering click tag */}
                  <div className="text-right shrink-0 flex flex-col items-end justify-between self-stretch">
                    <span className="font-mono text-base sm:text-lg font-bold text-[#6B4423]">
                      {item.price}
                    </span>

                    <button
                      onClick={() => handleItemOrder(item.name, item.price)}
                      className="inline-flex items-center space-x-1 text-[#6B4423] hover:text-[#2D1B12] mt-4 text-xs font-bold"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12 text-gray-400">
                <Info className="w-12 h-12 mx-auto mb-3 text-[#F4C95D]" />
                <p>No delicious items match your search. Try looking for something else!</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bulk Catering note block */}
        <div className="mt-12 bg-[#FFF8E7]/40 border border-[#6B4423]/10 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 font-sans">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-[#2D1B12]">Bulk Party Catering & Custom Boxes</h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Hosting a grand event, corporate function, or tea party in Lucknow? Get direct customized wholesale quotes.</p>
          </div>
          <button
            onClick={() => handleItemOrder('Bulk Catering/Party boxes', 'Custom Rate Package')}
            className="bg-[#6B4423] hover:bg-[#2D1B12] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-xl shrink-0 transition-colors duration-200 shadow-sm"
          >
            Inquire Bulk Rates
          </button>
        </div>

      </div>
    </section>
  );
}
