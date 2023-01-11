import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { Error } from "../../../types/Error";
import { IpService } from "../../../services/Ip";
import { errorActions } from "../Error";

import { InitialState } from "./Ip.initial-state.d";
import { GET_IP_TYPE, IP_SLICE_NAME } from "./Ip.config";
import { initialState } from "./Ip.initial-state";

const { getIpData } = IpService;
const { updatedError } = errorActions;

const getIp = createAsyncThunk<InitialState["ip"]>(
  GET_IP_TYPE,
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        updatedError({
          code: null,
          message: "",
        })
      );
      const ipData = getIpData();

      return ipData;
    } catch (err: any) {
      const error: AxiosError<Error> = err;

      if (!error.response) {
        throw err;
      }

      if (error.message) {
        thunkAPI.dispatch(
          updatedError({
            code: null,
            message: error.message,
          })
        );
      }

      if (error.response.data.code && error.response.data.message) {
        thunkAPI.dispatch(
          updatedError({
            code: err.response.data.code,
            message: err.response.data.message,
          })
        );
      }

      return error;
    }
  }
);

export const ip = createSlice({
  name: IP_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getIp.fulfilled, (state, action) => {
      state.loading = false;
      state.ip = action.payload;
    });
    builder.addCase(getIp.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const ipActions = ip.actions;
export const ipReducer = ip.reducer;
export const ipSliceName = ip.name;
