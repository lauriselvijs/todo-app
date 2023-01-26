import { Task } from "../../../types/Task";

export interface TodoState {
  tasks: Task[];
  tasksLeft: number;
  editedTaskId: Task["id"];
  showTasks: string;
}
