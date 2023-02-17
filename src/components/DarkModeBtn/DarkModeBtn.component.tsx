import MoonIcon from "../../assets/icons/icon-moon.svg";
import SunIcon from "../../assets/icons/icon-sun.svg";
import Theme from "../../style/main.scss";
import { useTheme } from "../../hooks/Theme";

import styles from "./DarkModeBtn.style.module.scss";

const DarkModeBtn = () => {
  const { currentTheme, setTheme, setDefaultTheme } = useTheme();
  const { dark } = Theme;

  const onDarkModeBtnClick = () => {
    currentTheme ? setDefaultTheme() : setTheme(dark);
  };

  return (
    <button
      aria-label="Set theme"
      onClick={onDarkModeBtnClick}
      className={styles.darkModeBtn}
      title="Dark theme"
    >
      <img
        aria-hidden="true"
        width={26}
        height={26}
        alt="Dark theme"
        src={currentTheme ? SunIcon : MoonIcon}
        id="dark-mode-btn"
      />
    </button>
  );
};

export default DarkModeBtn;
