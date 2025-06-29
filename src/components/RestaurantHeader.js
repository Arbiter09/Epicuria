import React from "react";
import { Star, Clock, MapPin, Users } from "lucide-react";
import { CDN_URL } from "../utils/constants";

const RestaurantHeader = ({ restaurantData }) => {
  const {
    name,
    avgRating,
    city,
    costForTwoMessage,
    cuisines,
    totalRatings,
    cloudinaryImageId,
    sla,
  } = restaurantData?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Restaurant Details */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{name}</h1>

          {/* Rating Section */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold text-sm">{avgRating}</span>
            </div>
            <span className="text-gray-500 text-sm">
              ({totalRatings} ratings)
            </span>
          </div>

          {/* Meta Information */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{city}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm">{costForTwoMessage}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{sla.deliveryTime} mins delivery</span>
            </div>
          </div>

          {/* Cuisines */}
          <div className="flex flex-wrap gap-2">
            {cuisines.map((cuisine, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
              >
                {cuisine}
              </span>
            ))}
          </div>
        </div>

        {/* Restaurant Image */}
        <div className="lg:w-80 lg:h-80 h-64 flex-shrink-0">
          <img
            src={CDN_URL + cloudinaryImageId}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
