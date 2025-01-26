'use client';

import { useWishlist } from '@/hooks/useWishlist';
import { ProductCard } from '@/components/ui/product-card';

export function WishlistTab() {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Your wishlist is empty</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}