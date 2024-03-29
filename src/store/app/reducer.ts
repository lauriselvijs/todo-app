import { combineReducers } from "@reduxjs/toolkit";

import { todoReducer, todoSliceName } from "../features/Todo";
import { weatherReducer, weatherSliceName } from "../features/Weather";
import { themeSliceName, themeReducer } from "../features/Theme";

const reducers = {
  [todoSliceName]: todoReducer,
  [themeSliceName]: themeReducer,
  [weatherSliceName]: weatherReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
