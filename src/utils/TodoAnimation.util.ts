import { DropResult } from "react-beautiful-dnd";
import { ITodoListItem } from "../types/ListItem";

export const onTodoDragEnd = (
  result: DropResult,
  todos: ITodoListItem["todo"][]
): ITodoListItem["todo"][] => {
  const { source, destination } = result;
  const newTodoItems = Array.from(todos);
  const [removed] = newTodoItems.splice(source.index, 1);
  destination && newTodoItems.splice(destination.index, 0, removed);

  return newTodoItems;
};
