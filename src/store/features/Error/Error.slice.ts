import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error as IError } from "../../../types/Error";

import initialState from "./Error.initial-state";
import { SLICE_NAME } from "./Error.config";

export const error = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    updatedError: (
      state,
      { payload: { code, message } }: PayloadAction<IError>
    ) => {
      state.code = code;
      state.message = message;
    },
    clearError: (state) => {
      state.code = null;
      state.message = "";
    },
  },
});

export const errorActions = error.actions;
export const errorReducer = error.reducer;
export const errorSliceName = error.name;
