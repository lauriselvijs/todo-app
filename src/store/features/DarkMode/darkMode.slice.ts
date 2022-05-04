import { createSlice } from "@reduxjs/toolkit";
import { DARK_MODE_SLICE_NAME } from "./darkMode.const";
import initialState from "./darkMode.initial-state";

export const darkMode = createSlice({
  name: DARK_MODE_SLICE_NAME,
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setDarkMode } = darkMode.actions;

export default darkMode.reducer;
