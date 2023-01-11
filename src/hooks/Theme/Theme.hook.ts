import { useCallback, useEffect } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { RootState } from "../../store/app/store";
import { darkModeActions } from "../../store/features/DarkMode/darkMode.slice";
import { useAppDispatch } from "../Store";
import Theme from "../../style/main.scss";

export const useTheme = (theme: string): [() => void, string | undefined] => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);

  const dispatch = useAppDispatch();
  const { setDarkMode } = bindActionCreators(darkModeActions, dispatch);
  const { darkTheme } = Theme;

  useEffect(() => {
    if (value) {
      document.documentElement.className = value;
    } else if (!value) {
      document.documentElement.className = "";
    }
  }, [value]);

  const setTheme = useCallback(() => {
    if (value === theme) {
      remove();
    } else if (value !== theme) {
      setValue(theme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, theme]);

  return [setTheme, value];
};
