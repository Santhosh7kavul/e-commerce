'use client';

import { products } from '@/lib/data';
import { Product } from '@/lib/types';
import { ProductCard } from '@/components/ui/product-card';

interface RecommendedProductsProps {
  currentProductId: string;
  category: string;
}

export function RecommendedProducts({ currentProductId, category }: RecommendedProductsProps) {
  const recommendedProducts = products
    .filter(product => 
      product.id !== currentProductId && 
      product.category === category
    )
    .slice(0, 3);

  if (recommendedProducts.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}