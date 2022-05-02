import todoItems from "../features/TodoItems";
import darkMode from "../features/DarkMode";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  todos: todoItems,
  dark: darkMode,
});

export default rootReducer;
