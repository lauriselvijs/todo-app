import React from "react";
import "./TodoCheckmark.style.scss";
import { ITodoCheckmark } from "./TodoCheckmark";
import { DARK_MODE } from "../../constants/DarkMode.const";
import { useAppDispatch } from "../../hooks/TodoActions.hook";
import {
  setActiveTodo,
  setNewActiveTodoInput,
} from "../../store/features/TodoItems/todoItems.slice";

const TodoCheckmark = ({
  todoId,
  newActiveTodo,
  todoActive,
}: ITodoCheckmark) => {
  const dispatch = useAppDispatch();

  const onTodoCheckmarkClick = () => {
    todoId && dispatch(setActiveTodo({ todoId, todoActive: !todoActive }));
    newActiveTodo && dispatch(setNewActiveTodoInput(!todoActive));
  };

  return (
    <div
      onClick={onTodoCheckmarkClick}
      className={
        DARK_MODE
          ? todoActive
            ? "todo-check-mark-dark-mode"
            : "todo-check-mark-dark-mode-checked"
          : todoActive
          ? "todo-check-mark"
          : "todo-check-mark-checked"
      }
    />
  );
};

export default TodoCheckmark;
