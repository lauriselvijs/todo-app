import React from "react";
import "./TodoClearCompletedBtn.style.scss";

const TodoClearCompletedBtn = () => {
  const onTodoClearCompletedBtnClick = () => {
    console.log("clear completed");
  };

  return (
    <button
      className="todo-clear-completed-btn"
      onClick={onTodoClearCompletedBtnClick}
    >
      Clear Completed
    </button>
  );
};

export default TodoClearCompletedBtn;
