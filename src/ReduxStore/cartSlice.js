import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Check if item already exists in cart
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If item exists, increment quantity
        existingItem.quantity += 1;
      } else {
        // If new item, add with quantity 1
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        if (quantity <= 0) {
          // Remove item if quantity is 0 or less
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        } else {
          // Update quantity
          item.quantity = quantity;
        }
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Remove item if quantity becomes 0
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  clearCart,
  removeItem,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
