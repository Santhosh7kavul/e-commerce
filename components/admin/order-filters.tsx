'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

interface OrderFiltersProps {
  onFilterChange: (status?: string, search?: string) => void;
}

export function OrderFilters({ onFilterChange }: OrderFiltersProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search orders..."
          onChange={(e) => onFilterChange(undefined, e.target.value)}
          className="pl-9"
        />
      </div>
      <Select onValueChange={(value) => onFilterChange(value === 'all' ? undefined : value)}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Orders</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="processing">Processing</SelectItem>
          <SelectItem value="shipped">Shipped</SelectItem>
          <SelectItem value="delivered">Delivered</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}