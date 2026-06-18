export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  startingPrice: string;
  image: string;
  bestSeller?: boolean;
}

export interface CakeItem {
  id: string;
  name: string;
  description: string;
  image: string;
  tag?: string;
  rating: number;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cakes' | 'pastries' | 'interior' | 'desserts' | 'celebration';
  image: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tag?: 'Eggless' | 'Best Seller' | 'Chef Special' | 'Signature';
}
