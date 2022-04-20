import React from "react";
import "./TodoCheckmark.style.scss";

const TodoCheckmark = ({
  todoActive,
  onTodoCheckmarkClick,
}: {
  todoActive: boolean;
  onTodoCheckmarkClick: () => void;
}) => {
  return (
    <div
      onClick={onTodoCheckmarkClick}
      className={todoActive ? "todo-check-mark" : "todo-check-mark-checked"}
    />
  );
};

export default TodoCheckmark;
