import { Leaf, Plus } from "lucide-react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../ReduxStore/cartSlice";

const FoodCard = ({ itemCards }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {itemCards.map((res) => {
        const item = res.card.info;
        const isVeg = item.itemAttribute?.vegClassifier === "VEG";

        return (
          <div
            data-testid="foodCard"
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

              {/* Item Image and Add Button */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 mb-3">
                  <img
                    src={CDN_URL + item.imageId}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Add Button */}
                <button
                  data-testid="addBtn"
                  onClick={() => handleAddItem(item)}
                  className="bg-white border-2 border-green-500 text-green-600 font-semibold px-4 py-1.5 rounded-md text-sm hover:bg-green-500 hover:text-white transition-colors duration-200 shadow-sm mt-2"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodCard;
