import { MapPin, Phone, MessageSquare, Clock, ArrowUpRight, Compass } from 'lucide-react';
import { STORE_CONTACT } from '../data';

export default function LocationStore() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STORE_CONTACT.address)}`;

  return (
    <div className="py-20 sm:py-28 bg-[#FFF8E7]/30 text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Store Details and Contacts Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#6B4423] font-bold bg-[#F4C95D]/15 px-3.5 py-1.5 rounded-full inline-block">
                VISIT THE BAKERY ENCLAVE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2D1B12] leading-tight">
                Drop in for Warm Croissants & Coffee
              </h2>
              <p className="text-sm sm:text-base text-gray-500 font-sans">
                Experience the luxury of premium, freshly-brewed cappuccinos paired with our buttery pastries at our cozy cafe parlor located under Shalimar Chauraha, Lucknow.
              </p>
            </div>

            {/* Store Information Listings Card */}
            <div className="space-y-4">
              
              {/* Address card */}
              <div className="flex items-start space-x-3.5 bg-white p-4 rounded-2xl border border-[#6B4423]/5 shadow-sm">
                <MapPin className="w-5 h-5 text-[#F4C95D] mt-1 shrink-0" />
                <div className="leading-normal">
                  <span className="block text-[10px] uppercase font-bold text-gray-400 font-sans">STORE LOCATION</span>
                  <span className="block font-medium text-sm text-[#2D1B12] mt-0.5">
                    {STORE_CONTACT.address}
                  </span>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start space-x-3.5 bg-white p-4 rounded-2xl border border-[#6B4423]/5 shadow-sm">
                <Clock className="w-5 h-5 text-[#F4C95D] mt-1 shrink-0" />
                <div className="leading-normal">
                  <span className="block text-[10px] uppercase font-bold text-gray-400 font-sans">BUSINESS HOURS</span>
                  <span className="block font-medium text-sm text-[#2D1B12] mt-0.5">
                    {STORE_CONTACT.hours}
                  </span>
                </div>
              </div>

              {/* Call support card */}
              <div className="flex items-start space-x-3.5 bg-white p-4 rounded-2xl border border-[#6B4423]/5 shadow-sm">
                <Phone className="w-5 h-5 text-[#F4C95D] mt-1 shrink-0" />
                <div className="leading-normal">
                  <span className="block text-[10px] uppercase font-bold text-gray-400 font-sans">PHONE ENQUIRIES</span>
                  <span className="block font-medium text-sm text-[#2D1B12] mt-0.5">
                    {STORE_CONTACT.whatsappNumber}
                  </span>
                </div>
              </div>

            </div>

            {/* Live CTAs */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#2D1B12] hover:bg-[#6B4423] text-white font-bold py-4 rounded-xl text-xs sm:text-sm shadow-md transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={`tel:${STORE_CONTACT.phone}`}
                className="flex items-center justify-center space-x-2 bg-white hover:bg-[#FFF8E7] text-[#6B4423] border border-[#6B4423]/10 font-bold py-4 rounded-xl text-xs sm:text-sm shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Map Frame Right Column */}
          <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full rounded-3xl overflow-hidden border-4 border-white shadow-xl">
            <iframe
              src={STORE_CONTACT.googleMapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Butter Story Bakery Indira Nagar Lucknow Google Map Coordinates"
              className="absolute inset-0"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
