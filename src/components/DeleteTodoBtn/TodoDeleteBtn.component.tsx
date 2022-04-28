import React from "react";
import "./TodoDeleteBtn.style.scss";
import IconCross from "../../asset/image/icon/icon-cross.svg";
import IconCrossDarkMode from "../../asset/image/icon/icon-cross-dark-mode.svg";
import { DARK_MODE } from "../../constants/DarkMode.const";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/features/TodoItems/todoItems.slice";

const TodoDeleteBtn = ({ todoId }: { todoId: string }) => {
  const dispatch = useDispatch();

  const onTodoDeleteBtnClick = () => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <button className="todo-delete-btn" onClick={onTodoDeleteBtnClick}>
      <img
        src={DARK_MODE ? IconCrossDarkMode : IconCross}
        alt="Icon cross"
        className="todo-delete-btn-img"
      />
    </button>
  );
};

export default TodoDeleteBtn;
