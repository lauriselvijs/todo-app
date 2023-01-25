import { Task } from "../../../types/Task";

export interface InitialState {
  tasks: Task[];
  taskInputActive: boolean;
  editedTaskId: Task["id"];
  showTasks: string;
  taskCount: number;
}
