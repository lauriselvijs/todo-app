import { todoActions } from "./";
import type { AppStartListening } from "../../app/middleware/Listener/Listener.middleware";

export const todoListeners = (startAppListening: AppStartListening) => {
  startAppListening({
    predicate: (
      _action,
      { todo: { tasks } },
      { todo: { tasks: prevTasks } }
    ) => {
      if (tasks.length > prevTasks.length) {
        return true;
      }

      if (tasks.length < prevTasks.length) {
        return true;
      }

      const isChanged =
        tasks.length && prevTasks.length
          ? tasks.some((task, index) => {
              return task.completed !== prevTasks[index]?.completed;
            })
          : false;

      return isChanged;
    },
    effect: (_action, listenerApi) => {
      listenerApi.cancelActiveListeners();

      const tasksLeft = listenerApi
        .getState()
        .todo.tasks.reduce((count, task) => {
          return !task.completed ? count + 1 : count;
        }, 0);

      listenerApi.dispatch(todoActions.tasksLeftUpdated(tasksLeft));
    },
  });
};
