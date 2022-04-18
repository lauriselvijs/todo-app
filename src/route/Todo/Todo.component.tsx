import React from "react";
import "./Todo.stye.scss";
import TodoMenuWrapper from "../../component/TodoMenuWrapper";
import TodoInput from "../../component/TodoInput";
import TodoMenu from "../../component/TodoMenu";
import TodoHero from "../../component/TodoHero";
import HeaderWrapper from "../../component/HeaderWrapper";
import TodoTitle from "../../component/TodoTItle";
import DarkModeBtn from "../../component/DarkModeBtn";

const Todo = () => {
  return (
    <div className="todo">
      <TodoHero />
      <HeaderWrapper>
        <TodoTitle />
        <DarkModeBtn />
      </HeaderWrapper>
      <TodoMenuWrapper>
        <TodoInput />
        <TodoMenu />
      </TodoMenuWrapper>
    </div>
  );
};

export default Todo;
