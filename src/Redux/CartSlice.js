import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.count += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.count > 1) {
        item.count -= 1;
      }
    },
    removeFromCart: (state, action) => {
      // Remove the entire item from the cart
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  CartSlice.actions;
