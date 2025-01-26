'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileInfo } from '@/components/profile/profile-info';
import { OrderHistory } from '@/components/profile/order-history';
import { WishlistTab } from '@/components/profile/wishlist-tab';
import { AddressBook } from '@/components/profile/address-book';
import { useSearchParams } from 'next/navigation';

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'profile';

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <Tabs defaultValue={defaultTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileInfo />
        </TabsContent>

        <TabsContent value="orders">
          <OrderHistory />
        </TabsContent>

        <TabsContent value="addresses">
          <AddressBook />
        </TabsContent>

        <TabsContent value="wishlist">
          <WishlistTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}