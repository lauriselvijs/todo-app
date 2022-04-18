import React from "react";
import { Outlet } from "react-router-dom";
import "./Root.style.scss";

const Root = () => {
  return (
    <main className="root">
      <Outlet />
    </main>
  );
};

export default Root;
