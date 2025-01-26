'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Trash2, Edit } from 'lucide-react';
import { toast } from 'sonner';

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  isDefault: boolean;
}

export function AddressBook() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      name: 'Home',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      isDefault: true,
    }
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddAddress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newAddress: Address = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      street: formData.get('street') as string,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      postalCode: formData.get('postalCode') as string,
      isDefault: addresses.length === 0,
    };
    setAddresses([...addresses, newAddress]);
    setIsAdding(false);
    toast.success('Address added successfully');
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Address Book</h2>
        <Button onClick={() => setIsAdding(true)} disabled={isAdding}>
          <Plus className="h-4 w-4 mr-2" />
          Add Address
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {addresses.map((address) => (
          <Card key={address.id} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{address.name}</h3>
                <p className="text-sm text-muted-foreground">{address.street}</p>
                <p className="text-sm text-muted-foreground">
                  {address.city}, {address.state} {address.postalCode}
                </p>
                {address.isDefault && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mt-2 inline-block">
                    Default
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => setEditingId(address.id)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => {
                  setAddresses(addresses.filter(a => a.id !== address.id));
                  toast.success('Address removed');
                }}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {isAdding && (
        <Card className="p-4">
          <form onSubmit={handleAddAddress} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input name="name" required />
              </div>
              <div>
                <label className="text-sm font-medium">Street Address</label>
                <Input name="street" required />
              </div>
              <div>
                <label className="text-sm font-medium">City</label>
                <Input name="city" required />
              </div>
              <div>
                <label className="text-sm font-medium">State</label>
                <Input name="state" required />
              </div>
              <div>
                <label className="text-sm font-medium">Postal Code</label>
                <Input name="postalCode" required />
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="submit">Save Address</Button>
              <Button type="button" variant="ghost" onClick={() => setIsAdding(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
}