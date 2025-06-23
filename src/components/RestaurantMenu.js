import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import {
  Star,
  Clock,
  MapPin,
  Users,
  Leaf,
  Award,
  Plus,
  Heart,
} from "lucide-react";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(MENU_API);
    const json = await data.json();
    setRestaurantData(json);
  };

  if (restaurantData === null) return <Shimmer />;

  const { name, avgRating, city, costForTwoMessage, cuisines, totalRatings } =
    restaurantData?.data.cards[2].card.card.info;

  const RecommendedItemCards =
    restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;

  console.log(RecommendedItemCards);

  return (
    <div>
      {/* Restaurant Info Card */}
      <div className="restaurant-card">
        <div className="restaurant-info">
          <div className="restaurant-details">
            <h1 className="restaurant-name">{name}</h1>

            <div className="restaurant-meta">
              <div className="rating-badge">
                <Star className="star-icon" />
                <span className="rating-text">{avgRating}</span>
                <span className="rating-count">({totalRatings})</span>
              </div>

              <div className="meta-item">
                <MapPin className="meta-icon" />
                <span>{city}</span>
              </div>

              <div className="meta-item">
                <Users className="meta-icon" />
                <span>{costForTwoMessage}</span>
              </div>
            </div>

            <div className="cuisine-container">
              {cuisines.map((cuisine, index) => (
                <span key={index} className="cuisine-tag">
                  {cuisine}
                </span>
              ))}
            </div>

            <div className="meta-item">
              <Clock className="meta-icon" />
              <span>30-40 mins delivery</span>
            </div>
          </div>

          <div className="restaurant-image-container">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&crop=center"
              alt="Restaurant"
              className="restaurant-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
