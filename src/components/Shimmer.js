import React from "react";

// Individual shimmer card component
const ShimmerCard = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50">
      {/* Image Shimmer */}
      <div className="w-full h-48 bg-gray-200 animate-pulse"></div>

      {/* Content Shimmer */}
      <div className="p-4 space-y-3">
        {/* Title Shimmer */}
        <div className="h-5 bg-gray-200 animate-pulse rounded-md w-3/4"></div>

        {/* Subtitle Shimmer */}
        <div className="h-4 bg-gray-200 animate-pulse rounded-md w-full"></div>

        {/* Bottom Info Shimmer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-4">
            <div className="h-4 bg-gray-200 animate-pulse rounded-md w-16"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded-md w-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Search bar shimmer
const ShimmerSearchBar = () => {
  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Search Input Shimmer */}
        <div className="h-12 bg-gray-200 animate-pulse rounded-full min-w-0 flex-1 max-w-md"></div>

        {/* Filter Button Shimmer */}
        <div className="h-12 w-32 bg-gray-200 animate-pulse rounded-full"></div>

        {/* Clear Button Shimmer */}
        <div className="h-12 w-16 bg-gray-200 animate-pulse rounded-md"></div>
      </div>

      {/* Results Count Shimmer */}
      <div className="mt-6">
        <div className="h-4 bg-gray-200 animate-pulse rounded-md w-40"></div>
      </div>
    </div>
  );
};

// Main shimmer component
const Shimmer = () => {
  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Bar Shimmer */}
        <ShimmerSearchBar />

        {/* Cards Grid Shimmer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
