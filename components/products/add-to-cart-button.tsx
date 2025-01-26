'use client';

import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    toast.success('Added to cart');
  };

  return (
    <Button onClick={handleAddToCart} size="lg" className="w-full">
      Add to Cart
    </Button>
  );
}