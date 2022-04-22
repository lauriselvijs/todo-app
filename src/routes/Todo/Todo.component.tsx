import React from "react";
import "./Todo.stye.scss";
import TodoMenuWrapper from "../../components/TodoMenuWrapper";
import TodoInput from "../../components/TodoInput";
import TodoMenu from "../../components/TodoMenu";
import TodoInfoHelper from "../../components/TodoInfoHelper";

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
