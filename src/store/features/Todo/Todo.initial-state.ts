import { ShowTasks } from "../../../constants/Task.const";
import { InitialState } from "./Todo.initial-state.d";

const { ALL } = ShowTasks;

const initialState: InitialState = {
  tasks: [],
  taskInputActive: true,
  editedTaskId: "",
  showTasks: ALL,
  taskCount: 0,
};

export default initialState;
