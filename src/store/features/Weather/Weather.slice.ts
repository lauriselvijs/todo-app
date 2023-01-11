import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { CurrentWeatherService } from "../../../services/Weather";

import initialState from "./Weather.initial-state";
import { GET_CURRENT_WEATHER_TYPE, SLICE_NAME } from "./Weather.config";

const { getCurrentWeatherData } = CurrentWeatherService;

export interface WeatherError {
  status: number;
  error: {
    code: number;
    message: string;
  };
}

const getCurrentWeather = createAsyncThunk<
  typeof initialState.weather,
  string,
  {
    rejectValue: WeatherError;
  }
>(GET_CURRENT_WEATHER_TYPE, async (location, { rejectWithValue }) => {
  try {
    const response = await getCurrentWeatherData(location);

    const {
      temp_c,
      temp_f,
      condition: { text, icon },
      wind_mph,
      wind_kph,
      wind_dir,
      humidity,
    } = response.current;

    const transformedData = {
      temperature: {
        celsius: temp_c,
        fahrenheit: temp_f,
      },
      condition: {
        text,
        icon,
      },
      wind: {
        mph: wind_mph,
        kph: wind_kph,
        dir: wind_dir,
      },
      humidity,
    };

    return transformedData;
  } catch (err: any) {
    const error: AxiosError<{
      error: {
        code: number;
        message: string;
      };
    }> = err;

    if (error.response?.data.error && error.response?.status) {
      return rejectWithValue({
        error: {
          code: error.response?.data.error.code,
          message: error.response?.data.error.message,
        },
        status: error.response.status,
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
