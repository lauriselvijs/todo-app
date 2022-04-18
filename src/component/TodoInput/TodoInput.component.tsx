import React from "react";
import "./TodoInput.style.scss";

const TodoInput = () => {
  return (
    <div className="todo-input">
      <div className="circle-check-mark" />
      <input type="text" className="todo-input-field" />
    </div>
  );
};

export default TodoInput;
