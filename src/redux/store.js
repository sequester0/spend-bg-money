import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./product/productSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
