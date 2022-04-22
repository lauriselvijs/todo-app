import React, { useState } from "react";
import "./TodoShowAllBtn.style.scss";
import { DARK_MODE } from "../../constants/DarkMode.const";

const TodoShowAllBtn = () => {
  const [todoShowAllClicked, setTodoShowAllClicked] = useState<boolean>(false);

  const onTodoShowAllBtnClick = () => {
    setTodoShowAllClicked(!todoShowAllClicked);
  };

  return (
    <button
      className={
        DARK_MODE
          ? todoShowAllClicked
            ? "todo-show-all-btn-dark-mode-clicked"
            : "todo-show-all-btn-dark-mode"
          : todoShowAllClicked
          ? "todo-show-all-btn-clicked"
          : "todo-show-all-btn"
      }
      onClick={onTodoShowAllBtnClick}
    >
      All
    </button>
  );
};

export default TodoShowAllBtn;
