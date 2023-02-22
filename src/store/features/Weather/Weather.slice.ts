import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { weatherService } from "../../../services/Weather";
import { ipService } from "../../../services/Ip";
import { CurrentWeather } from "../../../types/Weather.d";
import { CurrentWeatherServiceError } from "../../../services/Weather/Weather.service.d";

import { Error } from "./Weather.slice.d";
import weatherState from "./Weather.state";
import {
  FETCH_CURRENT_WEATHER_TYPE,
  SLICE_NAME,
  transformResponse,
} from "./Weather.config";

export const fetchCurrentWeather = createAsyncThunk<
  CurrentWeather,
  string | undefined,
  {
    rejectValue: Error;
  }
>(FETCH_CURRENT_WEATHER_TYPE, async (location = "", { rejectWithValue }) => {
  try {
    const ip = await ipService.fetchIp();
    const currentWeather = await weatherService.fetchCurrentWeather(
      location || ip
    );
    const transformedCurrentWeather = transformResponse(currentWeather);

    return transformedCurrentWeather;
  } catch (error: any) {
    if (axios.isAxiosError<CurrentWeatherServiceError>(error)) {
      if (error.response?.status && error.response?.data?.message) {
        return rejectWithValue({
          error: {
            message: error.response.data.message,
          },
          status: error.response?.status,
        });
      }

      return rejectWithValue({
        error: {
          message: error.message,
        },
        status: null,
      });
    }

    throw error;
  }
});

const weather = createSlice({
  name: SLICE_NAME,
  initialState: weatherState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentWeather.pending, (state) => {
      state.isLoading = true;
      state.isLoaded = false;
      state.isError = false;

      state.error.status = null;
      state.error.error = { message: "" };
    });
    builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoaded = true;

      state.currentWeather = action.payload;
    });
    builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.isLoaded = false;
      state.isError = true;

      if (action.payload?.error && action.payload?.status) {
        state.error = action.payload;
      }
    });
  },
});

export const weatherActions = weather.actions;
export const weatherReducer = weather.reducer;
export const weatherSliceName = weather.name;
