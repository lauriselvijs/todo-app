import { DropResult } from "react-beautiful-dnd";
import { Task } from "../types/Task";

export const onTodoDragEnd = (
  result: DropResult,
  todos: Task["task"][]
): Task["task"][] => {
  const { source, destination } = result;
  const newTodoItems = Array.from(todos);
  const [removed] = newTodoItems.splice(source.index, 1);
  destination && newTodoItems.splice(destination.index, 0, removed);

  return newTodoItems;
};
