import React from "react";
import { Outlet } from "react-router-dom";
import DarkModeBtn from "../../component/DarkModeBtn";
import HeaderWrapper from "../../component/HeaderWrapper";
import TodoHero from "../../component/TodoHero";
import TodoTitle from "../../component/TodoTItle";
import "./Root.style.scss";
import { DARK_MODE } from "../../const/DarkMode.const";

const Root = () => {
  return (
    <main className={DARK_MODE ? "root-dark-mode" : "root"}>
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
