import React from "react";
import "./TodoCheckmark.style.scss";
import { ITodoCheckmark } from "./TodoCheckmark";
import { DARK_MODE } from "../../const/DarkMode.const";

const TodoCheckmark = ({
  todoActive,
  onTodoCheckmarkClick,
}: ITodoCheckmark) => {
  return (
    <div
      onClick={onTodoCheckmarkClick}
      className={
        DARK_MODE
          ? todoActive
            ? "todo-check-mark-dark-mode"
            : "todo-check-mark-checked-dark-mode"
          : todoActive
          ? "todo-check-mark"
          : "todo-check-mark-checked"
      }
    />
  );
};

export default TodoCheckmark;
