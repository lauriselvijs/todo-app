import React from "react";
import "./App.style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "../../route/Root/Root.component";
import Todo from "../../route/Todo";
import { ROOT } from "../../const/Url";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path={ROOT} element={<Root />}>
            <Route index element={<Todo />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
