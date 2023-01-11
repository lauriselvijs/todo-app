import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { Error } from "../../../types/Error";
import { CurrentWeatherService } from "../../../services/Weather";

import initialState from "./Weather.initial-state";
import { InitialState } from "./Weather.initial-state.d";
import { GET_CURRENT_WEATHER_TYPE, SLICE_NAME } from "./Weather.config";

const { getCurrentWeatherData } = CurrentWeatherService;

const getCurrentWeather = createAsyncThunk<
  InitialState["current"],
  string,
  {
    rejectValue: Error;
  }
>(GET_CURRENT_WEATHER_TYPE, async (location, { rejectWithValue }) => {
  try {
    const currentWeatherData = getCurrentWeatherData(location);

    return currentWeatherData;
  } catch (err: any) {
    const error: AxiosError<Error> = err;
    if (!error.response) {
      throw err;
    }

    return rejectWithValue({
      ...error.response.data,
      code: error.response.status,
    });
  }
});

const weather = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.pending, (state) => {
      state.loading = true;
      state.loaded = false;
      state.error = { code: null, message: "" };
    });
    builder.addCase(getCurrentWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.loaded = true;

      state.current = action.payload;
    });
    builder.addCase(getCurrentWeather.rejected, (state, action) => {
      state.loading = false;
      state.loaded = false;

      if (action.payload?.code && action.payload?.message) {
        state.error = action.payload;
      } else if (action.error.message) {
        state.error.code = null;
        state.error.message = action.error.message;
      }
    });
  },
});

export const weatherActions = weather.actions;
export const weatherReducer = weather.reducer;
export const weatherSliceName = weather.name;
