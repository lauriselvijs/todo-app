import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../../types/Task";
import { ShowTasks, SLICE_NAME } from "./Todo.config";
import initialState from "./Todo.initial-state";

const { ALL, COMPLETED, ACTIVE } = ShowTasks;

export const todo = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    taskCountUpdated: (state, action: PayloadAction<number>) => {
      state.taskCount = action.payload;
    },
    taskAdded: (
      state,
      { payload: { msg, active } }: PayloadAction<Task["task"]>
    ) => {
      state.tasks = [...state.tasks, { id: nanoid(), msg, active }];
    },
    taskDeleted: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
    },
    taskActivated: (
      state,
      { payload: { id, active } }: PayloadAction<Task["task"]>
    ) => {
      state.tasks = state.tasks.map((todo) => {
        if (todo.id === id) {
          return { ...todo, active };
        }
        return todo;
      });
    },
    taskInputSelected: (state, action: PayloadAction<boolean>) => {
      state.taskInputActive = action.payload;
    },
    taskOrderUpdated: (state, action: PayloadAction<Task["task"][]>) => {
      state.tasks = [...action.payload];
    },
    taskEdited: (
      state,
      { payload: { id, msg, active } }: PayloadAction<Task["task"]>
    ) => {
      state.tasks = state.tasks.map((todo) => {
        if (todo.id === id) {
          return { ...todo, msg, active };
        }
        return todo;
      });
    },
    completedTasksCleared: (state) => {
      state.tasks = state.tasks.filter((todo) => {
        return todo.active === true;
      });
    },
    showedAllTasks: (state) => {
      state.showTasks = ALL;
    },

    showedCompletedTasks: (state) => {
      state.showTasks = COMPLETED;
    },
    showedClearedTasks: (state) => {
      state.showTasks = ACTIVE;
    },
    editModeActivated: (state) => {
      state.taskEditMode = !state.taskEditMode;
    },
  },
});

export const todoActions = todo.actions;
export const todoReducer = todo.reducer;
export const todoSliceName = todo.name;
