import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "../features/favoriteSlice";
import cartSlice from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice,
    cart: cartSlice,
  },
});
