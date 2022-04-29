import React from "react";
import "./TodoItemCount.style.scss";
import { DARK_MODE } from "../../constants/DarkMode.const";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { stringPluralize } from "../../utils/String.util";

const TodoInputCount = () => {
  const todoCount = useSelector((state: RootState) => state.todos.todoCount);

  return (
    <div
      className={DARK_MODE ? "todo-input-count-dark-mode" : "todo-input-count"}
    >
      {stringPluralize(todoCount, "item")} left
    </div>
  );
};

export default TodoInputCount;
