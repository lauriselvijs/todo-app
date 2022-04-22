import React from "react";
import "./TodoCheckmark.style.scss";
import { ITodoCheckmark } from "./TodoCheckmark";
import { DARK_MODE } from "../../constants/DarkMode.const";

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
            : "todo-check-mark-dark-mode-checked"
          : todoActive
          ? "todo-check-mark"
          : "todo-check-mark-checked"
      }
    />
  );
};

export default TodoCheckmark;
