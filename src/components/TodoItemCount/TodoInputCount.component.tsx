import React from "react";
import "./TodoItemCount.style.scss";
import { DARK_MODE } from "../../constants/DarkMode.const";

const TodoInputCount = () => {
  return (
    <div
      className={DARK_MODE ? "todo-input-count-dark-mode" : "todo-input-count"}
    >
      5 items left
    </div>
  );
};

export default TodoInputCount;
