import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { initialState } from "./todoItems.initial-state";
import { IaddTodo } from "./todoItems.reducer";

export const todoItems = createSlice({
  name: "todoItems",
  initialState,
  reducers: {
    addTodo: (
      state,
      { payload: { todoMsg, todoActive } }: PayloadAction<IaddTodo["todo"]>
    ) => {
      state.todoList.push({ todoId: uuidv4(), todoMsg, todoActive });
    },
    // deleteTodo: (
    //   state,
    //   { payload: { todoMsg, todoActive } }: PayloadAction<IaddTodo["todo"]>
    // ) => {
    //   state.todoList.push({ todoId: uuidv4(), todoMsg, todoActive });
    // },
  },
});

export const { addTodo } = todoItems.actions;

export default todoItems.reducer;
