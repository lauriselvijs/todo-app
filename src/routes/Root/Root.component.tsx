import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import DarkModeBtn from "../../components/DarkModeBtn";
import HeaderWrapper from "../../components/HeaderWrapper";
import TodoHero from "../../components/TodoHero";
import TodoTitle from "../../components/TodoTItle";
import { RootState } from "../../store/app/store";

const Root = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);

  return (
    <main className={darkMode ? "root-dark-mode" : "root"}>
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
