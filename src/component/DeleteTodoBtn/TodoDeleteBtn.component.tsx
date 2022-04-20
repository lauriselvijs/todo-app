import React from "react";
import "./TodoDeleteBtn.style.scss";
import IconCross from "../../asset/image/icon/icon-cross.svg";

const TodoDeleteBtn = () => {
  return <img src={IconCross} alt="Icon cross" className="todo-delete-btn" />;
};

export default TodoDeleteBtn;
