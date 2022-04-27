import { configureStore } from "@reduxjs/toolkit";
import todoItems from "../features/TodoItems";

export const store = configureStore({
  reducer: {
    todos: todoItems,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
