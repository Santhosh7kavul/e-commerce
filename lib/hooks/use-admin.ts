'use client';

import { useState } from 'react';
import { Order } from '@/lib/types';
import { orders } from '@/lib/data';

export function useAdmin() {
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(orders);
  const [isLoading, setIsLoading] = useState(false);

  const filterOrders = (status?: string, searchQuery?: string) => {
    setIsLoading(true);
    try {
      const filtered = orders.filter((order) => {
        const matchesStatus = !status || order.status === status;
        const matchesSearch = !searchQuery || 
          order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.id.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesStatus && matchesSearch;
      });
      setFilteredOrders(filtered);
    } finally {
      setIsLoading(false);
    }
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    // In a real app, this would make an API call
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status } : order
    );
    setFilteredOrders(updatedOrders);
  };

  return {
    orders: filteredOrders,
    isLoading,
    filterOrders,
    updateOrderStatus,
  };
}