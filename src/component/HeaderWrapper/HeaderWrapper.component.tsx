import React from "react";
import "./HeaderWrapper.style.scss";
import { IWrapper } from "../../type-definition/Wrapper";

const HeaderWrapper = ({ children }: IWrapper) => {
  return <header className="header-wrapper">{children}</header>;
};

export default HeaderWrapper;
