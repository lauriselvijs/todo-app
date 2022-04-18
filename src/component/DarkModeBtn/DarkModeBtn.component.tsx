import React from "react";
import "./DarkModeBtn.style.scss";
import MoonIcon from "../../asset/image/icon/icon-moon.svg";
import SunIcon from "../../asset/image/icon/icon-sun.svg";

const DarkModeBtn = () => {
  return <img src={MoonIcon} className="dark-mode-btn" />;
};

export default DarkModeBtn;
