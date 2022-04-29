import { Dispatch, SetStateAction, useState } from "react";

export const useSetTheme = (
  themeName: string
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [theme, setTheme] = useState<boolean>(false);

  if (theme) {
    document.body.className = themeName;
  } else {
    document.body.className = "";
  }

  return [theme, setTheme];
};
