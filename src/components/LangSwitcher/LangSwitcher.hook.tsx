import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SingleValue } from "react-select";

import { ns } from "../../config/Lang";

import { lngs } from "./LangSwitcher.config";
import { SelectedOption } from "./LangSwitcher.component.d";

export const useLanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (
    selectedOption: SingleValue<SelectedOption>
  ) => {
    i18n.changeLanguage(selectedOption?.value);
  };

  const dropdownOptions = useMemo(
    () =>
      Object.keys(lngs).map((lng) => ({
        value: lng,
        label: lngs[lng].nativeName,
      })),
    []
  );

  const selectedOption = useMemo(
    () =>
      dropdownOptions.find((option) => option.value === i18n.resolvedLanguage),
    [dropdownOptions, i18n.resolvedLanguage]
  );

  return {
    t,
    ns,
    handleLanguageChange,
    selectedOption,
    dropdownOptions,
  };
};
