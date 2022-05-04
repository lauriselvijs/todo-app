import { TODO_LIST_ITEM_COUNT } from "../constants/TodoMenu.const";

export const setTodoItemLengthProperty = (
  length: number
): React.CSSProperties => {
  return {
    [TODO_LIST_ITEM_COUNT]: length,
  } as React.CSSProperties;
};
