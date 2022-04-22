import React, { useState } from "react";
import "./TodoShowActiveBtn.style.scss";
import { DARK_MODE } from "../../constants/DarkMode.const";

const TodoShowActiveBtn = () => {
  const [todoShowActiveClicked, setTodoShowActiveClicked] =
    useState<boolean>(false);

  const onTodoShowActiveBtnClick = () => {
    setTodoShowActiveClicked(!todoShowActiveClicked);
  };

  return (
    <button
      className={
        DARK_MODE
          ? todoShowActiveClicked
            ? "todo-show-active-btn-dark-mode-clicked"
            : "todo-show-active-btn-dark-mode"
          : todoShowActiveClicked
          ? "todo-show-active-btn-clicked"
          : "todo-show-active-btn"
      }
      onClick={onTodoShowActiveBtnClick}
    >
      Active
    </button>
  );
};

export default TodoShowActiveBtn;
