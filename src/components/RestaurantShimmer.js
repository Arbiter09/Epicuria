import React from "react";

const RestaurantShimmer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Restaurant Header Shimmer */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8">
                {/* Restaurant name shimmer */}
                <div className="h-8 bg-gray-200 rounded-md w-3/4 mb-6"></div>

                {/* Rating shimmer */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>

                {/* Meta info shimmer */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-28"></div>
                  </div>
                </div>

                {/* Cuisine tags shimmer */}
                <div className="flex flex-wrap gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-6 bg-gray-200 rounded-full w-16"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Image shimmer */}
              <div className="lg:w-80 lg:h-80 h-64 bg-gray-200"></div>
            </div>
          </div>

          {/* Menu Section Shimmer */}
          <div className="max-w-6xl mx-auto">
            {/* Menu header shimmer */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="h-6 bg-gray-200 rounded w-64"></div>
            </div>

            {/* Menu items grid shimmer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-100 animate-pulse"
                >
                  <div className="flex p-6">
                    <div className="flex-1 pr-4">
                      {/* Veg indicator shimmer */}
                      <div className="w-5 h-5 bg-gray-200 rounded-sm mb-3"></div>

                      {/* Item name shimmer */}
                      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>

                      {/* Description shimmer */}
                      <div className="space-y-2 mb-4">
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </div>

                      {/* Price shimmer */}
                      <div className="h-5 bg-gray-200 rounded w-16"></div>
                    </div>

                    {/* Image shimmer */}
                    <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantShimmer;
