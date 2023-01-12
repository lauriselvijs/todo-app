import MoonIcon from "../../assets/icons/icon-moon.svg";
import SunIcon from "../../assets/icons/icon-sun.svg";
import Theme from "../../style/main.scss";
import { useTheme } from "../../hooks/Theme";

const DarkModeBtn = () => {
  const { currentTheme, setTheme, setDefaultTheme } = useTheme();
  const { dark } = Theme;

  const onDarkModeBtnClick = () => {
    currentTheme ? setDefaultTheme() : setTheme(dark);
  };

  return (
    <img
      width={26}
      height={26}
      alt="Dark theme"
      src={currentTheme ? SunIcon : MoonIcon}
      onClick={onDarkModeBtnClick}
      id="dark-mode-btn"
      title="Dark theme"
    />
  );
};

export default DarkModeBtn;
