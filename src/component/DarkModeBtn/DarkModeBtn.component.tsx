import React, { useState } from "react";
import "./DarkModeBtn.style.scss";
import MoonIcon from "../../asset/image/icon/icon-moon.svg";
import SunIcon from "../../asset/image/icon/icon-sun.svg";

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const onDarkModeBtnClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <img
      src={darkMode ? SunIcon : MoonIcon}
      onClick={onDarkModeBtnClick}
      className="dark-mode-btn"
    />
  );
};

export default DarkModeBtn;
