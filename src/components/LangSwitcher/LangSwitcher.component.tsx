import Select from "react-select";

import styles from "./LangSwitcher.module.scss";
import { useLanguageSwitcher } from "./LangSwitcher.hook";

const LangSwitcher = () => {
  const {
    t,
    ns: { ui },
    handleLanguageChange,
    selectedOption,
    dropdownOptions,
  } = useLanguageSwitcher();

  return (
    <Select
      aria-label={t("Select language", { ns: ui })}
      noOptionsMessage={(_obj) => t("Not found", { ns: ui })}
      // menuIsOpen
      className={styles.select}
      classNamePrefix="lang-switcher"
      options={dropdownOptions}
      value={selectedOption}
      onChange={handleLanguageChange}
    />
  );
};

export default LangSwitcher;
