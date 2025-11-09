import React from 'react';
import { Clock, MapPin, Tag } from 'lucide-react';
import { AbabaButton } from './ababa-button';

export interface Offer {
  id: string;
  image: string;
  restaurantName: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  slotsAvailable: number;
  distance?: string;
  rating?: number;
  cuisine?: string;
}

interface OfferListCardProps {
  offer: Offer;
  onBook: (offer: Offer) => void;
}

export function OfferListCard({ offer, onBook }: OfferListCardProps) {
  return (
    <div 
      className="bg-white rounded-[1.5rem] overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] will-change-transform cursor-pointer group"
      style={{ 
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.04)'
      }}
      onClick={() => onBook(offer)}
    >
      {/* Image Section with gradient overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={offer.image} 
          alt={offer.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          {offer.rating && (
            <div className="bg-white/95 backdrop-blur-md text-[#1D1D1F] px-2.5 py-1.5 rounded-[0.75rem] text-sm flex items-center gap-1.5 shadow-lg font-medium">
              <span className="text-base">⭐</span>
              <span>{offer.rating}</span>
            </div>
          )}
          
          {offer.discount && (
            <div className="bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white px-3 py-1.5 rounded-[0.875rem] text-sm shadow-lg font-semibold tracking-tight animate-scale-in">
              {offer.discount}
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Restaurant & Title */}
        <div>
          <p className="text-sm text-[#7C3AED] mb-1 font-medium tracking-tight">{offer.restaurantName}</p>
          <h3 className="text-[#1D1D1F] line-clamp-1 tracking-tight">{offer.title}</h3>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-3 text-xs text-[#6E6E73]">
          {offer.cuisine && (
            <div className="flex items-center gap-1">
              <Tag size={13} strokeWidth={2.5} />
              <span>{offer.cuisine}</span>
            </div>
          )}
          {offer.distance && (
            <div className="flex items-center gap-1">
              <MapPin size={13} strokeWidth={2.5} />
              <span>{offer.distance}</span>
            </div>
          )}
        </div>

        {/* Slots Available */}
        <div className="flex items-center gap-2 px-3 py-2 bg-[#FAFAFA] rounded-[0.75rem]">
          <Clock size={15} className="text-[#7C3AED]" strokeWidth={2.5} />
          <span className="text-xs text-[#6E6E73] font-medium">
            {offer.slotsAvailable} slots available today
          </span>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-3 border-t border-[#F5F5F7]">
          <div className="flex items-baseline gap-2">
            <span className="text-[#1D1D1F] font-semibold tracking-tight">₹{offer.price}</span>
            {offer.originalPrice && (
              <span className="text-sm text-[#98989D] line-through">₹{offer.originalPrice}</span>
            )}
          </div>
          <AbabaButton 
            variant="primary" 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onBook(offer);
            }}
          >
            Book Now
          </AbabaButton>
        </div>
      </div>
    </div>
  );
}
