import React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import {
  clearCart,
  removeItem,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
} from "../ReduxStore/cartSlice";

// Main Cart Component
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Method 1: Using updateQuantity action
  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  // Method 2: Using increment/decrement actions (alternative approach)
  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.price ? item.price : item.defaultPrice;
      return total + price * item.quantity;
    }, 0);
  };

  const getTotalItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const formatPrice = (price) => {
    return `₹${(price / 100).toFixed(2)}`;
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Cart</h2>
          <p className="text-gray-600">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>

      {/* Cart Items */}
      <div className="mb-6">
        {cartItems.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            quantity={item.quantity}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemoveItem}
            // Alternative: pass increment/decrement handlers
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>

      {/* Total Section */}
      <div className="bg-white rounded-lg shadow-md p-4 sticky bottom-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-800">
            Total Items:
          </span>
          <span className="text-lg font-semibold text-gray-800">
            {getTotalItemCount()}
          </span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-gray-800">Total Amount:</span>
          <span className="text-xl font-bold text-green-600">
            {formatPrice(calculateTotal())}
          </span>
        </div>

        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
          Proceed to Checkout
        </button>
        <button
          onClick={handleClearCart}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors mt-2"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
