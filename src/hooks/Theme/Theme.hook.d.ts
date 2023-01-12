export interface UseTheme {
  currentTheme: string;
  setDefaultTheme: () => void;
  setTheme: (theme: string) => void;
}
