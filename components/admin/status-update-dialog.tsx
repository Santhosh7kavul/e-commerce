'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Order } from '@/lib/types';
import { useState } from 'react';
import { Edit2 } from 'lucide-react';

interface StatusUpdateDialogProps {
  order: Order;
  onStatusUpdate: (orderId: string, status: Order['status']) => void;
}

export function StatusUpdateDialog({ order, onStatusUpdate }: StatusUpdateDialogProps) {
  const [status, setStatus] = useState<Order['status']>(order.status);
  const [open, setOpen] = useState(false);

  const handleUpdate = () => {
    onStatusUpdate(order.id, status);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Edit2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Order Status</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Status</label>
            <Select value={status} onValueChange={(value) => setStatus(value as Order['status'])}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleUpdate} className="w-full">
            Update Status
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}