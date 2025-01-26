'use client';

import { DashboardTabs } from '@/components/admin/dashboard-tabs';
import { StatsCards } from '@/components/admin/dashboard/stats-cards';
import { RecentOrders } from '@/components/admin/dashboard/recent-orders';
import { SalesChart } from '@/components/admin/dashboard/sales-chart';

export default function AdminDashboard() {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="space-y-6">
        <StatsCards />
        
        <div className="grid gap-6 md:grid-cols-2">
          <SalesChart />
          <RecentOrders />
        </div>

        <DashboardTabs />
      </div>
    </div>
  );
}