import { Leaf, Award } from "lucide-react";
import { CDN_URL } from "../utils/constants";

const RestaurantMenuItems = ({ restaurantData }) => {
  const RecommendedItemCards =
    restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;

  if (RecommendedItemCards === undefined) return <h1>ERROR!</h1>;

  return (
    <div className="menu-section">
      <div className="menu-header">
        <Award className="menu-icon" />
        <h2 className="menu-title">Recommended Menu Items</h2>
      </div>

      <div className="menu-grid">
        {RecommendedItemCards.map((res) => {
          const item = res.card.info;
          const isVeg = item.itemAttribute?.vegClassifier === "VEG";

          return (
            <div key={item.id} className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-text">
                  <div className="menu-item-header">
                    <div className="menu-item-badges">
                      {isVeg && (
                        <div className="veg-indicator veg">
                          <Leaf className="veg-icon" />
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="item-footer">
                    <div className="price-container">
                      <span className="current-price">
                        Rs. {item.price / 100 || item.defaultPrice / 100}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="menu-item-image-container">
                  <img
                    src={CDN_URL + item.imageId}
                    alt={item.name}
                    className="menu-item-image"
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
