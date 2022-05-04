import { ITodoListItem } from "../../../types/ListItem";

interface IinitialTodoListState {
  todoList: ITodoListItem["todo"][];
  todoActiveInput: boolean;
  todoOption: string;
  todoCount: number;
}

export default IinitialTodoListState;
