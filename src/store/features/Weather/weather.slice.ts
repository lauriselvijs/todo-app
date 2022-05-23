import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./weather.initial-state";
import { AxiosError } from "axios";
import IinitialStateWeather from "./weather.initial-state.d";
import {
  GET_CURRENT_WEATHER_TYPE,
  WEATHER_SLICE_NAME,
} from "./weather.slice.const";
import { IError } from "../../../types/Error.d";
import { CurrentWeatherService } from "../../../services/Weather";

const { getCurrentWeatherData } = CurrentWeatherService;

const getCurrentWeather = createAsyncThunk<
  IinitialStateWeather["current"],
  string,
  {
    rejectValue: IError;
  }
>(GET_CURRENT_WEATHER_TYPE, async (location, { rejectWithValue }) => {
  try {
    const currentWeatherData = getCurrentWeatherData(location);

    return currentWeatherData;
  } catch (err: any) {
    const error: AxiosError<IError> = err;
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
  name: WEATHER_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.pending, (state) => {
      state.loading = true;
      state.loaded = false;
      state.error = { code: 0, message: "" };
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
        // if no defined message found, generic message "Rejected" is passed
        state.error.code = 0;
        state.error.message = action.error.message;
      }
    });
  },
});

export const weatherActions = { getCurrentWeather };

export default weather.reducer;
