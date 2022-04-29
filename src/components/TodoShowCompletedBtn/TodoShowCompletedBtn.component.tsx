import React, { useState } from "react";
import "./TodoShowCompletedBtn.style.scss";
import { DARK_MODE } from "../../constants/DarkMode.const";
import { todoOptions } from "../../constants/TodoMenu.const";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { setTodoOptionCompleted } from "../../store/features/TodoItems/todoItems.slice";
import { useAppDispatch } from "../../hooks/TodoActions.hook";

const TodoShowCompletedBtn = () => {
  const { TODO_OPTION_COMPLETED } = todoOptions;
  const todoOption = useSelector((state: RootState) => state.todos.todoOption);
  const dispatch = useAppDispatch();

  const onTodoShowCompletedBtnClick = () => {
    dispatch(setTodoOptionCompleted());
  };

  return (
    <button
      className={
        DARK_MODE
          ? todoOption === TODO_OPTION_COMPLETED
            ? "todo-show-completed-btn-dark-mode-clicked"
            : "todo-show-completed-btn-dark-mode"
          : todoOption === TODO_OPTION_COMPLETED
          ? "todo-show-completed-btn-clicked"
          : "todo-show-completed-btn"
      }
      onClick={onTodoShowCompletedBtnClick}
    >
      Completed
    </button>
  );
};

export default TodoShowCompletedBtn;
