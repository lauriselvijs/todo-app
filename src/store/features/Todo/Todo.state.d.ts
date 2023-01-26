import { Task } from "../../../types/Task";

export interface TodoState {
  tasks: Task[];
  tasksLeft: number | null;
  editedTaskId: Task["id"];
  showTasks: string;
}
