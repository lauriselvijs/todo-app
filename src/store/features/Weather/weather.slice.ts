import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./weather.initial-state";
import axios, { AxiosError } from "axios";
import {
  WEATHER_API_URL,
  X_RAPID_API_Host,
} from "../../../constants/Weather.const";
import IinitialStateWeather from "./weather.initial-state.d";
import { GET_CURRENT_WEATHER_TYPE, WEATHER_SLICE_NAME } from "./weather.const";
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
        "X-RapidAPI-Host": X_RAPID_API_Host,
        "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY
          ? process.env.REACT_APP_X_RAPID_API_KEY
          : "",
      },
    });
    return response.data.current;
  } catch (err: any) {
    const error: AxiosError<IError> = err;
    if (!error.response) {
      throw err;
    }

    return rejectWithValue(error.response.data);
  }
});

const weather = createSlice({
  name: WEATHER_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.pending, (state) => {
      state.loading = true;
      state.error = { code: 0, message: "" };
    });
    builder.addCase(getCurrentWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.current = action.payload;
    });
    builder.addCase(getCurrentWeather.rejected, (state, action) => {
      state.loading = false;

      if (action.payload) {
        state.error = action.payload.error;
      } else if (action.error.message) {
        // if no defined message found, pass generic message "Rejected"
        state.error.message = action.error.message;
      }
    });
  },
});

export { getCurrentWeather };

export default weather.reducer;
