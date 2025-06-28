import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenuItems from "./RestaurantMenuItems";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantShimmer from "./RestaurantShimmer";

const RestaurantSection = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurantMenu(resId);

  const categories =
    restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (newCard) => {
        return (
          newCard?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log(categories);
  if (restaurantData === null) return <RestaurantShimmer />;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <RestaurantHeader restaurantData={restaurantData} />
          {categories.map((category) => {
            return (
              <div key={category?.card?.card?.categoryId}>
                <RestaurantMenuItems itemCategory={category} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantSection;
