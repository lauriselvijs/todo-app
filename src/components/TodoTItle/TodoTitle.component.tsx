import React from "react";
import "./TodoTitle.style.scss";
import { Link } from "react-router-dom";
import { HOME_URL } from "../../constants/Url.const";

const TodoTitle = () => {
  return (
    <Link className="todo-title-link" to={HOME_URL}>
      <h1 className="todo-title">TODO</h1>
    </Link>
  );
};

export default TodoTitle;
