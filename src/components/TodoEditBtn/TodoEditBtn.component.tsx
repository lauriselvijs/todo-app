import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/TodoActions.hook";
import { RootState } from "../../store/app/store";
import "./TodoEditBtn.style.scss";
import IconCheck from "../../asset/image/icon/icon-checkmark.svg";
import IconCheckDarkMode from "../../asset/image/icon/icon-checkmark-dark-mode.svg";
import IconEdit from "../../asset/image/icon/icon-edit.svg";
import IconEditDarkMode from "../../asset/image/icon/icon-edit-dark-mode.svg";
import { setTodoEditMode } from "../../store/features/TodoItems/todoItems.slice";

const TodoEditBtn = () => {
  const dispatch = useAppDispatch();
  const todoEditMode = useSelector(
    (state: RootState) => state.todos.todoEditMode
  );
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);

  const onTodoEditBtnClick = () => {
    dispatch(setTodoEditMode());
  };

  return (
    <button className="todo-edit-btn" onClick={onTodoEditBtnClick}>
      {todoEditMode ? (
        <img
          src={darkMode ? IconCheckDarkMode : IconCheck}
          alt="Icon check"
          className="todo-edit-btn-img"
        />
      ) : (
        <img
          src={darkMode ? IconEditDarkMode : IconEdit}
          alt="Icon check"
          className="todo-edit-btn-img"
        />
      )}
    </button>
  );
};

export default TodoEditBtn;
