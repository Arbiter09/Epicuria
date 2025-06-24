import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantMenuItems from "./RestaurantMenuItems";
import Error from "./Error";

const RestaurantSection = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setRestaurantData(json);
  };

  if (restaurantData === null) return <Shimmer />;
  // console.log(RecommendedItemCards);

  return (
    <div>
      <RestaurantHeader restaurantData={restaurantData} />
      <RestaurantMenuItems restaurantData={restaurantData} />
    </div>
  );
};

export default RestaurantSection;
