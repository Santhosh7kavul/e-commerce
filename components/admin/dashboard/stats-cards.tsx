'use client';

import { Card } from "@/components/ui/card";
import { orders, products, users } from "@/lib/data";
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";

export function StatsCards() {
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = orders.length;
  const totalUsers = users.length;
  const totalProducts = products.length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <DollarSign className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
            <p className="text-2xl font-bold">${totalRevenue.toFixed(2)}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <ShoppingCart className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
            <p className="text-2xl font-bold">{totalOrders}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Users</p>
            <p className="text-2xl font-bold">{totalUsers}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Package className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Products</p>
            <p className="text-2xl font-bold">{totalProducts}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}