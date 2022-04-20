import React, { CSSProperties } from "react";
import "./App.style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "../../route/Root/Root.component";
import Todo from "../../route/Todo";
import { ROOT, NOT_FOUND } from "../../const/Url.const";
import Footer from "../Footer";
import NoMatch from "../../route/NoMatch";
import { DARK_MODE } from "../../const/DarkMode.const";

const App = () => {
  return (
    <div
      className="app"
      style={DARK_MODE && ({ "--dark-mode": true } as CSSProperties)}
    >
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
