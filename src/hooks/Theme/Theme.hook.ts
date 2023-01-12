import { bindActionCreators } from "@reduxjs/toolkit";
import { useLayoutEffect } from "react";
import { RootState } from "../../store/app/store";
import {
  themeActions,
  themeSliceName,
} from "../../store/features/Theme/Theme.slice";
import { useAppDispatch, useAppSelector } from "../Store";
import { UseTheme } from "./Theme.hook.d";

export const useTheme = (): UseTheme => {
  const appDispatch = useAppDispatch();
  const { themeUpdated } = bindActionCreators(themeActions, appDispatch);
  const { themeName: currentTheme } = useAppSelector(
    (state: RootState) => state[themeSliceName]
  );

  useLayoutEffect(() => {
    if (currentTheme) {
      document.documentElement.className = currentTheme;
    }
  }, []);

  const setTheme = (themeName: string): void => {
    if (themeName !== currentTheme && themeName) {
      themeUpdated(themeName);
      document.documentElement.className = themeName;
    }
  };

  const setDefaultTheme = (): void => {
    themeUpdated("");
    document.documentElement.className = "";
  };

  return { currentTheme, setDefaultTheme, setTheme };
};
