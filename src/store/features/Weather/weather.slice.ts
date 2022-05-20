import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./weather.initial-state";
import axios, { AxiosError } from "axios";
import {
  WEATHER_API_URL,
  X_RAPID_API_HOST_NAME,
  X_RAPID_API_HOST,
  X_RAPID_API_KEY,
} from "../../../constants/Weather.const";
import IinitialStateWeather from "./weather.initial-state.d";
import {
  GET_CURRENT_WEATHER_TYPE,
  WEATHER_SLICE_NAME,
} from "./weather.slice.const";
import { IError } from "../../../types/Error.d";

const getCurrentWeather = createAsyncThunk<
  IinitialStateWeather["current"],
  string,
  {
    rejectValue: IError;
  }
>(GET_CURRENT_WEATHER_TYPE, async (location, { rejectWithValue }) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: WEATHER_API_URL,
      params: { q: location },
      headers: {
        [X_RAPID_API_HOST]: X_RAPID_API_HOST_NAME,
        [X_RAPID_API_KEY]: process.env.REACT_APP_X_RAPID_API_KEY_VALUE
          ? process.env.REACT_APP_X_RAPID_API_KEY_VALUE
          : "",
      },
    });

    return response.data.current;
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
