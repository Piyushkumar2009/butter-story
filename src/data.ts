import { Product, CakeItem, Review, FAQItem, GalleryItem, MenuItem } from './types';

// Signature Products
export const SIGNATURE_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Artisanal Cakes',
    category: 'Cakes',
    description: 'Bespoke custom cakes baked with premium real butter and high-quality chocolate, perfect for any special milestone.',
    startingPrice: '₹499 onw.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    bestSeller: true
  },
  {
    id: 'prod-2',
    name: 'Artisan Pastries',
    category: 'Pastries',
    description: 'Flaky layers of melt-in-the-mouth pastries, filled with fresh fruits, silky ganache, or light vanilla bean cream.',
    startingPrice: '₹120 onw.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'prod-3',
    name: 'Layered Dessert Jars',
    category: 'Dessert Jars',
    description: 'Delectable, portable layers of sponge, premium fillings, and frosted toppings served in sleek glass jars.',
    startingPrice: '₹140 onw.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop',
    bestSeller: true
  },
  {
    id: 'prod-4',
    name: 'Gourmet Cookies',
    category: 'Cookies',
    description: 'Perfectly baked cookies loaded with Belgian chocolate chunks, roasted nuts, and a gooey butter texture.',
    startingPrice: '₹80 onw.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'prod-5',
    name: 'Exquisite Cupcakes',
    category: 'Cupcakes',
    description: 'Fluffy miniature cakes topped with swirling peaks of silky buttercream in classic and seasonal flavors.',
    startingPrice: '₹70 onw.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'prod-6',
    name: 'Fudgy Cocoa Brownies',
    category: 'Brownies',
    description: 'Dense, chocolatey, and incredibly fudgy brownies with a beautiful crinkly top. Served warm in-cafe.',
    startingPrice: '₹110 onw.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'prod-7',
    name: 'Luxury Festive Sweets',
    category: 'Luxury Sweets',
    description: 'Premium curated sweet collections with an elegant fusion twist, packed with dry fruits, saffron, and pure ghee.',
    startingPrice: '₹599 onw.',
    image: 'https://images.unsplash.com/photo-1548907040-4d42b5211514?q=80&w=600&auto=format&fit=crop',
    bestSeller: true
  },
  {
    id: 'prod-8',
    name: 'Custom Celebration Cakes',
    category: 'Customized Celebration Cakes',
    description: 'Bespoke designs customized to your imagination for birthdays, golden anniversaries, and grand weddings.',
    startingPrice: 'Order on demand',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=600&auto=format&fit=crop'
  }
];

// Featured Cakes
export const FEATURED_CAKES: CakeItem[] = [
  {
    id: 'cake-1',
    name: 'Belgian Chocolate Truffle Cake',
    description: 'Layers of soft chocolate sponge coated in a rich, velvety Belgian chocolate ganache. A true bestseller.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    tag: 'Bestseller',
    rating: 5
  },
  {
    id: 'cake-2',
    name: 'Crimson Red Velvet Cake',
    description: 'Exquisite deep red cocoa layers paired with a signature luscious Madagascar cream-cheese frosting.',
    image: 'https://images.unsplash.com/photo-1616431575958-82aa6472f857?q=80&w=600&auto=format&fit=crop',
    tag: 'Classic',
    rating: 4.9
  },
  {
    id: 'cake-3',
    name: 'Wild Blueberry Glaze Cake',
    description: 'Tangy-sweet compote of wild blueberries layered inside dynamic white chocolate sponge frosted with vanilla cream.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=600&auto=format&fit=crop',
    tag: 'Fruity Delight',
    rating: 4.8
  },
  {
    id: 'cake-4',
    name: 'Salty Butterscotch Drip Cake',
    description: 'Infused butterscotch sponge frosted with caramelized crumbs and dripping brown sugar butter caramel.',
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?q=80&w=600&auto=format&fit=crop',
    tag: 'Chef Choice',
    rating: 4.9
  },
  {
    id: 'cake-5',
    name: 'Classic Black Forest Luxury Cake',
    description: 'Traditional cherries, white cream frosting, moist cocoa sponge, covered generously in dark chocolate curls.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=600&auto=format&fit=crop',
    tag: 'Timeless',
    rating: 4.7
  },
  {
    id: 'cake-6',
    name: 'Designer Celebration Cakes',
    description: 'Custom handcrafted cakes featuring premium architectural layers, thematic fondants, and delicate sugar flowers.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=600&auto=format&fit=crop',
    tag: 'Custom Luxury',
    rating: 5
  },
  {
    id: 'cake-7',
    name: 'High-Res Photo Cakes',
    description: 'Your beautiful memories printed on a moist, rich cream cake using 100% edible ink and premium edible sheets.',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=600&auto=format&fit=crop',
    tag: 'Most Loved',
    rating: 4.8
  },
  {
    id: 'cake-8',
    name: 'Grand Royal Wedding Cake',
    description: 'Multi-tiered exquisite creations handcrafted by chefs. Decorated with elegance, fresh flowers, and edible gold foil.',
    image: 'https://images.unsplash.com/photo-1525257023061-f5383b5d841a?q=80&w=600&auto=format&fit=crop',
    tag: 'Magnificent',
    rating: 5
  }
];

