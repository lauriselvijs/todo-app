import React from "react";
import "./Todo.stye.scss";
import TodoMenuWrapper from "../../component/TodoMenuWrapper";
import TodoInput from "../../component/TodoInput";
import TodoMenu from "../../component/TodoMenu";
import TodoInfoHelper from "../../component/TodoInfoHelper";

const Todo = () => {
  return (
    <div className="todo">
      <TodoMenuWrapper>
        <TodoInput />
        <TodoMenu />
        <TodoInfoHelper />
      </TodoMenuWrapper>
    </div>
  );
};

export default Todo;
