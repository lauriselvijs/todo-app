import React, { useState } from "react";
import "./DarkModeBtn.style.scss";
import MoonIcon from "../../asset/image/icon/icon-moon.svg";
import SunIcon from "../../asset/image/icon/icon-sun.svg";
import { setTheme } from "../../utils/Theme.util";
import Theme from "../../style/main.scss";

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { darkTheme } = Theme;

  const onDarkModeBtnClick = () => {
    setDarkMode(!darkMode);
    setTheme(darkMode, darkTheme);
  };

  return (
    <img
      src={darkMode ? MoonIcon : SunIcon}
      onClick={onDarkModeBtnClick}
      className="dark-theme"
    />
  );
};

export default DarkModeBtn;