// Why Choose Us Info
export const WHY_CHOOSE_US = [
  {
    id: 'why-1',
    title: 'Freshly Baked Daily',
    description: 'Every morning, our kitchens fill with the sweet aroma of cakes and breads baked straight from scratch. No day-old cakes.'
  },
  {
    id: 'why-2',
    title: 'Premium Ingredients',
    description: 'We source pure Kerrygold-standard level butter, premium Belgian dark chocolate, and organic fruits to ensure unmatched flavor.'
  },
  {
    id: 'why-3',
    title: '100% Eggless Options',
    description: 'We offer a wide of range of decadent 100% eggless cakes and pastries baked in a completely separated hygienic zone.'
  },
  {
    id: 'why-4',
    title: 'Bespoke Custom Designs',
    description: 'Bring us your mood boards or reference drawings. Our expert pastry chefs turn your cake dreams into a stellar reality.'
  },
  {
    id: 'why-5',
    title: 'Same-Day Express Delivery',
    description: 'Forgot an anniversary or birthday? Order from our selected signature collection for fresh delivery in Lucknow under 3 hours.'
  },
  {
    id: 'why-6',
    title: 'Hygienic Preparation',
    description: 'Our bakeshop strictly follows ultra-hygienic food safety guidelines, continuous thermal screenings, and clean-room glove rules.'
  },
  {
    id: 'why-7',
    title: 'Experienced Master Bakers',
    description: 'Our kitchen team includes award-winning dessert chefs who have trained under luxury hotel kitchen masters.'
  },
  {
    id: 'why-8',
    title: 'Affordable Luxury',
    description: 'Indulge in 5-star taste, gorgeous design, and beautiful, high-end presentation box packaging at sensible local prices.'
  }
];

// Testimonials
export const TESTIMONIALS: Review[] = [
  {
    id: 'rev-1',
    name: 'Anjali Sharma',
    role: 'Event Designer, Lucknow',
    comment: 'The Belgian Chocolate Truffle Cake we ordered for our anniversary was a masterpiece! Absolutely melted in the mouth. It looked stunning and tasted rich without being overly sweet. Everyone at the party was asking where it came from!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    date: '3 weeks ago'
  },
  {
    id: 'rev-2',
    name: 'Rohit Srivastava',
    role: 'Tech Lead, Indira Nagar',
    comment: 'Butter Story has truly changed the cake game in Lucknow. Their Red Velvet cake represents perfection—moist sponge, perfectly balanced frosting. Outstanding customer service, they custom designed my daughters Barbie-themed cake inside 24 hours!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    date: '1 month ago'
  },
  {
    id: 'rev-3',
    name: 'Siddharth Taneja',
    role: 'Food Blogger, Lucknow Foodies',
    comment: 'Very few bakeries master the texture of eggless pastries, but Butter Story is phenomenal. Their Mango Mousse Cup and Salted Caramel jars are top tier. Highly recommend sitting in their beautiful Indira Nagar cafe for hot coffee and fresh croissants.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    date: '2 weeks ago'
  },
  {
    id: 'rev-4',
    name: 'Pooja Dwivedi',
    role: 'Mother of two, Gomti Nagar',
    comment: 'Same-day delivery was highly impressive. I ordered a butterscotch pineapple hybrid theme photo cake at noon, and it was safely delivered before the 6 PM birthday party. Flawless presentation, secure container box packing. 10/10!',
    rating: 4.8,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
    date: '2 days ago'
  }
];

