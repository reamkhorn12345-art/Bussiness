import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="rounded-2xl bg-primary/5 p-8 border border-primary/10">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden">
          <img 
            alt={review.userName} 
            className="h-full w-full object-cover" 
            src={review.userImage}
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{review.userName}</h4>
          <p className="text-xs text-slate-500">{review.verified ? 'Verified Purchase' : 'Customer'}</p>
        </div>
      </div>
      <div className="flex mb-4 text-primary">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
        ))}
      </div>
      <p className="text-slate-600 italic leading-relaxed">
        {review.comment}
      </p>
    </div>
  );
};
