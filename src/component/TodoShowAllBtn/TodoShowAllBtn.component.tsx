import React, { useState } from "react";
import "./TodoShowAllBtn.style.scss";

const TodoShowAllBtn = () => {
  const [todoShowAllClicked, setTodoShowAllClicked] = useState<boolean>(false);

  const onTodoShowAllBtnClick = () => {
    setTodoShowAllClicked(!todoShowAllClicked);
  };

  return (
    <button
      className={
        todoShowAllClicked ? "todo-show-all-btn-clicked" : "todo-show-all-btn"
      }
      onClick={onTodoShowAllBtnClick}
    >
      All
    </button>
  );
};

export default TodoShowAllBtn;
