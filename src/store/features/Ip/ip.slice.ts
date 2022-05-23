import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./ip.initial-state";
import { AxiosError } from "axios";
import IinitalStateIp from "./ip.initial-state.d";
import { setError } from "../Error/error.slice";
import { GET_IP_TYPE, IP_SLICE_NAME } from "./ip.store.const";
import { IError } from "../../../types/Error";
import { IpService } from "../../../services/Ip";

const { getIpData } = IpService;

const getIp = createAsyncThunk<IinitalStateIp["ipInfo"]>(
  GET_IP_TYPE,
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        setError({
          code: 0,
          message: "",
        })
      );
      const ipData = getIpData();

      return ipData;
    } catch (err: any) {
      const error: AxiosError<IError> = err;

      if (!error.response) {
        throw err;
      }

      if (error.message) {
        thunkAPI.dispatch(
          setError({
            code: 0,
            message: error.message,
          })
        );
      }

      if (error.response.data.code && error.response.data.message) {
        thunkAPI.dispatch(
          setError({
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
      state.ipInfo = action.payload;
    });
    builder.addCase(getIp.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const ipActions = { getIp };

export default ip.reducer;
