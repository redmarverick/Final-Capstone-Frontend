import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carsReducer from "./cars/carsSlice";
import userSlice from "./users/userSlice";
import reservationsSlice from "./reservations/reservationsSlice";

const rootReducer = combineReducers({
  cars: carsReducer,
  reservations: reservationsSlice,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
