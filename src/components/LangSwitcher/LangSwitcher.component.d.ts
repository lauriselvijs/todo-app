export interface Language {
  nativeName: string;
}

export interface LanguageMap {
  [key: string]: Language;
}

export interface SelectedOption {
  value: string;
  label: string;
}
