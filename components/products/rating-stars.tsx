'use client';

import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  max?: number;
  size?: number;
  onRate?: (rating: number) => void;
}

export function RatingStars({ rating, max = 5, size = 20, onRate }: RatingStarsProps) {
  return (
    <div className="flex gap-1">
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} 
            ${onRate ? 'cursor-pointer' : ''}`}
          onClick={() => onRate?.(i + 1)}
        />
      ))}
    </div>
  );
}