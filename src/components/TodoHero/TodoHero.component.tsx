import React from "react";
import "./TodoHero.style.scss";
import BgDesktopLight from "../../asset/image/bg-desktop-light.jpg";
import BgDesktopDark from "../../asset/image/bg-desktop-dark.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";

const TodoHero = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);

  return (
    <img
      alt="Header background"
      className="todo-hero"
      src={darkMode ? BgDesktopDark : BgDesktopLight}
    ></img>
  );
};

export default TodoHero;
