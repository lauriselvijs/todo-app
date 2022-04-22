import React from "react";
import "./TodoMenuWrapper.style.scss";
import { IWrapper } from "../../types/Wrapper";

const TodoMenuWrapper = ({ children }: IWrapper) => {
  return <div className="todo-menu-wrapper">{children}</div>;
};

export default TodoMenuWrapper;
