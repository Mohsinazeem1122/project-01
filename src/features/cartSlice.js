import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    message: "",
  },
  reducers: {
    toggleCart: (state, action) => {
      const isExist = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );

      if (isExist) {
        state.message = "Product added to cart";
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.message = "Product removed from cart";
        state.cartProducts.push(action.payload);
      }
    },
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
