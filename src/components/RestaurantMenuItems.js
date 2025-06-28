import { Leaf, Award, ChevronDown } from "lucide-react";
import { CDN_URL } from "../utils/constants";
import FoodCard from "./FoodCard";
import { useState } from "react";

const RestaurantMenuItems = ({ itemCategory }) => {
  const [showItems, setShowItems] = useState(false);

  // const categories =
  //   restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (newCard) => {
  //       return (
  //         newCard?.card?.card?.["@type"] ===
  //         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //       );
  //     }
  //   );

  // console.log(categories);

  const handleAccordian = () => {
    setShowItems(!showItems);
  };

  if (itemCategory === undefined) return <h1>ERROR!</h1>;

  return (
    <div
      key={itemCategory?.card?.card?.categoryId}
      className="max-w-6xl mx-auto p-3"
    >
      <div
        onClick={handleAccordian}
        className="flex justify-between border-gray-300 border-b-2 cursor-pointer mb-2"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full">
            <Award className="w-5 h-5 text-orange-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {itemCategory?.card?.card?.title}
          </h2>
        </div>
        <div className="mt-2">
          <ChevronDown />
        </div>
      </div>

      {showItems && (
        <FoodCard itemCards={itemCategory?.card?.card?.itemCards} />
      )}
    </div>
  );
};

export default RestaurantMenuItems;
