'use client';

import { useState } from 'react';
import { Product } from '@/lib/types';
import { products } from '@/lib/data';

interface SearchFilters {
  query: string;
  minPrice: number;
  maxPrice: number;
  categories: string[];
}

export function useSearch() {
  const [searchResults, setSearchResults] = useState<Product[]>(products);
  const [isLoading, setIsLoading] = useState(false);

  const search = (filters: SearchFilters) => {
    setIsLoading(true);
    try {
      const filtered = products.filter((product) => {
        const matchesQuery =
          !filters.query ||
          product.name.toLowerCase().includes(filters.query.toLowerCase()) ||
          product.description.toLowerCase().includes(filters.query.toLowerCase());

        const matchesPrice =
          product.price >= filters.minPrice && product.price <= filters.maxPrice;

        const matchesCategory =
          filters.categories.length === 0 ||
          filters.categories.includes(product.category);

        return matchesQuery && matchesPrice && matchesCategory;
      });

      setSearchResults(filtered);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    searchResults,
    isLoading,
    search,
  };
}