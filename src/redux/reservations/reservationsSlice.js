import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import types from "../types";

const url = "https://car-booking-app-zg9h.onrender.com/reservations";

export const reserveCar = createAsyncThunk(types.RESERVE_CAR, async (car) => {
  const response = await axios.post(url, car);
  if (response.status === 200 && response.statusText === "OK") {
    return response.data;
  }
  return null;
});

export const fetchAllReservations = createAsyncThunk(
  types.FETCH_RESERVATIONS,
  async (_, { getState }) => {
    // eslint-disable-next-line
    const user = getState().user.user;
    // eslint-disable-next-line
    try {
      const response = await axios.get(url, {
        params: {
          user_id: user.id,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteReservation = createAsyncThunk(
  types.DELETE_RESERVATION,
  async (reservationId) => {
    // eslint-disable-next-line
    try {
      const response = await axios.delete(`${url}/${reservationId}`);
      if (response.data.message === "Reservation deleted successfully") {
        return reservationId; // Return the ID of the deleted reservation
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  reservations: [],
  error: null,
  status: "idle",
};

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    reservations(state, action) {
      state.reservations = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllReservations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllReservations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reservations = action.payload;
      })
      .addCase(fetchAllReservations.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(deleteReservation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.status = "succeeded";
        // eslint-disable-next-line
        state.reservations.cars_reservations =
          state.reservations.cars_reservations.filter(
            (reservation) => reservation.id !== action.payload
          );
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { reservations } = reservationsSlice.actions;
export default reservationsSlice.reducer;
