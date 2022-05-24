import todoItems from "../features/TodoItems";
import darkMode from "../features/DarkMode";
import { combineReducers } from "@reduxjs/toolkit";
import ip from "../features/Ip";
import error from "../features/Error";
import weather from "../features/Weather";

const reducers = { todos: todoItems, dark: darkMode, ip, error, weather };

export const rootReducer = combineReducers(reducers);

export default rootReducer;
