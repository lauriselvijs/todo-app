import React from "react";
import "./TodoMenu.style.scss";
import TodoListItem from "../TodoListItem";
import { ITodoListItem } from "../../type-definition/ListItem";
import TodoInputCount from "../TodoItemCount";
import TodoShowAllBtn from "../TodoShowAllBtn";
import TodoShowActiveBtn from "../TodoShowActiveBtn";
import TodoShowCompletedBtn from "../TodoShowCompletedBtn";
import TodoClearCompletedBtn from "../TodoClearCompletedBtn";
import { DARK_MODE } from "../../const/DarkMode.const";

const todoList = [
  {
    todoId: "1",
    todoMsg: "Finnish homework",
    todoActive: true,
  },
  {
    todoId: "2",
    todoMsg: "Shopping",
    todoActive: false,
  },
  {
    todoId: "3",
    todoMsg: "Shopping",
    todoActive: false,
  },
  {
    todoId: "4",
    todoMsg: "Shopping",
    todoActive: false,
  },
  {
    todoId: "5",
    todoMsg: "Shopping",
    todoActive: false,
  },
];

const TodoMenu = () => {
  return (
    <div className={DARK_MODE ? "todo-menu-dark-mode" : "todo-menu"}>
      {todoList.map((todo: ITodoListItem["todo"], index: number) => (
        <div key={index}>
          <TodoListItem todo={todo} />
          <div
            className={
              DARK_MODE
                ? "todo-menu-dark-mode-separator"
                : "todo-menu-separator"
            }
          />
        </div>
      ))}
      <div
        className={
          DARK_MODE ? "todo-menu-dark-mode-footer" : "todo-menu-footer"
        }
      >
        <div className="todo-menu-footer-left-section">
          <TodoInputCount />
        </div>
        <div
          className={
            DARK_MODE
              ? "todo-menu-dark-mode-footer-center-section"
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
    </div>
  );
};

export default TodoMenu;
