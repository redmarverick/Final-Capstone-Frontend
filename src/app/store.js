import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from '../redux/reservations/reservationsSlice';
import carReducer from '../redux/cars/carsSlice';

export default configureStore({
  reducer: {
    reservations: reservationReducer,
    cars: carReducer,
  },
});
