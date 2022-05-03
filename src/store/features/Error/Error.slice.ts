import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IError } from "./Error.initial-state.d";
import { initialState } from "./Error.initial-state";

export const Error = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (
      state,
      { payload: { code, message } }: PayloadAction<IError>
    ) => {
      state.code = code;
      state.message = message;
    },
    clearError: (state) => {
      state.code = 0;
      state.message = "";
    },
  },
});

export const { setError, clearError } = Error.actions;

export default Error.reducer;
