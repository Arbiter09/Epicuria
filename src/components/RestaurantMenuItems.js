import { Leaf, Award } from "lucide-react";
import { CDN_URL } from "../utils/constants";

const RestaurantMenuItems = ({ restaurantData }) => {
  const RecommendedItemCards =
    restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;

  if (RecommendedItemCards === undefined) return <h1>ERROR!</h1>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Menu Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full">
          <Award className="w-5 h-5 text-orange-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Recommended Menu Items
        </h2>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RecommendedItemCards.map((res) => {
          const item = res.card.info;
          const isVeg = item.itemAttribute?.vegClassifier === "VEG";

          return (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex p-6">
                {/* Item Details */}
                <div className="flex-1 pr-4">
                  {/* Veg/Non-veg Indicator */}
                  <div className="flex items-center mb-3">
                    {isVeg && (
                      <div className="flex items-center justify-center w-5 h-5 border-2 border-green-600 rounded-sm">
                        <Leaf className="w-3 h-3 text-green-600 fill-current" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      ₹{item.price / 100 || item.defaultPrice / 100}
                    </span>
                  </div>
                </div>

                {/* Item Image */}
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={CDN_URL + item.imageId}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenuItems;
