import React from "react";
import "./TodoInfoHelper.style.scss";
import { DARK_MODE } from "../../const/DarkMode.const";

const TodoInfoHelper = () => {
  return (
    <div
      className={DARK_MODE ? "todo-input-field-dark-mode" : "todo-input-field"}
    >
      Drag and drop to reorder list
    </div>
  );
};

export default TodoInfoHelper;
