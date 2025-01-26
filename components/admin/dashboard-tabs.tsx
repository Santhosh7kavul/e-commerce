'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { UsersTable } from "./users-table";
import { OrderTable } from "./order-table";
import { OrderFilters } from "./order-filters";
import { useAdmin } from "@/lib/hooks/use-admin";
import { users } from "@/lib/data";

export function DashboardTabs() {
  const { orders, filterOrders, updateOrderStatus } = useAdmin();

  return (
    <Tabs defaultValue="orders" className="space-y-4">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="users">Users</TabsTrigger>
      </TabsList>

      <TabsContent value="orders">
        <Card className="p-6">
          <OrderFilters onFilterChange={filterOrders} />
          <div className="mt-6">
            {/* <OrderTable orders={orders} onStatusUpdate={updateOrderStatus} /> */}
            <OrderTable orders={orders}/>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="users">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <UsersTable users={users} />
        </Card>
      </TabsContent>
    </Tabs>
  );
}