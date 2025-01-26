import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartSheet } from '@/components/cart/cart-sheet';
import { UserNav } from '@/components/layout/user-nav';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/lib/auth/auth-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-commerce Store',
  description: 'Modern e-commerce store built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <header className="border-b bg-gray-200">
            <div className="container flex items-center justify-between h-16">
              <h1 className="text-xl font-bold">K eStore</h1>
              <div className="flex items-center gap-4">
                <CartSheet />
                <UserNav />
              </div>
            </div>
          </header>
          <main>{children}</main>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}