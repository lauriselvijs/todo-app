import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import { ShowTasks } from "../../../constants/Task.const";
import { Task } from "../../../types/Task";

import { SLICE_NAME } from "./Todo.config";
import todoState from "./Todo.state";
import { TodoState } from "./Todo.state.d";

const { ALL, COMPLETED, ACTIVE } = ShowTasks;

export const todo = createSlice({
  name: SLICE_NAME,
  initialState: todoState,
  reducers: {
    tasksReordered: (
      state,
      { payload: reorderedTasks }: PayloadAction<Task[]>
    ) => {
      state.tasks = reorderedTasks;
    },
    taskAdded: (
      state,
      { payload: { msg, completed } }: PayloadAction<Omit<Task, "id">>
    ) => {
      state.tasks = [...state.tasks, { id: nanoid(), msg, completed }];
    },
    taskDeleted: (state, { payload: taskId }: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(({ id }) => id !== taskId);
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
      state.tasks = state.tasks.filter((task) => {
        return task.completed === false;
      });
    },
    tasksLeftUpdated: (
      state,
      { payload: taskLeft }: PayloadAction<TodoState["tasksLeft"]>
    ) => {
      state.tasksLeft = taskLeft;
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
    editTaskModeToggled: (
      state,
      { payload: id }: PayloadAction<Task["id"]>
    ) => {
      if (state.editedTaskId === id) {
        state.editedTaskId = "";
      } else {
        state.editedTaskId = id;
      }
    },
  },
});

export const todoActions = todo.actions;
export const todoReducer = todo.reducer;
export const todoSliceName = todo.name;
