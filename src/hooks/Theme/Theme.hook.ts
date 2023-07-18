import { bindActionCreators } from "@reduxjs/toolkit";
import { useLayoutEffect } from "react";
import { RootState } from "../../store/app/store";
import {
  themeActions,
  themeSliceName,
} from "../../store/features/Theme/Theme.slice";
import { useAppDispatch, useAppSelector } from "../Store";
import { UseTheme } from "./Theme.hook.d";
import Theme from "../../style/main.scss";
import { useMedia } from "react-use";
import { PREFER_DARK_THEME } from "./Theme.config";

const { dark, light } = Theme;

export const useTheme = (): UseTheme => {
  const appDispatch = useAppDispatch();
  const { themeUpdated } = bindActionCreators(themeActions, appDispatch);
  const { themeName: currentTheme } = useAppSelector(
    (state: RootState) => state[themeSliceName]
  );
  const prefersDarkMode = useMedia(PREFER_DARK_THEME);

  useLayoutEffect(() => {
    if (currentTheme) {
      document.documentElement.className = currentTheme;
    } else if (prefersDarkMode) {
      themeUpdated(dark);
      document.documentElement.className = dark;
    }
  }, []);

  const setTheme = (themeName: string): void => {
    if (themeName !== currentTheme && themeName) {
      themeUpdated(themeName);
      document.documentElement.className = themeName;
    }
  };

  const setDefaultTheme = (): void => {
    themeUpdated(light);
    document.documentElement.className = "";
  };

  return { currentTheme, setDefaultTheme, setTheme };
};
