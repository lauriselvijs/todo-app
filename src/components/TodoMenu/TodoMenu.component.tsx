import React from "react";
import "./TodoMenu.style.scss";
import TodoListItem from "../TodoListItem";
import { ITodoListItem } from "../../types/ListItem";
import { DARK_MODE } from "../../constants/DarkMode.const";
import TodoMenuFooter from "../TodoMenuFooter";
import TodoItemSeparator from "../TodoItemSeparator";

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
  const todoComponentArray = todoList.map(
    (todo: ITodoListItem["todo"], index: number) => (
      <div key={index}>
        <TodoListItem todo={todo} />
        <TodoItemSeparator />
      </div>
    )
  );

  return (
    <div className={DARK_MODE ? "todo-menu-dark-mode" : "todo-menu"}>
      {todoComponentArray}
      <TodoMenuFooter />
    </div>
  );
};

export default TodoMenu;
