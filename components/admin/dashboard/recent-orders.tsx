'use client';

import { Card } from "@/components/ui/card";
import { orders } from "@/lib/data";
import { OrderStatusBadge } from "../order-status-badge";
import { format } from "date-fns";

export function RecentOrders() {
  const recentOrders = orders.slice(0, 5);

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <div className="space-y-4">
        {recentOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-0">
            <div>
              <p className="font-medium">Order #{order.id}</p>
              <p className="text-sm text-muted-foreground">
                {format(new Date(order.createdAt), 'PPP')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-medium">${order.total.toFixed(2)}</p>
              <OrderStatusBadge status={order.status} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}