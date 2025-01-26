import { Badge } from "@/components/ui/badge";
import { OrderStatus } from "@/lib/types";

const statusConfig: Record<string, OrderStatus> = {
  pending: {
    value: 'pending',
    label: 'Pending',
    color: 'warning'
  },
  processing: {
    value: 'processing',
    label: 'Processing',
    color: 'primary'
  },
  shipped: {
    value: 'shipped',
    label: 'Shipped',
    color: 'secondary'
  },
  delivered: {
    value: 'delivered',
    label: 'Delivered',
    color: 'success'
  }
};

export function OrderStatusBadge({ status }: { status: OrderStatus['value'] }) {
  const config = statusConfig[status];
  
  return (
    // <Badge variant={config.color}>
    //   {config.label}
    // </Badge>
     <Badge >
     {config.label}
   </Badge>
  );
}