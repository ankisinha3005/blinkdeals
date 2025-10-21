export interface ProductVariant {
  id: string;
  label: string; // e.g., "500g", "M", "Pack of 3"
  price: number;
  originalPrice: number;
  stock: number;
  isDefault?: boolean;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  images?: string[]; // Multiple product images for gallery
  stock: number;
  category: string;
  details?: Record<string, string>; // Product specifications as key-value pairs
  seller?: {
    name: string;
    rating: number;
    totalSales: number;
    description: string;
    joinedDate: string;
  };
  // Product variants (size, weight, quantity, etc.)
  variantType?: 'size' | 'weight' | 'quantity' | 'color'; // Type of variant
  variants?: ProductVariant[]; // Available variants
}

export interface UserData {
  id: string;
  name: string;
  phone: string;
  email?: string;
  gender?: 'male' | 'female' | 'other';
}

export type Page = 'home' | 'details' | 'checkout' | 'login' | 'becomeSeller' | 'support' | 'profile' | 'orders' | 'about' | 'careers' | 'pressMedia' | 'blog' | 'terms' | 'privacy' | 'cookiePolicy' | 'disclaimer' | 'accessibility';
