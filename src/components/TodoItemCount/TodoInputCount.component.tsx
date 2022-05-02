import React from "react";
import "./TodoItemCount.style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { stringPluralize } from "../../utils/String.util";

const TodoInputCount = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);
  const todoCount = useSelector((state: RootState) => state.todos.todoCount);

  return (
    <div
      className={darkMode ? "todo-input-count-dark-mode" : "todo-input-count"}
    >
      {stringPluralize(todoCount, "item")} left
    </div>
  );
};

export default TodoInputCount;
