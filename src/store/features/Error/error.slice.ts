import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./error.initial-state";
import { IError } from "../../../types/Error";
import { ERROR_SLICE_NAME } from "./error.const";

export const Error = createSlice({
  name: ERROR_SLICE_NAME,
  initialState,
  reducers: {
    setError: (
      state,
      { payload: { code, message } }: PayloadAction<IError>
    ) => {
      state.error.code = code;
      state.error.message = message;
    },
    clearError: (state) => {
      state.error.code = 0;
      state.error.message = "";
    },
  },
});

export const { setError, clearError } = Error.actions;

export default Error.reducer;
