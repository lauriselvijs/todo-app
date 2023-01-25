import { Task } from "../../../types/Task";

export interface InitialState {
  tasks: Task["task"][];
  taskInputActive: boolean;
  editedTaskId: Task["task"]["id"];
  showTasks: string;
  taskCount: number;
}
