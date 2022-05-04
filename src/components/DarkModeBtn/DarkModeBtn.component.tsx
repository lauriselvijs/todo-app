import React, { useEffect } from "react";
import "./DarkModeBtn.style.scss";
import MoonIcon from "../../asset/image/icon/icon-moon.svg";
import SunIcon from "../../asset/image/icon/icon-sun.svg";
import Theme from "../../style/main.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { useAppDispatch } from "../../hooks/TodoActions.hook";
import { setDarkMode } from "../../store/features/DarkMode/darkMode.slice";
import { getIp } from "../../store/features/Ip/ip.slice";
import { getCurrentWeather } from "../../store/features/Weather/weather.slice";

const DarkModeBtn = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);
  const ipInfo = useSelector((state: RootState) => state.ip.ipInfo);

  const dispatch = useAppDispatch();
  const { darkTheme } = Theme;

  useEffect(() => {
    if (darkMode) {
      document.body.className = darkTheme;
    } else if (!darkMode) {
      document.body.className = "";
    }
  }, [darkMode]);

  const onDarkModeBtnClick = () => {
    dispatch(setDarkMode());
    dispatch(getCurrentWeather("s"));
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
