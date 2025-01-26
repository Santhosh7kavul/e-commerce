'use client';

import { Order } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Circle, Clock, Package, Truck } from 'lucide-react';

const steps = [
  { status: 'pending', icon: Clock, label: 'Order Placed' },
  { status: 'processing', icon: Package, label: 'Processing' },
  { status: 'shipped', icon: Truck, label: 'Shipped' },
  { status: 'delivered', icon: CheckCircle2, label: 'Delivered' },
] as const;

interface OrderTrackingProps {
  order: Order;
}

export function OrderTracking({ order }: OrderTrackingProps) {
  const currentStepIndex = steps.findIndex(step => step.status === order.status);

  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Order Status</h3>
      <div className="relative">
        <div className="absolute top-5 left-5 w-[calc(100%-2.5rem)] h-0.5 bg-muted" />
        <div 
          className="absolute top-5 left-5 h-0.5 bg-primary transition-all duration-500"
          style={{ width: `${(currentStepIndex / (steps.length - 1)) * (100 - 10)}%` }}
        />
        <div className="relative z-10 flex justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index <= currentStepIndex;
            return (
              <div key={step.status} className="flex flex-col items-center">
                <div className={`p-2.5 rounded-full ${
                  isActive ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm mt-2">{step.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}