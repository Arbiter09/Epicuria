import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenuItems from "./RestaurantMenuItems";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantSection = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurantMenu(resId);

  if (restaurantData === null) return <Shimmer />;

  return (
    <div>
      <RestaurantHeader restaurantData={restaurantData} />
      <RestaurantMenuItems restaurantData={restaurantData} />
    </div>
  );
};

export default RestaurantSection;
