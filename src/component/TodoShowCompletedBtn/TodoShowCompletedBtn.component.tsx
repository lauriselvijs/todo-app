import React, { useState } from "react";
import "./TodoShowCompletedBtn.style.scss";

const TodoShowCompletedBtn = () => {
  const [todoShowCompletedClicked, setTodoShowCompletedClicked] =
    useState<boolean>(false);

  const onTodoShowCompletedBtnClick = () => {
    setTodoShowCompletedClicked(!todoShowCompletedClicked);
  };

  return (
    <button
      className={
        todoShowCompletedClicked
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
