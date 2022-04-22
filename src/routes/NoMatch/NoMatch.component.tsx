import React from "react";
import "./NoMatch.style.scss";
import { DARK_MODE } from "../../constants/DarkMode.const";

const NoMatch = () => {
  return (
    <div className={DARK_MODE ? "no-match-dark-mode" : "dark-mode"}>
      Not Found
    </div>
  );
};

export default NoMatch;
