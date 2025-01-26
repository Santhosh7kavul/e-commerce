'use client';

import { Card } from "@/components/ui/card";
import { orders } from "@/lib/data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, subDays } from 'date-fns';

export function SalesChart() {
  // Generate last 7 days of sales data
  const salesData = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(new Date(), i);
    const dayOrders = orders.filter(order => 
      format(new Date(order.createdAt), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
    const total = dayOrders.reduce((sum, order) => sum + order.total, 0);

    return {
      date: format(date, 'MMM dd'),
      total
    };
  }).reverse();

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="hsl(var(--primary))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}