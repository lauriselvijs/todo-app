import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HOME_URL, NOT_FOUND } from "../../constants/Url.const";
import NoMatch from "../../pages/NoMatch";
import Layout from "../../pages/shared/Layout";
import Todo from "../../pages/Todo";
import Footer from "../Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={HOME_URL} element={<Layout />}>
          <Route index element={<Todo />} />
        </Route>
        <Route path={NOT_FOUND} element={<NoMatch />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
