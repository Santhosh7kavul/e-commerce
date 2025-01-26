'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '@/lib/types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (product: Product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          const items = existingItem
            ? state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...state.items, { ...product, quantity: 1 }];
          return {
            items,
            total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
          };
        });
      },
      removeItem: (productId: string) => {
        set((state) => {
          const items = state.items.filter((item) => item.id !== productId);
          return {
            items,
            total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
          };
        });
      },
      updateQuantity: (productId: string, quantity: number) => {
        set((state) => {
          const items = state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          );
          return {
            items,
            total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
          };
        });
      },
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);