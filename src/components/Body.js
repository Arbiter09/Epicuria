import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  const handleTopRestaurants = () => {
    const newList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
    setFilteredListOfRestaurants(newList);
  };

  const listOfRestaurants = useRestaurants();

  useEffect(() => {
    setFilteredListOfRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 text-gray-300">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.18l6.364 6.364a9 9 0 010 12.728L12 21.82l-6.364-6.364a9 9 0 010-12.728L12 2.18z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-light text-gray-600">You're offline</h1>
          <p className="text-sm text-gray-400 mt-2">
            Check your connection and try again
          </p>
        </div>
      </div>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-100 px-4 py-3 min-w-0 flex-1 max-w-md">
              <svg
                className="w-4 h-4 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
                placeholder="Search restaurants..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    const filteredList = listOfRestaurants.filter((res) =>
                      res?.info?.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    );
                    setFilteredListOfRestaurants(filteredList);
                  }
                }}
              />
              <button
                className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => {
                  const filteredList = listOfRestaurants.filter((res) =>
                    res?.info?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredListOfRestaurants(filteredList);
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>

            {/* Filter Button */}
            <button
              className="px-6 py-3 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors border border-gray-100 shadow-sm whitespace-nowrap"
              onClick={() => handleTopRestaurants()}
            >
              ⭐ Top Rated
            </button>

            {/* Reset Filter */}
            <button
              className="px-4 py-3 text-gray-400 hover:text-gray-600 transition-colors text-sm"
              onClick={() => setFilteredListOfRestaurants(listOfRestaurants)}
            >
              Clear
            </button>
          </div>

          {/* Results Count */}
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              {filteredListOfRestaurants.length} restaurant
              {filteredListOfRestaurants.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredListOfRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
              className="group"
            >
              <div className="transform transition-all duration-200 group-hover:scale-[1.02] group-hover:shadow-lg">
                <RestaurantCard resData={restaurant} />
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredListOfRestaurants.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 text-gray-300">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.73-6.294-1.957M6 17.5L4.5 19M18 17.5l1.5 1.5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-light text-gray-600 mb-2">
              No restaurants found
            </h3>
            <p className="text-sm text-gray-400">
              Try adjusting your search terms
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
