import { Task } from "../../../types/Task";

export interface InitialState {
  tasks: Task[];
  editedTaskId: Task["id"];
  showTasks: string;
}
