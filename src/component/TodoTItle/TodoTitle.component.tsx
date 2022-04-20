import React from "react";
import "./TodoTitle.style.scss";
import { Link } from "react-router-dom";
import { ROOT } from "../../const/Url.const";

const TodoTitle = () => {
  return (
    <Link className="todo-title-link" to={ROOT}>
      <h1 className="todo-title">TODO</h1>
    </Link>
  );
};

export default TodoTitle;
