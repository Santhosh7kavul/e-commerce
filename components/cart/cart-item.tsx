'use client';

import { CartItem } from '@/lib/types';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItem;
}

export function CartItemCard({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center gap-4 py-4">
      <div className="relative h-24 w-24">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => removeItem(item.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}