import React from "react";
import "./TodoShowActiveBtn.style.scss";
import { DARK_MODE } from "../../constants/DarkMode.const";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { todoOptions } from "../../constants/TodoMenu.const";
import { setTodoOptionActive } from "../../store/features/TodoItems/todoItems.slice";
import { useAppDispatch } from "../../hooks/TodoActions.hook";

const TodoShowActiveBtn = () => {
  const { TODO_OPTION_ACTIVE } = todoOptions;
  const todoOption = useSelector((state: RootState) => state.todos.todoOption);
  const dispatch = useAppDispatch();

  const onTodoShowActiveBtnClick = () => {
    dispatch(setTodoOptionActive());
  };

  return (
    <button
      className={
        DARK_MODE
          ? todoOption === TODO_OPTION_ACTIVE
            ? "todo-show-active-btn-dark-mode-clicked"
            : "todo-show-active-btn-dark-mode"
          : todoOption === TODO_OPTION_ACTIVE
          ? "todo-show-active-btn-clicked"
          : "todo-show-active-btn"
      }
      onClick={onTodoShowActiveBtnClick}
    >
      Active
    </button>
  );
};

export default TodoShowActiveBtn;
