'use client';

import { Product } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { AddToCartButton } from '@/components/products/add-to-cart-button';
import { WishlistButton } from '@/components/products/wishlist-button';
import { RatingStars } from '@/components/products/rating-stars';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="absolute top-4 right-4">
        <WishlistButton product={product} />
      </div>

      <div className="p-4">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-semibold truncate">{product.name}</h3>
          
          <div className="flex items-center gap-2 mt-1">
            <RatingStars rating={product.averageRating || 0} size={16} />
            <span className="text-sm text-muted-foreground">
              ({product.ratings?.length || 0})
            </span>
          </div>

          <p className="mt-1 font-bold">${product.price.toFixed(2)}</p>
        </Link>

        <div className="mt-4">
          <AddToCartButton product={product} />
        </div>
      </div>
    </Card>
  );
}