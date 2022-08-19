import { createSlice, current, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { todoOptions } from "../../../constants/TodoMenu.const";
import { ITodoListItem } from "../../../types/ListItem";
import { TODO_ITEMS_SLICE_NAME } from "./todoItems.const";
import initialState from "./todoItems.initial-state";
import { IactiveTodo, IaddTodo } from "./todoItems.reducer.d";

const { TODO_OPTION_ALL, TODO_OPTION_COMPLETED, TODO_OPTION_ACTIVE } =
  todoOptions;

export const todoItems = createSlice({
  name: TODO_ITEMS_SLICE_NAME,
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
        { todoId: nanoid(), todoMsg, todoActive },
      ];
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.todoId !== action.payload
      );
    },
    setActiveTodo: (
      state,
      { payload: { todoId, todoActive } }: PayloadAction<IactiveTodo>
    ) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.todoId === todoId) {
          return { ...todo, todoActive };
        }
        return todo;
      });
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
    setTodoEdit: (
      state,
      { payload: { todoId, todoMsg, todoActive } }: PayloadAction<IaddTodo>
    ) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.todoId === todoId) {
          return { ...todo, todoMsg, todoActive };
        }
        return todo;
      });
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
    setTodoEditMode: (state) => {
      state.todoEditMode = !state.todoEditMode;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  setActiveTodo,
  setNewActiveTodoInput,
  setNewTodoOrder,
  setTodoEdit,
  clearCompletedTodos,
  setTodoOptionAll,
  setTodoOptionCompleted,
  setTodoOptionActive,
  setTodoCount,
  setTodoEditMode,
} = todoItems.actions;

export default todoItems.reducer;
