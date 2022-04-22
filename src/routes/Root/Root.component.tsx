import React from "react";
import { Outlet } from "react-router-dom";
import DarkModeBtn from "../../components/DarkModeBtn";
import HeaderWrapper from "../../components/HeaderWrapper";
import TodoHero from "../../components/TodoHero";
import TodoTitle from "../../components/TodoTItle";
import { DARK_MODE } from "../../constants/DarkMode.const";

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
