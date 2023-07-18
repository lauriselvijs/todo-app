import { useTranslation } from "react-i18next";
import Select, { SingleValue } from "react-select";

import { lngs } from "./LangSwitcher.config";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (
    selectedOption: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    i18n.changeLanguage(selectedOption?.value);
  };

  const dropdownOptions = Object.keys(lngs).map((lng) => ({
    value: lng,
    label: lngs[lng].nativeName,
  }));

  const selectedOption = dropdownOptions.find(
    (option) => option.value === i18n.resolvedLanguage
  );

  return (
    <Select
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
