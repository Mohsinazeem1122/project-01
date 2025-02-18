import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    totalPrice: 0,
    message: "",
  },
  reducers: {
    toggleCart: (state, action) => {
      const isExist = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );

      if (isExist) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== action.payload.id
        );
        // state.totalPrice -= action.payload.price;
        state.totalPrice -= isExist.price * isExist.quantity;
        state.message = "Product added to cart";
      } else {
        // state.cartProducts.push(action.payload);
        state.cartProducts.push({ ...action.payload, quantity: 1 });
        state.totalPrice += action.payload.price; // Add price when adding
        state.message = "Product removed from cart";
      }
    },

    increaseQuantity: (state, action) => {
      const product = state.cartProducts.find(
        (item) => item.id === action.payload
      );
      if (product) {
        product.quantity += 1;
        state.totalPrice += product.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.cartProducts.find(
        (item) => item.id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.totalPrice -= product.price;
      }
    },
  },
});

export const { toggleCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
