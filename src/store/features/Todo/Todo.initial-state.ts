import { ShowTasks } from "../../../constants/Task.const";

import { InitialState } from "./Todo.initial-state.d";

const { ALL } = ShowTasks;

const initialState: InitialState = {
  tasks: [],
  editedTaskId: "",
  showTasks: ALL,
};

export default initialState;
