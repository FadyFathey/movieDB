import { configureStore } from "@reduxjs/toolkit";
import movie from "./PostSlice";

const store = configureStore({
  reducer: {
    movie,
  },
  devTools: true,
});

export default store;
