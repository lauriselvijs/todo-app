import React from "react";
import "./TodoClearCompletedBtn.style.scss";
import { DARK_MODE } from "../../constants/DarkMode.const";
import { useDispatch } from "react-redux";
import { clearCompletedTodos } from "../../store/features/TodoItems/todoItems.slice";

const TodoClearCompletedBtn = () => {
  const dispatch = useDispatch();

  const onTodoClearCompletedBtnClick = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <button
      className={
        DARK_MODE
          ? "todo-clear-completed-btn-dark-mode"
          : "todo-clear-completed-btn"
      }
      onClick={onTodoClearCompletedBtnClick}
    >
      Clear Completed
    </button>
  );
};

export default TodoClearCompletedBtn;
