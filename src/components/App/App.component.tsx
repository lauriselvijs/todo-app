import React, { CSSProperties } from "react";
import "./App.style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "../../routes/Root/Root.component";
import Todo from "../../routes/Todo";
import { ROOT, NOT_FOUND } from "../../constants/Url.const";
import Footer from "../Footer";
import NoMatch from "../../routes/NoMatch";
import { DARK_MODE } from "../../constants/DarkMode.const";
import Variables from "../../style/main.scss";

const App = () => {
  console.log(typeof Variables.BgDark);

  //

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path={ROOT} element={<Root />}>
            <Route index element={<Todo />} />
          </Route>
          <Route path={NOT_FOUND} element={<NoMatch />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
