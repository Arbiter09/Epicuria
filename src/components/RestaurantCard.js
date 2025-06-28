import React from "react";
import { CDN_URL } from "../utils/constants";
import { Leaf } from "lucide-react";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } =
    resData?.info;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-50">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
          <svg
            className="w-3 h-3 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs font-medium text-gray-700">{avgRating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Restaurant Name */}
        <h3 className="font-semibold text-gray-900 text-lg leading-tight line-clamp-1">
          {name}
        </h3>

        {/* Cuisines */}
        <p className="text-sm text-gray-500 line-clamp-1">
          {cuisines?.join(" • ")}
        </p>

        {/* Bottom Info */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-4">
            {/* Cost */}
            <span className="text-sm font-medium text-gray-900">
              {costForTwo}
            </span>

            {/* Delivery Time */}
            <div className="flex items-center space-x-1">
              <svg
                className="w-3 h-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs text-gray-500">
                {sla.deliveryTime} min
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const withVegLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 text-white z-1 p-2 m-2 rounded-3xl">
          <Leaf />
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
