import React from "react";
import "./TodoCheckmark.style.scss";

const TodoCheckmark = ({
  active,
  onTodoCheckmarkClick,
}: {
  active: boolean;
  onTodoCheckmarkClick: () => void;
}) => {
  return (
    <div
      onClick={onTodoCheckmarkClick}
      className={active ? "todo-check-mark" : "todo-check-mark-checked"}
    />
  );
};

export default TodoCheckmark;
