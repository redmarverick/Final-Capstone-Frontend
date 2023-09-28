import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reservationReducer from './reservations/reservationsSlice';
import carsReducer from './cars/carsSlice';

const rootReducer = combineReducers({
  cars: carsReducer,
  reservations: reservationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
