import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./ip.initial-state";
import axios from "axios";
import IinitalStateIp from "./ip.initial-state.d";
import { setError } from "../Error/error.slice";
import { GET_YOUR_IP_URL } from "../../../constants/Ip.const";
import { GET_IP_TYPE, IP_SLICE_NAME } from "./ip.const";

const getIp = createAsyncThunk<IinitalStateIp>(
  GET_IP_TYPE,
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        setError({
          code: 0,
          message: "",
        })
      );
      const response = await axios.get(GET_YOUR_IP_URL);

      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      if (err.response.data.code && err.response.data.message) {
        thunkAPI.dispatch(
          setError({
            code: err.response.data.code,
            message: err.response.data.message,
          })
        );
      }
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
    builder.addCase(getIp.fulfilled, (state, { payload: { ipInfo } }) => {
      state.loading = false;
      state.ipInfo = ipInfo;
    });
    builder.addCase(getIp.rejected, (state) => {
      state.loading = false;
    });
  },
});

export { getIp };

export default ip.reducer;
