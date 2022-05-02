import React from "react";
import "./TodoShowAllBtn.style.scss";
import { useAppDispatch } from "../../hooks/TodoActions.hook";
import { setTodoOptionAll } from "../../store/features/TodoItems/todoItems.slice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { todoOptions } from "../../constants/TodoMenu.const";

const TodoShowAllBtn = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);
  const { TODO_OPTION_ALL } = todoOptions;
  const todoOption = useSelector((state: RootState) => state.todos.todoOption);
  const dispatch = useAppDispatch();

  const onTodoShowAllBtnClick = () => {
    dispatch(setTodoOptionAll());
  };

  return (
    <button
      className={
        darkMode
          ? todoOption === TODO_OPTION_ALL
            ? "todo-show-all-btn-dark-mode-clicked"
            : "todo-show-all-btn-dark-mode"
          : todoOption === TODO_OPTION_ALL
          ? "todo-show-all-btn-clicked"
          : "todo-show-all-btn"
      }
      onClick={onTodoShowAllBtnClick}
    >
      All
    </button>
  );
};

export default TodoShowAllBtn;
