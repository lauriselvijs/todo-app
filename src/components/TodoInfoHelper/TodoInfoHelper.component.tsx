import React from "react";
import "./TodoInfoHelper.style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";

const TodoInfoHelper = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);
  const todoCount = useSelector((state: RootState) => state.todos.todoCount);

  return (
    <div
      className={darkMode ? "todo-info-helper-dark-mode" : "todo-info-helper"}
      style={
        {
          "--todo-list-item-length": todoCount,
        } as React.CSSProperties
      }
    >
      Drag and drop to reorder list
    </div>
  );
};

export default TodoInfoHelper;
