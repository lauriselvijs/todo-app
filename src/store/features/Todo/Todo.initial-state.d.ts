import { Task } from "../../../types/Task";

export interface InitialState {
  tasks: Task["task"][];
  taskInputActive: boolean;
  taskEditMode: boolean;
  showTasks: string;
  taskCount: number;
}
