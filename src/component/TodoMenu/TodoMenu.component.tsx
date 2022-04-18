import React from "react";
import "./TodoMenu.style.scss";

const TodoMenu = () => {
  return (
    <div className="todo-menu">
      <div className="circle-check-mark" />
      <ul className="todo-list">
        <li className="todo-list-item-1">Jog around the park</li>
        <li className="todo-list-item-2">Read for 1 hour</li>
      </ul>
    </div>
  );
};

export default TodoMenu;
