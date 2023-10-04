import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import types from "../types";

const url = "http://localhost:3000/cars";

export const fetchAllCars = createAsyncThunk(types.FETCH_CARS, async () => {
  const response = await axios.get(url);
  return response.data;
});

export const fetchCarById = createAsyncThunk(
  types.FETCH_CAR_BY_ID,
  async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  }
);

export const addCar = createAsyncThunk("cars/addCar", async (formData) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:3000/new-car",
      formData
    );
    return response.data;
  } catch (error) {
    throw error.response.data; // Throw the API error response
  }
});

export const deleteCar = createAsyncThunk("cars/deleteCar", async (id) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:3000/cars/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data; // Throw the API error response
  }
});

export const updateCar = createAsyncThunk(
  types.UPDATE_CAR,
  async ({ id, reserved }) => {
    const car = { reserved: !reserved };
    const response = await axios.put(`${url}/:${id}/$/{update}`, car);
    const res = await response.data;
    return res.data;
  }
);

const initialState = {
  cars: [],
  error: null,
  status: "idle",
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    cars(state, action) {
      state.cars = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      // Case to Fetch Car By Id
      .addCase(fetchCarById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars = [action.payload];
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { cars } = carsSlice.actions;
export default carsSlice.reducer;
