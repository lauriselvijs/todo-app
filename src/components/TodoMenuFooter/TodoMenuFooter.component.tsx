import React from "react";
import { DARK_MODE } from "../../constants/DarkMode.const";
import TodoClearCompletedBtn from "../TodoClearCompletedBtn";
import TodoInputCount from "../TodoItemCount";
import TodoShowActiveBtn from "../TodoShowActiveBtn";
import TodoShowAllBtn from "../TodoShowAllBtn";
import TodoShowCompletedBtn from "../TodoShowCompletedBtn";
import "./TodoMenuFooter.style.scss";

const TodoMenuFooter = () => {
  return (
    <div className="todo-menu-footer">
      <div className="todo-menu-footer-left-section">
        <TodoInputCount />
      </div>
      <div
        className={
          DARK_MODE
            ? "todo-menu-footer-center-section-dark-mode"
            : "todo-menu-footer-center-section"
        }
      >
        <TodoShowAllBtn />
        <TodoShowActiveBtn />
        <TodoShowCompletedBtn />
      </div>
      <div className="todo-menu-footer-right-section">
        <TodoClearCompletedBtn />
      </div>
    </div>
  );
};

export default TodoMenuFooter;
