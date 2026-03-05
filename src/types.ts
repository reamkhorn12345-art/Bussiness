export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  description: string;
  tag?: string;
  status?: string;
}

export interface Review {
  id: string;
  userName: string;
  userImage: string;
  rating: number;
  comment: string;
  verified: boolean;
}

export type Page = 'home' | 'products' | 'about' | 'contact' | 'cart' | 'profile';
