import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ShowTasks } from "../../../constants/Task.const";
import { Task } from "../../../types/Task";
import { SLICE_NAME } from "./Todo.config";
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
      { payload: { msg, active } }: PayloadAction<Omit<Task["task"], "id">>
    ) => {
      state.tasks = [...state.tasks, { id: nanoid(), msg, active }];
    },
    taskDeleted: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
    },
    taskActivated: (
      state,
      { payload: { id, active } }: PayloadAction<Omit<Task["task"], "msg">>
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
    allTasksShowed: (state) => {
      state.showTasks = ALL;
    },

    completedTasksShowed: (state) => {
      state.showTasks = COMPLETED;
    },
    activeTasksShowed: (state) => {
      state.showTasks = ACTIVE;
    },
    taskEditModeActivated: (
      state,
      action: PayloadAction<Task["task"]["id"]>
    ) => {
      state.editedTaskId = action.payload;
    },
    taskEditModeDeactivated: (state) => {
      state.editedTaskId = "";
    },
  },
});

export const todoActions = todo.actions;
export const todoReducer = todo.reducer;
export const todoSliceName = todo.name;
