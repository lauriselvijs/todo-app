import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { getCurrentWeather } from "../../../services/Weather";

import initialState from "./Weather.initial-state";
import {
  GET_CURRENT_WEATHER_TYPE,
  SLICE_NAME,
  transformResponse,
} from "./Weather.config";
import { CurrentWeather, WeatherError } from "../../../types/Weather";
import { NetworkError } from "../../../types/Network";
import { getIp } from "../../../services/Ip";

export const currentWeatherUpdated = createAsyncThunk<
  CurrentWeather,
  string,
  {
    rejectValue: WeatherError;
  }
>(GET_CURRENT_WEATHER_TYPE, async (location = "", { rejectWithValue }) => {
  try {
    const ip = await getIp();
    const currentWeather = await getCurrentWeather(location || ip);
    const transformedCurrentWeather = transformResponse(currentWeather);

    return transformedCurrentWeather;
  } catch (err: any) {
    const error: AxiosError<WeatherError> = err;

    if (error.response?.data?.error && error.response?.status) {
      return rejectWithValue({
        error: {
          message: error.response?.data?.error?.message,
        },
        status: error.response?.status,
      });
    }

    const networkError: NetworkError = err;

    if (networkError.status) {
      return rejectWithValue({
        error: {
          message: networkError.message,
        },
        status: null,
      });
    }

    throw err;
  }
});

const weather = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(currentWeatherUpdated.pending, (state) => {
      state.loading = true;
      state.loaded = false;

      state.error.status = null;
      state.error.error = { message: "" };
    });
    builder.addCase(currentWeatherUpdated.fulfilled, (state, action) => {
      state.loading = false;
      state.loaded = true;

      state.weather = action.payload;
    });
    builder.addCase(currentWeatherUpdated.rejected, (state, action) => {
      state.loading = false;
      state.loaded = false;

      if (action.payload?.error && action.payload?.status) {
        state.error = action.payload;
      }
    });
  },
});

export const weatherActions = weather.actions;
export const weatherReducer = weather.reducer;
export const weatherSliceName = weather.name;
