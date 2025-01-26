'use client';

import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { useWishlist } from '@/hooks/useWishlist';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';

interface WishlistButtonProps {
  product: Product;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function WishlistButton({ product, variant = 'outline', size = 'icon' }: WishlistButtonProps) {
  const { addItem, removeItem, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleClick = () => {
    if (inWishlist) {
      removeItem(product.id);
      toast.success('Removed from wishlist');
    } else {
      addItem(product);
      toast.success('Added to wishlist');
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart 
        className={`h-4 w-4 ${inWishlist ? 'fill-red-500 text-red-500' : ''}`} 
      />
    </Button>
  );
}