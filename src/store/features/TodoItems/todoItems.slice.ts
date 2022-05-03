import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { todoOptions } from "../../../constants/TodoMenu.const";
import { ITodoListItem } from "../../../types/ListItem";
import { initialState } from "./todoItems.initial-state";
import { IactiveTodo, IaddTodo } from "./todoItems.reducer.d";

const { TODO_OPTION_ALL, TODO_OPTION_COMPLETED, TODO_OPTION_ACTIVE } =
  todoOptions;

export const todoItems = createSlice({
  name: "todoItems",
  initialState,
  reducers: {
    setTodoCount: (state, action: PayloadAction<number>) => {
      state.todoCount = action.payload;
    },
    addTodo: (
      state,
      { payload: { todoMsg, todoActive } }: PayloadAction<IaddTodo>
    ) => {
      state.todoList = [
        ...state.todoList,
        { todoId: uuidv4(), todoMsg, todoActive },
      ];
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      {
        state.todoList = state.todoList.filter(
          (todo) => todo.todoId !== action.payload
        );
      }
    },
    setActiveTodo: (
      state,
      { payload: { todoId, todoActive } }: PayloadAction<IactiveTodo>
    ) => {
      {
        state.todoList = state.todoList.map((todo) => {
          if (todo.todoId === todoId) {
            return { ...todo, todoActive };
          }
          return todo;
        });
      }
    },
    setNewActiveTodoInput: (state, action: PayloadAction<boolean>) => {
      state.todoActiveInput = action.payload;
    },
    setNewTodoOrder: (
      state,
      action: PayloadAction<ITodoListItem["todo"][]>
    ) => {
      state.todoList = [...action.payload];
    },
    clearCompletedTodos: (state) => {
      state.todoList = state.todoList.filter((todo) => {
        return todo.todoActive === true;
      });
    },
    setTodoOptionAll: (state) => {
      // use current for debugging application state
      // console.log(current(state));
      state.todoOption = TODO_OPTION_ALL;
    },

    setTodoOptionCompleted: (state) => {
      state.todoOption = TODO_OPTION_COMPLETED;
    },
    setTodoOptionActive: (state) => {
      state.todoOption = TODO_OPTION_ACTIVE;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  setActiveTodo,
  setNewActiveTodoInput,
  setNewTodoOrder,
  clearCompletedTodos,
  setTodoOptionAll,
  setTodoOptionCompleted,
  setTodoOptionActive,
  setTodoCount,
} = todoItems.actions;

export default todoItems.reducer;
