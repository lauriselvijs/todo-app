import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./Theme.config";
import initialState from "./Theme.initial-state";

export const theme = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    themeUpdated: (state, { payload: themeName }: PayloadAction<string>) => {
      state.themeName = themeName;
    },
  },
});

export const themeActions = theme.actions;
export const themeReducer = theme.reducer;
export const themeSliceName = theme.name;
