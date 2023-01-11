import "./TodoShowActiveBtn.style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";
import { todoOptions } from "../../constants/TodoMenu.const";
import { setTodoOptionActive } from "../../store/features/Todo/Todo.slice";
import { useAppDispatch } from "../../hooks/TodoActions.hook";

const TodoShowActiveBtn = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);
  const { TODO_OPTION_ACTIVE } = todoOptions;
  const todoOption = useSelector((state: RootState) => state.todos.todoOption);
  const dispatch = useAppDispatch();

  const onTodoShowActiveBtnClick = () => {
    dispatch(setTodoOptionActive());
  };

  return (
    <button
      className={
        darkMode
          ? todoOption === TODO_OPTION_ACTIVE
            ? "todo-show-active-btn-dark-mode-clicked"
            : "todo-show-active-btn-dark-mode"
          : todoOption === TODO_OPTION_ACTIVE
          ? "todo-show-active-btn-clicked"
          : "todo-show-active-btn"
      }
      onClick={onTodoShowActiveBtnClick}
    >
      Active
    </button>
  );
};

export default TodoShowActiveBtn;
