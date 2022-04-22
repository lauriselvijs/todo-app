import React from "react";
import "./TodoDeleteBtn.style.scss";
import IconCross from "../../asset/image/icon/icon-cross.svg";
import IconCrossDarkMode from "../../asset/image/icon/icon-cross-dark-mode.svg";
import { DARK_MODE } from "../../constants/DarkMode.const";

const TodoDeleteBtn = ({
  onTodoDeleteBtnClick,
}: {
  onTodoDeleteBtnClick: () => void;
}) => {
  return (
    <img
      src={DARK_MODE ? IconCrossDarkMode : IconCross}
      alt="Icon cross"
      className="todo-delete-btn"
      onClick={onTodoDeleteBtnClick}
    />
  );
};

export default TodoDeleteBtn;
