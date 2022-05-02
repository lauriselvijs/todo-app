import React from "react";
import "./DarkModeBtn.style.scss";
import MoonIcon from "../../asset/image/icon/icon-moon.svg";
import SunIcon from "../../asset/image/icon/icon-sun.svg";
import Theme from "../../style/main.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { useAppDispatch } from "../../hooks/TodoActions.hook";
import { setDarkMode } from "../../store/features/DarkMode/darkMode.slice";

const DarkModeBtn = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);
  const dispatch = useAppDispatch();
  const { darkTheme } = Theme;

  const onDarkModeBtnClick = () => {
    dispatch(setDarkMode(darkTheme));
  };

  return (
    <img
      alt="Dark mode button"
      src={darkMode ? SunIcon : MoonIcon}
      onClick={onDarkModeBtnClick}
      className={darkTheme}
      id="dark-mode-btn"
    />
  );
};

export default DarkModeBtn;
