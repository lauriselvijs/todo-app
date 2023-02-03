import { ReactNode, RefObject } from "react";

export interface AnimationProps {
  nodeRef: RefObject<HTMLElement>;
  show: boolean;
  timeout: number;
  styles: {
    readonly [key: string]: string;
  };
  children: ReactNode;
}
