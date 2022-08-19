import { todoOptions } from "../../../constants/TodoMenu.const";
import IinitialTodoListState from "./todoItems.initial-state.d";

const { TODO_OPTION_ALL } = todoOptions;

const initialState: IinitialTodoListState = {
  todoList: [],
  todoActiveInput: true,
  todoEditMode: false,
  todoOption: TODO_OPTION_ALL,
  todoCount: 0,
};

export default initialState;
