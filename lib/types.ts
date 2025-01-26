// ... existing types ...

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface SearchFilters {
  query: string;
  minPrice: number;
  maxPrice: number;
  categories: string[];
}

export interface Order {
  id: string;
  createdAt: string;
  customerName: string;
  email: string;
  total: number;
  status: string;
  address: string;
  postalCode: string;
  city: string;
  items: any;
}

export interface OrderStatus {
  value: string;
  color: string;
  label: string;
}
export interface CartItem {
  id: string;
  quantity: number;
  price: number;
  name: string;
  image: string;
}
export interface Product {
  id: string;
  averageRating: number;
  price: number;
  name: string;
  createdAt: string;
  description: string;
  category: string;
  image: string;
  ratings:Rating[];
  reviews:Rating[];
  tags:string[];
}

export interface Rating {
  userName: string;
  rating: number;
  id: string;
  createdAt: string;
  userId:string;
  comment: string;
  productId: string;
}