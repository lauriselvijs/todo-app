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
    taskAdded: (
      state,
      { payload: { msg, completed } }: PayloadAction<Omit<Task, "id">>
    ) => {
      state.tasks = [...state.tasks, { id: nanoid(), msg, completed }];
    },
    taskDeleted: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
    },
    taskActivated: (
      state,
      { payload: { id, completed } }: PayloadAction<Omit<Task, "msg">>
    ) => {
      state.tasks = state.tasks.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    },
    taskEdited: (
      state,
      { payload: { id, msg, completed } }: PayloadAction<Task>
    ) => {
      state.tasks = state.tasks.map((todo) => {
        if (todo.id === id) {
          return { ...todo, msg, completed };
        }
        return todo;
      });
    },
    completedTasksCleared: (state) => {
      state.tasks = state.tasks.filter((todo) => {
        return todo.completed === true;
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
    editTaskModeToggled: (state, action: PayloadAction<Task["id"]>) => {
      if (state.editedTaskId) {
        state.editedTaskId = "";
      } else {
        state.editedTaskId = action.payload;
      }
    },
  },
});

export const todoActions = todo.actions;
export const todoReducer = todo.reducer;
export const todoSliceName = todo.name;
