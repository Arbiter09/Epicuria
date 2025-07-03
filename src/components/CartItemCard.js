import React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";

const CartItemCard = ({
  item,
  quantity,
  onQuantityChange,
  onRemove,
  onIncrement,
  onDecrement,
}) => {
  const formatPrice = (price) => {
    return `₹${(price / 100).toFixed(2)}`;
  };

  const getVegIcon = () => {
    return item.isVeg ? (
      <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center">
        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
      </div>
    ) : (
      <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center">
        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
      </div>
    );
  };

  const itemPrice = item.price ? item.price : item.defaultPrice;

  return (
    <div
      data-testid="cartItem"
      className="bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-200"
    >
      <div className="flex gap-4">
        {/* Item Image */}
        <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
          {item.imageId ? (
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_80,h_80/${item.imageId}`}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs">
              No Image
            </div>
          )}
        </div>

        {/* Item Details */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {getVegIcon()}
                <h3 className="font-semibold text-gray-800 text-sm">
                  {item.name}
                </h3>
              </div>

              {item.category && (
                <p className="text-xs text-gray-500 mb-1">{item.category}</p>
              )}

              <p className="text-sm font-bold text-gray-900">
                {formatPrice(itemPrice)}
              </p>

              {item.description && (
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                  {item.description.split("\n")[0].replace(/"/g, "")}
                </p>
              )}
            </div>

            {/* Remove Button */}
            <button
              onClick={() => onRemove(item)}
              className="text-red-500 hover:text-red-700 p-1"
            >
              <Trash2 size={16} />
            </button>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              {/* Method 1: Using onQuantityChange */}
              <button
                onClick={() =>
                  onQuantityChange(item.id, Math.max(0, quantity - 1))
                }
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                <Minus size={14} />
              </button>

              {/* Method 2: Using onDecrement (alternative)
              <button
                onClick={() => onDecrement(item.id)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                <Minus size={14} />
              </button>
              */}

              <span className="font-semibold text-gray-800 min-w-[20px] text-center">
                {quantity}
              </span>

              {/* Method 1: Using onQuantityChange */}
              <button
                onClick={() => onQuantityChange(item.id, quantity + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                <Plus size={14} />
              </button>

              {/* Method 2: Using onIncrement (alternative)
              <button
                onClick={() => onIncrement(item.id)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                <Plus size={14} />
              </button>
              */}
            </div>

            <div className="text-right">
              <p className="font-bold text-gray-900">
                {formatPrice(itemPrice * quantity)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
