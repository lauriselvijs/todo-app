import React from "react";
import "./TodoItemCount.style.scss";
import { DARK_MODE } from "../../constants/DarkMode.const";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { stringPluralize } from "../../utils/String.util";

const TodoInputCount = () => {
  const todoList = useSelector((state: RootState) => state.todos.todoList);

  return (
    <div
      className={DARK_MODE ? "todo-input-count-dark-mode" : "todo-input-count"}
    >
      {stringPluralize(todoList.length, "item")} left
    </div>
  );
};

export default TodoInputCount;
