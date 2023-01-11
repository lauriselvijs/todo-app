import { combineReducers } from "@reduxjs/toolkit";

import { todoReducer, todoSliceName } from "../features/Todo";
import { ipReducer, ipSliceName } from "../features/Ip";
import { errorReducer, errorSliceName } from "../features/Error";
import { weatherReducer, weatherSliceName } from "../features/Weather";
import { themeSliceName, themeReducer } from "../features/Theme";

const reducers = {
  [todoSliceName]: todoReducer,
  [themeSliceName]: themeReducer,
  [ipSliceName]: ipReducer,
  [errorSliceName]: errorReducer,
  [weatherSliceName]: weatherReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
