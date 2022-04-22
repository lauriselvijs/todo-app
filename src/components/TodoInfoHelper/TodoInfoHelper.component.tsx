import React from "react";
import "./TodoInfoHelper.style.scss";
import { DARK_MODE } from "../../constants/DarkMode.const";

const TodoInfoHelper = () => {
  return (
    <div
      className={DARK_MODE ? "todo-info-helper-dark-mode" : "todo-info-helper"}
    >
      Drag and drop to reorder list
    </div>
  );
};

export default TodoInfoHelper;
