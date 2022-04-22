import React from "react";
import "./TodoHero.style.scss";
import BgDesktopLight from "../../asset/image/bg-desktop-light.jpg";
import BgDesktopDark from "../../asset/image/bg-desktop-dark.jpg";
import { DARK_MODE } from "../../constants/DarkMode.const";

const TodoHero = () => {
  return (
    <img
      className="todo-hero"
      src={DARK_MODE ? BgDesktopDark : BgDesktopLight}
    ></img>
  );
};

export default TodoHero;
