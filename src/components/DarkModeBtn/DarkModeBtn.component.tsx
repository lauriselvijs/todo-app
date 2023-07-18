import MoonIcon from "../../assets/icons/icon-moon.svg";
import SunIcon from "../../assets/icons/icon-sun.svg";
import Theme from "../../style/main.scss";
import { useTheme } from "../../hooks/Theme";

import styles from "./DarkModeBtn.style.module.scss";
import { useTranslation } from "react-i18next";
import { ns } from "../../config/Lang";

const DarkModeBtn = () => {
  const { currentTheme, setTheme, setDefaultTheme } = useTheme();
  const { t } = useTranslation();

  const { dark, light } = Theme;
  const { ui } = ns;

  const onDarkModeBtnClick = () => {
    currentTheme !== light ? setDefaultTheme() : setTheme(dark);
  };

  return (
    <button
      aria-label={t("Set theme", { ns: ui })}
      onClick={onDarkModeBtnClick}
      className={styles.darkModeBtn}
      title={t("Set theme", { ns: ui })}
    >
      <img
        aria-hidden="true"
        width={26}
        height={26}
        alt={t("Set theme", { ns: ui })}
        src={currentTheme ? SunIcon : MoonIcon}
      />
    </button>
  );
};

export default DarkModeBtn;
