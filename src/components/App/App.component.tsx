import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "../../routes/Root/Root.component";
import Todo from "../../routes/Todo";
import { ROOT, NOT_FOUND } from "../../constants/Url.const";
import Footer from "../Footer";
import NoMatch from "../../routes/NoMatch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROOT} element={<Root />}>
          <Route index element={<Todo />} />
        </Route>
        <Route path={NOT_FOUND} element={<NoMatch />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
