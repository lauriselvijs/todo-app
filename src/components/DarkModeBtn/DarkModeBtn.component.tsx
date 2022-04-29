import React, { useState } from "react";
import "./DarkModeBtn.style.scss";
import MoonIcon from "../../asset/image/icon/icon-moon.svg";
import SunIcon from "../../asset/image/icon/icon-sun.svg";
import Theme from "../../style/main.scss";
import { useSetTheme } from "../../hooks/TodoTheme.hook";

const DarkModeBtn = () => {
  const { darkTheme } = Theme;
  const [theme, setTheme] = useSetTheme(darkTheme);

  const onDarkModeBtnClick = () => {
    setTheme(!theme);
  };

  return (
    <img
      src={theme ? MoonIcon : SunIcon}
      onClick={onDarkModeBtnClick}
      className="dark-theme"
      id="dark-mode-btn"
    />
  );
};

export default DarkModeBtn;
