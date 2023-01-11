import "./TodoClearCompletedBtn.style.scss";
import { useAppDispatch } from "../../hooks/TodoActions.hook";
import { clearCompletedTodos } from "../../store/features/Todo/Todo.slice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";

const TodoClearCompletedBtn = () => {
  const dispatch = useAppDispatch();
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);

  const onTodoClearCompletedBtnClick = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <button
      className={
        darkMode
          ? "todo-clear-completed-btn-dark-mode"
          : "todo-clear-completed-btn"
      }
      onClick={onTodoClearCompletedBtnClick}
    >
      Clear Completed
    </button>
  );
};

export default TodoClearCompletedBtn;
