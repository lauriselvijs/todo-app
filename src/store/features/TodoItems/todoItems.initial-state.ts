import { todoOptions } from "../../../constants/TodoMenu.const";
import { IinitialTodoListState } from "./todoItems.initial-state.d";

const { TODO_OPTION_ALL } = todoOptions;

export const initialState: IinitialTodoListState = {
  todoList: [],
  todoActiveInput: true,
  todoOption: TODO_OPTION_ALL,
};
