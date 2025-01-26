'use client';

import { useState } from 'react';
import { Rating} from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RatingStars } from './rating-stars';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface ProductReviewsProps {
  productId: string;
  reviews: Rating[];
}

export function ProductReviews({ productId, reviews }: ProductReviewsProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }

    // Here you would typically make an API call to save the review
    toast.success('Review submitted successfully!');
    setRating(0);
    setComment('');
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmitReview} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Your Rating</label>
          <RatingStars rating={rating} onRate={setRating} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Your Review</label>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review here..."
            className="min-h-[100px]"
          />
        </div>
        <Button type="submit">Submit Review</Button>
      </form>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Customer Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-muted-foreground">No reviews yet</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <RatingStars rating={review.rating} />
                  <span className="text-sm text-muted-foreground">
                    by {review.userName}
                  </span>
                </div>
                <p className="mb-1">{review.comment}</p>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(review.createdAt), 'MMM d, yyyy')}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}