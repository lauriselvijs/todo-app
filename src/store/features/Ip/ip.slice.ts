import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./ip.initial-state";
import axios, { AxiosError } from "axios";
import { Iip } from "./ip.initial-state.d";
import { IError } from "../Error/Error.initial-state.d";
import { setError } from "../Error/Error.slice";
import { store } from "../../app/store";

// export const getIp = createAsyncThunk<Iip["ip"]>(
//   "ip/getIp",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("https://api.ipify.org/?format=json");
//       return response.data;
//     } catch (err: any) {
//       if (!err.response) {
//         throw err;
//       }
//       thunkAPI.dispatch(setError({ id: 1, msg: "test" }));
//       // return rejectWithValue(err.response.data);
//     }
//   }
// );

const options = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/ip.json",
  params: { q: "s" },
  headers: {
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY
      ? process.env.REACT_APP_X_RAPID_API_KEY
      : "",
  },
};

const getIp = createAsyncThunk<
  Iip["ipInfo"],
  void,
  {
    rejectValue: IError;
  }
>("ip/getIp", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.request(options);
    return response.data.ip;
  } catch (err: any) {
    const error: AxiosError<IError> = err;
    if (!error.response) {
      throw err;
    }

    return rejectWithValue(error.response.data);
  }
});

export const ip = createSlice({
  name: "ip",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getIp.fulfilled, (state, { payload: ip }) => {
      state.loading = false;
      state.ipInfo = ip;
    });
    builder.addCase(getIp.rejected, (_, action) => {
      if (action.payload) {
        store.getState().error.code = action.payload.code;
        store.getState().error.message = action.payload.message;
      } else if (action.error.message) {
        store.getState().error.message = action.error.message;
      }
    });
  },
});

// builder.addCase(getIp.rejected, (state, action) => {
//   if (action.payload) {
//     store.getState().error.code = action.payload.code;
//     store.getState().error.message = action.payload.message;
//   }
// });

export { getIp };

export default ip.reducer;