// Photo Gallery Items
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Floral Wedding Masterpiece',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1525257023061-f5383b5d841a?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-2',
    title: 'French Glazed Fruit Tart',
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-3',
    title: 'Our Warm Cafe Seating',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-4',
    title: 'Double Chocolate Fudge Dessert Cup',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-5',
    title: 'Magical Unicorn Birthday Cake',
    category: 'celebration',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-6',
    title: 'Luxury Belgian Choco Slices',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-7',
    title: 'Elegant Macaron Array',
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-8',
    title: 'Charming Cafe Barista Counter',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-9',
    title: 'Gold-Foil Strawberry Jars',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop'
  }
];

// Interactive Menu Categorization
export const MENU_PREVIEW: Record<string, MenuItem[]> = {
  Cakes: [
    { id: 'm-c1', name: 'Premium Butterscotch Crunch Cake', description: 'Moist golden sponge covered with butterscotch nuts and caramel drizzle.', price: '₹499', tag: 'Best Seller' },
    { id: 'm-c2', name: 'Royale Red Velvet & Cheese Frosting', description: 'Vibrant red layers frosted with luxurious Dutch white cream cheese.', price: '₹599', tag: 'Signature' },
    { id: 'm-c3', name: 'Belgian Chocolate Truffle Gateau', description: 'Intense 55% dark chocolate ganache, moist cake sponge with thin chocolate shards.', price: '₹549', tag: 'Best Seller' },
    { id: 'm-c4', name: 'Fresh Seasonal Mango Magic Cake', description: 'Light sponge decorated with chunks of real Dasheri / Chausa mangoes & sweet cream.', price: '₹649', tag: 'Chef Special' },
    { id: 'm-c5', name: 'Choco Lava Birthday Drip Cake', description: 'Rich chocolate sponge stuffed with a flowing molten hazelnut ganache center.', price: '₹599', tag: 'Eggless' },
    { id: 'm-c6', name: 'Double Layered Black Forest cake', description: 'Kirsch water cherries, sweet white snowflake cream, vanilla sponge and dark curls.', price: '₹479', tag: 'Eggless' }
  ],
  Pastries: [
    { id: 'm-p1', name: 'Gourmet Red Velvet Pastry Slice', description: 'Single portion slice of ours classic crimson cake with rich creamy layers.', price: '₹120', tag: 'Best Seller' },
    { id: 'm-p2', name: 'Belgian Truffle Pastry', description: 'Silky solid dark ganache glazed cake slice for serious cocoa lovers.', price: '₹130', tag: 'Best Seller' },
    { id: 'm-p3', name: 'French Croissant (Salted Butter)', description: 'Flaky, buttery, crescent crescent crust folded with finest sweet butter layers.', price: '₹110', tag: 'Signature' },
    { id: 'm-p4', name: 'Blueberry Cheesecake Deluxe Slice', description: 'Cold cream cheese custard set over buttery biscuit crumbs, loaded with purée.', price: '₹150', tag: 'Chef Special' }
  ],
  Desserts: [
    { id: 'm-d1', name: 'Classic Tiramisu Dessert Jar', description: 'Espresso-soaked ladyfingers, rich whipped sweet mascarpone, lightly dusted with cocoa.', price: '₹160', tag: 'Signature' },
    { id: 'm-d2', name: 'Red Velvet Dessert Jar', description: 'Alternate layers of vibrant base and whipping sweet premium cream cheese.', price: '₹140', tag: 'Best Seller' },
    { id: 'm-d3', name: 'Intense Fudge Walnut Brownie', description: 'Oven fresh, thick, heavy fudgy texture brownie stuffed with soft broken walnuts.', price: '₹110', tag: 'Best Seller' },
    { id: 'm-d4', name: 'Strawberry Panna Cotta Glass', description: 'A silky Italian cream dessert topped with rich seasonal strawberry coulis.', price: '₹130', tag: 'Eggless' }
  ],
  Snacks: [
    { id: 'm-s1', name: 'Baked Paneer Tikka Patty', description: 'Puff pastry filled with soft clay-oven grilled cottage cheese chunks & spices.', price: '₹80', tag: 'Eggless' },
    { id: 'm-s2', name: 'Smoked Jalapeno Cheese Crostini', description: 'Toasted baguette slices baked with golden cheddar, mozzarella, & hot chili herbs.', price: '₹120', tag: 'Chef Special' },
    { id: 'm-s3', name: 'Classic Garlic Butter Pull-Apart', description: 'Soft golden toasted pull-apart bread bun brushed heavily with fresh parsley herbs and garlic.', price: '₹99', tag: 'Eggless' },
    { id: 'm-s4', name: 'Vegetable Club Sandwich', description: 'Triple decker sandwich stuffed with crisp lettuce, grilled zucchini, mint spreading & house mayo.', price: '₹140', tag: 'Best Seller' }
  ],
  Beverages: [
    { id: 'm-b1', name: 'Double Shot Espresso', description: 'Strong, intense dark roast freshly brewed standard Italian style bean extraction.', price: '₹90' },
    { id: 'm-b2', name: 'Caffe Latte Macchiato', description: 'Creamy high quality milk steamed to perfection with a thick silky microfoam and shot.', price: '₹140', tag: 'Best Seller' },
    { id: 'm-b3', name: 'Hazelnut Iced Frappe', description: 'Blended cold espresso cream milk with nutty hazelnut syrup topped with dairy fluff.', price: '₹160', tag: 'Best Seller' },
    { id: 'm-b4', name: 'Hibiscus Iced Berry Infusion', description: 'Sweet tang floral herbal tea shaken with sweet wild forest berry pulp over ice cubes.', price: '₹130', tag: 'Signature' }
  ]
};

