import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from '../redux/reservations/reservationsSlice'

export default configureStore({
  reducer: {
    reservations: reservationReducer
  },
});
