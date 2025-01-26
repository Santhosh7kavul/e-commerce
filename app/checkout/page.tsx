'use client';

import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CartItemCard } from '@/components/cart/cart-item';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with a payment provider
    toast.success('Order placed successfully!');
    clearCart();
    router.push('/');
  };

  if (items.length === 0) {
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>
            <div className="mt-4 text-right">
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </Card>
        </div>
        <div>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <Input required />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <Input required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" required />
              </div>
              <div>
                <label className="text-sm font-medium">Address</label>
                <Input required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">City</label>
                  <Input required />
                </div>
                <div>
                  <label className="text-sm font-medium">Postal Code</label>
                  <Input required />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Place Order
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}