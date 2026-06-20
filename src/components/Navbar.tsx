import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Cake } from 'lucide-react';
import { STORE_CONTACT } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollToSegment = (e: React.MouseEvent<HTMLAnchorElement> | null, href: string) => {
    if (e) {
      e.preventDefault();
    }
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navbar = document.getElementById('main-navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      window.history.pushState(null, '', href);
    }
    setIsOpen(false);
  };

  // Support smooth offset scrolling if the page was loaded/refreshed with a hash URL parameter
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#')) {
      const timer = setTimeout(() => {
        const targetId = hash.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const navbar = document.getElementById('main-navbar');
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 300); // Yield to DOM layout rendering
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FFF8E7]/95 backdrop-blur-md shadow-sm border-b border-[#F4C95D]/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleScrollToSegment(e, '#home')}
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#6B4423] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:rotate-12">
                <Cake className="w-5 h-5 text-[#F4C95D]" />
              </div>
              <div className="leading-none">
                <h1 className="text-[#2D1B12] font-serif text-lg sm:text-xl font-bold tracking-tight">
                  BUTTER STORY
                </h1>
                <p className="text-[10px] uppercase tracking-widest text-[#6B4423] opacity-70">
                  Bakery & Patisserie
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSegment(e, link.href)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-[#2D1B12] hover:text-[#6B4423] hover:bg-[#F4C95D]/15 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Utility Actions */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Call Out CTA */}
              <a
                href={`tel:${STORE_CONTACT.phone}`}
                className="flex items-center space-x-2 bg-[#2D1B12] hover:bg-[#6B4423] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 border border-[#6B4423]/10"
              >
                <Phone className="w-4 h-4 text-[#F4C95D]" />
                <span>Call Store</span>
              </a>
              <a
                href={STORE_CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Actions and Burger Toggle */}
            <div className="flex lg:hidden items-center">
              <button
                id="navbar-mobile-menu-burger"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-[#6B4423]/10 text-[#2D1B12] transition-colors duration-200"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#FFF8E7] border-b border-[#F4C95D]/20 shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollToSegment(e, link.href)}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-[#2D1B12] hover:bg-[#F4C95D]/15 hover:text-[#6B4423] transition-all duration-200"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-[#6B4423]/10 flex flex-col space-y-3">
                  <a
                    href={`tel:${STORE_CONTACT.phone}`}
                    className="flex items-center justify-center space-x-2 bg-[#2D1B12] hover:bg-[#6B4423] text-white py-3 rounded-xl font-bold shadow-md w-full transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#F4C95D]" />
                    <span>Call Store</span>
                  </a>
                  <a
                    href={STORE_CONTACT.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold shadow-md w-full transition-colors"
                  >
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
