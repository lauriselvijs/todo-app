import React from "react";
import { Outlet } from "react-router-dom";
import DarkModeBtn from "../../component/DarkModeBtn";
import HeaderWrapper from "../../component/HeaderWrapper";
import TodoHero from "../../component/TodoHero";
import TodoTitle from "../../component/TodoTItle";
import "./Root.style.scss";

const Root = () => {
  return (
    <main className="root">
      <TodoHero />
      <HeaderWrapper>
        <TodoTitle />
        <DarkModeBtn />
      </HeaderWrapper>
      <Outlet />
    </main>
  );
};

export default Root;
