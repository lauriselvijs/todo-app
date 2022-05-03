import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setTodoOptionCompleted } from "../TodoItems/todoItems.slice";
import { initialState } from "./darkMode.initial-state";

export const darkMode = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<string>) => {
      if (action.payload && !state.darkMode) {
        document.body.className = action.payload;
      } else if (state.darkMode) {
        document.body.className = "";
      }

      state.darkMode = !state.darkMode;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setTodoOptionCompleted, (state) => {
      state.darkMode = true;
    });
  },
});

export const { setDarkMode } = darkMode.actions;

export default darkMode.reducer;
