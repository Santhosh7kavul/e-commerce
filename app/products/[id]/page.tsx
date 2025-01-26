import { products } from '@/lib/data';
import { RatingStars } from '@/components/products/rating-stars';
import { ProductReviews } from '@/components/products/product-reviews';
import { RecommendedProducts } from '@/components/products/recommended-products';
import { Button } from '@/components/ui/button';
import { AddToCartButton } from '@/components/products/add-to-cart-button';
import { WishlistButton } from '@/components/products/wishlist-button';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container py-8">
      <Button
        variant="ghost"
        className="mb-6"
        asChild
      >
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </Button>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute top-4 right-4">
            <WishlistButton product={product} />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          <div className="flex items-center gap-2">
            <RatingStars rating={product.averageRating || 0} />
            <span className="text-sm text-muted-foreground">
              {product.ratings?.length || 0} reviews
            </span>
          </div>

          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
          
          <p className="text-muted-foreground">{product.description}</p>
          
          <AddToCartButton product={product} />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>
        <ProductReviews
          productId={product.id}
          reviews={product.reviews || []}
        />
      </div>

      <div className="mt-12">
        <RecommendedProducts 
          currentProductId={product.id}
          category={product.category}
        />
      </div>
    </div>
  );
}