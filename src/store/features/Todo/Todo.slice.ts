import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ShowTasks } from "../../../constants/Task.const";
import { Task } from "../../../types/Task";
import { SLICE_NAME } from "./Todo.config";
import todoState from "./Todo.state";

import { createListenerMiddleware, addListener } from "@reduxjs/toolkit";
import type { TypedStartListening, TypedAddListener } from "@reduxjs/toolkit";

import type { RootState, AppDispatch } from "../../app/store";

const { ALL, COMPLETED, ACTIVE } = ShowTasks;

export const todo = createSlice({
  name: SLICE_NAME,
  initialState: todoState,
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
    incompleteTasksCounted: (state) => {
      state.tasksLeft = state.tasks.reduce((count, task) => {
        return !task.completed ? count + 1 : count;
      }, 0);
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

export const listenerMiddleware = createListenerMiddleware();
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;
export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;

startAppListening({
  predicate: (_action, { todo: { tasks } }, { todo: { tasks: prevTasks } }) => {
    // console.log(action.type === todo.actions.taskAdded.type);

    const isChanged =
      tasks.length !== 0 && prevTasks.length !== 0
        ? tasks?.some((task, index) => {
            return task?.completed !== prevTasks[index]?.completed;
          })
        : false;

    return isChanged;
  },
  effect: async (_action, listenerApi) => {
    listenerApi.cancelActiveListeners();
  },
});

export const todoActions = todo.actions;
export const todoReducer = todo.reducer;
export const todoSliceName = todo.name;
