import todoItems from "../features/TodoItems";
import darkMode from "../features/DarkMode";
import { combineReducers } from "@reduxjs/toolkit";
import ip from "../features/Ip";
import error from "../features/Error";

export const rootReducer = combineReducers({
  todos: todoItems,
  dark: darkMode,
  ip,
  error,
});

export default rootReducer;
