export const setTheme = (darkMode: boolean, themeName: string): void => {
  if (darkMode) {
    document.body.className = themeName;
  } else {
    document.body.className = "";
  }
};
