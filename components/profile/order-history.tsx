'use client';

import { orders } from '@/lib/data';
import { OrderStatusBadge } from '@/components/admin/order-status-badge';
import { OrderTracking } from '@/components/orders/order-tracking';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';
import Image from 'next/image';

export function OrderHistory() {
  const [expandedOrders, setExpandedOrders] = useState<string[]>([]);

  const toggleOrder = (orderId: string) => {
    setExpandedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  if (orders.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No orders yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id} className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Order #{order.id}</h3>
              <p className="text-sm text-muted-foreground">
                Placed on {format(new Date(order.createdAt), 'PPP')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <OrderStatusBadge status={order.status} />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleOrder(order.id)}
              >
                {expandedOrders.includes(order.id) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {expandedOrders.includes(order.id) && (
            <div className="mt-4 space-y-4">
              <OrderTracking order={order} />
              
              <div className="divide-y">
                {order.items.map((item:any) => (
                  <div key={item.id} className="flex gap-4 py-4">
                    <div className="relative h-20 w-20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
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
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="font-medium">Total</span>
                <span className="font-bold">${order.total.toFixed(2)}</span>
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}