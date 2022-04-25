/// <reference types="react-scripts" />

declare module "*.svg" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

interface ITheme {
  [key: string]: string;
}

declare module "*.scss" {
  const value: ITheme;
  export default value;
}
