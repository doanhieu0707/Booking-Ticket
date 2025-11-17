import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "./SeatSlice.js";

const store = configureStore({
  reducer: {
    seat: seatReducer
  }
});

export default store;
