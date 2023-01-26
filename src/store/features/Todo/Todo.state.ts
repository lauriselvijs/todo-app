import { ShowTasks } from "../../../constants/Task.const";

import { TodoState } from "./Todo.state.d";

const { ALL } = ShowTasks;

const todoState: TodoState = {
  tasks: [],
  tasksLeft: null,
  editedTaskId: "",
  showTasks: ALL,
};

export default todoState;
