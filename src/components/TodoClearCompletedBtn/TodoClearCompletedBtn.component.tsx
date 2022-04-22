import React from "react";
import "./TodoClearCompletedBtn.style.scss";
import { DARK_MODE } from "../../constants/DarkMode.const";

const TodoClearCompletedBtn = () => {
  const onTodoClearCompletedBtnClick = () => {
    console.log("clear completed");
  };

  return (
    <button
      className={
        DARK_MODE
          ? "todo-clear-completed-btn-dark-mode"
          : "todo-clear-completed-btn"
      }
      onClick={onTodoClearCompletedBtnClick}
    >
      Clear Completed
    </button>
  );
};

export default TodoClearCompletedBtn;
