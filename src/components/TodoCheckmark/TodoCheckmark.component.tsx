import React from "react";
import "./TodoCheckmark.style.scss";
import { ITodoCheckmark } from "./TodoCheckmark";
import { useAppDispatch } from "../../hooks/TodoActions.hook";
import {
  setActiveTodo,
  setNewActiveTodoInput,
} from "../../store/features/TodoItems/todoItems.slice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";

const TodoCheckmark = ({
  todoId,
  newActiveTodo,
  todoActive,
}: ITodoCheckmark) => {
  const dispatch = useAppDispatch();
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);

  const onTodoCheckmarkClick = () => {
    todoId && dispatch(setActiveTodo({ todoId, todoActive: !todoActive }));
    newActiveTodo && dispatch(setNewActiveTodoInput(!todoActive));
  };

  return (
    <div
      onClick={onTodoCheckmarkClick}
      className={
        darkMode
          ? todoActive
            ? "todo-check-mark-dark-mode"
            : "todo-check-mark-dark-mode-checked"
          : todoActive
          ? "todo-check-mark"
          : "todo-check-mark-checked"
      }
    />
  );
};

export default TodoCheckmark;
