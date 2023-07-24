import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    items: itemReducer,
  },
});

export default store;
