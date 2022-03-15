import { createSlice } from "@reduxjs/toolkit";
import defaultItems from "./defaultItems";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items:
      JSON.parse(window.localStorage.getItem("products")) === null
        ? defaultItems
        : JSON.parse(window.localStorage.getItem("products")),
    money:
      window.localStorage.getItem("money") === null
        ? 100000000000
        : parseInt(window.localStorage.getItem("money")),
    lastItem:
      window.localStorage.getItem("lastItem") === null
        ? { price: 0, type: "" }
        : JSON.parse(window.localStorage.getItem("lastItem")),
  },
  reducers: {
    changeAmount: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (amount > item.amount) {
        state.money -= item.price * (amount - item.amount);
        window.localStorage.setItem("money", state.money);
      }
      if (amount < item.amount) {
        state.money += item.price * (item.amount - amount);
        window.localStorage.setItem("money", state.money);
      }
      item.amount = amount;
      window.localStorage.setItem("products", JSON.stringify(state.items));
    },
    setLastItem: (state, action) => {
      state.lastItem = action.payload;
      window.localStorage.setItem("lastItem", JSON.stringify(action.payload));
    },
  },
});

export const { changeAmount, setLastItem } = productsSlice.actions;
export default productsSlice.reducer;
