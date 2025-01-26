'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order } from "@/lib/types";
import { OrderStatusBadge } from "./order-status-badge";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

interface OrderTableProps {
  orders: Order[];
}

export function OrderTable({ orders }: OrderTableProps) {
  const router = useRouter();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>
              <div>
                <p className="font-medium">{order.customerName}</p>
                <p className="text-sm text-muted-foreground">{order.email}</p>
              </div>
            </TableCell>
            <TableCell>
              {format(new Date(order.createdAt), 'MMM d, yyyy')}
            </TableCell>
            <TableCell>
              <OrderStatusBadge status={order.status} />
            </TableCell>
            <TableCell>${order.total.toFixed(2)}</TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push(`/admin/orders/${order.id}`)}
              >
                <Eye className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}