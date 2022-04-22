import React from "react";
import { IWrapper } from "../../types/Wrapper";

const HeaderWrapper = ({ children }: IWrapper) => {
  return <header>{children}</header>;
};

export default HeaderWrapper;
