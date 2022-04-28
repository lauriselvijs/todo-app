import { ITodoListItem } from "../../../types/ListItem";

export interface IinitialTodoListState {
  todoList: ITodoListItem["todo"][];
  todoActiveInput: boolean;
  todoOption: string;
}
