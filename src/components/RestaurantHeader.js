import React from "react";
import { Star, Clock, MapPin, Users } from "lucide-react";
import { CDN_URL } from "../utils/constants";

const RestaurantHeader = ({ restaurantData }) => {
  const {
    name,
    avgRating,
    city,
    costForTwoMessage,
    cuisines,
    totalRatings,
    cloudinaryImageId,
  } = restaurantData?.data?.cards[2]?.card?.card?.info;

  return (
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
            src={CDN_URL + cloudinaryImageId}
            alt="Restaurant"
            className="restaurant-image"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
