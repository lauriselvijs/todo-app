import { useEffect } from "react";
import "./DarkModeBtn.style.scss";
import MoonIcon from "../../asset/image/icon/icon-moon.svg";
import SunIcon from "../../asset/image/icon/icon-sun.svg";
import Theme from "../../style/main.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { useAppDispatch } from "../../hooks/TodoActions.hook";
import { darkModeActions } from "../../store/features/DarkMode/darkMode.slice";
import { bindActionCreators } from "@reduxjs/toolkit";

const DarkModeBtn = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);

  const dispatch = useAppDispatch();
  const { setDarkMode } = bindActionCreators(darkModeActions, dispatch);
  const { darkTheme } = Theme;

  useEffect(() => {
    if (darkMode) {
      document.body.className = darkTheme;
    } else if (!darkMode) {
      document.body.className = "";
    }
  }, [darkMode]);

  const onDarkModeBtnClick = () => {
    setDarkMode();
  };

  return (
    <img
      width={26}
      height={26}
      alt="Dark mode button"
      src={darkMode ? SunIcon : MoonIcon}
      onClick={onDarkModeBtnClick}
      id="dark-mode-btn"
    />
  );
};

export default DarkModeBtn;
