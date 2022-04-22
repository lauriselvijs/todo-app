import React, { useState } from "react";
import "./TodoShowCompletedBtn.style.scss";
import { DARK_MODE } from "../../constants/DarkMode.const";

const TodoShowCompletedBtn = () => {
  const [todoShowCompletedClicked, setTodoShowCompletedClicked] =
    useState<boolean>(false);

  const onTodoShowCompletedBtnClick = () => {
    setTodoShowCompletedClicked(!todoShowCompletedClicked);
  };

  return (
    <button
      className={
        DARK_MODE
          ? todoShowCompletedClicked
            ? "todo-show-completed-btn-dark-mode-clicked"
            : "todo-show-completed-btn-dark-mode"
          : todoShowCompletedClicked
          ? "todo-show-completed-btn-clicked"
          : "todo-show-completed-btn"
      }
      onClick={onTodoShowCompletedBtnClick}
    >
      Completed
    </button>
  );
};

export default TodoShowCompletedBtn;
