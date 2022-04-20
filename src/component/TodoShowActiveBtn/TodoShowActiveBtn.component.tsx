import React, { useState } from "react";
import "./TodoShowActiveBtn.style.scss";

const TodoShowActiveBtn = () => {
  const [todoShowActiveClicked, setTodoShowActiveClicked] =
    useState<boolean>(false);

  const onTodoShowActiveBtnClick = () => {
    setTodoShowActiveClicked(!todoShowActiveClicked);
  };

  return (
    <button
      className={
        todoShowActiveClicked
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
