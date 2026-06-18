import { Cake, Phone, Mail, MapPin, Instagram, Facebook, Heart } from 'lucide-react';
import { STORE_CONTACT } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Butter Story', href: '#about' },
    { name: 'Signature Products', href: '#products' },
    { name: 'Featured Luxury Cakes', href: '#cakes' },
    { name: 'Photo Gallery Portfolio', href: '#gallery' },
    { name: 'Loyal Customer Reviews', href: '#reviews' },
    { name: 'Visit Our Bakery Parlor', href: '#contact' }
  ];

  const categories = [
    { name: 'Cakes', href: '#cakes' },
    { name: 'French Pastries', href: '#products' },
    { name: 'Dessert Jars', href: '#products' },
    { name: 'Customized Birthday Bakes', href: '#cakes' },
    { name: 'Cafe Seating Lounge', href: '#contact' }
  ];

  return (
    <footer className="bg-[#2D1B12] text-[#FFF8E7]/80 pt-16 pb-8 relative overflow-hidden border-t border-[#6B4423]/10">
      
      {/* Footer Grid Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Store Intro & branding */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-[#F4C95D] flex items-center justify-center shadow-md">
                <Cake className="w-6 h-6 text-[#2D1B12]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Butter Story<span className="text-[#F4C95D] font-sans">.</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#FFF8E7]/60 leading-relaxed font-sans">
              Butter Story Bakery represents high-end dessert luxury in Indira Nagar, Lucknow. Handcrafting memories using premium ingredients and completely sanitized baking protocols.
            </p>
            <div className="flex space-x-3.5 pt-2">
              <a href={STORE_CONTACT.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 bg-white/5 hover:bg-[#F4C95D] hover:text-[#2D1B12] rounded-full flex items-center justify-center text-[#FFF8E7]/80 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={STORE_CONTACT.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 bg-white/5 hover:bg-[#F4C95D] hover:text-[#2D1B12] rounded-full flex items-center justify-center text-[#FFF8E7]/80 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest font-extrabold text-[#F4C95D]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#F4C95D] transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Menu Categories */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest font-extrabold text-[#F4C95D]">
              Menu Specialties
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <a href={cat.href} className="hover:text-[#F4C95D] transition-colors duration-200">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location details */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-widest font-extrabold text-[#F4C95D]">
              Directions & Help
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#F4C95D] shrink-0 mt-0.5" />
                <span className="leading-snug">{STORE_CONTACT.address}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-[#F4C95D] shrink-0" />
                <span>Call: {STORE_CONTACT.whatsappNumber}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4.5 h-4.5 text-[#F4C95D] shrink-0" />
                <span className="break-all">{STORE_CONTACT.email}</span>
              </li>
              <li className="text-xs text-[#FFF8E7]/55 leading-tight italic pt-1">
                Open Daily: 9:00 AM to 11:30 PM
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright declaration */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF8E7]/45 space-y-4 sm:space-y-0">
          <p>&copy; {currentYear} Butter Story Bakery Lucknow. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>for taste lovers in India.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
