import todoItems from "../features/TodoItems";
import darkMode from "../features/DarkMode";
import { combineReducers } from "@reduxjs/toolkit";
import ip from "../features/Ip";
import error from "../features/Error";
import weather from "../features/Weather";

export const rootReducer = combineReducers({
  todos: todoItems,
  dark: darkMode,
  ip,
  error,
  weather,
});

export default rootReducer;