// FAQs
export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do you make custom celebration and designer cakes?',
    answer: 'Absolutely! Custom and designer cakes are our absolute specialty. We can create tiered cakes, character cakes, premium floral designs, and photo cakes customized to your reference pictures, colors, and flavors. Please share your draft mood boards on WhatsApp for a quick price quotation.'
  },
  {
    id: 'faq-2',
    question: 'Do you offer same-day cake delivery in Lucknow?',
    answer: 'Yes! We offer prompt temperature-controlled express delivery within 3 hours for our signature cake collection. For highly customized designer or multi-tier wedding cakes, we recommend booking at least 24 to 48 hours in advance so our chefs can perfect the structural aesthetics.'
  },
  {
    id: 'faq-3',
    question: 'Are eggless cakes and pastries available?',
    answer: 'Yes, absolutely. Over 80% of our products are available in 100% eggless options. We maintain strict vegetarian baking protocols, utilizing separate counter surfaces, pans, mixers, and premium plant-based emulsifiers to ensure authentic flavor, fluffy rise, and absolute purity.'
  },
  {
    id: 'faq-4',
    question: 'What is the advance booking duration for wedding cakes?',
    answer: 'For complex multi-tier grand wedding cakes, we strongly recommend booking 3 to 5 days in advance. This permits a thorough taste consultation, precise structural framing planning, and custom ordering of specialty floral and edible gold decorations.'
  },
  {
    id: 'faq-5',
    question: 'What payment methods do you accept at the store and online?',
    answer: 'We offer full convenience! We accept UPI (Google Pay, PhonePe, Paytm), modern Credit and Debit Cards (Visa, Mastercard, RuPay), Netbanking, and Cash on Pick-up/Delivery. For bulk customized cake bookings, we accept a 50% advance token payment on UPI to confirm production slots.'
  }
];

export const STORE_CONTACT = {
  name: 'Butter Story Bakery',
  address: 'A-1020, Shalimar Chauraha, A Block, Indira Nagar, Lucknow, Uttar Pradesh 226016',
  googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.61280332851!2d80.976077!3d26.882103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be29ea04d70b7%3A0xacc9bdc64cd93eb6!2sIndira%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718451100000!5m2!1sen!2sin',
  phone: '+919876543210',
  whatsapp: 'https://wa.me/919876543210?text=Hello%20Butter%20Story%20Bakery!%20I%20would%20like%20to%20inquire%20about%20your%20cakes.',
  email: 'orders@butterstorybakery.com',
  hours: 'Everyday: 9:00 AM - 11:30 PM',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  whatsappNumber: '+91 98765 43210'
};
