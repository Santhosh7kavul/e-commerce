import { orders } from '@/lib/data';
import { OrderStatusBadge } from '@/components/admin/order-status-badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
  return orders.map((order) => ({
    id: order.id,
  }));
}

export default function OrderDetails({ params }: { params: { id: string } }) {
  const order = orders.find((o) => o.id === params.id);

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className="container py-8">
      <Button
        variant="ghost"
        className="mb-4"
        asChild
      >
        <Link href="/admin">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Orders
        </Link>
      </Button>

      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">Order #{order.id}</h2>
              <p className="text-muted-foreground">
                Placed on {format(new Date(order.createdAt), 'PPP')}
              </p>
            </div>
            <OrderStatusBadge status={order.status} />
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Customer Details</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> {order.customerName}</p>
              <p><span className="font-medium">Email:</span> {order.email}</p>
              <p><span className="font-medium">Address:</span> {order.address}</p>
              <p><span className="font-medium">City:</span> {order.city}</p>
              <p><span className="font-medium">Postal Code:</span> {order.postalCode}</p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              {order.items.map((item:any) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t">
                <p className="text-lg font-bold">
                  Total: ${order.total.toFixed(2)}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}