import React from "react";
import { DARK_MODE } from "../../constants/DarkMode.const";
import "./TodoItemSeparator.style.scss";

const TodoItemSeparator = () => {
  return (
    <div
      className={
        DARK_MODE ? "todo-menu-separator-dark-mode" : "todo-menu-separator"
      }
    />
  );
};

export default TodoItemSeparator;
