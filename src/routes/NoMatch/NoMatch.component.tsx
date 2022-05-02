import React from "react";
import "./NoMatch.style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";

const NoMatch = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);

  return (
    <div className={darkMode ? "no-match-dark-mode" : "dark-mode"}>
      Not Found
    </div>
  );
};

export default NoMatch;
