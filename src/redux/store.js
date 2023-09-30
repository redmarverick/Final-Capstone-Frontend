import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reservationReducer from "./reservations/reservationsSlice";
import carsReducer from "./cars/carsSlice";
import userSlice from "./users/userSlice";

const rootReducer = combineReducers({
  cars: carsReducer,
  reservations: reservationReducer,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
