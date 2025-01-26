import { Order, Product, User } from './types';

// export const products: Product[] = [
  export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 299.99,
    image: 'https://i.ibb.co/gDS22xX/pexels-photo-205926.webp',
    category: 'electronics',
    ratings: [
      {
        id: '1',
        userId: 'user1',
        userName: 'User Name1',
        productId: '1',
        rating: 5,
        comment: 'Amazing sound quality!',
        createdAt: '2024-03-19T10:00:00Z'
      }
    ],
    averageRating: 5,
    createdAt: '2024-03-19T10:00:00Z',
    reviews:[],
    tags: ['audio', 'wireless', 'premium']
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced smartwatch with health tracking features.',
    price: 199.99,
    image: 'https://i.ibb.co/4K88bhj/pexels-photo-437037.webp',
    category: 'electronics',
    ratings: [
      {
        id: '1',
        userId: 'user1',
        userName: 'User Name1',
        productId: '1',
        rating: 5,
        comment: 'Amazing sound quality!',
        createdAt: '2024-03-19T10:00:00Z'
      }
    ],
    averageRating: 0,
    createdAt: '2024-03-19T10:00:00Z',
    reviews:[],
    tags: ['wearable', 'smart', 'fitness'],
    
  }
];

export const orders: Order[] = [
  {
    id: '1',
    customerName: 'santhosh kavul',
    email: 'kavul@example.com',
    address: '123 Main St',
    city: 'New York',
    postalCode: '10001',
    items: [
      {
        id:'1',
        name: 'Premium Wireless Headphones',
        price: 299.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
      }
    ],
    total: 299.99,
    status: 'pending',
    createdAt: '2024-03-19T10:00:00Z'
  }
];

export const users: User[] = [
  {
    id: '1',
    email: 'user1@example.com',
    name: 'User Name1',
  },
  {
    id: '2',
    email: 'user2@example.com',
    name: 'User Name2',
  }
];