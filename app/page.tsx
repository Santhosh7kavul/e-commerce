'use client';

import { useState } from 'react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/ui/product-card';
import { ProductFilters } from '@/components/products/product-filters';
import { SortOption } from '@/lib/types';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  // const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [sortOption, setSortOption] = useState('newest');

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'priceasc':
          return a.price - b.price;
        case 'pricedesc':
          return b.price - a.price;
        case 'ratingdesc':
          return (b.averageRating || 0) - (a.averageRating || 0);
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

  return (
    <div className=" py-8 bg-accent">
      <h1 className="text-4xl font-bold mb-8">Featured Products</h1>
      
      <ProductFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortOption={sortOption}
        // onSortChange={setSortOption}
      />

      <div className='flex flex-col '>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </div>
    </div>
  );
}